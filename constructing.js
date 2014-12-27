/*Javascript源代码*/
var x;
var y;
var on=0;
var startingX=100;
var startingY=200;
$(document).ready(function(){
	$('#box').mousedown(function(event){
		x = event.pageX;
		y = event.pageY;
		on=1;
		startingX=$('#box').position().left;
		startingY=$('#box').position().top;
                //console.log("mouse click X:"+event.pageX+" Y:"+event.pageY);
		$('html').on('mousemove',(function(event) {
			$('#box').offset({
				top:startingY+(event.pageY-y),
				left:startingX+(event.pageX-x)
			}); 
		}));
    });
        $('#box').mouseup(function(event){
	   		$('html').off('mousemove');
   		});
});