const c = document.getElementById("kanvas");
var ctx = c.getContext("2d");
const width = (c.width = 550); 
const height = (c.height = 170);

let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let index = 0;

function checkTime(i) {
  if (i < 10) {
    i = "0" + i; // dodaje nulu ispred broja ako je < 10
  }
  return i;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#060606";
  ctx.fillRect(0, 0, width, height);
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  h = checkTime(h);
  let h1 = h.toString().substr(0, 1);
  let h2 = h.toString().substr(1, 2);
  m = checkTime(m);
  let m1 = m.toString().substring(0, 1);
  let m2 = m.toString().substring(1, 2);
  s = checkTime(s);
  let s1 = s.toString().substring(0, 1);
  let s2 = s.toString().substring(1, 2);
  sedamSegmenta(30, nums[h1]);
  sedamSegmenta(110, nums[h2]);
  sedamSegmenta(210, nums[m1]);
  sedamSegmenta(290, nums[m2]);
  sedamSegmenta(390, nums[s1]);
  sedamSegmenta(470, nums[s2]);
  ctx.fillStyle = "#00ff00";
  ctx.fillRect(180, 70, 10, 10);
  ctx.fillRect(180, 90, 10, 10);
  ctx.fillRect(360, 70, 10, 10);
  ctx.fillRect(360, 90, 10, 10);
}

function getColor(val, shift) {
  let r = 0;
  let g = 255;
  let b = 0;
  let a = 1 * ((val >> shift) & 1);
  let color = `rgba(${r}, ${g}, ${b}, ${a})`;
  return color;
}

function sedamSegmenta(x, val) {
  ctx.fillStyle = getColor(val, 6);
  ctx.fillRect(x, 20, 48, 8);      //  A
  ctx.fillStyle = getColor(val, 5);
  ctx.fillRect(x + 50, 30, 8, 48); //  B
  ctx.fillStyle = getColor(val, 4);
  ctx.fillRect(x + 50, 90, 8, 48); //  C
  ctx.fillStyle = getColor(val, 3);
  ctx.fillRect(x, 140, 48, 8);     //  D
  ctx.fillStyle = getColor(val, 2);
  ctx.fillRect(x - 10, 90, 8, 48); //  E
  ctx.fillStyle = getColor(val, 1);
  ctx.fillRect(x - 10, 30, 8, 48); //  F
  ctx.fillStyle = getColor(val, 0);
  ctx.fillRect(x, 80, 48, 8);      //  G
}

setInterval(draw, 1000);