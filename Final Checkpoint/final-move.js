var pet = 0;
var kisses = 0;

function petClick(number) {
	pet = pet + number;

	document.getElementById("pet").innerHTML = pet;
	var edge = Math.sqrt(pet * kisses);
	$('#graph').height(edge).width(edge)
	
	var kissCost = Math.floor(10 * Math.pow(1.1, kisses));
	
	var lightness = pet / kissCost <= 1 ? pet / kissCost : 1 ;
	
	var color = 'hsla(' + kisses + ',90%,'+ lightness*100 +'%,1)';
	$('#graph').css('background', color)
	
};

function growLove()
{
	var kissCost = Math.floor(10 * Math.pow(1.1, kisses));

	if (pet >= kissCost)
	{
		kisses++;
		pet = pet - kissCost;
		
		document.getElementById('kisses').innerHTML = kisses;
		document.getElementById('pet').innerHTML = pet;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1, kisses));
	document.getElementById('kissCost').innerHTML = nextCost;
}

window.setInterval(function() {

	petClick(kisses);
	

}, 500);

