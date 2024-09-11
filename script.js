function toggleHam(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById('myMenu');
    if(myMenu.className === 'menu'){
        myMenu.className += ' menu-active'
    } else {
        myMenu.className = 'menu';
    }
}

// Get the modal
var modal = document.getElementById('id01');//login
var modal = document.getElementById('id02');//sign up

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Menu bar
function openNav() {
    document.getElementById("mySidenav").style.width = "auto";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }