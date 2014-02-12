<?php

Class Integracao{
	protected $url = 'http://api.deezer.com/';

	private function Request($url){
		$result = file_get_contents($url, false);
		return $result;
	}

	public function GetPesquisa($q){
		$url = $this->url.'search/autocomplete/?q='.$q;
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetGeneros(){
		$url = $this->url.'genre';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetArtistasByGenero($id){
		$url = $this->url.'genre/'.$id.'/artists';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetRadios(){
		$url = $this->url.'radio';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetRadiosByGenero($id){
		$url = $this->url.'genre/'.$id.'/radios';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetMusicasByRadio($id){
		$url = $this->url.'radio/'.$id.'/tracks';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetAlbunsByArtist($id){
		$url = $this->url.'artist/'.$id.'/albums';
		$retorno = $this->Request($url);
		return $retorno;
	}

	public function GetAlbum($id){
		$url = $this->url.'album/'.$id;
		$retorno = $this->Request($url);
		return $retorno;
	}	

	public function GetMusica($id){
		$url = $this->url.'track/'.$id;
		$retorno = $this->Request($url);
		return $retorno;
	}	

};

?>