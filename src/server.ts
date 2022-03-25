import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home.controller'
import DevUnitController from './controllers/dev-unit/dev-unit.controller'
import ImagesController from './controllers/images/images.controller'
import PluginsController from './controllers/plugis/plugins.controller'
import ProdUnitController from './controllers/prod-unit/prod-unit.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new DevUnitController(),
        new ImagesController(),
        new PluginsController(),
        new ProdUnitController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()