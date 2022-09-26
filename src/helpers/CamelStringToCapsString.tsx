export const CamelStringToCapsString = (value : string) => {
    const str = value.replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str:string) => {
      return str.toUpperCase();
    })   
    return str  
}