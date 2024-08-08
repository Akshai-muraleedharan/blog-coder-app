const uri = "http://localhost:4005/api/v1/user/profile"
const headerBtn =document.getElementById('header-btn')
const postBtn = document.getElementById('post-btn')
const accountBtn =document.getElementById('account_btn')
const userName =document.getElementById('user-name')



//  fetch(uri,
//     {
//         method: 'GET',
//         credentials: 'include',
//     }
//  )
//  .then(res => res.json())
//  .then(data => {
//     headerbtn.children[0].innerHTML =data
//     console.log(data)
    
//  })

async function userDate(){
  const response = await fetch(uri,{
             method: 'GET',
           credentials: 'include',
  })

  const userData =await response.json()
 
    console.log()
    
 if(userData){
   headerBtn.children[0].innerHTML = "Account";
  postBtn.style.display ="block"
  postBtn.classList.add('add_post_responsive')
  accountBtn.classList.add('add_post_responsive')
  headerBtn.setAttribute("href",'./user.html')

  localStorage.setItem('username',userData.username)
  localStorage.getItem('username')
 }


  
 
  
} 

userDate() 