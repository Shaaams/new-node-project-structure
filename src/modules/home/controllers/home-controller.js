export default class HomeController{
    
    homePage(req){
        return `Welcome Home Page ${req.path}`;
    }
}