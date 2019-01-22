$('ul').on('click','li',function(){
/*
	if($(this).css('color') === 'rgb(128, 128, 128)'){
		$(this).css({
		color:'black',
		textDecoration:'none'
	});
	}
	else{
	$(this).css({
		color:'gray',
		textDecoration:'line-through'
	});
  }*/

$(this).toggleClass('completed');

});

$('ul').on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
        $(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText=$(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>');
	}
});

$('.fa-pencil').click(function(){
	$("input[type='text']").fadeToggle();
});