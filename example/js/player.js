document.addEventListener("DOMContentLoaded", function(event){ 
assetPath = './tracks/';
slapSound = 'tr1203055.wav';

build_player();

//h_play = document.querySelector('#hud_play');
//h_play.addEventListener('click', e => {_trackPlay();});

function build_player(){
	mPlayer = document.querySelector('#player');
	if(mPlayer){
		var can = document.querySelector('.media_tumb');
		mode = mPlayer.getAttribute('mode');
		switch(mode){
			case 'min':
				//graf_canva(can);
				console.log('min');
				break;
			case 'max':
				//graf_canva(can);
				console.log('max')
				break;
		}
		
	}	
}

});