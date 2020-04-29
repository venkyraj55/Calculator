 function ins(num){
    document.querySelector('input').value +=num;
 }
 function equal(){
     x=document.querySelector('input').value
     y= eval(x)
     document.querySelector('input').value =y
 }

 function clea(){
     document.querySelector('input').value= ""
     console.log('check')
 }

 function correc(){
  let x =  document.querySelector('input').value
    let y =x.substring(0, x.length-1)
    document.querySelector('input').value= y
 }