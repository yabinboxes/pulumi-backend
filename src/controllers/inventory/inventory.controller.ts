import * as express from 'express'
import { Request, Response } from 'express'
import IInventory from './inventory.interface'
import IControllerBase from '../../interfaces/IControllerBase.interface'

class InventoryController implements IControllerBase {
    public path = '/inventory'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getInventoryFrontend)
    }

    getInventoryFrontend = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");

        return res.json({
            'orgs': [  
                {
                    'id': '1',
                    'name': 'myOrg1',
                    'description': 'description orgs',
                    'projects': [
                        {
                            'name': 'prj1',
                            'description': 'description prj1'
                        },
                        {
                            'name': 'prj2',
                            'description': 'description prj2'
                        }
                        
                    ]
                },
                {
                    'id': '2',
                    'name': 'myOrg2',
                    'description': 'description orgs 2',
                    'projects': [
                        {
                            'name': 'prj3',
                            'description': 'description prj3'
                        },
                        {
                            'name': 'prj4',
                            'description': 'description prj4'
                        }
                        
                    ]
                }
            ]
        });
    }
}

export default InventoryController