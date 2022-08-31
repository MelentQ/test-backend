
$(document).ready(function() {
	$("a.fancybox").fancybox(
	{
		'height'        		: 'auto',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});
	$("a.callback").fancybox(
	{
		'height'        		: 'auto',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});

});

$(function(){
	if($(window).height()>$(window).width()){
		$("#viewport").attr("content","width=1024, initial-scale="+screen.width/1024);
	}else{
		$("#viewport").attr("content","width=1024, initial-scale="+screen.height/1024);
	}
	$(window).resize();
});
if(window.addEventListener){
	window.addEventListener('orientationchange',
		function () {
			if($(window).height()>$(window).width()){
				$("#viewport").attr("content","width=1024, initial-scale="+screen.width/1024);
			}else{
				$("#viewport").attr("content","width=1024, initial-scale="+screen.height/1024);
			}
			$(window).resize();
		}
	);
}
