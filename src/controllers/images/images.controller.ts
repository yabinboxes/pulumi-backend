import * as express from 'express'
import { Request, Response } from 'express'
import IImages from './images.interface'
import IControllerBase from 'interfaces/IControllerBase.interface'

class ImagesController implements IControllerBase {
    public path = '/images'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getImages)
    }

    getImages = (req: Request, res: Response) => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.json({
            'baseList': [
                { 
                    'origin': 'image 1',
                    'cloudType': 'GCP',
                    'name': 'image 1',
                    'containerType': 'docker',
                    'createdDate': 'Jan 2, 2017',
                    'updatedDate': 'Jan 2, 2017',
                    //valid: boolean;
                    'details': 'image 1'
                 },
                { 
                    'origin': 'image 2',
                    'cloudType': 'GCP',
                    'name': 'image 2',
                    'containerType': 'docker',
                    'createdDate': 'Jan 3, 2017',
                    'updatedDate': 'Jan 3, 2017',
                    //valid: boolean;
                    'details': 'image 2'
                 }
            ],
            'list': [
                { 
                    'origin': 'image 1',
                    'cloudType': 'GCP',
                    'name': 'image 1',
                    'containerType': 'docker',
                    'createdDate': 'Jan 2, 2017',
                    'updatedDate': 'Jan 2, 2017',
                    //valid: boolean;
                    'details': 'image 1'
                 },
                { 
                    'origin': 'image 2',
                    'cloudType': 'GCP',
                    'name': 'image 2',
                    'containerType': 'docker',
                    'createdDate': 'Jan 3, 2017',
                    'updatedDate': 'Jan 3, 2017',
                    //valid: boolean;
                    'details': 'image 2'
                 },
                { 
                    'origin': 'image 3',
                    'cloudType': 'GCP',
                    'name': 'image 3',
                    'containerType': 'docker',
                    'createdDate': 'Jan 4, 2017',
                    'updatedDate': 'Jan 4, 2017',
                    //valid: boolean;
                    'details': 'image 3'
                 } 
            ]
        });
    }
}

export default ImagesController