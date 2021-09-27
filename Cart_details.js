let items=[]

function addItem(img,name,price,quantity=1)
{
    for( let i=0;i<items.length;i++)
     {
         if(items[i].name==name)
         {
             window.alert("Item Already added in the Cart");
             return;
         }
     }
     items.push(
         {
             img:"images/"+img,
             name: name,
             price: price,
             quantity: quantity
         }
     )
     window.alert("Item added Successfully");
}

function deleteItem(name)
{
    for( let i=0;i<items.length;i++)
     {
         if(items[i].name==name)
         {
             items.splice(i,1);
         }
     }
     
     console.log(items.length)
     showCart();
}

function showCart(){
    
    // console.log(items.length)
      let me=`<section class="topmost"  style="position:static;">
      <header>
          <div class="e-shop">
            <a href="index.html"><h1 style="color:dodgerblue;" >E-SHOP</h1></a> 
          </div>
         <div>
             <nav>
                 <ul>
                    <li><a href="index.html">MEN</a></li>
                    <li><a href="index.html">WOMEN</a></li>
                  <li><a href="#">CONTACT</a></li>
                 </ul>
             </nav>
          </div>
          <div class="nav2">
          <div class="search-container">
             <form action="">
                 <input type="text" class="search-bar" placeholder="Search for product, brand and  more....." name="search">
             </form>
         </div>
             <div class="search-button">
                  <button type="submit"><i class="fa fa-search"></i></button>
             </div> 
         </div>
         <div class="nav3">
             <div class="icons">
                 <i class="fa fa-shopping-cart" onclick="showCart()"></i>
                 
                 </div>
                 <div >
                 <i class="fa fa-heart"></i>
             </div>
         </div>   
      </header>
     </section>`
     me+='<div class="noitem"> No Items To Display</div>'
    if(items.length==0)
    {
        document.getElementById("Cart").innerHTML=me;
        return;
    }
    
    let cart=` <section class="topmost">
    <header>
        <div class="e-shop">
          <a href="index.html"><h1 style="color:dodgerblue;" >E-SHOP</h1></a> 
        </div>
       <div>
           <nav>
               <ul>
                  <li><a href="index.html">MEN</a></li>
                  <li><a href="index.html">WOMEN</a></li>
                <li><a href="#">CONTACT</a></li>
               </ul>
           </nav>
        </div>
        <div class="nav2">
        <div class="search-container">
           <form action="">
               <input type="text" class="search-bar" placeholder="Search for product, brand and  more....." name="search">
           </form>
       </div>
           <div class="search-button">
                <button type="submit"><i class="fa fa-search"></i></button>
           </div> 
       </div>
       <div class="nav3">
           <div class="icons">
               <i class="fa fa-shopping-cart" onclick="showCart()"></i>
               
               </div>
               <div >
               <i class="fa fa-heart"></i>
           </div>
       </div>   
    </header>
   </section>

    <table>
    <tr>  
<td style="font-size: 35px;background-color:black;color:white;">ITEM</td>
<td style="font-size: 35px;background-color:black;color:white;">ITEM NAME</td>
<td style="font-size: 35px;background-color:black;color:white;">QUANTITY</td>
<td style="font-size: 35px;background-color:black;color:white;">PRICE</td>
</tr>`
let sum=0
for( let i=0;i<items.length;i++)
{
    cart +=`
    <tr>
        <td><img src=${items[i].img} class="img" ></img></td>
        <td>${items[i].name}</td>
        <td><i class="fa fa-plus-square" aria-hidden="true" onclick="increaseItem('${items[i].name}')"></i>  ${items[i].quantity}  <i class="fa fa-minus-square" aria-hidden="true" onclick="decreaseItem('${items[i].name}')"></i></td>
        <td>${items[i].price*items[i].quantity}</td>
    </tr>  
  `
    sum+=(items[i].quantity*items[i].price);
}
cart+=`<tr><td colspan="3" style="color:black;"><b>Total Amount</td><td >${sum}</td></b></tr>`
cart+="</table>"
document.getElementById("Cart").innerHTML=cart
}
function increaseItem(nam)
{
    for( let i=0;i<items.length;i++)
     {
        if(items[i].name===nam)
        {
            if(items[i].quantity>=4)
            {
                window.alert("Cannot Add More Items");
                break;
            }
            items[i].quantity++;
        }
     }
     showCart();
}
function decreaseItem(nam)
{
    for( let i=0;i<items.length;i++)
     {
        if(items[i].name===nam)
        {
            if(items[i].quantity==1)
            {
                deleteItem(nam);
                return;
            }
            else
            {
            items[i].quantity--;
            }
        }
     }
     showCart();
    
}
//Added new functions for side panel (filter) in pixels!!!

function openNav() {
    document.getElementById("mySidenav").style.width = "24%";
    document.getElementById("mySidenav").style.minWidth = "250px";
    document.getElementById("main").style.marginLeft = "24%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.minWidth = "0px";
    document.getElementById("main").style.marginLeft= "0";
  }

//My works end here!!
