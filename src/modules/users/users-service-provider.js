 import siteRouters from './routes/site'
 import ServiceProvider from 'core/service-provider';
export default class UsersServiceProvider extends ServiceProvider{
    /**
     * {@inheritdoc}
     */
    routes=[siteRouters];
 }

  /**
 * nots: Service Providers 
 * Service Providers are a mechanism of doing certain jops encapsulated 
 * under one controller|provider, that will manage these jops/action
 */

/**
 * How it works
 * We're having a service providers container whish will contain all or our service
 * provider
 * Each module has its own service provider
 * We'll create a config file that holds all of our service providers
 * So whenever we need to add/remove any module we'll just add/remove the service provider
 */
