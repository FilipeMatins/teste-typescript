import { Router } from 'express';   
import { } from 'http-status-codes';

import { cidadesController } from './../controllers';

const router = Router();

export { router };

router.get('/', (req, res) => {
    return res.send('OLA, DEV');

});

router.post('/cidades', cidadesController.create);

