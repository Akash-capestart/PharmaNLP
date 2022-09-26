import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPost } from "../../dataFetchingHelpers/fetchActions";

type CredentialProps = {
    phone_no: string,
    password: string
}

export const doUserLogin = createAsyncThunk(
    'userDetails/doUserLogin',
    async ({ endUrl, credential }: { endUrl: string, credential: CredentialProps[] }) => {
        const response = await FetchPost(endUrl, credential)
        return response
    }
)
