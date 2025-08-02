import {getDemo, postDemo, postDemoCars} from "./http-client";
import {CarsQuery, QueryOptions, RegisterQuery, RentFormQuery, User} from "../types";
import {API_ENDPOINTS} from "./endpoints";

export const usersRequest  = {
    all : (query? : QueryOptions ,config? : any) =>
        getDemo<User[]>(API_ENDPOINTS.USERS_GET_ALL, { ...query },config),


    create : ({...query} : RegisterQuery ) =>
        postDemo<User>(API_ENDPOINTS.USERS_CREATE, { ...query }),

    createCar : ({...query} : CarsQuery ) =>
        postDemo<CarsQuery>(API_ENDPOINTS.CARS_CREATE, { ...query }),


    rentCar : ({...query} : RentFormQuery ) =>
        postDemo<RentFormQuery>(API_ENDPOINTS.CARS_RENT, { ...query }),



};
