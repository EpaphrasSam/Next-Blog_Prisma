import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";
import { getAuthSession } from "../../../utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const isPopular = searchParams.get("popular") === "true";

  const POST_PER_PAGE = 5;

  try {
    let posts;

    if (isPopular) {
      const currentTime = new Date().getTime();
      posts = await prisma.post.findMany({
        include: {
          comments: true,
          user: {
            select: {
              name: true,
            },
          },
        },
        where: {
          ...(cat && { catSlug: cat }),
        },
      });

      posts = posts.map((post) => {
        const views = post.views || 0;
        const comments = post.comments.length || 0;
        const postTime = new Date(post.createdAt).getTime();
        const timeDiffInDays = (currentTime - postTime) / (1000 * 3600 * 24);
        const popularityScore =
          views * 0.5 + comments * 0.25 + (1 - timeDiffInDays / 1) * 0.25;

        return { ...post, popularityScore }; // Spread individual post properties
      });

      posts.sort((a, b) => b.popularityScore - a.popularityScore);
      const popularPosts = posts.slice(0, 5).map((post) => ({
        img: post.img,
        catSlug: post.catSlug,
        title: post.title,
        name: post.user?.name || "",
        createdAt: post.createdAt,
        slug: post.slug,
      }));

      return new NextResponse(
        JSON.stringify({ popularPosts }, { status: 200 })
      );
    } else {
      posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
          ...(cat && { catSlug: cat }),
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const count = await prisma.post.count({
        where: {
          ...(cat && { catSlug: cat }),
        },
      });

      return new NextResponse(
        JSON.stringify({ posts, count }, { status: 200 })
      );
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const { catSlug, ...data } = await req.json();

    const post = await prisma.post.create({
      data: {
        ...data,
        user: { connect: { email: session.user.email } },
        cat: { connect: { slug: catSlug } },
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Success" }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
