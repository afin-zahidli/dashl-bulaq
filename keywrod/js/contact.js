function openNav() {
    document.getElementById("mySidenav").style.right = "0%";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("dropdown-link").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.right = "-100%";
    document.getElementById("closebtn").style.display = "none";
  }
  

  function dropdown() {
    document.getElementById("ul-dropdown").style.display = "block";
  }

  function  modalopen() {
    document.getElementById("myModal").style.display = "block"
    document.getElementById("myModal").style.zIndex = "999"
  }


  
