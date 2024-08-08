//    variables
   const postList = document.getElementById('output-ele');
   
     const url ="https://blog-coder-app-2.onrender.com/api/v1/post-all";

    // for dev
    //  const url ="http://localhost:4005/api/v1/post-all";
    let outPut ='';
    const loader =document.querySelector('.loader')

// date formatting function
         function dateReversed(date){
              const [year, month, day] = date.split("-");
              return `${day}-${month}-${year}`;
          }

        //   page loading function
        function displayLoader() {
            loader.classList.add('display')
        }
        //   page loading function
        function displayHiding() {
            loader.classList.remove('display')
        }

        //  fetch data output function
        function renderPost(data) {
            data.forEach(post =>{
                outPut += `
                    <div class="card mb-3 cardBody" style="width: 100%;  ">
                        <div class="card-body ">
                            <p style="text-align:end;color:gray;font-size: 11px;">${post.coder}</p>
                            <a href="./singlePage.html?id=${post._id}" style="text-decoration:none; ">  <h5 class="card-title" style="color:#000">${post.title}</h5>
                            <p class="card-text" style=" font-size: 15px;color:#a1a0a0;"> ${ post.content.substring(0,28) + "..."} </p></a>
                            <h6 class="card-subtitle mb-2 text-muted " style="font-size: 12px;margin-top: 10px ">${dateReversed(post.date.slice(0,10))}</h6>
                        </div>
                    </div>
                         `
                     })
            displayHiding()
            postList.innerHTML = outPut;
        }
    
        // data fetching function
        async function fetchDatas(){
                displayLoader()
            await fetch(url, {
                method: 'GET',
                credentials: 'include',
            })
                .then(res => res.json())
                .then(data => renderPost(data))
            }

        fetchDatas()

            
           