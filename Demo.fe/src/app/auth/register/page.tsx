"use client"
import {useForm} from "react-hook-form";
import {IProps, RegisterQuery} from "../../../types";
import {yupResolver} from "@hookform/resolvers/yup";

import {signIn} from "next-auth/react";
import {registerShema} from "../../../validators/users/registerValidator";
import {usersRequest} from "../../../data";


export default function RegisterPage({searchParams}: IProps) {
    //console.log(searchParams);
    // @ts-ignore


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterQuery>({
        mode: 'onSubmit',
        // @ts-ignore
        resolver: yupResolver(registerShema)
    });

    return (

        <div>
            {searchParams?.message && (
                <div className="alert alert-danger" role="alert">
                    {searchParams?.message}
                </div>
            )}

            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <div className="form-floating">
                <input type="text" className="form-control mb-3"  {...register("firstName")} />
                <label htmlFor="floatingInput">First name</label>
                {errors.firstName && (
                    <div className={"text-danger mb-2"}>{errors.firstName?.message as string}</div>
                )}
            </div>
            <div className="form-floating">
                <input type="text" className="form-control mb-3"  {...register("lastName")} />
                <label htmlFor="floatingInput">Last name</label>
                {errors.lastName && (
                    <div className={"text-danger mb-2"}>{errors.lastName?.message as string}</div>
                )}
            </div>

            <div className="form-floating">
                <input type="email" className="form-control mb-3"  {...register("email")} />
                <label htmlFor="floatingInput">Email address</label>
                {errors.email && (
                    <div className={"text-danger mb-2"}>{errors.email?.message as string}</div>
                )}
            </div>
            <div className="form-floating ">
                <input type="password" className="form-control mb-3 " {...register("password")} />
                <label htmlFor="floatingPassword">Password</label>
                {errors.password && (
                    <div className={"text-danger mb-2"}>{errors.password?.message as string}</div>
                )}
            </div>


            <button className="w-100 btn btn-lg btn-primary" type="button"
                    onClick={() => {
                        handleSubmit((data) => {

                            usersRequest.create(data);
                            {console.log(data);}

                        })();
                    }} >Sign in</button>

        </div>

    );
}