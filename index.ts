import App from './app';
import dotenv from 'dotenv'

dotenv.config()
let Port:any= process.env.PORT||4000

new App(Port).listen();