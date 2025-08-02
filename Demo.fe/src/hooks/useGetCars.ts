import useSWR from "swr";
import {usersRequest} from "../data";
import {API_ENDPOINTS} from "../data/endpoints";
import {useSession} from "next-auth/react";
import useAuth from "./useAuth";


export const useGetCars = () => {
    const axiosAuth = useAuth();

    const fetchUsers = async () => {
        const res = await axiosAuth.get("http://localhost:8080/cars/get");
        return res.data;
        //console.log(res.data);
    };


    // const headers= {
    //     //@ts-ignore
    //     authorization: `Bearer ${session?.user?.accessToken}`,
    // };

    const{  data, error
    } = useSWR(
        () => {//`${SWR_KEYS.USERS_GET_ALL}`
            return API_ENDPOINTS.CARS_GET_ALL
        },
        () => {
            return fetchUsers();
        },
        {
            refreshInterval: 9000,
            revalidateIfStale: true,
            revalidateOnFocus: true,
            revalidateOn : true,
            revalidateOnReconnect: true
        }
    );
    return {data,error};
}