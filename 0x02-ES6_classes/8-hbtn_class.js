export default class HolbertonClass
{
    constructor(size, location)
    {
        if(typeof size !== 'number')
        {
            throw new TypeError("ffs")
        }
        if(typeof location !== 'string')
        {
            throw new TypeError("ffs")
        }

        this._size = size;
        this._location = location;
    }

    valueOf()
    {
        return this._size
    }
    toString()
    {
        return this._location
    }
}