let hash = [
  ["~","1","2","3","4","5","6","7","8","9","0","-","+","delete"],
  ["tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","{","}","|"],
  ["caps","a", "s", "d", "f", "g", "h", "j", "k", "l",":","\"","enter"],
  ["shift","z", "x", "c", "v", "b", "n", "m","<",">","?","shift"]
];
let webs = {};

let websInLocalStorage = JSON.parse(localStorage.getItem("webs") || "null");
if (websInLocalStorage) {
  webs = websInLocalStorage;
}

let index1 = 0;
while (index1 < hash.length) {
  let div1 = document.createElement("div");
  div1.className = 'row'
  let row = hash[index1];
  let index2 = 0;
  while (index2 < row.length) {
    let kbd = document.createElement("kbd");
    kbd.className = 'kbd'
    kbd.id = row[index2]
    kbd.textContent = row[index2];
    let button1 = document.createElement("button");
    button1.textContent = "编辑";
    button1.className = row[index2];
    button1.onclick = function(a) {
      let key = a.target.className;
      let web = prompt("请输入网址");
      webs[key] = web;
      localStorage.setItem("webs", JSON.stringify(webs));
    };
    kbd.appendChild(button1);
    div1.appendChild(kbd);
    index2 += 1;
  }
  nav.appendChild(div1);
  index1 += 1;
}

document.onkeypress = function(a) {
  let key = a.key;
  let web = webs[key];
  window.open("http://" + web, "_blank");
};


