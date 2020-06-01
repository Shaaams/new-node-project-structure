import HomeController from 'modules/home/controllers/home-controller';
import router from 'core/router';

// router.get('/', [HomeController, 'homePage'])

export default function(router){
    router.get('/', [HomeController, 'homePage'])
   // router.get('/', [HomeController, 'homePage']);
    
}