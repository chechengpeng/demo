
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('go').addEventListener('click',go);
  var ele_page = document.getElementById('page');
  var initPage=1,last=10,nums=10;
  changeShow();
  pageChange();
  ele_page.addEventListener('click', pageGo);
  function go(){
    initPage = 1;
    last = parseInt(document.getElementById('pages').value);
    nums = parseInt(document.getElementById('nums').value);
    if(!last || !nums ){
      alert('请输入正确的数字');
      return false;
    }
    changeShow();
    pageChange();
  }

  /**
   * 改变页码的时候，列值也变化，并且控制按钮的点击样式
   */
  function pageChange(){
    var text = '';
    for (var k = (initPage-1)*nums+1; k < 1 +(initPage*nums); k++) {
      text = text + '<li><span class="title"><span class="num">' + k + '</li>';
    }
    var actLi = 'li_'+initPage;
    if(actLi){
      changeActive(document.getElementById(actLi));
    }
    document.getElementById('show').innerHTML = text;
    if(initPage == 1) {
      if(document.getElementById('pre')){
        document.getElementById('pre').className = 'disable';
      }
    }else if(initPage == last){
      document.getElementById('next').className = 'disable';
    }
  }
  /**
   * 改变分页按钮的活动状态
   * @param li 所在页码的li
   */
  function changeActive(li){
    var lis = ele_page.getElementsByTagName('li');
    if(lis.length == 1)return false;
    for( var i=0;i<lis.length;i++){
      lis[i].className = '';
    }
    li.className = 'active';
  }

  /**
   * 根据所点击li的 innerText 的值不同，执行不同的操作
   * @param e 因为Firefox不支持 window.event，而支持e
   * @returns {boolean}
   */
  function pageGo(e){
    e = e || window.event;
    var ind = e.target || e.srcElement;
    if(ind.localName == 'ul'){ //如果点击区域没有聚焦在li上
      return false;
    }
    if(ind.innerText == '<'){ //点击前一页的时候，如果当前是第一页，就不翻页了
      if(initPage == 1){
        return false;
      }else{
        initPage = initPage - 1;
      }
    }else if(ind.innerText == '>'){ //点击下一页的时候，如果当前是最后一页，就不翻页了
      if(initPage == last){
        return false;
      }else{
        initPage = initPage + 1;
      }
    }else if(ind.innerText == '...'){
      return false;
    }else{
      initPage = parseInt(ind.innerText);
    }
    changeShow();
    pageChange();
  }

  /**
   * 根据initPage,last的值来确定按钮的显示样式
   * @returns {number}
   */
  function changeShow(){
    ele_page.innerHTML = '';
    var pageList = '<li id="pre">&lt;</li><li id="li_1" class="active">1</li>';
    if (last < 6) {
      if(last == 1){
        pageList = '<li id="li_1" class="active only">1</li>';
        ele_page.innerHTML = pageList;
        return 1;
      }
      for (var i = 2; i < last; i++) {
        pageList = pageList + '<li id="li_' + i + '">' + i + '</li>';
      }
    } else {
      if (initPage == 1) {
        pageList = pageList + '<li id="li_2">2</li><li>...</li>';
      } else if(initPage == last){
        pageList = pageList + '<li>...</li><li id="li_'+ (last-1) + '">'+ (last-1) + '</li>';
      } else{
        var l;
        if(initPage-1-1<=2 && last-1-initPage>2){
          for (l = 2; l < initPage + 2; l++) {
            pageList = pageList + '<li id="li_' + l + '">' + l + '</li>';
          }
          pageList += '<li>...</li>';
        }else if(initPage-1-1>2 && last-1-initPage<=2){
          pageList += '<li>...</li>';
          for(l = initPage-1; l < last; l++){
            pageList = pageList + '<li id="li_' + l + '">' + l + '</li>';
          }
        }else if(initPage-1-1<=2 &&last-1-initPage<=2){
          for (l = 2; l < last; l++) {
            pageList = pageList + '<li id="li_' + l + '">' + l + '</li>';
          }
        }else{
          pageList += '<li>...</li>';
          for(l = initPage-1; l < initPage+2; l++){
            pageList = pageList + '<li id="li_' + l + '">' + l + '</li>';
          }
          pageList += '<li>...</li>';
        }
      }
    }
    pageList = pageList + '<li id="li_'+ last + '">'+ last + '</li><li id="next">&gt;</li>';
    ele_page.innerHTML = pageList;
  }
});

