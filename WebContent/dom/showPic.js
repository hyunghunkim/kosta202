function changePic(obj) {
	
	
	
	
//	return false;	// a 태그의 기본
};

function prepareGallery(){
	var imagegallery = document.getElementById("imagegallery");
	var links = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click',function(event){
			event.preventDefault();
			showPic(this);
		},false);
		
//		links[i].onclick = function(){
//			return showPic(this);
//		}
	}
}

window.onload = prepareGallery;


