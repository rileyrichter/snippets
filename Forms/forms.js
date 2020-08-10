// Refresh the page on form submit
$(document).on("submit", "form", function () {
  // Refresh page after 2000 milliseconds
  setTimeout(function () {
    location.reload(true);
  }, 2000);
});

// Clear local storage on submit
$(document).on("submit", "form", function () {
  localStorage.clear();
});

// Pass form input values through to the success state of the form
$("#submitButtonId").click(function () {
  let firstName = $("#firstNameField").val();
  let lastName = $("#lastNameField").val();
  $("#firstNameResult").html(firstName);
  $("#lastNameResult").html(lastName);
});

// Mask a phone number
$(document).ready(function () {
  $("#phone").mask("999-999-9999", {
    placeholder: "XXX-XXX-XXXX",
  });
});

// This adds all input values that are text as local storage items
$("#submitButton").on("click", function () {
  $('input[type="text"]').each(function () {
    let id = $(this).attr("id");
    let value = $(this).val();
    localStorage.setItem(id, value);
  });
});

// This adds all input values as local storage items
$("#submitButton").on("click", function () {
  $("input").each(function () {
    let id = $(this).attr("id");
    let value = $(this).val();
    localStorage.setItem(id, value);
  });
});

// When a person upvotes a product, use a unique ID and set it to true in local storage
function myVote(shortcode) {
  $(document).on("submit", "form", function () {
    // Set product in local storage
    localStorage.setItem(shortcode, "true");
    // Refresh page after 3000 milliseconds
    setTimeout(function () {
      location.reload(true);
    }, 3000);
  });
}

// If an item has been set in local storage, then hide an element from the user
for (let i = 0; i < localStorage.length; i++) {
  if (document.getElementById(localStorage.key(i)) === null) {
    console.log("not on this page");
  } else {
    document.getElementById(localStorage.key(i)).style.display = "none";
  }
}

// Show the number of characters remaining
// When the document is ready to execute code
$(document).ready(function () {
  // Set the max number of characters
  var text_max = 140;
  // Write the max number of characters to the element witn an id of #title_feedback
  $("#title_feedback").html(text_max);
  // When someone types into the input with an id of #title
  $("#title").keyup(function () {
    // Set a variable of text_length to the length of the input with an id of #title
    var text_length = $("#title").val().length;
    // Set a variable that is the max length of text - the current length
    var text_remaining = text_max - text_length;
    // Write the number of characters remaining to the #title_feedback element
    $("#title_feedback").html(text_remaining);
    // Set a backgroundColor variable
    let backgroundColor = "#38d996";
    // if the text is less than or equal to 5 characters set a warning color
    if (text_remaining <= 5) {
      backgroundColor = "#ff6382";
    }
    // else if the count is equal to 40 reminaing or lower set a caution color
    else if (text_remaining <= 40) {
      backgroundColor = "#ffab9d";
    }
    // Set the background color of the element with an id of charbox based on the rules above
    document.getElementById("charbox").style.backgroundColor = backgroundColor;
  });
});

// Show the number of characters in an input
// #idea is the id of the input where you want to count characters
$("#idea").keyup(function () {
  // Get the # of characters that are in the input
  var charCount = $("#idea").val().length;
  // Write the # of characters in the input to the element with an id of #charcount
  $("#charcount").html(charCount);
});

// Show the number of words in an input
// Set the input with the id of #idea as a variable
let countTarget = document.querySelector("#idea");
// Set the element with an id of #word-cout as wordCount
let wordCount = document.querySelector("#word-count");
// Set count as a function
let count = function () {
  // Set characters at the value of the #idea input
  let characters = countTarget.value;
  // Set characterLength as the lenght of characters
  let characterLength = characters.length;
  // Use regex to get the number of words
  let words = characters.split(/[\n\r\s]+/g).filter(function (word) {
    return word.length > 0;
  });
  // Write the number of words to the element with an id of #word-count
  wordCount.innerHTML = words.length;
};
// Call count function above
count();
// Add an event lister to the page
window.addEventListener(
  // Look for inputs, but only run on input with an id of #idea
  "input",
  function (event) {
    if (event.target.matches("#idea")) {
      count();
    }
  },
  false
);

// Redirect the user based on the radio selection
$("#submitButton").on("click", function () {
  let value = $("input[name=myRadio]:checked").val();
  if (value == "visual-dev") {
    window.location.assign("https://www.visualdev.fm");
  } else if (value == "google") {
    window.location.assign("https://www.google.com");
  }
});
