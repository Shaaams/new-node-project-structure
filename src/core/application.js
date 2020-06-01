import env from './env'
import express from 'express';
import bodyParser from  'body-parser';
import ServiceProviderContainer from './service-providers-container';

export default class Application{
    

    constructor(){
        this.prepareServer();
        this.initializeProviders()
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

        this.express.get('/', (req, res) => {
            res.send('Welcome [ TmTam 7abibty ] ')
        })
        
        this.express.listen(port,()=>{
            console.log(`Server is listen Port : ${port}`);
            
        })
     }

     /**
      * Testing
      * printEnv(){
         console.log(env('mode'));
         
     }
      */
}
