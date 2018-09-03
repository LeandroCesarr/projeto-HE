function check(form){
	if(form.userid.value == "admin" && form.pswrd.value == "123"){

		window.location.replace("painel.html")
	}
	else{

		alert("Usuario ou senha incorretos")
	}
}
