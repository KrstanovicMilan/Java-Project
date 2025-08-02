"use client"
import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";
import Link from "next/link";



export default function TopNavbar() {
    const {data: session} = useSession();

    return (

    <div className="d-flex flex-column flex-md-row align-items-center pb-3 pt-3 mb-4 border-bottom bg-secondary">
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">

            <span className="fs-4 ps-4">AMG RENTaCAR</span>

        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link className="me-3 py-2 text-dark text-decoration-none" href={"/"}>Home</Link>
            <Link className="me-3 py-2 text-dark text-decoration-none" href={"/cars"}>Cars</Link>
            <Link className="me-3 py-2 text-dark text-decoration-none" href={"/employee"}>Employee</Link>
            <Link className="me-3 py-2 text-dark text-decoration-none" href={"/admin"}>Admin</Link>

        </nav>
        {session != null ?
            (
                <>
                    <Link className="me-3 py-2 text-dark text-decoration-none" href={"/"}>{session.user?.email}</Link>
                    <button className={"btn btn-outline-danger"} onClick={() => signOut()}>Sign out</button>

                </>
            ):
            (
                <>
                    <Link className="me-3 py-2 text-dark text-decoration-none" href={"/auth/register"}>Register</Link>
                    <button className={"btn btn-outline-danger"} onClick={() => signIn()}>Sign in</button>
                </>

            )}
    </div>
    );
}


