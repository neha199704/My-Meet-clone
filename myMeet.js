let userGroup = document.getElementById("userGroup");
let addPeople = document.getElementById("addPeople");
let crossAside = document.getElementById("crossAside");
let crossAddPeople = document.getElementById("crossAddPeople");
let info = document.getElementById("info");

userGroup.addEventListener("click", hideAside);

function hideAside() {
  let aside = document.getElementById("aside");
  console.log(aside.style.right);
  aside.style.right = aside.style.right != "0px" ? "0px" : "-400px";
  let imgParentDiv = document.getElementById("imgParentDiv");
  imgParentDiv.style.width =
    imgParentDiv.style.width === "calc(100% - 380px)"
      ? "100%"
      : "calc(100% - 380px)";
}

crossAside.addEventListener("click", hideAside);

addPeople.addEventListener("click", hideAddPeopleDiv);

function hideAddPeopleDiv() {
  let addPeopleDiv = document.getElementById("addPeopleDiv");
  addPeopleDiv.style.display =
    addPeopleDiv.style.display === "none" ? "block" : "none";
}

crossAddPeople.addEventListener("click", hideAddPeopleDiv);

info.addEventListener("click", () => {
  let aside2 = document.getElementById("aside2");

  console.log(aside2.style.right);
  aside2.style.right = aside2.style.right != "0px" ? "0px" : "-400px";
  let imgParentDiv = document.getElementById("imgParentDiv");
  imgParentDiv.style.width =
    imgParentDiv.style.width === "calc(100% - 380px)"
      ? "100%"
      : "calc(100% - 380px)";
});
