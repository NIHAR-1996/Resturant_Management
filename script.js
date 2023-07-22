let selectedItems = [];
async function getmenu(){
    let api="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

    try{
        let response=await fetch(api);
        let result=await response.json();
        console.log(result);
        loadmenu(result);
    }catch(error){
        console.log(error);
    }
}
getmenu();

function loadmenu(data){
    const menu=document.getElementsByClassName("menu")[0];
    
    for(let i=0;i<3;i++){
        let item=data[i];
    

    let elements=`<div class="menu-part">
    <div class="menuimg">
        <img src="${item.imgSrc}" class="img1" alt="api image">
    </div>
    <div class="menu-bottom">
       <div class="menu-text">
         <p>${item.name}</p>
         <p>${item.price}$</p>
       </div>
       <div class="add-cart">
        <button class="btn1"><img src="./Assets/Group 3.svg" alt="cart"></button>
    </div>
    </div>
    
</div>`
menu.innerHTML+=elements;
}
}

getmenu();