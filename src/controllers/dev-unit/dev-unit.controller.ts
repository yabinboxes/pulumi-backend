import * as express from 'express'
import { Request, Response } from 'express'
import IDevUnit from './dev-unit.interface'
import IControllerBase from '../../interfaces/IControllerBase.interface'

class DevUnitController implements IControllerBase {
    public path = '/deploy-dev-unit'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getDevUnit)
        this.router.post(this.path, this.deployDevUnit)
    }

    deployDevUnit = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        var unit:IDevUnit = req.body;
        return res.json({
            msg: 'success', url: 'http://test'
        });
    }

    getDevUnit = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.json({
            'list': [  
                {'date': 'Jan 1, 2016', 'url': "http://test1"},
                {'date': 'Jan 2, 2017', 'url': "http://test2"},
                {'date': 'Jan 3, 2018', 'url': "http://test3"}
            ]
        });
    }
}

export default DevUnitController