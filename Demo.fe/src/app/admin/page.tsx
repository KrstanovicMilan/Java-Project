"use client"

import {useGetUsers} from "../../hooks/useGetUsers";

import Link from "next/link";

import React from 'react';
import { render } from 'react-dom';
import {useSession} from "next-auth/react";

//import parse from "html-react-parser";




export default function AdminPage() {
    const {data: session } = useSession();

    console.log(session);
    //const {data, error,isLoading} = useGetUsers();
    const users = useGetUsers();



    // console.log(data);
    // let html=``;
    //
    // for (let i = 0; i < data.length; i++) {
    //     html = html +   `
    //             <table className="table table-secondary table-bordered border-primary ">
    //             <tr>
    //                 <th>|        First name        |</th>
    //                 <th>|        Last name         |</th>
    //                 <th>|            Email            |</th>
    //                 <th>|         Role        |</th>
    //                 <th>|         Edit         |</th>
    //                 <th>|         Delete         |</th>
    //             </tr>
    //
    //          <tr>
    //             <td>${data[i].firstName}</td>
    //             <td>${data[i].lastName}</td>
    //             <td>${data[i].email}</td>
    //             <td>${data[i].role}</td>
    //             <td><link href={"/"}>Edit</link></td>
    //             <td><link href={"/"}>Delete</link></td>
    //         </tr>
    //         </table>
    //          `
    // }
    //
    // const App = () => (
    //     <div dangerouslySetInnerHTML={{ __html: html }} />
    // );


/*
    for (let i = 0; i < data.length; i++) {
      html = html +  `
     
            <tr>
                <td>data[i].firstName</td>
                <td>data[i].lastName</td>
                <td>data[i].email</td>
                <td>data[i].role</td>
                <td><link href={"/"}></link>Edit</td>
                <td><link href={"/"}></link>Delete</td>
            </tr>
            }`

*/


    return (
        <>


            <table className="table table-secondary table-bordered border-primary ">
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            {
                //@ts-ignore
                users.data?.map((row)=>{
                    return(


                                      <tr>
                                         <td>{row.firstName}</td>
                                         <td>{row.lastName}</td>
                                         <td>{row.email}</td>
                                         <td>{row.role}</td>
                                          <td><Link href={"/"} className={"text-decoration-none bg-white m-0 p-0 text-info"}>Edit</Link></td>
                                          <td><Link href={"/"} className={"text-decoration-none bg-white m-0 p-0 text-info"}>Delete</Link></td>
                                     </tr>

                    )
                })
            }
            </table>

        </>

    );
}

// <table className="table table-secondary table-bordered border-primary ">
//     <tr>
//         <th>First name</th>
//         <th>Last name</th>
//         <th>Email</th>
//         <th>Role</th>
//         <th>Edit</th>
//         <th>Delete</th>
//     </tr>
//
//
//
//
// </table> {JSON.stringify(data)}

// <button type="button" className="btn btn-primary me-2" onClick={()=>{
//     let html = ``;
//     // @ts-ignore
//     for (let i = 0; i < data.length; i++){
//         html =  `
//
//                                     <td>data[i].firstName</td>
//                                     <td>data[i].lastName</td>
//                                     <td>data[i].email</td>
//                                     <td>data[i].role</td>
//                                     <td><link href={"/"}></link>Edit</td>
//                                     <td><link href={"/"}></link>Delete</td>
//                                 `
//         // @ts-ignore
//         document.getElementById("tabela").append(html);
//     }
// }}>Users</button>









