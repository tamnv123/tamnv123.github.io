
// bai 5 tang fontSize

function tangFontSize() { 
var p = document.getElementsByTagName('p');
for(i=0;i<p.length;i++) {
 
if(p[i].style.fontSize) {
var s = parseInt(p[i].style.fontSize.replace("px",""));
} else {
 
var s = 12;
}
if(s!=max) {
 
s += 1;
}
p[i].style.fontSize = s+"px"
 
}
}

// bai 6 giam fontSize
function giamFontSize() {
var p = document.getElementsByTagName('p');
for(i=0;i<p.length;i++) {
 
if(p[i].style.fontSize) {
var s = parseInt(p[i].style.fontSize.replace("px",""));
} else {
 
var s = 12;
}
if(s!=min) {
 
s -= 1;
}
p[i].style.fontSize = s+"px"
 
}
}
