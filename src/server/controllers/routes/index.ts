import { Router } from 'express';   
import {StatusCodes} from 'http-status-codes';

import { } from '../cidades';


const router = Router();

export { router };

router.get('/', (req, res) => {
    return res.send('OLA, DEV');

});

router.post('/teste', (req, res) => {

    //console.log(req.params);

    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

