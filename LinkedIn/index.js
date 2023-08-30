const profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

const sideActivity = document.getElementById("sidebarActivity");
const moreLink = document.getElementById("showMoreLinks");

function toggleActivity(){
  sideActivity.classList.toggle("open-activity");

  if(sideActivity.classList.contains("open-activity")){
    moreLink.innerHTML = "Show Less <b>-</b>"
  }else{
    moreLink.innerHTML = "Show More <b>+</b>"
  }
}