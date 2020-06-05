import router from 'core/router';
import usersHandler from 'modules/users/controllers/users-controller';

// router.get('/', [HomeController, 'homePage'])

export default function(){
    
    router.recourse('/users', usersHandler)
}