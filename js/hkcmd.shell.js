  
  function hanshu() {
  	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	var x = document.getElementById('hkcmd');
	var xx = getElementsByClassName(x, 'hkcmd-shell-side');
	var xxx = document.getElementsByTagName('span');
	xx[0].onmouseover = function() {
		for (var i = 0; i < xxx.length; i ++) {		  
			ShowPic( xxx[i] );
		}
		return false;
	}
	xx[0].onmouseout = function() {
		for (var i = 0; i < xxx.length; i ++) {		  
			out1( xxx[i] );
		}
		return false;
	}
  }
  
  
  function hanshu2() {
	if (!document.getElementById) return false;
	var x = document.getElementById('hkcmd');
	var xx = getElementsByClassName(x, 'hkcmd-shell-side-morenqu-box');
	var y = getElementsByClassName(x, 'hkcmd-shell-side');
	var my_node = document.createElement("div");
	var my_txt = document.createTextNode("HELLO,WORLD");
	my_node.appendChild(my_txt);
	y[0].appendChild(my_node);
	my_node.setAttribute("class","mulu");
	for (var i = 0; i < xx.length; i ++) {	
		xx[i].onmouseover = function() {			  
			return !ShowPic2(this);
		}
		xx[i].onmouseout = function() {			  
			return !out2(this,my_node,y[0]);
		}
	}
	xx[0].onclick = function() {
		return !hh(y[0],my_node);
	}
  }
  
  function getElementsByClassName(node, classname) {
  	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	}
	else {
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i = 0; i < elems.length; ++ i) {
			if (elems[i].className.indexOf(classname) != -1) {
				results[results.length] = elems[i];
			}
		}
		return results;
	}
  }
  
  function ShowPic(whichpic){
	  whichpic.style.display = "inline-block";
	  return true;
  }
  function out1(x) {
	x.style.display = "none";  
	return true;
  }

  function hh(x,y) {
	x.style.paddingRight = "4px";	
	y.style.display = "inline-block";
	return true;
  }

  function ShowPic2(whichpic){
	  whichpic.style.backgroundColor = "#EBEBEB"; 
	  return true;
  }
  
  function out2(x,y,z) {
	 x.style.backgroundColor="#fafafa";
	 y.style.display = "none";
	 z.style.paddingRight = "0px";
	 return true;
  }
  function addEvent(x){
	  var shijian = window.onload;
	  if (typeof window.onload != 'function'){
		  window.onload = x;
	  }
	  else {
		  window.onload = function(){
		     shijian();
		     x();
		  }
	  }
  }
  
  addEvent(hanshu);
  addEvent(hanshu2);