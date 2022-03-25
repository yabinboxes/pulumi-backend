import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'

class ProdUnitController implements IControllerBase {
    public path = '/deploy-prod-unit'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.index)
    }

    index = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send("TypeScript Prod");
    }
}

export default ProdUnitController