const userNameEle =document.getElementById('username-ele');
const emailEle =document.getElementById('email-ele');
const passwordEle =document.getElementById('password-ele');
const btn =document.getElementById('btn-ele')




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
 
//  http://blog-coder-app.onrender.com

    const userData ={
            username:userName,
            email:email,
            password:password
    }
    
    try {
    const res =await fetch(`https://blog-coder-app.onrender.com/api/v1/user/signup`,{
       
        method:'POST',
        mode: 'cors',
        cache: 'no-cache',
           credentials: 'include',
           json: true,
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(userData)
     })
     const data =await res.json()
     console.log(data);
     
     
    if(data.errors){
        userError.textContent = data.errors.username
        emailError.textContent = data.errors.email
        passwordError.textContent = data.errors.password
    }
    if(data.user){
         location.assign('./login.html')
         
    }

    } catch (error) {
        
    }
    
} 



btn.addEventListener('click',signupPost)