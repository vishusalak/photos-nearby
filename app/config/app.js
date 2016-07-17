var app = angular.module('app',[])


    .config(function($locationProvider,$httpProvider){

        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;


        $locationProvider.html5Mode(true);
        //console.log("appInitialized");

    })

    .value('distance', 1000 )                                                          // Radius of the area in which instagram will search images in meters
    .value('baseUrlInsta','https://crossorigin.me/https://api.instagram.com/v1/')      // base url instagram api with a proxy server
    .value('accessTokenInsta','3526363720.6d51b61.d94d294e80454f71b0d47f64fe5ff69f')   // instagram access token
    .value('accessTokenGoogle' , 'AIzaSyCGxc1R2iqgqbH8aChInIz98nfvW9ZO0WI');           // google map javascript api access token



