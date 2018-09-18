let hash = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
  ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
  ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"],
  ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
  ["fn","control","option","command","space","command","option","blank","⬆","blank","⬅","⬇","➡"]
];

let webs = {};

let websInLocalStorage = JSON.parse(localStorage.getItem("webs") || "null");
if (websInLocalStorage) {
  webs = websInLocalStorage;
}

let index1 = 0;
while (index1 < hash.length) {
  let ul1 = document.createElement("ul");
  ul1.className = "row clearfix";
  let row = hash[index1];
  let index2 = 0;
  while (index2 < row.length) {
    let li1 = document.createElement("li");
    li1.className = "li";
    li1.id = row[index2];

    let span = document.createElement("span");
    span.className = 'span'+row[index2];
    span.textContent = row[index2];

    //创建按钮
    let button1 = document.createElement("button");
    button1.textContent = "edit";
    button1.className = 'button'+ " " +row[index2]
    button1.onclick = function(a) {
      console.log(a.target)
      let name = a.target.className
      let key = name.split(" ")[1].toLowerCase()
      let web = prompt("请输入网址,如www.qq.com");
      webs[key] = web;
      localStorage.setItem("webs", JSON.stringify(webs));
    };

    let img = document.createElement("img"); 
    if(webs[row[index2].toLocaleLowerCase()]){
      img.src = 'http://' + webs[row[index2].toLocaleLowerCase()] + '/favicon.ico'
    }else{
      img.src = "//i.loli.net/2018/09/18/5ba11220913d6.jpg"
    }
    

    li1.appendChild(span);
    li1.appendChild(button1);
    li1.appendChild(img);
    ul1.appendChild(li1);
    index2 += 1;
  }
  nav.appendChild(ul1);
  index1 += 1;
}

let lock = document.createElement("span");
lock.className = "spanlock";
lock.textContent = "lock";
let caps = document.getElementById("caps");
caps.appendChild(lock);

let enter = document.createElement("span");
enter.className = "spanenter";
enter.textContent = "enter";
let return1 = document.getElementById("return");
return1.appendChild(enter);

let shift = document.querySelectorAll(".spanshift")
shift[0].className = "spanshift left"
shift[1].className = "spanshift right"

document.onkeypress = function(a) {
  let key = a.key;
  let web = webs[key];
  window.open("http://" + web, "_blank");
};
