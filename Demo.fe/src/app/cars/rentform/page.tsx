"use client"
import {useForm} from "react-hook-form";
import {IProps, RentFormQuery} from "../../../types";
import {useGetCars} from "../../../hooks/useGetCars";
import Link from "next/link";
import {usersRequest} from "../../../data";



export default function RentFormPage({searchParams}: IProps) {
    const cars = useGetCars();


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RentFormQuery>({
        mode: 'onSubmit',
        // @ts-ignore
        //resolver: yupResolver(registerShema)
    });

    return (

        <div>
            {searchParams?.message && (
                <div className="alert alert-danger" role="alert">
                    {searchParams?.message}
                </div>
            )}
            <h1 className="h3 mb-3 fw-normal" >Rent car</h1>

            <label htmlFor="floatingInput">Izaberi model:</label>
            <div className="form-floating mb-3">

                <select   {...register("model")}>
                    {
                        //@ts-ignore
                        cars.data?.map((post)=>{
                            return(

                                <option value={post.model} >{post.model}</option>
                            )
                        })
                    }
                </select>



            </div>


            <div className="form-floating">
                <input type="date" className="form-control mb-3"  {...register("datumPreuzimanja")} />
                <label htmlFor="floatingInput">Datum preuzimanja</label>

            </div>

            <div className="form-floating">
                <input type="date" className="form-control mb-3"  {...register("datumVracanja")} />
                <label htmlFor="floatingInput">Datum vracanja</label>

            </div>
            <div className="form-floating ">
                <input type="text" className="form-control mb-3 " {...register("brojVozacke")} />
                <label htmlFor="floatingPassword">Broj vozacke</label>

            </div>
            <div className="form-floating ">
                <input type="text" className="form-control mb-3 " {...register("naIme")} />
                <label htmlFor="floatingPassword">Na ime</label>

            </div>


            <button className="w-100 btn btn-lg btn-primary" type="button"
                    onClick={() => {
                        handleSubmit((data) => {


                            usersRequest.rentCar(data);
                            {console.log(data);}

                        })();
                    }}> Rent</button>

        </div>

    );
}