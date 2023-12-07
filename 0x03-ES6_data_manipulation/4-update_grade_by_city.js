export default function updateStudentGradeByCity (listStud, city, newGrades)
{
    if (!(Array.isArray(listStud) && Array.isArray(newGrades)))
    {
        return ([])
    }

    let filterArr = listStud.filter((elements) => {
        return elements.location === city
    } )

    let resArr = filterArr.map((element)=>{
        let tempArr = newGrades.filter((value) => {
            return element.id === value.studentId
        });

        if (tempArr.length !== 0)
        {
            element.grades = tempArr[0].grade
        }
        else
        {
            element.grades = "N/A"
        }

        return element
    })

    return (resArr)
}