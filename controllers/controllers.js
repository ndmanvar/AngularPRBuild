
app.controller('controller', function ($scope, service) {

    init();

    function init() {
        $scope.data = service.getData();
    }

    $scope.insertData = function () {
        var data1 = $scope.newData.data1;
        var data2 = $scope.newData.data2;
        service.insertData(data1, data2);
        $scope.newData.data1 = '';
        $scope.newData.data2 = '';
    };
    $scope.data = data;
});
