"use client"
import {useForm} from "react-hook-form";
import {IProps, CarsQuery} from "../../types";



import {usersRequest} from "../../data";
import {carShema} from "../../validators/users/CarsValidator";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerShema} from "../../validators/users/registerValidator";


export default function AddCarPage({searchParams}: IProps) {
    //console.log(searchParams);
    // @ts-ignore


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CarsQuery>({
        mode: 'onSubmit',
        // @ts-ignore
        resolver: yupResolver(carShema)
    });

    return (

        <div>
            {searchParams?.message && (
                <div className="alert alert-danger" role="alert">
                    {searchParams?.message}
                </div>
            )}

            <h1 className="h3 mb-3 fw-normal">Add new cars</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-3"  {...register("model")} />
                <label htmlFor="floatingInput">Model:</label>
                {errors.model && (
                    <div className={"text-danger mb-2"}>{errors.model?.message as string}</div>
                )}

            </div>
            <div className="form-floating">
                <input type="text" className="form-control mb-3"  {...register("gorivo")} />
                <label htmlFor="floatingInput">Gorivo:</label>
                {errors.gorivo && (
                    <div className={"text-danger mb-2"}>{errors.gorivo?.message as string}</div>
                )}

            </div>

            <div className="form-floating">
                <input type="text" className="form-control mb-3"  {...register("menjac")} />
                <label htmlFor="floatingInput">Menjac:</label>
                {errors.menjac && (
                    <div className={"text-danger mb-2"}>{errors.menjac?.message as string}</div>
                )}

            </div>
            <div className="form-floating ">
                <input type="text" className="form-control mb-3 " {...register("kubikaza")} />
                <label htmlFor="floatingPassword">Kubikaza:</label>
                {errors.kubikaza && (
                    <div className={"text-danger mb-2"}>{errors.kubikaza?.message as string}</div>
                )}

            </div>

            <div className="form-floating ">
                <input type="text" className="form-control mb-3 " {...register("cena")} />
                <label htmlFor="floatingPassword">Cena:</label>
                {errors.cena && (
                    <div className={"text-danger mb-2"}>{errors.cena?.message as string}</div>
                )}

            </div>

            <div className="form-floating ">
                <input type="text" className="form-control mb-3 " {...register("slika")} />
                <label htmlFor="floatingPassword">Slika:</label>
                {errors.slika && (
                    <div className={"text-danger mb-2"}>{errors.slika?.message as string}</div>
                )}

            </div>


            <button className="w-100 btn btn-lg btn-primary" type="button"
                    onClick={() => {
                        handleSubmit((data) => {

                            usersRequest.createCar(data);


                        })();
                    }} >Add</button>

        </div>

    );
}
