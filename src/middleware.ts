import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const slug = req.nextUrl.pathname.split("/").pop();

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`);
  if (slugFetch.status === 404) {
    console.log(req.nextUrl.origin)
    // return NextResponse.redirect(req.nextUrl.origin);
  }
  const data =  slugFetch

  if (data.url) {
    return console.log(data.url, 2)
    // return NextResponse.redirect(data.url);
  }
}

export const config = {
  matcher: "/:slug",
};