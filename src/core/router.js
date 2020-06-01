class Router{

    /**
     * Set the express application
     * this method is called from the application class
     * @param {Express} expressApp 
     */
    setExpressApp(expressApp){
        this.expressApp = expressApp;
    }

    get(route, action=[controller, method]){
        this.expressApp.get(route, (req, res) =>{
            let controllerObject = new action[0];
            let outPut = controllerObject[action[1]](req, res);
            res.send(outPut);
        })
        
    }
}

export default new Router;
/**
 *  Routing System
 * 
 *  We'll Create a Router class that will manage all of our application routes
 * 
 *  Routes are paths of our website 
 * 
 *  i.e sitename.com/home route is >>> /home
 *  i.e sitename.com/register route here is >>> /register
 * 
 *  The Router class will have a method for each request method type, i.e get, post ...etc
 *  Each module will have a controller that will manage a one or more requests 
 *  Each request will call a method from that controller 
 *  we'll register our controller, each route will have an action 
 *  action are arrays contain controller and method name that will called only 
 *  when the route is matcheds
 * 
 * Connect the router to the application via Servicepovider
 * Live Sycle
 * I speak to the Service Provider in the Home Class, for example, that I have a route  in the  my file 
 * register it 
 * 
 * The Class application doing loop in all servers providers and shows whether there is a Route stored in 
 * it or not
 * If it exist,  starts it calls all of it, so you can store it with the Express app
 */