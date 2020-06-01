import router from './router';
import providers from 'config/providers';


export default class ServiceProviderContainer {
  
    serviceProviders= [];
    /**
     * Initialize and collect our service providers list from config file
     */
    boot(){
        for (let i = 0 ; i < providers.length; i ++){
            let providerObject = new providers[i];

           this.serviceProviders.push(providerObject)
        }
    }
    /**
     * Get all routes frome every single provider
     */
    registerRoutes(){
        
        for(let provider of this.serviceProviders){
            
            provider.mapRouting();
        }
    }


}