export default function hasValuesFromArray(set, array)
{
    const verNum = array.length
    const finalArr = array.filter(x => set.has(x));

    if (verNum == finalArr.length)
    {
        return (true)
    }
    else
    {
        return (false)
    }
 }