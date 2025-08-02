import axios from "axios";

export const Axios = axios.create({
    baseURL : "http://localhost:8080",
    timeout : 150000000,
    headers : {
        'Content-Type' : 'application/json',
    },
});


export const axiosAuth = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getDemo  = async <T>(url : string , params?: any, config?: any) =>{

    const response = await Axios.get<T>(url,{params,headers : config?.headers});
    return response.data;
}


export const postDemo  = async <T>(url : string , params?: any, config?: any) => {
    // console.log(url);
    // console.log(params);
    const response = await Axios.post<T>(url, params, {headers: config?.headers});
    return response.data;
}
    export const postDemoCars  = async <T>(url : string , params?: any, config?: any) =>{

        const response = await axiosAuth.post<T>(url,params, {headers: config?.headers});
        return response.data;
}



