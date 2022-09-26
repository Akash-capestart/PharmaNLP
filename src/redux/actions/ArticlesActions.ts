import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchGet } from "../../dataFetchingHelpers/fetchActions";



export const FectallArticles=createAsyncThunk(
    'ActiclesAction/fetchAllArticles',
    async ({ endUrl }: { endUrl: string,}) => {
        const response = await FetchGet(endUrl)
        console.log("all data fetch",response);
        return response
    }
)


export const Fetchbykeywords = createAsyncThunk(
    'ActiclesAction/fetchArticlesByKeyWords',
    async ({endUrl} : {endUrl : string}) =>{
        const response = await FetchGet(endUrl)
        return response
    }
)