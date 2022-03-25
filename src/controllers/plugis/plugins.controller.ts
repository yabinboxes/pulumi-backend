import * as express from 'express'
import { Request, Response } from 'express'
import IPlugin from './plugins.interface'
import IControllerBase from 'interfaces/IControllerBase.interface'

class PluginsController implements IControllerBase {
    public path = '/plugins'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getPlugins)
    }

    getPlugins = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.json({
            list: [
                {
                    name: 'pipeline deployment', 
                    description: 'github pipeline deploy',
                    content: 'plugin content'
                },
                {
                    name: 'pipeline unit test', 
                    description: 'pipeline test',
                    content: 'plugin content'
                },
                {
                    name: 'pipeline automation test', 
                    description: 'pipeline automation',
                    content: 'plugin content'
                }
            ]

        });
    }
}

export default PluginsController