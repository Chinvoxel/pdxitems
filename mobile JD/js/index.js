
window.onload=function(){
    // 初始化页面功能
    
    // 搜索效果
    search();

//     ``` touch事件 触屏设备特有事件 安卓 ios设备

//      touchstart  手指触摸到屏幕  触发
         
//      touchmove   手指在屏幕上滑动  不停触发

//      touchend    手指离开屏幕  触发

//      touchcancel(例如来电)   被迫中止滑动 触发

//      使用on进行事件绑定 第二次绑定相同事件会覆盖```

//    ``` 滑动效果分析 
//     依靠touch相关事件，根据触摸位置的改变，改变对应元素的位移
//     1.监听位置的改变
//     2.获取当前坐标
//     3.计算位移再设置滑动

//     触摸点的集合 记录触摸点
//     changeTouches  当前最新改变的触摸点集合
//     targetTouches  记录当前元素上面的所有触摸点 
//     touches        记录页面上所有的触摸点集合```

    // 轮播图
    banner();

    // 倒计时
    downTime();
}

var search=function(){
        //  页面初始化时 顶部距离是0的时候 透明度为0
        //  当页面滚动且滚动距离没有超过轮播图高度时  透明度越来越大
        //  当滚动距离超过轮播图高度时 透明度保持不变  

        // 获取dom元素
        var search=document.querySelector('.jd_search_box');
        var banner=document.querySelector('.jd_banner');
        var height=banner.offsetHeight;
        
        // 监听滚动事件
        window.onscroll=function(){
             // 页面滚动距离 兼容性问题
        var top=document.body.scrollTop||document.documentElement.scrollTop;
        
         // 初始化设置透明度
         var opacity=0;
         if(top > height){
         //  当滚动距离超过轮播图高度时 透明度保持不变  
             opacity=0.85;
         }
         else{
              //  当页面滚动且滚动距离没有超过轮播图高度时  透明度越来越大
             opacity=0.85 * (top / height);
         }
        //    设置颜色给搜索盒子
        search.style.background='rgba(222,80,92,'+opacity+')'
        }
}
 
var banner=function(){
    //  ```无缝滑动 （定时器 过渡 位移）
    //     点盒子（li）对应改变样式
    //     可以滑动（touch事件 监听触摸点坐标改变距离 位移）
    //     判断滑动距离 距离不够吸附回去（过渡 位移）
    //     距离够的话  跳转上一张  下一张（判断方向 过渡 位移）```
        

        // 获取dom元素
        // 轮播图容器
        var banner=document.querySelector(".jd_banner");
        //    轮播图宽度
        var width=banner.offsetWidth;
        // 图片容器
        var imageBox=banner.querySelector("ul:first-child");
        // 点容器
        var point=banner.querySelector("ul:last-child");
        // 所有的点
        var points=point.querySelectorAll("li");

        // 设置公用方法 可以方法复用
        var addTransition=function(){
              // 添加过渡
              imageBox.style.transition="all 0.2s";
              imageBox.style.webkitTransition="all 0.2s";
        }
        var removeTransition=function(){
                // 清除过渡 不然会瞬间过去
                imageBox.style.transition="none";
                imageBox.style.webkitTransition="none";
        }       
                // 设置位移
        var setTranslateX=function(translateX){
            imageBox.style.transform="translateX("+translateX+"px)";
            imageBox.style.webkitTransform="translateX("+translateX+"px)";
        }

          // 1  无缝滚动（定时器 过渡 位移）
        var index=1;
        var timer=setInterval(function(){
            index++;
            // 过渡
           addTransition();
            // 位移
           setTranslateX(-index*width);
        },1000);
        
         // 如何监听过渡结束时间点，过渡结束事件
           imageBox.addEventListener('transitionend',function(){
              // 无缝滚动
            if(index>=9){
                // 瞬间定位到第一张
                index=1;
                // 清除过渡
                removeTransition();
                // 定位
                setTranslateX(-index*width);
            } 
            //   无缝滑动
            else if(index<=0){
                // 瞬间定位到第八张
                index=8;
                // 清除过渡
                removeTransition();
                // 定位
                setTranslateX(-index*width);
            }
            // 正常 (index的取值为1-8) 点的取值为0-7 在这里调用函数
            setPoint();                                             
        });
        
        // 2. 点盒子对应改变（改变当前样式）
        var setPoint=function(){
            // 去除所有li的now样式
            for(var i=0;i<points.length;i++){
                points[i].classList.remove('now');
            }
                points[index-1].classList.add('now');
        }

           //   手指滑动轮播图(touch事件完成)
          var startX=0;  /*初始化定义*/
          var distanceX=0; /*记录坐标轴的改变*/
          var isMove=false; /*是否移动了*/
        imageBox.addEventListener('touchstart',function(e){
            // 记录第一个手指的x位置
            clearInterval(timer);
            startX=e.touches[0].clientX;
        })
        imageBox.addEventListener('touchmove',function(e){
            // 记录手指移动
            var moveX=e.touches[0].clientX;
                distanceX=moveX-startX;
            //  通过distanceX判断移动方向 
            // distanceX大于0 向右移动
            // distanceX小于0 向左运动

            // 滑动 基于当前的定位滑动
            var translateX=-index*width+distanceX;
            // 清除过渡
            removeTransition();
            // 定位
            setTranslateX(translateX);
            isMove=true;
        });
        imageBox.addEventListener('touchend',function(e){
                // 滑动事件结束之后   判断当前滑动的距离
                // 超过1/3就切换图片 没有就吸附回去
                // console.log(distanceX);
                if(isMove){
                    if(Math.abs(distanceX)<width/3){
                            // 滑动距离不够  吸附回去
                              // 过渡
                              addTransition();
                              // 位移
                               setTranslateX(-index*width);
                    }else{
                           // 滑动距离够的时候 跳转上一张或者下一张
                           if(distanceX>0){
                            //    向右滑动
                              index--;
                           }
                           else{
                            //    向左滑
                                index++;
                           }
                            // 过渡
                             addTransition();
                            // 位移
                             setTranslateX(-index*width);
                    }
                }
                    // 收尾工作
                //  加上定时器
                // 严谨处理再清一次定时器
                 timer=setInterval(function(){
                    index++;
                    // 过渡
                   addTransition();
                    // 位移
                   setTranslateX(-index*width);
                },3000); /*定时器计时加大一点 */

                // 重置参数
                startX=0;
                distanceX=0;
                isMove=false;
        });
 }

var downTime=function(){
    //  模拟倒计时 假设倒计时11个小时
    // 可以利用定时器1秒1次
      
    var time=60*60*11;
    
    var sk_time=document.querySelector('.sk_time');
    var spans=sk_time.querySelectorAll('span');

    var timer=setInterval(function(){

        time--;

        // 格式化时间
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=time%60;

        // 设置时间
        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;
         
        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;
    },1000);
    if(time<=0){
        clearInterval(timer);
    }
} 