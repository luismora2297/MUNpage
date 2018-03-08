//Pure Javascript Functions, not Jquery, EcmaScript or Vue allowed



//========================================== Clock ==================================================================
function startTime() 
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('mun_clock').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) 
{
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}
//====================================== End Clock ==================================================================

window.onload = function() 
{
	startTime();
};
