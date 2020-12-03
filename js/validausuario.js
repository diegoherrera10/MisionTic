function validar_formulario_login(){
 var correo = document.formulario.email;
 var password1 = document.formulario.password;  
 var bandera=0;

 var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(!correo.value.match(formatoCorreo))
 {
	alert("Debes ingresar un correo electronico valido");
	correo.value="";
	bandera=1;	
}
  var p = password1.value.length;

 if (p == 0 || p < 8)
 {
	alert("Debes ingresar una clave con al menos 8 caracteres");
	password1.value="";
	bandera=1;
 }
 if(bandera==1){
	return false;
 }

}

function validar_formulario_recupera(){
	var correo = document.formulario.email;
	var bandera=0;
   
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!correo.value.match(formatoCorreo))
	{
	   alert("Debes ingresar un correo electronico valido");
	   correo.value="";
	   bandera=1;	
   }
}

function mostrarPassword(obj) {
	var obj = document.getElementById('password');
	obj.type = "text";
  }
  function ocultarPassword(obj) {
	var obj = document.getElementById('password');
	obj.type = "password";
  }

function validarCamposUsuario(){
	var nombre = document.formulario.first_name;
	var correo = document.formulario.email;
	var password1 = document.formulario.password;  
	var ref = document.formulario.ref;  
	var imagen = document.formulario.imagen;  
	var cantidad = document.formulario.cant;  
	var bandera=0;
	
	if(nombre.value.length<1){
		alert("Ingresa un nombre");
		nombre.value="";
	}
	if(ref.value.length<1){
		alert("Ingresa una referencia");
		ref.value="";
	}
	if(imagen.value.length<1){
		alert("Ingresa una imagen");
		imagen.value="";
	}
	if(cantidad.value.length<1){
		alert("Ingresa una cantidad");
		cantidad.value="";
	}

   
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!correo.value.match(formatoCorreo))
	{
	   alert("Debes ingresar un correo electronico valido");
	   correo.value="";
	   bandera=1;	
   }
	 var p = password1.value.length;
   
	if (p == 0 || p < 8)
	{
	   alert("Debes ingresar una clave con al menos 8 caracteres");
	   password1.value="";
	   bandera=1;
	}
	if(bandera==1){
	   return false;
	}


}



