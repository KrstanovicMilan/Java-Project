import {Dispatch, ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {AppProps} from "next/app";
import {date} from "yup";


export interface User {
    id: number;
    firstName : string;
    email : string;
}

export interface QueryOptions{
    pageIndex?: number;
    rowNumber?: number;
    headers?:{
        authorization?:string;
    }

}

export interface CreateUserQuery{
    firstName : string;
    lastName : string;
    email: string;

}


export interface LoginQuery{
    email: string;
    password : string;

}
export interface RegisterQuery{
    firstName : string;
    lastName : string;
    email: string;
    password : string;

}
export interface CarsQuery{
    id:number;
    model : string;
    gorivo : string;
    menjac: string;
    kubikaza : number;
    cena : number;
    slika: string;


}
export interface RentFormQuery{

    model:string;
    datumPreuzimanja : Date;
    datumVracanja : Date;
    brojVozacke: number;
    naIme : string;

}


export interface IProps {
    searchParams?: { [key: string]: string | string[] | undefined };
}

export interface UserSettingsContentProps{
    state : User;
    dispatch : Dispatch<UserSettingsAction>;
}

export interface UserSettingsAction{
    type : UserSettingsFunction;
    payload : {
        email?: string;
        firstName?: string;
        lastName?:string;
    }
}

export enum UserSettingsFunction{
    CHANGE_EMAIL='CHANGE_EMAIL',
    CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME'

}


export type NextPageWithLayout< P = {}> = NextPage<P> & {
    authorization? : boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component : NextPageWithLayout;
}