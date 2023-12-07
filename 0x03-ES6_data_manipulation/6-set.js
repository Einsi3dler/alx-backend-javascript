export default function setFromArray(array)
{
    if(!Array.isArray(array))
    {
        return ({})
    }

    let setRes = new Set(array)

    return(setRes);
}