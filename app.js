(() => {
  "use strict";
})();

function allStorage() {
  var archive = {}, // Notice change here
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    archive[keys[i]] = localStorage.getItem(keys[i]);
  }

  return archive;
}

showItems = () => {
  const ol = document.querySelector("ol");
  const data = allStorage();

  for (let item in data) {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(data[item]));
    li.setAttribute("data-key", data[item]);
    ol.appendChild(li);

    li.onclick = removeItem;
  }
};

// Add item to list
addItem = () => {
  const item = document.querySelector("input").value;
  const ol = document.querySelector("ol");
  const li = document.createElement("li");

  // Exit if value is empty
  if (item === "") {
    return;
  }

  localStorage.setItem(item, item);

  li.appendChild(document.createTextNode(item));
  li.setAttribute("data-key", item);
  ol.appendChild(li);

  document.querySelector("input").value = "";
  li.onclick = removeItem;
};

// Remove from list
removeItem = e => {
  e.target.parentElement.removeChild(e.target);
  localStorage.removeItem(e.target.getAttribute("data-key"));
};

showItems();

// Create key event
document.body.onkeyup = e => {
  if (e.keyCode == 13) {
    addItem();
  }
};
