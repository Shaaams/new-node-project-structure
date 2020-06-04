import HomeController from 'modules/home/controllers/home-controller';
import router from 'core/router';

// router.get('/', [HomeController, 'homePage'])

export default function(){
    router.get('/', [HomeController, 'homePage'])
          .post('/submit', [HomeController, 'submitForm'])
    
}