// 顶部通栏


//左侧栏
var lists=document.querySelectorAll('.jd_left ul li')
// console.log(lists);
var lias=document.querySelectorAll('.jd_left ul li a');
// console.log(lias);

for(var i=0;i<lists.length;i++){
   lists[i].onclick=showlist;
}

function showlist(){
    for(var i=0;i<lists.length;i++){
        if(lists[i]===this){
            lists[i].className='now';
        }else{
            lists[i].className='none';
        }
    }
}
window.onload=function(){
    iscrollLetf();
    iscrollRight();
     
}

var iscrollLetf=function(){
   new IScroll(document.querySelector('.jd_left'));
}
var iscrollRight=function(){
    new IScroll(document.querySelector('.jd_right'),{
        // X轴滑动 Y轴不滑动
        scrollX:true,
        scrollY:true
    });
}
 
