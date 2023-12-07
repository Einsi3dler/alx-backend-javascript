export default function updateUniqueItems(mapItem)
{
    if (!(mapItem instanceof Map))
    {
        throw new Error("Cannot process")
    }

    const keys = mapItem.keys()
    let nextkey = keys.next()

    while (!nextkey.done)
    {

        // the reason we are using this overly convoluted
        // solution is because the mapItem.keys returns
        // an iterable object not an array an object
        // so we have to access it this way
        // it works but it could be better
        const element = nextkey.value;
        if (mapItem.get(element) === 1)
        {
            mapItem.set(element, 100)
        }
        nextkey = keys.next();
    }

    return (mapItem)
}