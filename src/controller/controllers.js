		APP.controller('FormPesquisaCtrl', ['$scope','$location', function ($scope, $location) {
			$scope.texto = '';
			$scope.Pesquisa = function(){
				$location.path('/pesquisa/' + $scope.texto);
				return false;
			};
			
		}]);

		APP.controller('GeneroCtrl', ['$scope','GetService', function ($scope, $request) {
			$scope.generos = [];
			$request.Get('action.php',{action:'getGeneros'}, function(err, results){
				$scope.generos = results.data;
			});
		}]);

		APP.controller('GeneroViewCtrl', ['$scope','$routeParams','GetService', function ($scope, $routeParams, $request) {
			$scope.id = $routeParams.id;
			$scope.artistas = [];
			$request.Get('action.php',{action:'getArtistasByGenero',id: $routeParams.id}, function(err, results){
				if (!err){
					$scope.artistas = results.data;
				};
			});
		}]);

		APP.controller('ArtistaViewCtrl', ['$scope','$routeParams','GetService', function ($scope, $routeParams, $request) {
			$scope.id = $routeParams.id;
			$scope.albuns = [];
			$request.Get('action.php',{action:'getAlbunsByArtist',id: $routeParams.id}, function(err, results){
				if (!err){
					$scope.albuns = results.data;
				};
			});
		}]);

		APP.controller('RadioViewCtrl', ['$scope','$routeParams','GetService','TrackService', function ($scope, $routeParams, $request, $track) {
			$scope.id = $routeParams.id;
			$scope.musicas = [];
			$request.Get('action.php',{action:'getMusicasByRadio',id: $routeParams.id}, function(err, results){
				if (!err){
					$scope.musicas = results.data;
				};
			});
			$scope.Select = function(_id){
				$track.MudaMusica(_id);
			};
		}]);		

		APP.controller('AlbumViewCtrl', ['$scope','$routeParams','GetService','TrackService', function ($scope, $routeParams, $request, $track) {
			$scope.id = $routeParams.id;
			$scope.dados = null;
			$request.Get('action.php',{action:'getAlbum',id: $routeParams.id}, function(err, results){
				if (!err){
					$scope.dados = results;
				};
			});
			$scope.Select = function(_id){
				$track.MudaMusica(_id);
			};
		}]);

		APP.controller('PesquisaCtrl', ['$scope','$routeParams','GetService', function ($scope, $routeParams, $request) {
			$scope.texto = $routeParams.texto;
			$scope.artistas = [];
			$scope.musicas = [];
			$scope.albuns = [];
			$request.Get('action.php',{action:'getPesquisa',texto: $routeParams.texto}, function(err, results){
				if (!err){
					$scope.artistas = results.artists.data;
					$scope.musicas = results.tracks.data;
					$scope.albuns = results.albums.data;
				};
			});
		}]);

		APP.controller('TrackCtrl', ['$scope', function ($scope) {
			$scope.id = 0;
			$scope.artista = 'Nenhum artista selecionado';
			$scope.musica = 'Nenhuma música selecionada';
			$scope.src = '';
			$scope.$on('Music_Changed', function(e, data){
				$scope.id = data.id;
				$scope.artista = data.artist.name;
				$scope.musica = data.title;
				var audio = document.getElementById('audioCTRL');
				audio.setAttribute("src",data.preview);
				audio.load(); 	
				audio.play();
				window.scrollTo(0);			
			});
		}]);

		APP.controller('RadiosCtrl', ['$scope','GetService', function ($scope, $request) {
			$scope.radios = [];
			$request.Get('action.php',{action:'getRadios'}, function(err, results){
				if (!err){
					$scope.radios = results.data;
				};
			});

		}]);