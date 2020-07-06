// Home page or where the items are listed from https://webflow.com/website/Like-save-favorite-bookmark-etc

MemberStack.onReady.then(async function(member) {

  if (!member.loggedIn) {
    document.querySelectorAll("[data-item]").forEach(function(element) {
      var likeButton = element.querySelector("[likeButton]")
      likeButton.classList.remove("saved")
    })
    document.querySelector(".like-loader").style.display = "none" 
    return
  }
  //get member metadata
  var metadata = await member.getMetaData()

  var favorites = metadata.favorites

  if (!favorites) favorites = [];

  document.querySelectorAll("[data-item]").forEach(function(element) {
    var link = element.querySelector("[data-link]")
    var url = (new URL(link.href)).pathname
    var likeButton = element.querySelector("[likeButton]")
    if (!favorites.includes(url)) likeButton.classList.remove("saved")

    likeButton.addEventListener("click", function(event){
      event.preventDefault()
      if (!favorites.includes(url)) {
        favorites.push(url)
        likeButton.classList.add("saved")
      } else {
        var index = favorites.indexOf(url);
        if (index > -1) {
          favorites.splice(index, 1);
        }
        likeButton.classList.remove("saved")
      }
      member.updateMetaData({favorites: favorites})
    }) 
  })
  document.querySelector(".like-loader").style.display = "none"
 })

 // For the favorites page

 document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll("[data-image]").forEach(function(image) {
      image.dataset.imgsrc = image.src
      image.src = ""
    })
  })
  
  MemberStack.onReady.then(async function(member) {
    if (!member.loggedIn) {
      document.querySelectorAll("[data-item]").forEach(function(element) {
        var likeButton = element.querySelector("[likeButton]")
        likeButton.classList.remove("saved")
      })
      return
    }
  
    //get member metadata
    var metadata = await member.getMetaData()
  
    var favorites = metadata.favorites
  
    if (!favorites) favorites = [];
  
    document.querySelectorAll("[data-item]").forEach(function(element) {
      var link = element.querySelector("[data-link]")
      var url = (new URL(link.href)).pathname
      var likeButton = element.querySelector("[likeButton]")
      if (!favorites.includes(url)) {
        element.remove()
        document.querySelector(".like-loader").style.display = "none" 
        return
      } else {
        var image = element.querySelector("[data-image]")
        image.src = image.dataset.imgsrc
      }
  
      likeButton.addEventListener("click", function(event){
        event.preventDefault()
        if (!favorites.includes(url)) {
          favorites.push(url)
          likeButton.classList.add("saved")
        } else {
          var index = favorites.indexOf(url);
          if (index > -1) {
            favorites.splice(index, 1);
          }
          likeButton.classList.remove("saved")
        }
        member.updateMetaData({favorites: favorites})
      })
      document.querySelector(".like-loader").style.display = "none"
    })
  
   })

   // For the template collection page

   MemberStack.onReady.then(async function(member) {

    if (!member.loggedIn) {
      var likeButton = document.querySelector("[likeButton]")
      likeButton.classList.remove("saved")
      return
    }
  
    //get member metadata
    var metadata = await member.getMetaData()
  
    var books = metadata.books
  
    if (!books) books = [];
  
    var url = window.location.pathname
    var likeButton = document.querySelector("[likeButton]")
    if (!books.includes(url)) likeButton.classList.remove("saved")
  
    likeButton.addEventListener("click", function(event){
      event.preventDefault()
      if (!books.includes(url)) {
        books.push(url)
        likeButton.classList.add("saved")
      } else {
        var index = books.indexOf(url);
        if (index > -1) {
          books.splice(index, 1);
        }
        likeButton.classList.remove("saved")
      }
      member.updateMetaData({books: books})
    })
    
  
   })