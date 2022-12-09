   export function getLoggedUserEmail(){
     const LoggedEmail=localStorage.getItem('userEmail')?localStorage.getItem('userEmail'):'';
     const LoggedInput=document.querySelector('.LoggedEmail');
     LoggedInput.innerHTML=LoggedEmail;
   }
