import providers from '../config/providers';

export default class ServiceProviderContainer {
  
    serviceProviders= [];
    /**
     * Initialize and collect our service providers list from config file
     */
    poot(){
        for (let i = 0 ; i < providers.length; i ++){
            let providerObject = new providers[i];

           this.serviceProviders.push(providerObject)
        }
        
    }
}