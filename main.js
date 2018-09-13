let hash = [
  ["~","1","2","3","4","5","6","7","8","9","0","-","=","delete"],
  ["tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","{","}","|"],
  ["caps","A", "S", "D", "F", "G", "H", "J", "K", "L",";","\'","return"],
  ["shift","Z", "X", "C", "V", "B", "N", "M",",",".","/","shift"]
];

let webs = {};

let websInLocalStorage = JSON.parse(localStorage.getItem("webs") || "null");
if (websInLocalStorage) {
  webs = websInLocalStorage;
}

let index1 = 0;
while (index1 < hash.length) {
  let ul1 = document.createElement("ul");
  ul1.className = 'row'
  let row = hash[index1];
  let index2 = 0;
  while (index2 < row.length) {

    let li1 = document.createElement("li");
    li1.className = 'li'
    li1.id = row[index2]
    li1.textContent = row[index2];

    //创建按钮
    let button1 = document.createElement("button");
    button1.textContent = "edit";
    button1.className = row[index2];
    button1.onclick = function(a) {
      let key = a.target.className;
      let web = prompt("请输入网址");
      webs[key] = web;
      localStorage.setItem("webs", JSON.stringify(webs));
    };

    li1.appendChild(button1);
    ul1.appendChild(li1);
    index2 += 1;
  }
  nav.appendChild(ul1);
  index1 += 1;
}

document.onkeypress = function(a) {
  let key = a.key;
  let web = webs[key];
  window.open("http://" + web, "_blank");
};


