import {sectiCisla} from './libs/secti-cisla';
import { Request, Response } from 'express';

export default function get(req:Request, res:Response) {

    if ('a' in req.query && 'b' in req.query && typeof (req.query.a) === 'string' && typeof (req.query.b) === 'string') {
        let c:number = parseInt(req.query.a);
        //parseInt dela cele cislo z textu
        let d:number = parseInt(req.query.b);

        res.json({result: true, data: sectiCisla(c, d)})
    } else {
        res.status(400).json({result: false, error: 'missing requiered parametres a, b '});   
    }
}

