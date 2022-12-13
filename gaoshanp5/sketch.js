
//定义变量
//Sound--声音, amplitude--振幅
let Sound, amplitude;
//1.预读器（新建函数用来读取上传的音频）
function preload(){
  Sound = loadSound('gs.mp3');
  img=loadImage("qljst.png");
}


f = 0;
b = 300;
y = 150;
distance = 0;

function setup() {
  createCanvas(4000,150);
  amplitude = new p5.Amplitude();
  //将振幅生成线
  //Sound.play();
  colorMode(HSB);
  background(35,45,80);
  //noLoop();
  stroke(0);
  for(i=0;i<100;i++){
  	stroke(35,45,80);
  	line(1, i, 4000, i);
  }
  for(j=75;j<100;j++){
  	let m = map(j,75,100,0,100);
  	stroke(130,35,60,m/100);
  	line(1, j, 4000, j);
  }
  for(k=100;k<=150;k++){
  	stroke(130,35,60);
  	line(1, k, 4000, k);
  }
  for(l=0;l<=150;l++){
    stroke(35,20,98);
    line(1, l, 120, l);
  }
  image(img, 0, 0, 120, 150);//千里江山图文字
  fill(6,60,100);//红色印章
  noStroke();
  rect(95, 125, 15, 15);

  
  stroke(126);

  soundplay();
  
}

function draw() {

	let level = amplitude.getLevel();
    //振幅是0-1的，画布为400x400，振幅最高不能超过400
    let r = map(level,0,1,0,5);
    let H = map(r*100,33,90,0,230);
    let B = map(r*100,1,100,80,100);

	if(H>=230){
		H=230;
	}

	v=vertex;
	f++;
	
	fill(H,60-r*4,B);
	noStroke();


	if (r >= 0.4){
		beginShape();

		for(x=0;x<b;++x)
			v(x+distance,y-50/(1+pow(x-150,6)/8e6)*r*noise(x/50+f/50+y/50)*2);

		//v(x,1e4);
		endShape();
	}

	distance += 0.2;
    y += level-0.04;
    if(y>=150){
    	y=150;
    }else if(y<=75){
    	y=75;
    }
	/*for(y=100;y<b;y+=5) {
		beginShape();
		for(x=0;x<b;++x)
			v(x,y-80/(1+pow(x-150,4)/8e6)*r);
		v(x,1e4);
		endShape();
	}*/
}


function soundplay(){
  Sound.play();
}


//4.点击按钮播放/停止
/*function mousePressed(){
  if(Sound.isPlaying()){
    Sound.pause();
  }else{
    Sound.play();
    //background(255,255,0);
  }
}

function mouseClicked() {
   if(Sound.isPlaying()){s
     Sound.pause();
   }else{
     Sound.play();
     //background(255,255,0);
  }
}*/
