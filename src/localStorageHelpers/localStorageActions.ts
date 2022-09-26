export const storageSet = (key:string,val:any) => {    
    localStorage.setItem(key,val)    
}

export const storageGet = (key : string) => {
    const get = localStorage.getItem(key)
    if(get === "true" || get === "false"){
        return JSON.parse(get)
    }else{
        return get
    }
}

export const storageRemove = (key:string) => {
    localStorage.removeItem(key)
}