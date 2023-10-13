import { withAuth } from "next-auth/middleware";

export const protectedRoutes = ["/write"];

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (!token && !token && protectedRoutes.includes(req.nextUrl.pathname)) {
        return false;
      }

      if (token && req.nextUrl.pathname === "/login") {
        return false;
      }

      return true;
    },
  },
  pages: {
    signIn: "/",
  },
});

export const config = { matcher: ["/write", "/login"] };
