(() => {
  "use strict";
})();

// Add item to list
addItem = () => {
  const item = document.querySelector("input").value;
  const ol = document.querySelector("ol");
  const li = document.createElement("li");

  // Exit if value is empty
  if (item === "") {
    return;
  }

  li.appendChild(document.createTextNode(item));
  ol.appendChild(li);

  document.querySelector("input").value = "";
  li.onclick = removeItem;
};

// Remove from list
removeItem = e => {
  e.target.parentElement.removeChild(e.target);
};

// Create key event
document.body.onkeyup = e => {
  if (e.keyCode == 13) {
    addItem();
  }
};
