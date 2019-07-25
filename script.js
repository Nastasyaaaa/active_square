function initializeSquare(element)
{
	var red = 'rgb(255, 0, 0)';

	var square = {

		getId : function(){
			return element.dataset.id;
		},

		getColor : function(){
			return window.getComputedStyle(element).backgroundColor;
		},

		isChosen : function(){
			return square.getColor() == red;
		},

		makeChosen : function(){	
			element.style.backgroundColor = 'red';
		},

		unChoose : function(){
			element.style.backgroundColor = 'green';
		},

		isMe : function(otherSquare){
			return square.getId() == otherSquare.getId();
		}
	}

	return square;
}

function getChosenSquare(squares)
{
	for( var i = 0; i < squares.length; i++ ){
		if(squares[i].isChosen()){
			return squares[i];
		}
	}

	return null;
}

function onClick(event)
{
	var chosenSquare = getChosenSquare(squares);
	var targetSquare = initializeSquare(event.target);

	if(chosenSquare){
		if(!targetSquare.isMe(chosenSquare)){
			chosenSquare.unChoose();
			targetSquare.makeChosen();
		}
	}else{
		targetSquare.makeChosen();
	}

}

var squareElements = document.getElementsByClassName('square');
var squares = [];

for(var i = 0; i < squareElements.length; i++){
	squares.push(initializeSquare(squareElements[i]));
}

var wrappers = document.getElementsByClassName('square-wrapper');

for(var i = 0; i < wrappers.length; i++ ){
	wrappers[i].addEventListener('click', onClick, true);
}


