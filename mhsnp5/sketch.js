
//定义变量
//Sound--声音, amplitude--振幅
let Sound, amplitude;
//1.预读器（新建函数用来读取上传的音频）
let fft;

function preload(){
  Sound = loadSound('mhsn.mp3');
}


angle = 0.0;
offset = 300;
scalar = 2;
speed = 1;
n =0;


function setup() {
  createCanvas(600,600);
  amplitude = new p5.Amplitude();
  //将振幅生成线
  //Sound.play();
  colorMode(HSB);
  background(30,7,96);

  fft = new p5.FFT();
  frameRate(100);//变化频率


  soundplay();
  
}

function draw() {
   let waveform = fft.waveform();

  



if(waveform[0]*10<1){//枝
    x = offset + cos(angle)*scalar;
    y = offset + sin(angle)*scalar;
    fill(waveform[0]*1000);
    strokeWeight(0);
    ellipse(x,y,waveform[0]*10,waveform[0]*10);

}else{//梅花
    x = offset + cos(angle)*(scalar+pow(-1,n)*waveform[0]*5);//左右绽放梅花
    y = offset + sin(angle)*(scalar+pow(-1,n)*waveform[0]*5);
    fill(359-waveform[0]*100,80-waveform[0]*100,96);
    strokeWeight(0);
    ellipse(x,y,waveform[0]*20,waveform[0]*20);
}
    
    n++;
    scalar += 0.01;
    angle += 0.01;

	
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
