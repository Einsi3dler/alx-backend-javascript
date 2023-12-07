export default function groceriesList()
{
    const shoppingList = new Map();
    shoppingList.set('Apples', 10);
    shoppingList.set('Tomatoes', 10);
    shoppingList.set('Pasta', 1);
    shoppingList.set('Rice', 1);
    shoppingList.set('Banana', 5);

    return (shoppingList);
}