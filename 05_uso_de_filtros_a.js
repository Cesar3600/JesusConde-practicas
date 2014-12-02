angular.module('myApp',[]).
	controller('filterController',['filterFilter',function(filterFilter){
		this.arrays=[{name:'relaciones alienigenas-humanas'},{name:'contactos fallidos'},{name:'control mental'}];
		this.filteredArray=filterFilter(this.arrays,'r');
	}]);


