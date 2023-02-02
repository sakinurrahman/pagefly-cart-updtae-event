
  
function cartShippingUpdate(){
let url = "https://azac-design.myshopify.com/cart?view=json2"
     fetch(url)
    .then(response => response.text())
    .then(function(data){
      var parser = new DOMParser();
	  var html = parser.parseFromString(data, 'text/html');
       let shippingRes = html.querySelector('#cart-info').innerHTML;
      document.querySelector('#cart-info').innerHTML = shippingRes;
      let totalitem = html.querySelector('.ajaxcart').dataset.value;
     
      console.log(totalitem)
       
      document.querySelector(".cart_detect").innerHTML = totalitem;
      document.querySelector(".site-header__cart-icon").click();
    })
    .catch(error => {
      console.error('Error:', error);
    });
   }


try {
  setTimeout(function () {
    window.__pagefly_helper_store__ &&
    window.__pagefly_helper_store__.subscribe(function (res) {
      console.log(res);
       

  setTimeout(() => {
cartShippingUpdate()
    }, 500);
      
    });
  }, 2500);
} catch (e) {
  console.warn(e);
}
