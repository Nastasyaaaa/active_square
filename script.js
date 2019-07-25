function makeActive(square)
{
	square.style.backgroundColor = 'red';
}

function isSquare(element)
{
	return element.classList.contains('square');
}

var list = document.getElementById('list');

list.addEventListener('click', function(event){
	var square = event.target;

	if(!isSquare(square)){
		return;
	}


});