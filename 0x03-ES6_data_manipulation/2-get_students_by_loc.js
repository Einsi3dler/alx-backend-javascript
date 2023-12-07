export default function getStudentsByLocation(listStud, city)
{
    if (!Array.isArray(listStud))
    {
        return ([])
    }

    let resArr = listStud.filter((elements) => {
        return elements.location === city
    } )

    return (resArr);
}