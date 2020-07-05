// Get the total of an order on the checkout page
setTimeout(function(){
   let myTotal = document.querySelector('.w-commerce-commercecheckoutsummarytotal').textContent;
   console.log(myTotal);
   localStorage.setItem("Total", myTotal);
}, 1000);
