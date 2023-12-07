import Currency from "./3-currency";

export default class Pricing {
    constructor (amount, currency)
    {
        if (typeof amount !== 'number')
        {
            throw new TypeError("amount must be a number")
        }
        if (!(currency instanceof Currency))
        {
            throw new TypeError("currency must be a Currency")
        }

        this._amount = amount
        this._currency = currency
    }

    get amount()
    {
        return this._amount;
    }
    set amount(value)
    {
        if (typeof value !== 'number')
        {
            throw new TypeError("amount must be a number")
        }
        else
        {
            this._amount = value
        }
    }

    get currency()
    {
        return this._currency;
    }
    set currency(value)
    {
        if (!(value instanceof Currency))
        {
            throw new TypeError("currency must be a Currency")
        }
        else
        {
            this._currency = value
        }
    }

    displayFullPrice()
    {
        return(`${this._amount} ${this._currency.displayFullCurrency()}`)
    }

    static convertPrice(amount, conversionRate)
    {
        if (typeof amount === 'number' && typeof conversionRate === 'number')
        {
            return (amount * conversionRate)
        }
        else
        {
            throw new TypeError("One or both of the arguments are not numbers")
        }
    }

}