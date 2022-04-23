import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home.controller'
import DevUnitController from './controllers/dev-unit/dev-unit.controller'
import ImagesController from './controllers/images/images.controller'
import PluginsController from './controllers/plugis/plugins.controller'
import ProdUnitController from './controllers/prod-unit/prod-unit.controller'
import AutodeployUnitController from './controllers/autodeploy-unit/autodeploy-unit.controller'
import InventoryController from './controllers/inventory/inventory.controller'

const app = new App({
    port: 80,
    controllers: [
        new HomeController(),
        new DevUnitController(),
        new ImagesController(),
        new PluginsController(),
        new ProdUnitController(),
        new AutodeployUnitController(),
        new InventoryController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()
