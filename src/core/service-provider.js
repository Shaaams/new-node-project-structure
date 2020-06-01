import router from 'core/router';
export default class ServiceProvider{
    /**
     * Set Routes list
     * @var array
     */
    routes = null;

    /**
     * Map routing for the current service provider
     */
     mapRouting(){
              //  console.log(this.routes);
                
            if(! this.routes) return;
            
            for(let route of this.routes){
                route(router);
            }
        
     }
}