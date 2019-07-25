function makeActive(square)
{
	square.classList.add('active');
}

function makeUnActive(square)
{
	square.classList.remove('active');
}

function isSquare(element)
{
	return element.classList.contains('square');
}

function onClick(event){
	var square = event.target;

	if(!isSquare(square)){
		return;
	}

	if(activeSquare && activeSquare != square){
		makeUnActive(activeSquare);
	}

	makeActive(square);
	activeSquare = square;
}

var list = document.getElementById('list');
var activeSquare;

list.addEventListener('click', onClick);