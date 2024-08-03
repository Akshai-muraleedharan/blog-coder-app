const emailEle =document.getElementById('email-ele');
const passwordEle =document.getElementById('password-ele');
const btn =document.getElementById('btn-ele')


async function loginFetch(e) {
  e.preventDefault()
 
  const email =emailEle.value
  const password =passwordEle.value


  const emailError =document.getElementById('email-error')
  const passwordError =document.getElementById('pass-error')

 
  emailError.textContent =''
  passwordError.textContent =''
  
  try {
    const res = await fetch(`http://blog-coder-app.onrender.com/api/v1/user/login`,{
        method:"POST",
        headers:{
             'content-Type' : 'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    })
    const data =await res.json()
 console.log(data);
 
    if(data.errors){
        emailError.textContent =data.errors.email
        passwordError.textContent=data.errors.password
    }
    if(data.user){
        location.assign('./user.html')
    }
    
  } catch (error) {
    
  }
}



btn.addEventListener('click',loginFetch)