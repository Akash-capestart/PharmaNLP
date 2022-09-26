import { storageGet } from "../localStorageHelpers/localStorageActions";

const getToken = () => {
    let token
    token = storageGet("isLoggedIn") ? storageGet("token") : ""
    return token
}

const preUrl = "https://ecom-api-testing.herokuapp.com"
// const linkdata= "https://stagecspapi.pharmanlp.com"
const pharmaPreUrl = "https://stagecspapi.pharmanlp.com"
               

export const FetchGet = async (url:string) => {
    try{
        let data;
        await fetch (`${pharmaPreUrl}${url}`,{
            method : "GET",
            headers : {
                "Content-Type":"application/json",
                "auth-token" : getToken() 
            }
        })
        .then(response=>response.json())
        .then(response=>data = response)
        return data
    }catch{
        const error = "Fetching Error!!!!"
        return error
    }
}

export const FetchPost = async (url:string,payLoad:any) => {              
    try{
        let data;
        await fetch (`${preUrl}${url}`,{
            method : "POST",
            headers : {
                "Content-Type":"application/json", 
                "auth-token" : getToken()
            },
            body : JSON.stringify(payLoad)
        })
        .then(response=>response.json())
        .then(response=>data = response)        
        return data
    }catch{
        const error = "Fetching Error!!!!"
        return error
    }
}
