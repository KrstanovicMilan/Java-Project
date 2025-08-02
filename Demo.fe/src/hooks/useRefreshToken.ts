import {signIn, useSession} from "next-auth/react";
import {postDemo} from "../data/http-client";

export const useRefreshToken = () => {
    const {data: session, update } = useSession();
    const headers = {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.refreshToken}`,
    };

    const refreshToken = async () => {

        const resp = await postDemo(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/api/v1/auth/refresh-token`, {}, {headers});




        if (session) {
            //@ts-ignore
            await update({
                ...session,
                user: {
                    ...session?.user,
                    //@ts-ignore
                    accessToken: resp.accessToken,
                    //@ts-ignore
                    refreshToken: resp.refreshToken
                },
            });

            //@ts-ignore
            return {accessToken: resp.accessToken};
        } else {
            await signIn();
        }

        }


    return refreshToken;

}