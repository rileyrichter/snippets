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

// This adds all input values as local storage items
$('#submitButton').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
  
    });   
  });