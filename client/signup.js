const userNameEle =document.getElementById('username-ele');
const emailEle =document.getElementById('email-ele');
const passwordEle =document.getElementById('password-ele');
const btn =document.getElementById('btn-ele')
const url ="http://localhost:4005/api/v1/user/signup"



async function signupPost(e){

    e.preventDefault()

    const userError =document.getElementById('username-err')
    const emailError =document.getElementById('email-error')
    const passwordError =document.getElementById('pass-error')

    userError.textContent =''
    emailError.textContent =''
    passwordError.textContent =''
    
  const userName = userNameEle.value;
  const email =emailEle.value;
  const password= passwordEle.value;
    
 console.log(userError);
 
    
    try {
    const res =await fetch(url,{

           credentials: 'include',
        method:'POST',
        headers:{
            'content-Type' : 'application/json'
        },
        body:JSON.stringify({
            username:userName,
            email:email,
            password:password
        })
     })
     const data =await res.json()
     console.log(data);
     
     
    if(data.errors){
        userError.textContent = data.errors.username
        emailError.textContent = data.errors.email
        passwordError.textContent = data.errors.password
    }
    if(data.user){
        // location.assign('./index.html')
    }

    } catch (error) {
        
    }
    
} 



btn.addEventListener('click',signupPost)