let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
/**
 * @description It gets active stock codes for specified tyreservice.
 * @param {string} tyreServiceId TyreServiceId.
 * @param {(err: Error | undefined, res: string[] | undefined) => void} cb Callback function.
 */

 
//vstup prijde mi tyreServiceId coz je v mongo ID

//pripojit se na mongo
//vytáhnout konkrétní záznam (find one), nejen vytáhnout záznam pro pneuservis, ale mel by mít i active:true
//v záznamu si vytáhnou sklady danného pneuservisu (supplyer.stocks)
//na kazdém skladu se podívat jestli je aktivní a jestli je aktivní vrátit , pomocná proměná (kódy skladů které jsou aktivní),(for)
//sklady by meli by serazeny dle priority
//potrebuji zjistit vsechny aktivni sklady pneuservisů

 export default function getStockCodes(
    tyreServiceId: string,
    cb: (err: Error | undefined, res: string[] | undefined) => void,
): void {
    let activeWh:any = []
    console.log(tyreServiceId);

    MongoClient.connect(url, function(err:any, db:any) {
        if (err) {
            cb(err, undefined)
        } else {
            var dbo = db.db("tyreServices");
            dbo.collection("tyreServices").findOne({ id : tyreServiceId, active: true } , function(err:any, tyreService:any) {
                if (err) {
                     cb(err , undefined);
                 } else {
                     for(const sklady of tyreService.supplier.stocks) {
                         //console.log(tyreService)
                         if ( sklady.active == true ) {
                            activeWh.push( sklady )
                         }
                     }
                     //console.log(tyreService.supplier.stocks)
                     cb(undefined, activeWh)
                }
                db.close();
                });
        }
        
    });

}

if (require.main === module) {
    getStockCodes("1603268614545x177762690496120261",(err, res) => {
        console.log(err);
        console.log(JSON.stringify(res, undefined, 4));
        });
}