function ajax(){
	var xml = '';
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else if(window.ActiveXObject){
			try{
				xml = new ActiveXObject("MSxml2.XMLHTTP");
			}catch(e){
				xml = new ActiveXObject("Microsoft.XMLHTTP");
			}
	}else{
		alert("你的浏览器不支持ajax,请下载使用 chrome浏览器,以获得最佳体验");
	}
	return xml;
}

function request(url,eClass){
	var xml = ajax(),
			requests;
	xml.open("POST",url,true);
	xml.send();
	console.log(xml);
	xml.onreadystatechange = function(){
		if(xml.status == 200 && xml.readyState == 4){
			//获取承载视频card 的容器
			var parentWarp = document.getElementsByClassName(eClass)[0];
			parentWarp.innerHTML = xml.responseText;
			mouseoverPlay();	//鼠标移动到视频上面自动播放
		}
	}
}
