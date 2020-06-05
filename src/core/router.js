class Router{

            /**
             * Set the express application
             * this method is called from the application class
             * @param {Express} expressApp 
             */
            setExpressApp(expressApp){
                this.expressApp = expressApp;

            }

            
            /**
             * 
             * @param {String} singleRequestMethod 
             * @param {String} route 
             * @param {callback} callback 
             * @returns {Router}
             */
            _handleRequest(singleRequestMethod,route, callback) {
                //console.log(singleRequestMethod);
                    //object of Express App
                this.expressApp[singleRequestMethod](route,  (req, res) =>{
                        // Call the method from the current route
                    let outPut = callback(req, res);
                        // Send response if the output isn't empty
                    if(outPut){
                        res.send(outPut);
                    }  
                    
                });
                return this;
            }

            /**
             * Add get Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            get(route, action){
                return this._handleRequest('get', route, action);
            }

            /**
             * Add post Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            post(route, action){
                return this._handleRequest('post', route, action);
            }

            /**
             * Add put Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            put(route, action){
                return this._handleRequest('put', route, action);
            }

            /**
             * Add patch Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            patch(route, action){
                return this._handleRequest('patch', route, action);
            }

            /**
             * Add delete Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            delete(route, action){
                return this._handleRequest('delete', route, action);
            }

            /**
             *  Add options Request
             * 
             * @param {String} route
             * @param {array} action => [controller, controllerMethod]
             * @returns {Router}
             */

            options(route, action){
                return this._handleRequest('options', route, action);
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