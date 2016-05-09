function classChange () {
  var page = document.getElementById('allPage');
  var className = page.getAttribute("class");
  if(className === "newTask-Up"){
    page.className = "newTask-Down";
  } else {
    page.className = "newTask-Up";
  }
}
