function getHandler(){

	var activeSquare;

	var squareManager = {

		makeActive : function(square)
		{
			square.classList.add('active');
			activeSquare = square;
		},

		makeUnActive : function(square)
		{
			square.classList.remove('active');
		},

		isSquare : function(element)
		{
			return element.classList.contains('square');
		}, 

		onSquareClick : function(event)
		{
			var square = event.target;

			if(!this.isSquare(square)){
				return;
			}

			if(activeSquare && activeSquare != square){
				this.makeUnActive(activeSquare);
			}

			this.makeActive(square);
		}
	}

	return squareManager.onSquareClick;
}

var list = document.getElementById('list');
var handler = getHandler();

list.addEventListener('click', handler);