function control($scope){
	$scope.videojuegos=[
		{titulo:'zelda',genero:'aventura'},
		{titulo:'aliens isolation',genero:'survivor'},
		{titulo:'Mortal Kombat',genero:'pelea'},
		{titulo:'Battlefield 3',genero:'shooter'},
		{titulo:'Ace combat Assault horizont',genero:'simulation'}
		];
	$scope.generos=[{genero:'accion'},{genero:'aventura'},{genero:'survivor'},{genero:'shooter'},{genero:'sports'},{genero:'pelea'}];

	$scope.ingresar=function(){
		$scope.videojuegos.push({titulo:$scope.ntitulo, genero:$scope.tgenero});
	}

}





