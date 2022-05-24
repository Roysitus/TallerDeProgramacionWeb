
let cursos=[];//array

let total=0;

function añadir(nombre,precio) {
	console.log(nombre,precio);
	
	cursos.push(nombre+ ' = S/.'+precio)
	total+=precio;
	window.alert(nombre+' agregado al carrito ')
	

}

function mostrar(){
	if (cursos.length == 0) {
		window.alert('No ha agregado ningun curso')
	}else{
		window.alert('Cursos en el carrito: '+"\n"+cursos.join(" \n")+"\n"
		+'--------------------'+"\n"+
		'Total a pagar: S/.'+total+"\n"+
		'--------------------');
	}
				
}





