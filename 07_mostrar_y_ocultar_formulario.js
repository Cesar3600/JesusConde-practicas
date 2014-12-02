function AlumnosController($scope){
	$scope.alumnos=[
		{nombre:'Cesar Contreras',telefono:'994967203',curso:'tercer grado'},
		{nombre:'Luis Casares',telefono:'985147109',curso:'segundo grado'},
		{nombre:'Marco reuss',telefono:'928379990',curso:'primero grado'},
		{nombre:'Daniella Dumas',telefono:'999205420',curso:'quinto grado'},
		{nombre:'Elizabeth McGorthard',telefono:'985960960',curso:'cuarto grado'}
		];

	$scope.save=function(){
		$scope.alumnos.push(
			{nombre:$scope.nuevoAlumno.nombre,
			 telefono:$scope.nuevoAlumno.telefono,
			curso:$scope.nuevoAlumno.curso});
		$scope.mostrar=false;

	};
	$scope.mostrar=false;
	$scope.agregar=function(){
		$scope.mostrar=true;

	}







}





