const unProtectedRoutes = ["/signin"];

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/"],
};

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  // console.log("FROM MIDDLEWARE", { token });
  if (unProtectedRoutes.includes(req.nextUrl.pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // return await withAuth(req, {
  //   pages: {
  //     signIn: "/signin",
  //   },
  // });
}
