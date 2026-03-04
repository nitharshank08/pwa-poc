import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, isValidDummyUser } from "../../../lib/auth";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { username?: string; password?: string }
    | null;

  const username = body?.username?.trim() ?? "";
  const password = body?.password ?? "";

  if (!isValidDummyUser(username, password)) {
    return NextResponse.json(
      { ok: false, message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  // Dummy token value (in real apps, use session/jwt)
  res.cookies.set(AUTH_COOKIE_NAME, "logged_in", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // set true in production (HTTPS)
    path: "/",
    maxAge: 60 * 60 * 8 // 8 hours
  });

  return res;
}