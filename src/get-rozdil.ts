import {odectiCisla} from './libs/odecti-cisla';
import { Request, Response } from 'express';

export default function get(req:Request, res:Response) {

    if ('e' in req.query && 'f' in req.query && typeof (req.query.e) === 'string' && typeof (req.query.f) === 'string') {
        let c:number = parseInt(req.query.e);
        //parseInt dela cele cislo z textu
        let d:number = parseInt(req.query.f);

        res.json({result: true, data: odectiCisla(c, d)})
    } else {
        res.status(400).json({result: false, error: 'missing requiered parametres e, f '});   
    }
}