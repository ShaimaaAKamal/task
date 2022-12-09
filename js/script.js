import { handleRegister } from "./Modules/RegisterModule.js";
import { getLoggedUserEmail } from "./Modules/successModule.js";
const page=localStorage.getItem('page');

switch(page){
    case 'register': handleRegister();break;
    case 'success' : getLoggedUserEmail() ; break;
}