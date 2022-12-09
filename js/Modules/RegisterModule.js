import { Validation } from "./VaildationModule.js";
const validate=new Validation();

export function handleRegister(){
    const notcreated=document.querySelector('.notcreated');
const handleChange=(e)=>{
    if(!notcreated.classList.contains('d-none'))notcreated.classList.add('d-none')
  if(e.target.value === '' && !e.target.nextElementSibling.classList.contains('d-none'))  
    {e.target.nextElementSibling.classList.add('d-none');
     }
  else if(!chooseValidate(e.target.name,e.target.value)) 
    {e.target.nextElementSibling.classList.remove('d-none');
    }   
  else 
      {e.target.nextElementSibling.classList.add('d-none');
      }
    formValidate();
}
const handleSubmit=async(e)=>{
    const username=formInputs[0].value;
    const email=formInputs[1].value;
    const password=formInputs[2].value;
    const password_confirmation=formInputs[3].value;
    localStorage.setItem('userEmail',email);
    const response = await fetch('https://goldblv.com/api/hiring/tasks/register', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,email,password,password_confirmation})
    });
    if(response.status === 201)
    {location.replace('success.html');
      localStorage.setItem('user',true);
     }
    else
    {notcreated.classList.remove('d-none'); 
    localStorage.setItem('user',true);
    }   
}


const formInputs=document.querySelectorAll('.form-control');
const formButton=document.querySelector('.formButton');
formButton.addEventListener('click',handleSubmit);
formInputs.forEach(input => {input.addEventListener('keyup',handleChange);});

const chooseValidate=(key,value)=>{
  switch(key){
    case 'username': return validate.validateName(value);
    case 'email': return validate.validateMail(value);
    case 'password': return validate.validatePassword(value);
    case 'confirmPassword': return (validate.validatePassword(value) & confirmPassword())
  }
}

const confirmPassword=()=>{
    const password=formInputs[2].value;
    const confirmPassword=formInputs[3].value;
    return (password === confirmPassword)
}

const formValidate=()=>{
    const username=formInputs[0].value;
    const email=formInputs[1].value;
    const password=formInputs[2].value;
    const password_confirmation=formInputs[3].value;
        (validate.validateMail(email) && validate.validateName(username) && validate.validatePassword(password) &&  validate.validatePassword( password_confirmation) && confirmPassword())
        ? formButton.classList.remove('disabled')
        :
        formButton.classList.add('disabled');
}
    
}



