import * as express from 'express'
import { Request, Response } from 'express'
import IAutodeployUnit from './autodeploy-unit.interface'
import IControllerBase from '../../interfaces/IControllerBase.interface'

class AutodeployUnitController implements IControllerBase {
    public path = '/autodeploy'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.execAutodelpoyUnit)
    }

    execAutodelpoyUnit = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");

        // generate entry with loading/starting deployment process  

        // execute GCP deploy pulumi github pipeline

        // update process status with completed 

        // create record in prod/dev units deployed



        return res.json({
            'urlList': [  
                {'date': 'Jan 1, 2016', 'url': "http://test1"}
            ]
        });
    }
}

export default AutodeployUnitController