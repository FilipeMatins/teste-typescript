import { Request, Response } from 'express';

  interface ICidade {
    nome:string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

   

    console.log(req.body);


    return res.send('create');
};