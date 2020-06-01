import  Application from './core/application';
import env from './core/env';

let app = new Application();

app.run(env('port'));



