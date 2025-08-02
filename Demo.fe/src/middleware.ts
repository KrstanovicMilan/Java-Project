// export {default} from "next-auth/middleware";
import {withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";

export default withAuth(
    function middleware(req) {

        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "Admin")
            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );
        if (req.nextUrl.pathname.startsWith("/cars") && req.nextauth.token?.role !== "User" && req.nextauth.token?.role !== "Admin" && req.nextauth.token?.role !== "Employee")

            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );
        if (req.nextUrl.pathname.startsWith("/employee") && req.nextauth.token?.role !== "Employee" && req.nextauth.token?.role !== "Admin")

            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/:path*", "/cars/:path*", "/employee/:path*"],
};
//"/admin/:path*", "/users/:path*", "/employee/:path*"