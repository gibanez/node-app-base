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
};