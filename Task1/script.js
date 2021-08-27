const minimiseSidebar = () => {  
  let sideBar = document.getElementsByClassName("sideBar")[0];
  let companyName = document.getElementById("company-name");
  let navBtn = document.getElementById("navbtn");
  
  console.log(sideBar.style.width);
  console.log(sideBar.style);
  if (sideBar.style.width === "250px") {
    sideBar.style.width = "70px";
    companyName.innerHTML="<h5>W<b>C</b></h5>";
    companyName.style.marginTop="7px";
    navBtn.style.left="100px";
  } else {
    sideBar.style.width = "250px";
    companyName.innerHTML="<h5>Wan<b>Clouds</b></h5>";
    companyName.style.marginTop="7px";
    navBtn.style.left="230px";
  }
}