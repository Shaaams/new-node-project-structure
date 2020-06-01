import env from './env'
import express from 'express';
import router from './router';
import bodyParser from  'body-parser';
import ServiceProviderContainer from './service-providers-container';

export default class Application{
    
     
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
        this.serviceProviders.poot();
    }
    /**
     * Prepare the express Server
     */
    prepareServer(){
        this.express = express();

        this.express.use(bodyParser.urlencoded({
            extended: true,
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
