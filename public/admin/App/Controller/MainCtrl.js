/**
 * Created by gibanez on 12/8/2016.
 */
var MainCtrl = function($scope, $mdDialog, $mdSidenav)
{



    $scope.toggleList = function()
    {
        $mdSidenav('left').toggle();
    }
    $scope.toggleConfig = function()
    {
        $mdSidenav('config').toggle();
    }

    $scope.setTemplate = function(tpl)
    {
		//alert(tpl);
        $scope.template = 'App/View/' + tpl + '.html';
    }
	$scope.loadModel = function(model)
    {
	
        $scope.model = $scope.models[model];
		
		$scope.setTitle($scope.model.label);
		$scope.setTemplate('abm');
    }
	$scope.setTitle = function(title)
	{
		$scope.title = title;	
	}
	$scope.getTitle = function()
	{
		return $scope.title;	
	}
	
	
    $scope.setTemplate('dashboard');
    $scope.setTitle('Dashboard');
	
	$scope.menu = [
		{label:"Productos", icon:"shield", model:"product"},
		{label:"Categorias", icon:"tablet", model:"category"},
		{label:"Mensajes", icon:"notification", model:"message"},
	];
	
	$scope.models = {
		product:{
			label:"Productos",
			list:{},
			form:{}
		},
		category:{
			label:"Categorias",
			list:{},
			form:{}
		},
		message:{
			label:"Mensajes",
			list:{},
			form:{}
		},
	};
	

};

