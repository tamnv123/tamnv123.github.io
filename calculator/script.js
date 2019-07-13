var number1=0;
var tinhtoan="";
function addNumber(id){
  temNumber=document.getElementById("number").value;
  document.getElementById("number").value=temNumber+id;
}
function pheptinh(id){

  number1=document.getElementById("number").value;
  document.getElementById("number").value="";
  tinhtoan=id;
}
function ketqua(){

  temNumber=document.getElementById("number").value;
   switch(tinhtoan){
        case "cong":
                  ketquapheptoan=parseInt(temNumber)+parseInt(number1);
                  break;
        case "tru" :
                  ketquapheptoan=parseInt(number1)-parseInt(temNumber);
                  break;
        case "nhan" :
                  ketquapheptoan=parseInt(temNumber)*parseInt(number1);
                  break;
        case "chia":
                  ketquapheptoan=parseInt(number1)/parseInt(temNumber);
                  break;
                  
        case "giaithua":
                  ketquapheptoan=parseInt(temNumber)*factorial(temNumber-1);
                  break;

  }
  
  document.getElementById("number").value=ketquapheptoan;
}
function  xoa(){
   document.getElementById("number").value='';

}
// phần bt javascript
//bai1
function theTich(r){
    return (4/3)*Math.PI*r**3;
}


//bai2
function kiem_tra_snt(n)
{
    
    let flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (let i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }
}

//bai3 viết hoa chữ cái đầu một chuỗi
function vietHoaChuCaiDau(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function xuLyMangChuoi(array) {
  let arrTotal = [];
  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(" ");
    arrTotal.push(vietHoaChuCaiDau(split[0])  + " " + vietHoaChuCaiDau(split[1]));
  }
  document.write(arrTotal);
}

// bai 4 chuyen chuoi thanh spina case

function vietthuong(str) {
  return str[0].toLowerCase() + str.slice(1).toLowerCase();
}

function xuLyMangChuoi(array) {
  let arrTotal = [];
  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(" ");
    arrTotal.push(vietthuong(split[0])  + "-" + vietthuong(split[1]));
  }
  document.write(arrTotal);
}

// bai 5 Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function  kiemTraSoNto( n)
{   
    if (n<2) return 0;
    for ( let i=2; i<=sqrt(n); i++)
        if (n%i==0)
            return 0;
    return 1;
}
 
function tinh()
{
    let s=0;
    for (i=2; i<n; i++)
        if (kiemTraSoNto(i)==1)
            s=s+i;
    return s;
}

// bai 6  Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tinh(n){
    
    do{
     
        if(n <= 0){
            return 0;
        }
    }while(n <= 0);
    let sum = 0;
    for(let i = 1;i <= n;i++){
        if(n % i == 0){
            sum += i;
        }
    }
   return sum;
}
// bai 7 kiểm tra objiect rỗng 
function kiemTra(obj) {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
// bai 8 giai phương trinh bậc nhất 
function giaiPtBacNhat(a, b)
{
    if (a == 0 && b == 0){
        alert('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        alert('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        alert("Phương trình vô nghiệm");
    }
    else {
        alert('Phương trình có nghiệm x = ' + (-b/a));
    }
}// bai9 giải phương trình bậc hai
function giaiPtBacHai()
{
let x1,x2;
let x,y,z,delta;
x= parseInt(form.a.value);
y= parseInt(form.b.value);
z= parseInt(form.c.value);
delta=(y*y-4*x*z)
if(delta ==0)
{
alert("phuong trinh co nghiem kep");
x1=-y/(2*x) ;
x2=-y/(2*x);
form.x.value=eval(x1);
form.y.value=eval(x2);
}
else if(delta<0)
{
alert("phuong trinh vo nghiem");
} 
else if
{
alert("phuong trinh co hai nghiem");
x1=(-y-Math.sqr(delta))/(2*x);
x2=(-y+Math.sqr(delta))/(2*x);
form.x.value=eval(x1);
form.y.value=eval(x2);
}
}

//  bài 10 Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

function sapXep(name,gender,age){
         name.sort();
         var text="";
         var i=0;
         while(i<n){
             text += name[i];
             i++;
         }
         document.write(text);

     }
  // bai 11 kiêm tra chuỗi đối xứng
  function  doiXung(str)
{
            for ( let i=0; i< ((str)/2).length; i++)
            {
                        if(str[i] != str[str.length-1-i])
                        {
                                    return 0;
                        }
            }
            return 1;
}
function kiemTra()
{
            
            if(doiXung(str)==0)
            {
                       return false;
            }
            if(doiXung(str)==1)
            {
                       return true;
            }
            
}