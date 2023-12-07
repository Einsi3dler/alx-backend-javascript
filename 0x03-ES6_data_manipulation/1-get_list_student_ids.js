export default function getListStudentIds (array)
{
    let resArr = []
    if(!Array.isArray(array))
    {
        return (resArr);
    }

    resArr = array.map(function(val){
        return val.id
    })

    return (resArr);
}