import * as express from 'express'
import { Request, Response } from 'express'
import IAutodeployUnit from './autodeploy-unit.interface'
import IControllerBase from '../../interfaces/IControllerBase.interface'

import axios from "axios";


class AutodeployUnitController implements IControllerBase {
    public path = '/autodeploy'
    public router = express.Router()
    private fs = require('fs');

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

       
        // call pulumi gcp-deploy-cloud-run and get url
        axios.get('https://reqres.in/api/users')
        .then(response => {
            console.log(response.data.data);
            
            
            // write url in db_url
            let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' + 
            'As I laugh, pushin the gas while my Glocks blast\n' + 
            'We was young and we was dumb but we had heart';

           

            // write in app-url
            this.createFile('urls/app-url', lyrics);

            // write in db-url
            this.createFile('urls/db-url', lyrics);


            return res.json(response.data.data);
        })
        .catch(err => {
            console.log(err);
        });
       
        
       

        /*return res.json({
            'urlList': [  
                {'date': 'Jan 1, 2016', 'url': "http://test1"}
            ]
        });*/
    }

    createFile(path: string, urlStr: string) {

        this.fs.writeFile(path, urlStr,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }
}

export default AutodeployUnitController