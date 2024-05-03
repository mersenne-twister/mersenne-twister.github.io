let colors = ["red", "orange", "tan", "rebeccapurple", "silver", "maroon", "purple", "#DEADBEEF", "#F00BA4"]

let ul = document.createElement("ul");
for (let i = 0; i < colors.length; ++i) {
  let li = document.createElement("li");
  li.innerText = colors[i];
  li.style.color = colors[i];
  ul.appendChild(li);
}

let div = document.getElementById("dynamic");
div.appendChild(ul);
