window.onload = function(){
    // 轮播图
    // 获取元素
    var oScroll_bar = document.getElementById('scroll_bar');
    var oScroll_img = oScroll_bar.getElementsByTagName('img')[0];
    var arrScroll_bar = ['img/lunbo01.jpg','img/lunbo02.jpg','img/lunbo03.jpg','img/lunbo04.jpg','img/lunbo05.jpg','img/lunbo06.jpg']
    var oPre = document.getElementById('pre'),
        oNext = document.getElementById('next');
    var oCircle = document.getElementById('circle_section'),
        aCircle = oCircle.getElementsByTagName('p');
    var num = 0;
    var oSearch = document.getElementById('search');
    var oText = oSearch.getElementsByTagName('input')[0];

// 初始化函数
    function init(){oScroll_img.src = arrScroll_bar[num];}
    // 上一张图片
    oPre.onclick = function(){
        num--;
        if(num==0){
            num=arrScroll_bar.length-1;
        }
        init();

    }
    // 下一张图片
    oNext.onclick = function(){
        num++;
        if(num==arrScroll_bar.length-1){
            num=0;
        }
        init();
    }


// 鼠标移到小黑点上效果
    for(var i=0;i<aCircle.length;i++){
        aCircle[i].index = i;
        aCircle[i].onmouseover = function(){
            oScroll_img.src = arrScroll_bar[this.index];
        }
    }
  
// 搜索框效果
    oText.onclick = function(){
        oSearch.style.background = 'url(img/frame_bg.png)no-repeat -232px -160px';
        oText.value = '';
    }   


}
