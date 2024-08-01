
// single page html setting below

const outPostEle = document.getElementById('outPost-ele')



let outPut = ""

function singleDataOutPut(data){
    outPut += `
    
     <div class="card" style="width: 100%;">
              <div class="card-body p-4" >
                <h5 class="card-title text-center">${data.title}</h5>
                
                <p class="card-text"> ${data.content} </p>
               
              </div>
            </div>
    `
    outPostEle.innerHTML =outPut
}



async function singleData()  {
    const productUrl = new URLSearchParams(window.location.search)
  
    const productId =productUrl.get('id')
  
    const response =await fetch(`http://localhost:4005/api/v1/post/${productId}`)
    
    const product =await response.json()

    singleDataOutPut(product)
}

singleData()