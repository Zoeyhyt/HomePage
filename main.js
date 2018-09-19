//1.初始化
let hashA = init()
let hash = hashA.hash
let webs = hashA.webs

//2.创建键盘
generateKeyboard(hash,webs)

//3.监听用户事件
listenToUser(webs)


//优化键盘样式
let lock = tag("span");
lock.className = "spanlock";
lock.textContent = "lock";
let caps = document.getElementById("caps");
caps.appendChild(lock);

let enter = tag("span");
enter.className = "spanenter";
enter.textContent = "enter";
let return1 = document.getElementById("return");
return1.appendChild(enter);

let shift = document.querySelectorAll(".spanshift");
shift[0].className = "spanshift left";
shift[1].className = "spanshift right";



// tools
function tag(tagName) {
  return document.createElement(tagName);
}

function generateKeyboard(hash,webs){
  for (let index1 = 0; index1 < hash.length; index1++) {
    let ul1 = tag("ul");
    ul1.className = "row clearfix";
    nav.appendChild(ul1);
  
    let row = hash[index1];
    for (let index2 = 0; index2 < row.length; index2++) {
      let span = creatSpan(row[index2]);
      let button = creatButton(row[index2]);
      let img = creatImage(webs[row[index2].toLocaleLowerCase()])
      
      let li1 = tag("li");
      li1.className = "li";
      li1.id = row[index2];
  
      li1.appendChild(span);
      li1.appendChild(button);
      li1.appendChild(img);
      ul1.appendChild(li1);
    }
  }
}

function creatSpan(textContent) {
  let span = tag("span");
  span.className = "span" + textContent;
  span.textContent = textContent;
  return span;
}

function creatButton(className) {
  let button1 = tag("button");
  button1.textContent = "edit";
  button1.className = "button" + " " + className;
  button1.onclick = function(a) {
    let name = a.target.className;
    let key = name.split(" ")[1].toLowerCase();
    let web = prompt("请输入网址,如www.qq.com");
    webs[key] = web;

    let img2 = a.target.nextSibling;
    img2.src = "http://" + web + "/favicon.ico";
    img.onerror = function(e) {
      e.target.src = "//i.loli.net/2018/09/18/5ba11220913d6.jpg";
    };

    localStorage.setItem("webs", JSON.stringify(webs));
  };
  return button1
}

function creatImage(domain){
  let img = tag("img");
  if (domain) {
    img.src =
      "http://" + domain + "/favicon.ico";
  } else {
    img.src = "//i.loli.net/2018/09/18/5ba11220913d6.jpg";
  }
  img.onerror = function(e) {
    e.target.src = "//i.loli.net/2018/09/18/5ba11220913d6.jpg";
  };
  return img
}



function getFromLocalStorage(webs){
  return JSON.parse(localStorage.getItem(webs) || "null");
}

function init(){
  let hash = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
    ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"],
    ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
    ["fn","control","option","command","space","command","option","blank","⬆","blank","⬅","⬇","➡"]
  ];
  
  let webs = {};
  
  let websInLocalStorage = getFromLocalStorage(webs)
  if (websInLocalStorage) {
    webs = websInLocalStorage;
  }
  
  return{
    hash:hash,
    webs:webs
  }
}
function listenToUser(webs){
  document.onkeypress = function(a) {
    let key = a.key;
    let web = webs[key];
    window.open("http://" + web, "_blank");
  };
}