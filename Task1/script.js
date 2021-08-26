const makeChanges = () => {  
  let sideBar = document.getElementsByClassName("side-bar")[0];
  let companyName = document.getElementById("company-name");
  let navBtn = document.getElementById("navbtn");
//   alert(companyName);
  
  if (sideBar.style.width === "250px") {
    sideBar.style.width = "70px";
    companyName.innerHTML="<h4>W<b>C</b></h4>";
    navBtn.style.left="100px";


  } else {
    sideBar.style.width = "250px";
    companyName.innerHTML="<h4>Wan<b>Clouds</b></h4>";
    navBtn.style.left="230px";
  }

}