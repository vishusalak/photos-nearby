app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {

            //console.log('creating MAP');

            //Loading MAP
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 28.635308, lng: 77.22496},
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            //CREATING MARKER
            var marker = new google.maps.Marker({
                draggable: true,
                position: {lat: 28.635308, lng: 77.22496},
                map: map
            });

            //LOADING GEOCODER
            var geocoder = new google.maps.Geocoder;

            //EVENT LISTENER FOR MARKER MOVEMENT
            google.maps.event.addListener(marker, 'dragend', function (event) {

                var lat = marker.position.lat();
                var lng = marker.position.lng();

                //GETTING PLACE DETAILS BASED ON LAT LONG
                geocoder.geocode({'location': {"lat" : lat, "lng" : lng}}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            scope.$apply(function() {
                                model.$setViewValue(results[1].formatted_address);
                                scope.latLng.lat = marker.position.lat();
                                scope.latLng.lng = marker.position.lng();
                                scope.getMedia();
                            });
                        } else {
                            window.alert('No results found');
                        }
                    } else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });

            });

            // -------------------- Previous Code (was using a input query to search images near a location) --------------------------


            //Create the search box and link it to the UI element.
            //var input = element[0];
            //var searchBox = new google.maps.places.SearchBox(input);


            //
            ////Bias the SearchBox results towards current map's viewport.
            //map.addListener('bounds_changed', function() {
            //    searchBox.setBounds(map.getBounds());
            //});
            //
            //

            //var markers = [];
            ////Listen for the event fired when the user selects a prediction and retrieve
            ////more details for that place.
            //searchBox.addListener('places_changed', function() {
            //    var places = searchBox.getPlaces();
            //
            //    if (places.length == 0) {
            //        return;
            //    }
            //
            //    // Clear out the old markers.
            //    markers.forEach(function(marker) {
            //        marker.setMap(null);
            //    });
            //    markers = [];
            //
            //    // For each place, get the icon, name and location.
            //    var bounds = new google.maps.LatLngBounds();
            //    places.forEach(function(place) {
            //        var icon = {
            //            url: place.icon,
            //            size: new google.maps.Size(71, 71),
            //            origin: new google.maps.Point(0, 0),
            //            anchor: new google.maps.Point(17, 34),
            //            scaledSize: new google.maps.Size(25, 25)
            //        };
            //
            //        // Create a marker for each place.
            //        markers.push(new google.maps.Marker({
            //            draggable: true,
            //            map: map,
            //            icon: icon,
            //            title: place.name,
            //            position: place.geometry.location
            //        }));
            //
            //        //var latlng = new google.maps.LatLng(-24.397, 140.644);
            //
            //        //marker.postion = place.geometry.location;
            //        //marker.setMap(null);
            //        //
            //
            //        scope.$apply(function() {
            //            model.$setViewValue(element.val());
            //            scope.latLng.lat = place.geometry.location.lat();
            //            scope.latLng.lng = place.geometry.location.lng();
            //            scope.getMedia();
            //        });
            //
            //        if (place.geometry.viewport) {
            //            // Only geocodes have viewport.
            //            bounds.union(place.geometry.viewport);
            //        } else {
            //            bounds.extend(place.geometry.location);
            //        }
            //    });
            //
            //
            //    map.fitBounds(bounds);
            //});


        }
    };
});
