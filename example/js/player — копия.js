document.addEventListener("DOMContentLoaded", function(event){ 
assetPath = './tracks/';
slapSound = 'tr1203055.wav';

h_play = document.querySelector('#hud_play');

build_player();
h_play.addEventListener('click', e => {_trackPlay();});


function build_player(){
	ic_play = document.querySelector('#player');
	if(ic_play){
		var can = document.querySelector('.media_tumb');
		mode = ic_play.getAttribute('mode');
		switch(mode){
			case 'min':
				graf_canva(can);
				console.log('min');
				break;
			case 'max':
				graf_canva(can);
				console.log('max')
				break;
		}
	}	
}
function graf_canva(can){
	canvas = can;
	const { width, height } = canvas.getBoundingClientRect();
	ctx = canvas.getContext('2d');
	canvas.width  = width; //900;
	canvas.height = height; //75;	
	/*
	50 для вверха
	25 для низа
	*/
	console.log(width+'-=-'+height);
	for(var xi = 1; xi <= canvas.width; xi+=4){
		ctx.beginPath();
		ctx.lineWidth = 2.1;
		imax = 75;
		imin = 45;
		ctx.strokeStyle = "#2b2b2b";
		pilk = Math.ceil(Math.random()*(imax - imin))+imin; //рандом число от 55 - 90
		punch = canvas.height-pilk;
		//console.log(pilk); //25
		//console.log(punch); //50
		ctx.moveTo(xi+2, canvas.height-25);
		ctx.lineTo(xi+2, punch);
		ctx.closePath();
		ctx.stroke();
	}
	for(var xj = 1; xj <= canvas.width; xj+=4){
		ctx.beginPath();
		ctx.lineWidth = 2.2;
		jmax = 22;
		jmin = 5;
		ctx.strokeStyle = "rgb(190 190 190 / 85%)";
		tilk = Math.round(Math.random()*(jmax - jmin))+jmin; //рандом число от 10 - 25
		tunch = canvas.height-tilk;
		//console.log(tunch);
		ctx.moveTo(xj+2, canvas.height-25);
		ctx.lineTo(xj+2, tunch);
		ctx.closePath();
		ctx.stroke();
	}
}
function _trackPlay(){
	ico_button = document.querySelector('.tr_play');
	cn_pl = ico_button.classList.toggle('play');
	var snd = new Audio(assetPath+slapSound);
	if(cn_pl){
		var check_im = ico_button.querySelector('img').setAttribute('src','img/pause.png');		
		snd.play();
	}else{
		var check_im = ico_button.querySelector('img').setAttribute('src','img/play.png');		
		snd.pause();
	}
}
});