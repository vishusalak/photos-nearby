app.controller('mainController',function(apiService,$scope) {


    $scope.loadingImages = false;

    $scope.latLng = {
        lat : null,
        lng : null
    };

    //console.log('controllerinitialised');
    $scope.media = null;

    $scope.getMedia = function(){

        $scope.loadingImages = true;
        //console.log('getting images...');
        apiService.getMediaNearBy($scope.latLng).then(function(res){
            $scope.loadingImages = false;
            $scope.media = res.data.data;
        });

    };



});

