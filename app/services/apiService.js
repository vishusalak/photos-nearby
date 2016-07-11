app.service('apiService',function($http,baseUrlInsta,distance,accessTokenInsta){

    var apiService = this;
    //console.log('apisloaded');

    apiService.getMediaNearBy = function(latLng){

        return $http.get(baseUrlInsta + 'media/search',{params : {  "lat" : latLng.lat ,
                                                                    "lng" : latLng.lng,
                                                                    "access_token" : accessTokenInsta, 
                                                                    "distance" : distance
                                                                 }
                                                        }
        ) ;
    };







});

