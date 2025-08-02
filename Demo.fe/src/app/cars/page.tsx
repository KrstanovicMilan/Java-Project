"use client"


import {useGetCars} from "../../hooks/useGetCars";
// @ts-ignore
import Link from "next/link";



export default function CarsPage() {
    const cars = useGetCars();
    //console.log(cars.data);



    return (
        <>
            <div className={"d-flex flex-wrap w-100 justify-content-center "}>

            {
                //@ts-ignore
                cars.data?.map((post)=>{
                    return(


                            <div   className="col-3 w-25 h-25 p-2 pb-2">
                                <div className="card shadow-sm">

                                    <img className="card-img-top" src={post.slika}/>

                                    <div className=" card-body p-1 m-0 justify-content-center ">
                                        <p className=" d-flex card-text m-1 justify-content-center">Model : {post.model}</p>
                                        <p className=" d-flex card-text m-1  justify-content-center">Gorivo : {post.gorivo}</p>
                                        <p className=" d-flex card-text m-1 justify-content-center">Menjac : {post.menjac}</p>
                                        <p className=" d-flex card-text m-1 justify-content-center">Kubikaza : {post.kubikaza}</p>
                                        <p className=" d-flex card-text m-1 justify-content-center">Cena : {post.cena}E</p>
                                        <div className=" d-flex justify-content-center align-items-center">
                                            <div className="d-flex justify-content-center">
                                                <Link href={"/cars/rentform"}>Rent</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                    )
                })
            }

            </div>

        </>





    );
}