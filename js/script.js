$(document).ready(function(){
		new WOW().init();
		$('[data-toggle="popover"]').popover({animation: true, trigger: 'hover', delay: {show: 100, hide: 100}});
	});