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