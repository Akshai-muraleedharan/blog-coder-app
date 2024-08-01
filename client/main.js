const postList = document.getElementById('output-ele');
const url ="http://localhost:4005/api/v1/post-all";

let outPut ='';


  
    function renderPost(data) {
        data.forEach(post =>{
            outPut += `
              <div class="card mb-3 cardBody" style="width: 100%;  ">
                  <div class="card-body ">
                  <p style="text-align:end;color:gray;font-size: 11px;">${post.coder}</p>
                   <a href="./singlePage.html" style="text-decoration:none; ">  <h5 class="card-title" style="color:#000">${post.title}</h5>
                     <p class="card-text" style=" font-size: 15px;color:#a1a0a0;"> ${ post.content.substring(0,28) + "..."} </p></a>
                     <h6 class="card-subtitle mb-2 text-muted " style="font-size: 12px;margin-top: 10px ">${post.date}</h6>
                   </div>
           </div>
            `
        })
        postList.innerHTML = outPut;
    }


fetch(url)
.then(res => res.json())
.then(data => renderPost(data))



// single page html setting below


const singlePageUrl ="http://localhost:4005/api/v1/post/66ab8898943e3a43990c7fc6"

fetch(singlePageUrl)
.then(res => console.log(res))

