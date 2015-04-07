
var e = document.getElementsByClassName('videoMain') [0];
var li = e.getElementsByTagName('li');
for (var i = 0, l = li.length; i < l; i++) {
  li[i].onclick = clickLi;
}

/*单击每一个菜单触发的函数*/
function clickLi() {
	setTimeout(videoContent,1550);
  for (var i = 0, l = li.length; i < l; i++) {
    li[i].style.transform = 'scale(0)';
    li[i].style.opacity = 0;
  }
  setTimeout(moveNav,800);
}

/*移动菜单*/
function moveNav(){
  e.style.margin = "0";
  e.style.width = '250px';
  for(var i = 0,l = li.length;i<l;i++){
    li[i].style.cssText = "width:250px;height:100px;margin:0";
  }
  setTimeout(showNav,300);
}

/*显示菜单*/
function showNav(){
  var w = e.offsetWidth;
  for(var i = 0,l = li.length;i<l;i++){
    li[i].style.cssText = li[i].style.cssText+"opacity:1;transform:scale(1);"
  }
}

/*创建承载视频card 的 容器*/

function videoContent(){
  var main = document.getElementsByTagName("body")[0];
  var content = document.createElement("div");
  content.setAttribute("class","videoContent");
  main.appendChild(content);
  content.style.width = document.body.offsetWidth-document.getElementsByClassName("videoContent")[0].offsetLeft+'px';

	showContent();
}

/*显示视频内容*/
function	showContent(){
	request('request/videoContent.html','videoContent');
//	console.log(r);
}

/*鼠标移动到视频上面自动播*/
function mouseoverPlay(){
	var video = document.getElementsByTagName("video");
	
	for(var i = 0,l = video.length;i<l;i++){
		video[i].onmouseover = function(){
			this.play();
		}
		video[i].onmouseout = function(){
			this.pause();
		}
	}
	
}
