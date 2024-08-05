let userGroup = document.getElementById("userGroup");
let addPeople = document.getElementById("addPeople");
let crossAside = document.getElementById("crossAside");
let crossAddPeople = document.getElementById("crossAddPeople");

userGroup.addEventListener("click", hideAside);

function hideAside() {
  let aside = document.getElementById("aside");
  aside.style.display = aside.style.display != "none" ? "none" : "block";
}

crossAside.addEventListener("click", hideAside);

addPeople.addEventListener("click", hideAddPeopleDiv);

function hideAddPeopleDiv() {
  let addPeopleDiv = document.getElementById("addPeopleDiv");
  addPeopleDiv.style.display =
    addPeopleDiv.style.display === "none" ? "block" : "none";
}

crossAddPeople.addEventListener("click", hideAddPeopleDiv);
