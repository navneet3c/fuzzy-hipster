$(document).ready(function(){
//styles

//console.log('asd')
// var param=$('hide').id;
// var tribe=getElementById('tribe1').id;
popLeftTreeTribe('hide','tribe1');
popRightTreeTribe('hide2','tribe2');
popLeftBushTribe('hide3','tribe2');
popRightBushTribe('hide4','tribe2');
});

function popLeftTreeTribe(param,tribe)
{
$('#'+param).mouseenter(function(){
	 console.log('asdasd');
	$('#'+tribe).stop(true).animate({"top": "300px","left":"15px"}, 100,function(){ $(this).animate({"top": "315px","left":"25px"},200) });
	}).mouseleave(function(){
     $('#'+tribe).stop(true).animate({"top": "300px","left":"20px"}, 200,function(){ $(this).animate({"top": "340px","left":"45px"},400) });
    });;
}

function popRightTreeTribe(param,tribe)
{
$(document).ready(function(){
	$('#'+param).mouseenter(function(){
	$('#'+tribe).stop(true).animate({"top": "280px","left":"1030px"}, 100,function(){ $(this).animate({"top": "295px","left":"1015px"},200) });
	}).mouseleave(function(){
      $('#'+tribe).stop(true).animate({"top": "280px","left":"1030px"}, 200,function(){ $(this).animate({"top": "320px","left":"990px"},400) });
    });;
});
}

function popLeftBushTribe(param,tribe)
{
var idd=param.id;
$(document).ready(function(){
	$('#'+param).mouseenter(function(){
	$('#'+tribe).stop(true).animate({"top": "257px","left":"344px"}, 300,function(){ $(this).animate({"top": "282px","left":"344px"},400) });
	}).mouseleave(function(){
      $('#'+tribe).stop(true).animate({"top": "262px","left":"344px"}, 200,function(){ $(this).animate({"top": "317px","left":"344px"},400) });
    });;
});
}

function popRightBushTribe(param,tribe)
{
var idd=param.id;
$(document).ready(function(){
	$('#'+param).mouseenter(function(){
	$('#'+tribe).stop(true).animate({"top": "257px","left":"716px"}, 300,function(){ $(this).animate({"top": "282px","left":"716px"},400) });
	}).mouseleave(function(){
      $('#'+tribe).stop(true).animate({"top": "262px","left":"716px"}, 200,function(){ $(this).animate({"top": "317px","left":"716px"},400) });
    });;
});
}