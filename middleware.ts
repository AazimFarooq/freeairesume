import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/" ||
    path.startsWith("/blog") ||
    path === "/about" ||
    path === "/pricing" ||
    path === "/contact"

  // Check if the user is authenticated (has a session token)
  const isAuthenticated = request.cookies.has("session-token")

  // Redirect logic
  if (!isAuthenticated && path.startsWith("/dashboard")) {
    // Redirect to login if trying to access dashboard without auth
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isAuthenticated && (path === "/login" || path === "/register")) {
    // Redirect to dashboard if already logged in
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure the paths that should trigger this middleware
export const config = {
  matcher: [
    // Match all dashboard routes
    "/dashboard/:path*",
    // Match auth routes
    "/login",
    "/register",
    "/forgot-password",
  ],
}

