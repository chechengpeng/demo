var gol = document.getElementById("gol");  //获取向左按钮
var gor = document.getElementById("gor");  //获取向右按钮
var imgCon = document.getElementById("img-con"); //获取图片展示块
var numC = document.getElementById("number").getElementsByTagName("span");//获取右下数字
var txtC = document.getElementById("txt").getElementsByTagName("span");//获取左下文字
var container = document.getElementById("container");//获取图片显示区域
for (var i = 0; i < numC.length; i++) {
    numC[i].onclick = function () {
        var numId = this.id; //获取点击数字的id
        var numA = document.getElementsByClassName("on")[0];//获取当前正在显示的数字值
        var txtA = document.getElementsByClassName("show")[0];//获取当前正在显示的文字
        var imgConleft = parseInt(imgCon.style.left);//获取当前图片展示块的left值
        txtA.className = "";
        numA.className = "";//移除当前正在展示图片的数字值的class属性
        this.className = "on";//为点击的数字添加class为on
        numA = numA.id;//获取正在显示数字的id
        numA = parseInt(numA.substr(3));//截取当前正在显示数字的id的数字值
        numId = parseInt(numId.substr(3));//截取点击数字的id的数字值
        var txtB = document.getElementById("txt"+numId);//获取与点击的数字相对应的文本值
        txtB.className = "show";//设置与点击数字相对应的文本值class类为show
        imgCon.style.left = ((numA - numId) * 500 + imgConleft) + 'px';//计算出left值
    }
}
/*
 * 点击向右按钮时，如果num值为-1500，那么意味着是在最后一张图片，再点击右侧按钮，
 * 应该显示到第一张图片，并且把left值设为0；
 * 否则，left值减少500，并且让数字和文本对应的id值加1
 * */
var right = function () {
    num = parseInt(imgCon.style.left);//将获取到的left值转化为数字
    if (num == -1500) {
        num = 0;
        var numOn = document.getElementsByClassName("on")[0];
        var txtA = document.getElementsByClassName("show")[0];
        numOn.className = "";
        txtA.className = "";
        document.getElementById("num1").className = "on";
        document.getElementById("txt1").className = "show";
    } else {
        num = num - 500;
        num = num + 'px';
        var numOn = document.getElementsByClassName("on")[0];
        var txtA = document.getElementsByClassName("show")[0];
        numOn.className = "";
        txtA.className = "";
        var numId = numOn.id;
        numId = parseInt(numId.substr(3));
        var numIdNext = 'num' + (numId + 1);
        var txtIdNext = 'txt'+(numId + 1);
        var numNext = document.getElementById(numIdNext);
        var txtNext = document.getElementById(txtIdNext);
        numNext.className = "on";
        txtNext.className = "show";
    }

    imgCon.style.left = num;
}
/*
 * 点击向左按钮时，如果num值为0，那么意味着是在第一张图片，再点击向左按钮，
 * 应该显示到第四张图片，并且把left值设为-1500；
 * 否则，left值增加500，并且让数字和文本对应的id值减1
 * */
var left = function () {
    num = parseInt(imgCon.style.left);
    if (num == 0) {
        num = -1500;
        var numOn = document.getElementsByClassName("on")[0];
        var txtA = document.getElementsByClassName("show")[0];
        numOn.className = "";
        txtA.className = "";
        document.getElementById("num4").className = "on";
        document.getElementById("txt4").className = "show";
    } else {
        num = num + 500;
        var numOn = document.getElementsByClassName("on")[0];
        var txtA = document.getElementsByClassName("show")[0];
        numOn.className = "";
        txtA.className = "";
        var numId = numOn.id;
        numId = parseInt(numId.substr(3));
        var numIdNext = 'num' + (numId - 1);
        var txtIdNext = 'txt'+(numId - 1);
        var numNext = document.getElementById(numIdNext);
        var txtNext = document.getElementById(txtIdNext);
        numNext.className = "on";
        txtNext.className = "show";
    }
    num = num + 'px';
    imgCon.style.left = num;
}
gor.onclick = function () {
    right();
}
gol.onclick = function () {
    left();
}
/*
* 设定两秒之后自动轮播图片
* */
function autoGo(){
    right();
    aaa = setTimeout("autoGo()",2000);
}
function autotime(){
    setTimeout("autoGo()",2000);
}
autotime();
/*
 * 鼠标移动到图片区域时，向左向右按钮显示，并且自动轮播停止
 * */
container.onmouseover = function(){
    gor.className = "gor goshow";
    gol.className = "gol goshow";
    window.clearTimeout(aaa);
}
/*
 * 鼠标移出图片区域时，向左向右按钮隐藏，并且自动轮播重新开始
 * */
container.onmouseout = function(){
    gor.className = "gor";
    gol.className = "gol";
    autotime();
}