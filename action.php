<?php
	include('integracao.php');
	$integracao = new Integracao();

	$act = $_GET['action'];
	if ($act == 'getPesquisa'){
		$texto = $_GET['texto'];
		echo $integracao->GetPesquisa($texto);
	};	
	if ($act == 'getRadios'){
		echo $integracao->GetRadios();
	};
	if ($act == 'getMusicasByRadio'){
		$id = (int)$_GET['id'];
		echo $integracao->GetMusicasByRadio($id);
	};	
	if ($act == 'getGeneros'){
		echo $integracao->GetGeneros();
	};
	if ($act == 'getArtistasByGenero'){
		$id = (int)$_GET['id'];
		echo $integracao->GetArtistasByGenero($id);
	};
	if ($act == 'getAlbunsByArtist'){
		$id = (int)$_GET['id'];
		echo $integracao->GetAlbunsByArtist($id);
	};	
	if ($act == 'getAlbum'){
		$id = (int)$_GET['id'];
		echo $integracao->GetAlbum($id);
	};	
	if ($act == 'getMusica'){
		$id = (int)$_GET['id'];
		echo $integracao->GetMusica($id);
	};			
?>