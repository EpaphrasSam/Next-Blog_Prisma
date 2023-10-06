import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";
import { generateSlug, postsData } from "../../../lib/posts";

export const GET = async () => {
  try {
    for (const postData of postsData) {
      const { title, ...rest } = postData;

      const slug = generateSlug(title);

      await prisma.post.create({
        data: {
          ...rest,
          title,
          slug,
        },
      });
    }

    return new NextResponse(
      JSON.stringify("Successful Creation", { status: 200 })
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
