function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var opciones = document.getElementById("opciones").value;
	var mensaje = document.getElementById("mensaje").value;
	
	if(nombre.length == 0 || apellido.length==0 || correo.length==0 || password.length==0 || opciones ==0){
		mensaje();
		validacion1();
		validacionApellido();
		validateCorreo();
		validatePassword();
		validateOpciones();
		
	}
	
}
//mayuscula
function convertirMayu(texto){
	var newArray = texto.split("");
	var primerLetra = newArray[0];
	var mayuscula = primerLetra.toUpperCase();
	var espacio = false;
	for (var i=1; i<newArray.length; i++){
        if(espacio){
            mayuscula += newArray[i].toUpperCase();
            espacio =false;
        }else
		mayuscula += newArray[i];
		if(newArray[i] ==" ")
		espacio = true;
					
		}
	return mayuscula;
}
//creando span
function crearSpan(space, valor ){
	var span = document.createElement("span");
	span.appendChild(valor);
	var div = space.parentNode;
	var salida = div.appendChild(span);
	//return div;
 }
//campo para eleminar
function eliminar(campo){
	var elemento = document.getElementById(campo);
	if(elemento.nextSibling != null){
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}

//creando mensaje en el span
function mensaje(campo, texto){
	var elemento = document.getElementById(campo);
	//no existe
	if(elemento.nextSibling == null){
		crearSpan(elemento, texto);
	}else{
		if(elemento.nextSibling.tagName == "span"){
			elemento.nextSibling.innerHTML = texto;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);
			crearSpan(elemento, texto);
		}
	}
}

function validacion1() {
    var nombre = document.getElementById("name");
	var msm = document.createTextNode("Ingrese su nombre");
	var number = document.createTextNode("No permite numeros");
	if(nombre.value == ""){
		mensaje("name", msm);
	}if(nombre.value != ""){
		eliminar("name");
	}if(/([0-9])/g.test(nombre.value)){
		mensaje("name", number);
	}if(nombre.value != ""){
		nombre.value = convertirMayu(nombre.value);
	}else{
		mensaje("name", msm);
	}
    
}
// validate el input lastname
function validacionApellido(){
	
    var apellido = document.getElementById("lastname");
	var textApell = document.createTextNode("Campo Apellido requerido");
	var noNumber = document.createTextNode("Solo acepta letra");
    if(apellido.value == ""){
		mensaje("lastname", textApell);
	}
	else{
		eliminar("lastname")
	}
	if(/([0-9])/g.test(apellido.value)){
		mensaje("lastname", noNumber);
	}if(apellido != ""){
		apellido.value = convertirMayu(apellido.value);
	}
}

// validacion de todos los campos requeridos
function validateCorreo(){
	
// section correo 
	var email = document.getElementById("input-email");
	var correo = document.createTextNode("verifica tu correo");
	var salida3 = document.createTextNode("correo invalido");
	var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	if(email.value == ""){
		mensaje("input-email", correo);
	}
	else if(!expresion.test(email.value)){
		mensaje("input-email", salida3);
	}
	else{
		eliminar("input-email");
	}
}
// section password
function validatePassword(_evt){ 
	var password = document.getElementById("input-password");
	var passText = document.createTextNode("Contraseña invalida");
	var clave = document.createTextNode("Ingresa contraseña");
	var salida4 = document.createTextNode("Minimo 6 caracteres");
	if(password.value === "123456"||password.value === "098754"||password.value === "password"){
		mensaje("input-password", passText);
	}
	else if(password.value === ""){
		mensaje("input-password", clave);
	}
	else if(password.value.length<6){
		mensaje("input-password", salida4);
	}else{
		
		eliminar("input-password")
	}
}
// section selector
function validateOpciones(){ 
	var indice = document.getElementById("opciones");
	var salida5 = document.createTextNode("No seleccionaste ninguna opcion!");
	if(indice.value == "0"||indice.value == null){
		mensaje("opciones", salida5);
	}else{
		eliminar("opciones")
	}
	
	
} 
