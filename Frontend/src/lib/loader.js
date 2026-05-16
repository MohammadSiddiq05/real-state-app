import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
    const res = await apiRequest(
        `/post/${params.id}`
        , {
            withCredentials: true,
        });

    return res.data;
};