
// single page html setting below

    const outPostEle = document.getElementById('outPost-ele')

    let outPut = ""

    const loader =document.querySelector('.loader')
          
      function displayLoader() {
          loader.classList.add('display')
      }

      function displayHiding() {
           loader.classList.remove('display')
      }

      function singleDataOutPut(data){
              outPut += `
                    <div class="card" style="width: 100%;">
                              <div class="card-body p-4" >
                                  <h5 class="card-title text-center mb-4">${data.title}</h5>
                              <p class="card-text"> ${data.content} </p>  
                              </div>
                    </div>
                    `
                displayHiding() 
              outPostEle.innerHTML =outPut
        
      }

      async function singleData()  {
          displayLoader() 
                const productUrl = new URLSearchParams(window.location.search)
                  
                    const productId =productUrl.get('id')
                    
                     const response =await fetch(`https://blog-coder-app.onrender.com/api/v1/post/${productId}`)
                  
                
                const product =await response.json()

            singleDataOutPut(product)
      }

singleData()