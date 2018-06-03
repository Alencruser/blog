window.addEventListener('load',function(){
	document.getElementById('res').reset();
});
var lab;
function stocker(){
		if($(':input')[5].checked){
			lab="Homme"
		} else {
			lab='Femme'
		}
		if (localStorage.getItem($('#pseudo').val())== null){		
			console.log("test")
			var store={"Firstname:": $('#firstname').val(),"lastname":$('#lastname').val(),"Pseudo":$('#pseudo').val(),"password":$('#pass').val(),"Sexe":lab,"Birthdate":$('#date').val(),"city":$('#city').val(),"mail":$('#email').val(),"website":$('#site').val(),"Hobby":$('#hobbies').val(),"phone":$('#tel').val(),"color":$('#color').val()};
			localStorage.setItem($('#pseudo').val(),JSON.stringify(store))
		}
	} else {
		alert('Formulaire incomplet/Des formats n\'ont pas été respectés')
	}

function recuperer(){
	var stocked=localStorage.getItem('Simon')
	console.log(JSON.parse(stocked))
}
$('.disp').keyup(function(){
	var x = $('#'+$(this).attr('data'))
	x.css('display','inline');
	setTimeout(turnback,10000);
	function turnback(){
		x.css('display','none')
	}
})