var aLinks ={
setColor:function (color){
//     var alist = document.querySelectorAll('a');
// var i = 0; 
// while(i <  alist.length){
// (alist[i]).style.color= color;
// i = i+1; 
// }
$('a').css('color',color); //web에 있는 모든 a태그를 jquery로 제어 한다는뜻
}
}
   
   
   
    function btn (self){
var target = document.querySelector('body'); /* var target을 써서 원하는 코드 지정 가능*/
if(self.value==='시야보호모드'){  /*input 값을 다시 안 적고 this.value 사용하면 간단히 지정 가능*/
target.style.backgroundColor = 'black';
target.style.color = 'powderblue';
document.querySelector('h1').style.color = 'powderblue';
self.value='일상모드';
aLinks.setColor('powderblue');

}else{
document.querySelector('h1').style.color = 'black';
target.style.backgroundColor = 'white';
target.style.color = 'black';
self.value='시야보호모드';
aLinks.setColor('yellowgreen');
}
    }
    