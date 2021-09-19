$(document).ready(main);

var contador = 1;

function main(){
	$('.navbar__menu__responsive').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('navbar__menu__responsive__allscreen').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('navbar__menu__responsive__allscreen').animate({
				left: '-100%'
			});
		}

	});

};