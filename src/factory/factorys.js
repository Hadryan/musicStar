
		APP.factory('GetService', ['$http', function ($http) {
			return {
				Get : function(_url, _data, callback){
					$http({method:'GET', url:_url, params: _data}).
						success(function(data, status, headers, config) {
							callback(null,data);
						}).
						error(function(data, status, headers, config) {
							callback(data);
						});					
				}
			};
		}]);

		APP.factory('TrackService', ['$rootScope', 'GetService', function ($rootScope, $request) {
			return {
				MudaMusica : function(_id){
					$request.Get('action.php',{action:'getMusica',id: _id}, function(err, results){
						$rootScope.$broadcast("Music_Changed", results);
					});
				}
			};
		}]);