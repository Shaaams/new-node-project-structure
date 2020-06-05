import { showHome, submitForm } from 'modules/home/controllers/home-controller';
import router from 'core/router';

// router.get('/', [HomeController, 'homePage'])

export default function(){
    router.get('/', showHome)
          .post('/submit', submitForm)
    
}