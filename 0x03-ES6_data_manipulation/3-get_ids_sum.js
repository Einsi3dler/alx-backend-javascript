export default function getStudentIdsSum(listStud)
{
    if (!Array.isArray(listStud))
    {
        return ([])
    }

    let resArr = listStud.reduce((total, value) => {
        return (total + value.id)
    }, 0)

    return (resArr);

}