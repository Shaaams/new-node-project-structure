import env from './env'
import express from 'express';
import router from './router';
import bodyParser from  'body-parser';
import fileUpload from 'express-fileupload';
import ServiceProviderContainer from 'core/service-providers-container';

class Application{
    
    /**
     * Application request
     * @var ExpressRequest
     */

     request = null;

     /**
     * Application request
     * @var ExpressResponse
     */

     response = null;
     
    constructor(){
        
        this.prepareServer();
        this.initializeProviders()
        /**
         * Pass the object express to router
         */
        router.setExpressApp(this.express);
    }
    /**
     * Initialize our service providers container
     */
    initializeProviders(){
        this.serviceProviders = new ServiceProviderContainer();
        this.serviceProviders.boot();
    }
    /**
     * Prepare the express Server
     */
    prepareServer(){
        this.express = express();

        //Add Custome Middleware

        this.express.use((req, res, next) => {
            this.request  = req;
            this.response = res;
            next();
        })

        this.express.use(bodyParser.urlencoded({
            extended: true,
        }));

        this.express.use(fileUpload({
            useTempFiles: true,
            tempFileDir: __dirname + '/tmp',
        }));

    }

    /**
     * Run The Application Server
     */
        /**
         * function run Server
         * @param {String} port 
         */
     run(port){

        this.serviceProviders.registerRoutes();
        
        this.express.listen(port,()=>{
            console.log(`Server is listen Port : ${port}`);
            
        })
     }

     /**
      * Testing
      * printEnv(){
      *   console.log(env('mode')); 
      *   }
      */
}

let app = new Application;

export function request (){
    return app.request;
}

export function response(){
    return app.response;
}
     export default app;
