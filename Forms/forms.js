// Refresh the page on form submit
$(document).on('submit', 'form', function() {
  // Refresh page after 2000 milliseconds
  setTimeout(function() { location.reload(true); }, 2000);
});

  // Pass form input values through to the success state of the form
$('#submitButtonId').click(function() {
    let firstName = $('#firstNameField').val();
    let lastName = $('#lastNameField').val();
    $('#firstNameResult').html(firstName);
    $('#lastNameResult').html(lastName);
});

// Mask a phone number
$(document).ready(function() {
    $("#phone").mask("999-999-9999", {
        placeholder: "XXX-XXX-XXXX"
    });
});

// This adds all input values that are text as local storage items
$('#submitButton').on('click', function(){
    $('input[type="text"]').each(function(){    
        let id = $(this).attr('id');
        let value = $(this).val();
       localStorage.setItem(id, value);
  
    });   
  });

  // This adds all input values as local storage items
$('#submitButton').on('click', function(){
  $('input').each(function(){    
      let id = $(this).attr('id');
      let value = $(this).val();
     localStorage.setItem(id, value);

  });   
});

// When a person upvotes a product, use a unique ID and set it to true in local storage 
function myVote(shortcode) {
  $(document).on('submit', 'form', function() {
  // Set product in local storage 
	localStorage.setItem(shortcode, "true");
   // Refresh page after 3000 milliseconds
   setTimeout(function() { location.reload(true); }, 3000);
  });
};

// If an item has been set in local storage, then hide an element from the user
for(let i=0; i<localStorage.length; i++) {
	if (document.getElementById(localStorage.key(i)) === null) {
  console.log("not on this page");}
	else {document.getElementById(localStorage.key(i)).style.display = "none";}
}