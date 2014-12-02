
function controlTelefonosMoviles($scope){
	$scope.telefonos=[
		{modelo:'lumia 920', marca:'microsoft', year:'2012'},
		{modelo:'motorola', marca:'moto X', year:'2014'},
		{modelo:'m4tel', marca:'ss1060', year:'2011'}
		];

	$scope.ingresar=function(){
		$scope.telefonos.push(
			{modelo:$scope.nmodelo1, marca:$scope.nmarca2, year:$scope.nyear3}
			)
	}
}






