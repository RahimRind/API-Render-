// function rishta(bankBalance) {
//     return new Promise((resolve, reject) => {
//      if(bankBalance > 10000){
//         resolve('mubarrak')
//      }else{
//         reject('ghar jao')
//      }
//     })
    
// }
// rishta(20000)
// .then(function(res){
//     console.log(res);
// })
// .catch(function(rej){
// console.log(rej);
// })



// let email = document.querySelector('#email')
// let password = document.querySelector('#password')
// let form = document.querySelector('.form')
// form.addEventListener('submit',(event)=> {
//     event.preventDefault(); 
//       let obj = {
    //     email:email.value,
//     password:password.value,
//   }
  
// console.log(obj)
//   email.value=''
//   password.value=''
// })








const arr=[]
let btn = document.querySelectorAll('button');
const div = document.querySelector('div')
axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data);
    data=res.data
    for (let i = 0; i <= res.data.length; i++) {
        // console.log(data[1]);
         div.innerHTML += `
          <div class="p-5 border border-1  rounded-1 shadow-lg m-2 ">
         <img
         class="pb-3" style="width:200px; height:300px;"
           src="${res.data[i].image}"
           class="card-img-top"
           alt="..."
         />
            <h3  class="font-bold text-lg text-wrap">
             Title:  ${res.data[i].title}
           </h3>
           <p class="font-bold text-lg text-wrap">
             ID:  ${res.data[i].id}
           </p>
           <h4 class="font-bold text-lg text-wrap">
           Price: ${res.data[i].price}
           </h4>
           </p>
           <h5 class="font-bold text-lg text-wrap">
           <strong>Description<strong/>:   ${res.data[i].description}
           </h5>
           <p>Category: ${res.data[i].category}
           <p/>
           <button  onclick="addTo('${res.data[i]}')" class="btn btn-primary m-2" >Add To Card</button>
           </div>
           `       
        }         
        return data
    })
    .catch((err)=>{
        console.log(err);
     })    
    function addTo(data){
        let products = {data};
        arr.push(products);
        console.log(arr);
}

        // btn.addEventListener('onclick', (res)=>{
        //     for (let j = 0; j < res.data.length; j++) {
        //         console.log(res.data);
        //         }
        //         // console.log(res.data[i]);
        //         arr.push(res.data[i])    
        // } )
    
















// const arr = [];

// async function axoisData() {
//     try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         const data = response.data;
//         renderData(data);
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             // console.log(data[i]);
//             document.querySelector('#para').innerHTML +=`${data[i].t}` 
//         }
//     } catch (error) {
//         console.log('Error fetching data:', error);
//     }
// }
// function renderData(data) {
//     const container = document.getElementById('data');
//     // container.innerHTML = '';
//     data.forEach((item) => {
//         const itemContainer = document.createElement('DIV');
//         itemContainer.innerHTML = `
//         <div class="pro-div">
//          <img
//            class=""
//            src="${res.data[i].image}"
//            class="card-img-top"
//            alt="..."
//          />
//             <h3 class="card-title">
//              Title:  ${res.data[i].title}
//            </h3>
//            <p class="card-text">
//              Id:  ${res.data[i].id}
//            </p>
//            <h4 class="card-price">
//            Price: ${res.data[i].price}
//            </h4>
//            </p>
//            <h5 class="card-title text-gray-800 my-2 text-xl font-bold">
//            <strong>Description<strong/>:   ${res.data[i].description}
//            </h5>
//            <p>Category: ${res.data[i].category}
//            <p/>
//            <button  onclick="addTo('${res.data[i]}')">Add To Card</button>
//            </div>  `;
//         container.appendChild(itemContainer);
//     });
// }
// function addTo(title) {
//     const Obj = {title};
//     arr.push(Obj);
//     console.log(arr);
// }
// axoisData();  











