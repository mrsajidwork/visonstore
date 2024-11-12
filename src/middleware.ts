import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isValidPassword";

export async function middleware(req: NextRequest) {

  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }
}

async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("Authorization") || req.headers.get("authorization");

  if (authHeader === null) {
    return false;
  }

  const [username, passwword] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    // (await isValidPassword(
    //   passwword,
    //   process.env.ADMIN_HASHED_PASSWORD as string
    // ))
    passwword === "admin"
  );
}

export const config = {
  matcher: "/admin/:path*",
};
