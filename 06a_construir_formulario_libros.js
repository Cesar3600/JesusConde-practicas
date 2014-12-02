
function controlLibreria($scope){
	$scope.libros=[
		{titulo:'Circo maximo', autor:'Santiago posteguillo'},
		{titulo:'Contacto', autor:'Carl Sagan'},
		{titulo:'Cuentos completos', autor:'Edgar Allan Poe'},
		{titulo:'Dracula', autor:'Bram Stoker'},
		{titulo:'El arte de la guerra', autor:'Sun Tzu'},
		{titulo:'El amor en los tiempos del colera', autor:'Gabriel Garcia Marquez'},
		{titulo:'El evangelio segun van hutten',autor:'Abelardo Castillo'}
	];
	$scope.ingresar=function(){
		$scope.libros.push({titulo:$scope.nuevoTitulo,autor:$scope.nuevoAutor});
	}


}







