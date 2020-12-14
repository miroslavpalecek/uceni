/**
 * @description It returns available stocks and their details, which could provide sufficient amount of the product. If our price is better, it appears in the final result.
 * @param {number} requiredAmount Required amount of the product.
 * @param {number} purchasePrice Purchase price. If it's better to buy it ourselves, it should be in the decision result.
 * @param {{stockCode: string;stock: number;price: number;}[]} stockInfo Information about stock availabilities, sorted by priority (first with top priority).
 * @return {{ onioPriceIsLower: boolean; availableStock: IStock[]} Stocks which can provide the product and info if our price is better.
 */
//stock info jsou sklady
export default function createResult(requiredAmount: number, purchasePrice: number, stockInfo: {
    stockCode: string;
    stock: number;
    price: number;
}[]): {
    onioPriceIsLower: boolean;
    availableStocks: {
        stockCode: string;
        stock: number;
        price: number;
    }[]
} {
    // vytvorit si pomocnou promenou, která je prázdné pole, kam si budu ukládat sklady, které splní podmínku requiredAmount
    //pres for projit jednotlive sklady
    //vevnitr foru se podívat jestli stock je vetsi nebo rovno reqiredAmount
    //pokud to splní podmínku udelá se push do pomocné promenne a narve se tam ten sklad, který tu podmínku splnil

//let prom: boolean = true;
//let prom2: boolean: false;
//let prom3: boolean = prom && prom2;
//prom3 = prom || prom2;
//Martin Houdek13:16
//let priceIsLower: boolean = true;
//prom2 = prom2 && prom;
//priceIsLower = priceIsLower && neco;

    let OnioPriceIsLower:boolean = true;
    let sklady = []
    for (const wh of stockInfo) {
        if ( wh.stock >= requiredAmount ) {
            sklady.push( wh )
        }
        if ( wh.price < purchasePrice ) {
            OnioPriceIsLower = false
        }
    }

    //console.log(requiredAmount, purchasePrice);
    return { onioPriceIsLower: OnioPriceIsLower, availableStocks: sklady};
}


const testStocks = [{
    stockCode: 'Onio dead box',
    stock: 10,
    price: 100
}, {
    stockCode: 'Doom',
    stock: 30,
    price: 666
}, {
    stockCode: '007',
    stock: 69,
    price: 88
}];

console.log(createResult(20,1,testStocks))