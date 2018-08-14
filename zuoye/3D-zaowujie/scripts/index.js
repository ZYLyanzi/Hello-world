$(document).ready(function(){
	setBackground();


});
// 插入背景图片
function setBackground(){
	var arr = $('.img-item');
	var len = arr.length;
	var r = calculateRadius(64.5, len);
	console.log(arr);

	for(var i = 0; i < len; i++){
		arr[i].style.background = 'url("./img/p'+(i+1)+'.png") no-repeat';
		arr[i].style.transform = 'rotateY('+360/len*i+'deg) translateZ('+r+'px)';
	}
}
//求r长度
function calculateRadius(length, totalNum) {
	var t = 360/totalNum/2;
	return Math.round(length / Math.tan(t / 180 * Math.PI))-3;
}

var startX = 0,
	x = 0,
	endX = 0;
var flag = true;


$('#box').on('touchstart', function(event) {
	event.preventDefault();

	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
})
$('#box').on('touchmove', function(event) {
	if (flag) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		x = endX - startX;
		box.style.transform = 'rotateY(' + (x-9) + 'deg)';
	} else {
		return false;
	}

})
$('#box').on('touchend', function(event) {
	console.log("over");
});

window.addEventListener('deviceorientation', function(event) {

	var gamma = event.gamma;
	if (Math.abs(gamma) > 10) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 2 + 'deg)';
	} else {
		flag = true;
	}

	var beta = event.beta;
	// alert(beta);
	if (Math.abs(beta) > 10) {
		// alert(beta * 3);
		flag = false;
		box.style.transform = 'rotateX(' + beta + 'deg)';
	} else {
		flag = true;
	}
});
