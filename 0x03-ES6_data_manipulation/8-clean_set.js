export default function cleanSet(set, startString)
{
    if(typeof startString === 'string' && startString.length===0)
    {
        return("")
    }
    let setArr = [...set]
    let tempArr = setArr.filter((element) => {
        let val = element.search(startString)
        if (val !== -1)
        {
            return element
        }
    });

    let finalArr = tempArr.map((element) => {
        let val = element.replace(startString, "")
        return val.trimStart()
    })

    let resString = finalArr.join('-')

    return (resString);
}