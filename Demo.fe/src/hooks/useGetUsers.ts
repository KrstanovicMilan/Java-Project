import useSWR from "swr";
import {usersRequest} from "../data";
import {API_ENDPOINTS} from "../data/endpoints";
import {useSession} from "next-auth/react";
import useAuth from "./useAuth";


export const useGetUsers = () => {
    const axiosAuth = useAuth();

    const fetchUsers = async () => {
        const res = await axiosAuth.get("http://localhost:8080/user/get");
        //console.log(res.data);
        return res.data;

    };

    // const headers= {
    //     //@ts-ignore
    //     authorization: `Bearer ${session?.user?.accessToken}`,
    // };

    const{  data, error, isLoading
    } = useSWR(
            () => {//`${SWR_KEYS.USERS_GET_ALL}`
                return API_ENDPOINTS.USERS_GET_ALL
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
    return {data,error,isLoading};
}