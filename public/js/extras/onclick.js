function classChange () {
  var page = document.getElementById('allPage');
  var className = page.getAttribute("class");
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(className === "newTask-Up"){
    page.className = "newTask-Down";
  } else {
    page.className = "newTask-Up";
  }
}
