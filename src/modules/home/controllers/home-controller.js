import path from 'path';
export default class HomeController{
    
    homePage(req, res){
        res.sendFile(path.resolve(__dirname + '/../views/form.html'));
        
        //return `Welcome Home Page ${req.path}`;
    }

    submitForm(req, res){
        //req.files.image.mv(__dirname + '/crafts1.png')
        res.send(req.body.email)
    }
}