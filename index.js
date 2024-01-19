let count=1;
setInterval(function(){
    document.getElementById(`radio`+count).checked=true;
    count++;
    if(count>4){
        count=1;
    }
},5000);



// function hi(){
// let x=document.getElementById("btn-cart")
// x.innerHTML="<span>Add to cart</span>"
// }

// function hi1(){
//     let x=document.getElementById("btn-cart")
//     x.innerHTML="<span>+</span>"
//     }


let products=[
{    images:`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9ugskNTOPZPUX43OknxV8EkSZV5jFDS-ljOlWbJwM_GbHQdx1gVMhWS1OeCi1otXbHerW4HY48BbZ9Y_xTo4-1Ce0FOykcemQwbHly1hYcKYSFknXfCpcpSdSIfgYXYWUqzfPzA&usqp=CAc`,
    title:`Saffola Active Refined Oil`,
    price:1055
},
{
    images:`https://www.jiomart.com/images/product/original/491598799/mangaldeep-sandal-ziplock-puja-agarbatti-108-pcs-product-images-o491598799-p491598799-0-202209281344.jpg?im=Resize=(360,360)`,
    title: `Mangaldeep Sandal Puja Agarbatti`,
    price : 38 

},
{
    images:`https://www.jiomart.com/images/product/original/491439871/white-knight-cocktail-paper-napkins-30x30-cm-100-pcs-product-images-o491439871-p491439871-0-202203150152.jpg?im=Resize=(420,420)`,
    title: `White Knight Paper Napkins`,
    price: 32

},
{
    images: `https://www.jiomart.com/images/product/original/492796670/reconnect-be01802-wireless-earphone-with-ipx4-water-resistant-black-digital-o492796670-p593968378-0-202209230340.jpeg?im=Resize=(360,360)`,
    title:`Reconnect Dank Neckband with IPx4` ,
    price :349

},
{
    images: `https://m.media-amazon.com/images/I/51ykbSj-eoL._AC_UL480_FMwebp_QL65_.jpg`,
    title:`Titan Analog Black Dial Watch` ,
    price :1795
},
{
    images: `https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UL480_FMwebp_QL65_.jpg`,
    title:`realme narzo 60X 5G` ,
    price :12499
},
{
    images: `https://m.media-amazon.com/images/I/71TtNTCGTIL._AC_UL480_FMwebp_QL65_.jpg`,
    title:`adidas Men's Running Shoe` ,
    price :1299
},
{
    images: `https://m.media-amazon.com/images/I/51l1UHMKtzL._SY879_.jpg`,
    title:`BULLMER Trendy Sweatshirt` ,
    price :345
},
{
    images: `https://m.media-amazon.com/images/I/412lsIcMdxL._SX300_SY300_QL70_FMwebp_.jpg`,
    title:`Lenovo IdeaPad Slim 5 Intel Core i5` ,
    price :59665
},
{
    images: `https://m.media-amazon.com/images/I/51x-LWt3MYL._AC_UL480_FMwebp_QL65_.jpg`,
    title:`Davidoff Coolwater Man Intense` ,
    price :4720
}
]



// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//     var {image, title, price} = item;
//     return(
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}.00</h2>`+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>`
//     )
// }).join('')









    let r=document.getElementsByClassName("cards")
    let j=0;
    let t=``
    for(let i=0;i<products.length;i++){
        t=t+`<div class="card">
        <div class="img"><img src="${products[i].images}" alt="saffola oil "></div>
        <h4>${products[i].title}</h4>
        <span>&#8377 ${products[i].price}</span>
        <button type="button" id="btn-cart" onclick="mufun(`+(j++)+`)"><span>Add to cart</span></button>
        </div>
        ` 
    }
    r[0].innerHTML=t; 


var countnew=0;
let crt=document.getElementsByClassName("num")
function mufun(a){
    console.log(a)  
    if(cart.includes(products[a])==true){

    }
    else{
    cart.push(products[a])
    countnew++;}
    crt[0].innerHTML=`${cart.length}`
    displaycart()
    pricei();
}

const cart=[]
function displaycart(a){
    let un=document.getElementById("cart-items")
    let k=0;
    let hy=``
    if(cart.length==0){
        un.innerHTML="<p>YOUR CART IS EMPTY</p>"
    }
    else{
        for(let l=0;l<cart.length;l++){
            hy=hy+`<div class="item">
            <div class="img1"><img src="${cart[l].images}" alt="saffola oil "></div> 
            <div class="rcon">
                <h4>${cart[l].title}</h4>
                <div class="niche">
                    <span>&#8377 ${cart[l].price}</span>
                    <button type="button" id="btn-cart1" onclick="delcrt(`+(k++)+`)" ><span>REMOVE </span></button>
                </div>    
            </div>
        </div>
            ` 
        }
        un.innerHTML=hy;
    }
    if(cart.length>7){
        un.style.overflowY="scroll"
    }
    else{
        un.style.overflowY="hidden"
    }
}
displaycart()

let yj=document.getElementById("pricing5")

function pricei(){
    let q=0;
    for(let d=0;d<cart.length;d++){
        q+=cart[d].price;
    }
    yj.innerHTML=`${q}.00`
}


function delcrt(a){
    cart.splice(a,1);
    displaycart();
    crt[0].innerHTML=`${cart.length}`
    pricei();
}



// let yi=document.getElementById(`crting`)
// yi.addEventListener("click",displaycart())
// if(){
//     displaycart()
// }
// else{
//     display1(); 
// }


let b=document.getElementById("log")
let fu=document.getElementById("pass")

function show(){
    let x=document.getElementsByClassName("sign-in-box")
    let r=document.getElementsByClassName("sign")
    var click1=1 ;
    x[0].onclick=function(){
        click1++;
        if(click1%2==0){
            r[0].style.opacity=1
        }
        else{
            r[0].style.opacity=0
        }
        console.log(click1)
        
    }
}

function login(){
    if(b.value!="817815495" || fu.value!="aditya"){
        let yup=document.getElementById("sign").getElementsByTagName("span")
        yup[0].innerHTML=`INCORRECT LOGIN ID AND PASSWORD`
        setInterval(function(){
            yup[0].innerHTML=``
        },2000)
    }
    
    b.value=""
    fu.value=""

}



