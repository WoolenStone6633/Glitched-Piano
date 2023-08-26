let c3;
let db3;
let d3;
let eb3;
let e3;
let f3;
let gb3;
let g3;
let ab3;
let a3;
let bb3;
let b3;
let c4;
let db4;
let d4;
let eb4;
let e4;
let f4;
let gb4;
let g4;
let ab4;
let a4;
let bb4;
let b4;
let c5;
let db5;
let d5;
let eb5;
let e5;
let f5;
let gb5;
let g5;
let ab5;
let a5;
let bb5;
let b5;
let c6;
let db6;
let d6;
let eb6;
let e6;
let goat;

let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let image11;
let imgae12;

function preload() {
  c3 = loadSound("Piano_Keys/39169__jobro__piano-ff-022.wav");
  db3 = loadSound("Piano_Keys/39170__jobro__piano-ff-023.wav");
  d3 = loadSound("Piano_Keys/39171__jobro__piano-ff-024.wav");
  eb3 = loadSound("Piano_Keys/39172__jobro__piano-ff-025.wav");
  e3 = loadSound("Piano_Keys/39173__jobro__piano-ff-026.wav");
  f3 = loadSound("Piano_Keys/39174__jobro__piano-ff-027.wav");
  gb3 = loadSound("Piano_Keys/39175__jobro__piano-ff-028.wav");
  g3 = loadSound("Piano_Keys/39176__jobro__piano-ff-029.wav");
  ab3 = loadSound("Piano_Keys/39177__jobro__piano-ff-030.wav");
  a3 = loadSound("Piano_Keys/39178__jobro__piano-ff-031.wav");
  bb3 = loadSound("Piano_Keys/39179__jobro__piano-ff-032.wav");
  b3 = loadSound("Piano_Keys/39180__jobro__piano-ff-033.wav");
  c4 = loadSound("Piano_Keys/39181__jobro__piano-ff-034.wav");
  db4 = loadSound("Piano_Keys/39182__jobro__piano-ff-035.wav");
  d4 = loadSound("Piano_Keys/39183__jobro__piano-ff-036.wav");
  eb4 = loadSound("Piano_Keys/39184__jobro__piano-ff-037.wav");
  e4 = loadSound("Piano_Keys/39185__jobro__piano-ff-038.wav");
  f4 = loadSound("Piano_Keys/39186__jobro__piano-ff-039.wav");
  gb4 = loadSound("Piano_Keys/39187__jobro__piano-ff-040.wav");
  g4 = loadSound("Piano_Keys/39188__jobro__piano-ff-041.wav");
  ab4 = loadSound("Piano_Keys/39189__jobro__piano-ff-042.wav");
  a4 = loadSound("Piano_Keys/39190__jobro__piano-ff-043.wav");
  bb4 = loadSound("Piano_Keys/39191__jobro__piano-ff-044.wav");
  b4 = loadSound("Piano_Keys/39193__jobro__piano-ff-045.wav");
  c5 = loadSound("Piano_Keys/39194__jobro__piano-ff-046.wav");
  db5 = loadSound("Piano_Keys/39195__jobro__piano-ff-047.wav");
  d5 = loadSound("Piano_Keys/39196__jobro__piano-ff-048.wav");
  eb5 = loadSound("Piano_Keys/39197__jobro__piano-ff-049.wav");
  e5 = loadSound("Piano_Keys/39198__jobro__piano-ff-050.wav");
  f5 = loadSound("Piano_Keys/39199__jobro__piano-ff-051.wav");
  gb5 = loadSound("Piano_Keys/39200__jobro__piano-ff-052.wav");
  g5 = loadSound("Piano_Keys/39201__jobro__piano-ff-053.wav");
  ab5 = loadSound("Piano_Keys/39202__jobro__piano-ff-054.wav");
  a5 = loadSound("Piano_Keys/39203__jobro__piano-ff-055.wav");
  bb5 = loadSound("Piano_Keys/39204__jobro__piano-ff-056.wav");
  b5 = loadSound("Piano_Keys/39205__jobro__piano-ff-057.wav");
  c6 = loadSound("Piano_Keys/39206__jobro__piano-ff-058.wav");
  db6 = loadSound("Piano_Keys/39207__jobro__piano-ff-059.wav");
  d6 = loadSound("Piano_Keys/39208__jobro__piano-ff-060.wav");
  eb6 = loadSound("Piano_Keys/39209__jobro__piano-ff-061.wav");
  e6 = loadSound("Piano_Keys/39210__jobro__piano-ff-062.wav");
  goat = loadSound("Images/Goat Scream.mp3");
  
  image1 = loadImage("Images/11. Messed with code (character deleting).JPG");
  image2 = loadImage("Images/3. Messed with code (character deleting) 2.jpg");
  image3 = loadImage("Images/9. Messed with code (image code into another image) 1.jpg");
  image4 = loadImage("Images/7. Messed with code (deleted chunks) 1.JPG");
  image5 = loadImage("Images/6. Messed with code (random deleting) 1.jpg");
  image6 = loadImage("Images/2. Messed with code (character deleting) 1.jpg");
  image7 = loadImage("Images/15. Messed with code (character replacement) 3.JPG");
  image8 = loadImage("Images/14. Messed with code (character replacement) 2.JPG");
  image9 = loadImage("Images/13. Messed with code (character replacement) 1.jpg");
  image10 = loadImage("Images/12. Messed with code (random deleting) 2.jpg");
  image11 = loadImage("Images/10. Messed with code (image code into another image) 2.jpg");
  
}

let x = 31;
let y = 410; //362 for canvas size of 1000, 500
let w = 37; //37
let h = 100;
let whiteKeys = 24;
let blackKeys = 23;
let wPress;
let bPress;

let heightt;
let spectrum;
let waveform;
let fft1
let fft2;
let controller;
let size;
let count;
let num;
let sum;
let pressed;
let array1;
let array2;
let colorArray;
let keyPress;
let visualizerOff;
let visualizer_1;
let visualizer_2;
let visualizer_3;
let visualizer_4;
let muteBut;
let volume;
let soundFile;
let recording;
let recordBut;
let recorded;
let playBut;
let play;

let glitch;
let arrayX;
let arrayY;

function setup() {
  createCanvas(1000, 550);
  
  fft1 = new p5.FFT(0.8, 512);
  fft2 = new p5.FFT(1, 512);
  soundFile = new p5.SoundFile();
  recorder = new p5.SoundRecorder();
  size = 120;
  count = 0;
  sum = 0;
  array1 = [];
  array2 = [];
  colorArray = [];
  randomX = [];
  randomY = [];
  visualizerOff = createButton("Visualizer Off");
  visualizerOff.mousePressed(controllerFunc0);
  visualizer_1 = createButton("Visualizer 1");
  visualizer_1.mousePressed(controllerFunc1);
  visualizer_2 = createButton("Visualizer 2");
  visualizer_2.mousePressed(controllerFunc2);
  visualizer_3 = createButton("Visualizer 3");
  visualizer_3.mousePressed(controllerFunc3);
  visualizer_4 = createButton("Ȇ̥r̳̮͑̀R͍͇͆̃ǫ̙͑͡R̹̬̀̊");
  visualizer_4.mousePressed(controllerFunc4);
  muteBut = createButton("Mute");
  muteBut.mousePressed(muteFunc);
  recordBut = createButton("Record");
  recordBut.mousePressed(recordFunc);
  playBut = createButton("Play").hide();
  playBut.mousePressed(playFunc);
  
  glitch = false;
  recording = false;
  play = false;
  volume = 100;
  
  randomNumArray1(array1);
  randomNumArray2(array2);
  randomColorArray(colorArray);
  randomXfunc(randomX);
  randomYfunc(randomY);
}

function draw() {
  background(160);
  
  fill(0);
  if (pressed == null) {
    textSize(20);
    text('Found a bug? Report it to the Dev!', 20, 40);
  }
  
  heightt = 0;
  spectrum = fft1.analyze();
  waveformm = fft2.waveform();
  
  if (controller == 2) {
    visualizer2();
  }

  //draws the back rectangle
  fill(100);
  stroke(0);
  rect(x - w / 2, y + h * 1.34, w * (whiteKeys + 1) + whiteKeys * 2, -h * 2.45 + - 0, 2);
  noStroke();

  fill(255);
  noStroke();
  strokeWeight(1);

  //draws the white keys
  for (let i = 0; i < whiteKeys; i++) {
    if (i == keyPress) {
        if(keyIsPressed || mouseIsPressed) {
          fill(200);
        }
        else {
          keyPress = null; //this else statement took me 30 minutes to figure out
          wPress = null;
          bPress = null;
        }
      }
    rect(x + i * (w + 2), y - (h / 1.5), w, h + (h / 1.5), 3);
    fill(255);
  }

  fill(0);
  noStroke();

  //draws the black keys
  for (let i = 24; i < blackKeys * 2 + 1; i++) {
    if (i == keyPress) {
      if (keyIsPressed || mouseIsPressed) {
        fill(55);
      }
      else {
        keyPress = null; //this else statement took me 30 minutes to figure out
        bPress = null;
        wPress = null;
      }
    }
    rect((x + w / 2) + (i - 24) * (w + 2), y - h / 1.5, w, h, 3);

    if (i == 25 || i == 29 || i == 32 || i == 36 || i == 39 || i == 43) {
      noFill();
      noStroke();
    } else {
      fill(0);
    }
  }

  //Places the visualizer
  if (controller == 1) {
    visualizer1();
  } if (controller == 3) {
    visualizer3();
  }
  
  if (controller == 0) {
    if (wPress == 15) {
      image(image1, 0, 0);
    }
  }
  randomStuff();
}

function randomStuff() {
  if (sum == 103) {
    image(image2, 0, 0);
  } else if (sum == 179) {
      goat.play();
      sum = 0;
  }
  
  if (soundFile.isPlaying() != true) {
    playBut.html("play");
    play = false;
  }
  
  keyboardText();
  
  if (controller == 4) {
    visualizer4();
  }
  
  if (glitch) {
    visualizerOff.html("V̹̙͘͞ị͔͛͋s͉̟̽̃ǘ̡̥͛á̻l̯̆i̢̙̒͗z̀͟e͔̕r̳͡ ̠̥͑̏Ǫ̙̔̈f͈̽f̦͚̾́");
    visualizer_1.html("V̭̕ī͔s̟̹̅̚ṷ̭̇͠a̡͎̓͞l̟̪͌̅i͖͊ź̡̗̈e͎̣̒͝ŗ͇͒͋ ͈̪̽̾1͎̈́");
    visualizer_2.html("V̲͕̔͠i̻̮̒̽s̳̖̐̽u̱͑a̬͡l̜͋i͇̔z̟͈͂̀e̥̊r̡̤̉͂ ͉͙̓͒2̩̳̎͠");
    visualizer_3.html("V̖͚͐̿ï̤̥̽s̻̬̃͝ṵ̠̆͑å̖̦͑l͖̍í̯̍ͅz̞̈ẽ̳͕͝ȓ͎͆͢ ̯̓3̙̠͌͐");
    if (volume == 0) {
    muteBut.html("U̱͍͋̕n̖̔͂͢-̖̆M̨̛̤̂ũ̘͉̓t͍͛e̠̦̽̍");
    } else {
    muteBut.html("M̨͎̅̚u͇͊t͓͂ȩ̛͎͆");
    }
    recordBut.html("X");
    playBut.html("X");
  } else {
    visualizerOff.html("Visualizer Off");
    visualizer_1.html("Visualizer 1");
    visualizer_2.html("Visualizer 2");
    visualizer_3.html("Visualizer 3");
    if (volume == 0) {
    muteBut.html("Un-Mute");
  } else {
    muteBut.html("Mute");
  }
    if (recording == true) {
      recordBut.html("Stop Recording");
    } else {
      recordBut.html("Record");
    }
    if (play == true) {
      playBut.html("Pause");
    } else {
      playBut.html("Play");
    }
  }
}

function recordFunc() {
  if (glitch == false) {
    if (recording == false) {
      recorder.record(soundFile);
      recording = true;
      recordBut.html("Stop Recording");
    } else {
      recorder.stop();
      recording = false;
      recordBut.html("Record");
      playBut.show();
    }
  }
}

function playFunc() {
  if (glitch == false) {
    if (play == false) {
      soundFile.play();
      playBut.html("Pause");
      play = true;
    } else {
      soundFile.pause();
      playBut.html("Play");
      play = false;
    }
  }
}


function muteFunc() {
  if (glitch == false) {
    if (volume == 100) {
      masterVolume(0);
      volume = 0;
      muteBut.html("Un-Mute");
    } else {
      masterVolume(1);
      volume = 100;
      muteBut.html("Mute");
    }
  }
}

function mouseReleased() {
  if (sum > 200) {
    sum = 0;
  }
  else {
    if (wPress != null) {
    sum += wPress;
    }
    if (bPress != null) {
    sum += bPress;
    }
  }
}

function visualizer1() {
  glitch = false;
  
  if ((spectrum[22] / 0.88) > spectrum[20] && (spectrum[22] / 0.88) > spectrum[18] && (spectrum[22] / 0.88) > spectrum[17] && (spectrum[22] / 0.88) > spectrum[15] && (spectrum[22] / 0.88) > spectrum[13] && (spectrum[22] / 0.88) > spectrum[11]) {
    heightt = spectrum[22] / 0.88;
  } else if (spectrum[20] > spectrum[18] && spectrum[20] > spectrum[17] && spectrum[20] > spectrum[15] && spectrum[20] > spectrum[13] && spectrum[20] > spectrum[11]) {
    heightt = spectrum[20];
  } else if (spectrum[18] > spectrum[17] && spectrum[18] > spectrum[15] && spectrum[18] > spectrum[13] && spectrum[18] > spectrum[11]) {
    heightt = spectrum[18];
  } else if (spectrum[17] > spectrum[15] && spectrum[17] > spectrum[13] && spectrum[17] > spectrum[11]) {
    heightt = spectrum[17];
  } else if (spectrum[15] > spectrum[13] && spectrum[15] > spectrum[11]) {
    heightt = spectrum[15];
  } else if (spectrum[13] > spectrum[11]) {
    heightt = spectrum[13];
  } else {
    heightt = spectrum[11];
  }

  //draws the back rectangle
  fill(100);
  stroke(0);
  rect(x - w / 2, y + h * 1.34, w * (whiteKeys + 1) + whiteKeys * 2,  -h * 2.45 - heightt, 2);
  noStroke();
  
  fill(255);
  noStroke();
  strokeWeight(1);
  
  //draws the white keys
  fill(255);
  for (let i = 0; i < whiteKeys; i++) {
    if (i == wPress) {
      if (keyIsPressed || mouseIsPressed){
        fill(200);
      }
      else{
        wPress = null; //this else statement took me 30 minutes to figure out
      }
    }
    if (i == 23) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5)  - spectrum[22], 3);
    } else if (i == 22) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[20], 3);
    } else if (i == 21) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[18], 3);
    } else if (i == 20) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[17], 3);
    } else if (i == 19) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[15], 3);
    } else if (i == 18) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[13], 3);
    } else if (i == 17) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[11] * 0.94, 3);
    } else if (i == 16) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[22] / 0.94, 3);
    } else if (i == 15) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[20], 3);
    } else if (i == 14) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[18], 3);
    } else if (i == 13) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[17], 3);
    } else if (i == 12) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[15], 3);
    } else if (i == 11) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[13], 3);
    } else if (i == 10) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[11] * 0.97, 3);
    } else if (i == 9) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[22] / 0.91, 3);
    } else if (i == 8) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[20], 3);
    } else if (i == 7) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[18], 3);
    } else if (i == 6) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[17], 3);
    } else if (i == 5) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[15], 3);
    } else if (i == 4) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[13], 3);
    } else if (i == 3) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[11], 3);
    } else if (i == 2) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[22] / 0.88, 3);
    } else if (i == 1) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[20], 3);
    } else if (i == 0) {
      rect(x + i * (w + 2), y + 100, w, -h - (h / 1.5) - spectrum[18], 3);
    }
    fill(255);
  }
  
  fill(0);
  noStroke();
  
  //draws the black keys
  for (let i = 0; i < blackKeys; i++) {
    if (i == bPress) {
      if (keyIsPressed || mouseIsPressed) {
        fill(55);
      }
      else{
        bPress = null; //this else statement took me 30 minutes to figure out
      }
    }
    
    if (i == 22) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[21] * 0.88, 3);
    } else if (i == 21) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[19] * 0.88, 3);
    } else if (i == 19) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[16] * 0.88, 3);
    } else if (i == 18) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[14] * 0.88, 3);
    } else if (i == 17) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[12] * 0.88, 3);
    } else if (i == 15) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[21] * 0.91, 3);
    } else if (i == 14) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[19] * 0.88, 3);
    } else if (i == 12) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[16] * 0.88, 3);
    } else if (i == 11) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[14] * 0.88, 3);
    } else if (i == 10) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[12] * 0.88, 3);
    } else if (i == 8) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[21] * 0.94, 3);
    } else if (i == 7) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[19] * 0.88, 3);
    } else if (i == 5) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[16] * 0.88, 3);
    } else if (i == 4) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[14] * 0.88, 3);
    } else if (i == 3) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[12] * 0.88, 3);
    } else if (i == 1) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[21] * 0.97, 3);
    } else if (i == 0) {
      rect((x + w / 2) + i * (w + 2), y + 33, w, -h - spectrum[19] * 0.88, 3);
    }

    if (i == 1 || i == 5 || i == 8 || i == 12 || i == 15 || i == 19) {
      noFill();
      noStroke();
    } else {
      fill(0);
    }
  }
}

function visualizer2() {
  glitch = false;
  
  colorMode(HSB, 360, 100, 100, 1);
  for (let i = 0; i < size; i++) {
    fill((colorArray[i] + spectrum[i]) % 360, 100, 100, 0.6);
    ellipse(array1[i], array2[i], 0 +spectrum[i], 0 + spectrum[i + 1]);
  }
  colorMode(RGB);
}

function visualizer3() {
  glitch = false;
  
  colorMode(HSB, 360, 100, 100);
  
  for (let i = 0; i < 512; i++) {
    stroke(map(i, 0, 511, 0, 360), 100, 100);
    rect((i * 1.96) + count, y - 270, 3, -map(waveformm[i], -1, 1, -170, 170));
  } for (let i = 0; i < 512; i++) {
    stroke(map(i, 0, 511, 0, 360), 100, 100);
    rect((i * 1.95) + count, y - 270, 3, map(waveformm[i], -1, 1, -170, 170));
  }

  for (let i = 0; i < 512; i++) {
    stroke(map(i, 0, 511, 0, 360), 100, 100);
    rect(-width + (i * 1.96) + count, y - 270, 3, -map(waveformm[511 - i], -1, 1, -170, 170));
  } for (let i = 0; i < 512; i++) {
    stroke(map(i, 0, 511, 0, 360), 100, 100);
    rect(-width + (i * 1.96) + count, y - 270, 3, map(waveformm[511 - i], -1, 1, -170, 170));
  }

  if (wPress != null) {
    num = map(wPress, 0, 23, 2, 20);
  } else if (bPress != null) {
    num = map(bPress, 0, 22, 2.4, 19.6);
  }

  count += num;
  if(count >= width) {
    count = 0;
  }
  
  colorMode(RGB);
  noStroke();
  //glitch = false;
}

function visualizer4() {
  glitch = true;
  
  mousePressed();
  
  if (keyPress == 0) {
  fill(255);
  image(image1, -1000, -600);
  rect(randomX[0] , randomY[0], w, h + (h / 1.5), 3);
  fill(0);
  text('Z', w / 3 + randomX[0] + wPress * (w + 2), randomY[0] + (h * 1.6));
  } else if (keyPress == 1) {
  fill(255);
  image(image2, -1000, -600, 10000);
  rect(randomX[1], randomY[1], w, h + (h / 1.5), 3);
  fill(0);
  text('X', w / 3 + randomX[1], randomY[1] + (h * 1.6));
  } else if (keyPress == 2) {
  fill(255);
  image(image3, -500, -4000, 2000, 5000);
  rect(randomX[2], randomY[2], w, h + (h / 1.5), 3);
  fill(0);
  text('C', w / 3 + randomX[2], randomY[2] + (h * 1.6));
  } else if (keyPress == 3) {
  fill(255);
  image(image4, -50000, -2300, 100000, 10000);
  rect(randomX[3], randomY[3], w, h + (h / 1.5), 3);
  fill(0);
  text('V', w / 3 + randomX[3], randomY[3] + (h * 1.6));
  } else if (keyPress == 4) {
  fill(255);
  image(image5, 0, -2000, 5000, 10000);
  rect(randomX[4], randomY[4], w, h + (h / 1.5), 3);
  fill(0);
  text('B', w / 3 + randomX[4], randomY[4] + (h * 1.6));
  } else if (keyPress == 5) {
  fill(255);
  image(image6, 0, 0, 100000, 600);
  rect(randomX[5], randomY[5], w, h + (h / 1.5), 3);
  fill(0);
  text('N', w / 3 + randomX[5], randomY[5] + (h * 1.6));
  } else if (keyPress == 6) {
  fill(255);
  image(image7, 0, 0, 5000, 3000);
  rect(randomX[6], randomY[6], w, h + (h / 1.5), 3);
  fill(0);
  text('M', w / 3 + randomX[6], randomY[6] + (h * 1.6));
  } else if (keyPress == 7) {
  fill(255);
  image(image1, 0, 0, 1000, 600);
  rect(randomX[7], randomY[7], w, h + (h / 1.5), 3);
  fill(0);
  textSize(25);
  text(',', w / 3 + randomX[7], randomY[7] + (h * 1.6));
  textSize(18);
  } else if (keyPress == 8) {
  fill(255);
  image(image8, 0, 0, 1000, 600);
  rect(randomX[8], randomY[8], w, h + (h / 1.5), 3);
  fill(0);
  textSize(25);
  text('.', w / 3 + randomX[8], randomY[8] + (h * 1.6));
  textSize(18);
  } else if (keyPress == 9) {
  fill(255);
  image(image8, 0, 0, 10000, 600);
  rect(randomX[9], randomY[9], w, h + (h / 1.5), 3);
  fill(0);
  textSize(22);
  text('/', w / 3 + randomX[9], randomY[9] + (h * 1.6));
  textSize(18);
  } else if (keyPress == 10) {
  fill(255);
  image(image1, 0, 0, 1000, 5000);
  rect(randomX[10], randomY[10], w, h + (h / 1.5), 3);
  fill(0);
  text('Q', w / 3 + randomX[10], randomY[10] + (h * 1.6));
  } else if (keyPress == 11) {
  fill(255);
  image(image9, -4000, 0, 5000, 2400);
  rect(randomX[11], randomY[11], w, h + (h / 1.5), 3);
  fill(0);
  text('W', w / 3 + randomX[11], randomY[11] + (h * 1.6));
  } else if (keyPress == 12) {
  fill(255);
  image(image10, -700, -400, 3000, 2400);
  rect(randomX[12], randomY[12], w, h + (h / 1.5), 3);
  fill(0);
  text('E', w / 3 + randomX[12], randomY[12] + (h * 1.6));
  } else if (keyPress == 13) {
  fill(255);
  image(image7, -2000, -2000, 3000, 3000);
  rect(randomX[13], randomY[13], w, h + (h / 1.5), 3);
  fill(0);
  text('R', w / 3 + randomX[13], randomY[13] + (h * 1.6));
  } else if (keyPress == 14) {
  fill(255);
  image(image11, 0, 0, 4000, 600);
  rect(randomX[14], randomY[14], w, h + (h / 1.5), 3);
  fill(0);
  text('T', w / 3 + randomX[14], randomY[14] + (h * 1.6));
  } else if (keyPress == 15) {
  fill(255);
  image(image8, -9000, 0, 10000, 6000);
  rect(randomX[15], randomY[15], w, h + (h / 1.5), 3);
  fill(0);
  text('Y', w / 3 + randomX[15], randomY[15] + (h * 1.6));
  } else if (keyPress == 16) {
  fill(255);
  image(image1, 0, -4000, 1000, 5000);
  rect(randomX[16], randomY[16], w, h + (h / 1.5), 3);
  fill(0);
  text('U', w / 3 + randomX[16], randomY[16] + (h * 1.6));
  } else if (keyPress == 17) {
  fill(255);
  image(image2, 0, 0, 100000, 600);
  rect(randomX[17], randomY[17], w, h + (h / 1.5), 3);
  fill(0);
  text('I', w / 3 + randomX[17], randomY[17] + (h * 1.6));
  } else if (keyPress == 18) {
  fill(255);
  image(image2, -5000, 0, 10000, 600);
  rect(randomX[18], randomY[18], w, h + (h / 1.5), 3);
  fill(0);
  text('O', w / 3 + randomX[18], randomY[18] + (h * 1.6));
  } else if (keyPress == 19) {
  fill(255);
  image(image11, 0, -1800, 5000, 2400);
  rect(randomX[19], randomY[19], w, h + (h / 1.5), 3);
  fill(0);
  text('P', w / 3 + randomX[19], randomY[19] + (h * 1.6));
  } else if (keyPress == 20) {
  fill(255);
  image(image2, 0, 0, 1000, 60000);
  rect(randomX[20], randomY[20], w, h + (h / 1.5), 3);
  fill(0);
  text('[', w / 3 + randomX[20], randomY[20] + (h * 1.6));
  } else if (keyPress == 21) {
  fill(255);
  image(image3, -10000, 0, 100000, 600);
  rect(randomX[21], randomY[21], w, h + (h / 1.5), 3);
  fill(0);
  text(']', w / 3 + randomX[21], randomY[21] + (h * 1.6));
  } else if (keyPress == 22) {
  fill(255);
  image(image7, -5000, 0, 100000, 600);
  rect(randomX[22], randomY[22], w, h + (h / 1.5), 3);
  } else if (keyPress == 23) {
  fill(255);
  image(image8, -2000, -1200, 3000, 1800);
  rect(randomX[23], randomY[23], w, h + (h / 1.5), 3);
  } else if (keyPress == 24) {
  fill(0);
  image(image1, 0, 0, 1000, 60000);
  rect(randomX[24], randomY[24], w, h, 3);
  fill(255);
  text('S', w / 3 + randomX[24], randomY[24] + h / 1.06);
  } else if (keyPress == 25) {
  fill(0);
  image(image1, 0, -500, 100000, 3000);
  rect(randomX[25], randomY[25], w, h, 3);
  fill(255);
  text('D', w / 3 + randomX[25], randomY[25] + h / 1.06);
  } else if (keyPress == 27) {
  fill(0);
  image(image4, 0, 0, 100000, 600);
  rect(randomX[26], randomY[26], w, h, 3);
  fill(255);
  text('G', w / 3 + randomX[26], randomY[26] + h / 1.06);
  } else if (keyPress == 28) {
  fill(0);
  image(image5, 0, 0, 1000, 60000);
  rect(randomX[27], randomY[27], w, h, 3);
  fill(255);
  text('H', w / 3 + randomX[27], randomY[27] + h / 1.06);
  } else if (keyPress == 29) {
  fill(0);
  image(image5, 0, 0, 100000, 600);
  rect(randomX[28], randomY[28], w, h, 3);
  fill(255);
  text('J', w / 3 + randomX[28], randomY[28] + h / 1.06);
  } else if (keyPress == 31) {
  fill(0);
  image(image6, -5000, 0, 50000, 600);
  rect(randomX[29], randomY[29], w, h, 3);
  fill(255);
  text('L', w / 3 + randomX[29], randomY[29] + h / 1.06);
  } else if (keyPress == 32) {
  fill(0);
  image(image7, 0, 0, 1000, 30000);
  rect(randomX[30], randomY[30], w, h, 3);
  fill(255);
  textSize(23);
  text(';', w / 3 + randomX[30], randomY[30] + h / 1.08);
  textSize(18);
  } else if (keyPress == 34) {
  fill(0);
  image(image8, 0, 0, 100000, 600);
  rect(randomX[31], randomY[31], w, h, 3);
  fill(255);
  text('2', w / 3 + randomX[31], randomY[31] + h / 1.06);
  } else if (keyPress == 35) {
  fill(0);
  image(image8, -5000, 0, 10000, 6000);
  rect(randomX[32], randomY[32], w, h, 3);
  fill(255);
  text('3', w / 3 + randomX[32], randomY[32] + h / 1.06);
  } else if (keyPress == 36) {
  fill(0);
  image(image11, 0, -500, 10000, 30000);
  rect(randomX[33], randomY[33], w, h, 3);
  fill(255);
  text('4', w / 3 + randomX[33], randomY[33] + h / 1.06);
  } else if (keyPress == 38) {
  fill(0);
  image(image5, 0, 0, 65000, 2300);
  rect(randomX[34], randomY[34], w, h, 3);
  fill(255);
  text('6', w / 3 + randomX[34], randomY[34] + h / 1.06);
  } else if (keyPress == 39) {
  fill(0);
  image(image2, -5000, 0, 50000, 1000);
  rect(randomX[35], randomY[35], w, h, 3);
  fill(255);
  text('7', w / 3 + randomX[35], randomY[35] + h / 1.06);
  } else if (keyPress == 41) {
  fill(0);
  image(image4, 0, 0, 1000, 60000);
  rect(randomX[36], randomY[36], w, h, 3);
  fill(255);
  text('9', w / 3 + randomX[36], randomY[36] + h / 1.06);
  } else if (keyPress == 42) {
  fill(0);
  image(image9, -7000, -4000, 15000, 8000);
  rect(randomX[37], randomY[37], w, h, 3);
  fill(255);
  text('0', w / 3 + randomX[37], randomY[37] + h / 1.06);
  } else if (keyPress == 43) {
  fill(0);
  image(image8, -6000, -1000, 17000, 400000);
  rect(randomX[38], randomY[38], w, h, 3);
  fill(255);
  textSize(22);
  text('-', w / 3 + randomX[38], randomY[38] + h / 1.06);
  textSize(18);
  } else if (keyPress == 45) {
  fill(0);
  image(image8, 0, 0, 1000, 6000000);
  rect(randomX[39], randomY[39], w, h, 3);
  } else if (keyPress == 46) {
  fill(0);
  image(image6, 0, 0, 1000, 6000000);
  rect(randomX[40], randomY[40], w, h, 3);
  }
}

//Creates different arrays for visualizer 2
function randomNumArray1(array) {
  for (let i = 0; i < size; i++) {
    array.push(random(width));
  }
}

function randomNumArray2(array) {
  for (let i = 0; i < size; i++) {
    array.push(random(height / 2));
  }
}

function randomColorArray(array) {
  for (let i = 0; i < size; i++) {
    array.push(random(360));
  }
}

function randomXfunc(array) {
  for (let i = 0; i < 41; i++) {
    array.push(random(width - w));
  }
}

function randomYfunc(array) {
  for (let i = 0; i < 41; i++) {
    array.push(random(height - (h + (h / 1.5))));
  }
}

//Triggers the different visualizers
function controllerFunc0() {
  glitch = false;
  controller = 0;
}

function controllerFunc1() {
  controller = 1;
}

function controllerFunc2() {
  controller = 2;
}

function controllerFunc3() {
  controller = 3;
  num = 10;
}

function controllerFunc4() {
  controller = 4;
}

function keyboardText() {
  textSize(18);
  
  for (let i = 0; i < whiteKeys; i++) {
    if (i == 0) {
      text('Z', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 1) {
      text('X', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 2) {
      text('C', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 3) {
      text('V', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 4) {
      text('B', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 5) {
      text('N', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 6) {
      text('M', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 7) {
      textSize(25);
      text(',', w / 3 + x + i * (w + 2), y + (h / 1.06));
      textSize(18);
    } if (i == 8) {
      textSize(25);
      text('.', w / 3 + x + i * (w + 2), y + (h / 1.06));
      textSize(18);
    } if (i == 9) {
      textSize(22);
      text('/', w / 3 + x + i * (w + 2), y + (h / 1.04));
      textSize(18);
    } if (i == 10) {
      text('Q', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 11) {
      text('W', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 12) {
      text('E', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 13) {
      text('R', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 14) {
      text('T', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 15) {
      text('Y', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 16) {
      text('U', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 17) {
      text('I', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 18) {
      text('O', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 19) {
      text('P', w / 3 + x + i * (w + 2), y + (h / 1.04));
    } if (i == 20) {
      text('[', w / 3 + x + i * (w + 2), y + (h / 1.07));
    } if (i == 21) {
      text(']', w / 3 + x + i * (w + 2), y + (h / 1.07));
    }
  }
  
  for (let i = 0; i < blackKeys; i++) {
    fill(255);
    if (i == 0) {
      text('S', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 1) {
      text('D', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 3) {
      text('G', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 4) {
      text('H', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 5) {
      text('J', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 7) {
      text('L', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 8) {
      textSize(23);
      text(';', (x + w / 1.12) + i * (w + 2), y + h / 4);
      textSize(18);
    } if (i == 10) {
      text('2', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 11) {
      text('3', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 12) {
      text('4', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 14) {
      text('6', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 15) {
      text('7', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 17) {
      text('9', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 18) {
      text('0', (x + w / 1.12) + i * (w + 2), y + h / 3.5);
    } if (i == 19) {
      textSize(22);
      text('-', (x + w / 1.12) + i * (w + 2), y + h / 3.8);
      textSize(18);
    }
  }
}

//creates sound when mouse is pressed over certain area
function mousePressed() {
  pressed = 0;
  for (let j = 0; j < whiteKeys; j++) {

    //sounds for white keys
    if (mouseX > x + j * (w + 2) && mouseX < (x + j * (w + 2)) + w && mouseY > (y - (h / 1.5)) + h && mouseY < ((y - (h / 1.5)) + h) + (h / 1.5)) {
      if (j == 0) {
        c3.play();
        wPress = 0; //sends information for key that will be changed
        keyPress = 0;
      }
      if (j == 1) {
        d3.play();
        wPress = 1;
        keyPress = 1;
      }
      if (j == 2) {
        e3.play();
        wPress = 2;
        keyPress = 2;
      }
      if (j == 3) {
        f3.play();
        wPress = 3;
        keyPress = 3;
      }
      if (j == 4) {
        g3.play();
        wPress = 4;
        keyPress = 4;
      }
      if (j == 5) {
        a3.play();
        wPress = 5;
        keyPress = 5;
      }
      if (j == 6) {
        b3.play();
        wPress = 6;
        keyPress = 6;
      }
      if (j == 7) {
        c4.play();
        wPress = 7;
        keyPress = 7;
      }
      if (j == 8) {
        d4.play();
        wPress = 8;
        keyPress = 8;
      }
      if (j == 9) {
        e4.play();
        wPress = 9;
        keyPress = 9;
      }
      if (j == 10) {
        f4.play();
        wPress = 10;
        keyPress = 10;
      }
      if (j == 11) {
        g4.play();
        wPress = 11;
        keyPress = 11;
      }
      if (j == 12) {
        a4.play();
        wPress = 12;
        keyPress = 12;
      }
      if (j == 13) {
        b4.play();
        wPress = 13;
        keyPress = 13;
      }
      if (j == 14) {
        c5.play();
        wPress = 14;
        keyPress = 14;
      }
      if (j == 15) {
        d5.play();
        wPress = 15;
        keyPress = 15;
      }
      if (j == 16) {
        e5.play();
        wPress = 16;
        keyPress = 16;
      }
      if (j == 17) {
        f5.play();
        wPress = 17;
        keyPress = 17;
      }
      if (j == 18) {
        g5.play();
        wPress = 18;
        keyPress = 18;
      }
      if (j == 19) {
        a5.play();
        wPress = 19;
        keyPress = 19;
      }
      if (j == 20) {
        b5.play();
        wPress = 20;
        keyPress = 20;
      }
      if (j == 21) {
        c6.play();
        wPress = 21;
        keyPress = 21;
      }
      if (j == 22) {
        d6.play();
        wPress = 22;
        keyPress = 22;
      }
      if (j == 23) {
        e6.play();
        wPress = 23;
        keyPress = 23;
      }
    } 
    else if (mouseX > x + j * (w + 2) && mouseX < (x + j * (w + 2)) + w / 2.2 && mouseY > (y - (h / 1.5)) && mouseY < y - (h / 1.5) + h ){
      if (j == 0) {
        c3.play();
        wPress = 0;
        keyPress = 0;
      }
      if (j == 3) {
        f3.play();
        wPress = 3;
        keyPress = 3;
      }
      if (j == 7) {
        c4.play();
        wPress = 7;
        keyPress = 7;
      }
      if (j == 10) {
        f4.play();
        wPress = 10;
        keyPress = 10;
      }
      if (j == 14) {
        c5.play();
        wPress = 14;
        keyPress = 14;
      }
      if (j == 17) {
        f5.play();
        wPress = 17;
        keyPress = 17;
      }
       if (j == 21) {
        d6.play();
        wPress = 21;
        keyPress = 21;
      }
    }
    else if (mouseX > x + j * (w + 2) + w / 2.2 && mouseX < (x + j * (w + 2) + w / 2.2) + w / 1.9 && mouseY > y - h / 1.5 && mouseY < (y - h / 1.5) + h) {
      if (j == 2) {
        e3.play();
        wPress = 2;
        keyPress = 2;
      }
      if (j == 6) {
        b3.play();
        wPress = 6;
        keyPress = 6;
      }
      if (j == 9) {
        e4.play();
        wPress = 9;
        keyPress = 9;
      }
      if (j == 13) {
        b4.play();
        wPress = 13;
        keyPress = 13;
      }
      if (j == 16) {
        e5.play();
        wPress = 16;
        keyPress = 16;
      }
      if (j == 20) {
        b5.play();
        wPress = 20;
        keyPress = 20;
      }
      if (j == 23) {
        e6.play();
        wPress = 23;
        keyPress = 23;
      }
    }

    //sounds for black keys
    if (mouseX > (x + w / 2) + j * (w + 2) && mouseX < (x + w / 2) + j * (w + 2) + w && mouseY > y - h / 1.5 && mouseY < (y - h / 1.5) + h) {
      if (j == 0) {
        db3.play();
        bPress = 0;
        keyPress = 24;
      }
      if (j == 1) {
        eb3.play();
        bPress = 1;
        keyPress = 25;
      }
      if (j == 3) {
        gb3.play();
        bPress = 3;
        keyPress = 27;
      }
      if (j == 4) {
        ab3.play();
        bPress = 4;
        keyPress = 28;
      }
      if (j == 5) {
        bb3.play();
        bPress = 5;
        keyPress = 29;
      }
      if (j == 7) {
        db4.play();
        bPress = 7;
        keyPress = 31;
      }
      if (j == 8) {
        eb4.play();
        bPress = 8;
        keyPress = 32;
      }
      if (j == 10) {
        gb4.play();
        bPress = 10;
        keyPress = 34;
      }
      if (j == 11) {
        ab4.play();
        bPress = 11;
        keyPress = 35;
      }
      if (j == 12) {
        bb4.play();
        bPress = 12;
        keyPress = 36;
      }
      if (j == 14) {
        db5.play();
        bPress = 14;
        keyPress = 38;
      }
      if (j == 15) {
        eb5.play();
        bPress = 15;
        keyPress = 39;
      }
      if (j == 17) {
        gb5.play();
        bPress = 17;
        keyPress = 41;
      }
      if (j == 18) {
        ab5.play();
        bPress = 18;
        keyPress = 42;
      }
      if (j == 19) {
        bb5.play();
        bPress = 19;
        keyPress = 43;
      }
      if (j == 21) {
        db6.play();
        bPress = 21;
        keyPress = 45;
      }
      if (j == 22) {
        eb6.play();
        bPress = 22;
        keyPress = 46;
      }
    }
  }
}

function mouseDragged() {
  for (let j = 0; j < whiteKeys; j++) {

    //sounds for white keys
    if (mouseX > x + j * (w + 2) && mouseX < (x + j * (w + 2)) + w && mouseY > (y - (h / 1.5)) + h && mouseY < ((y - (h / 1.5)) + h) + (h / 1.5)) {
      if (j == 0 && keyPress != 0) {
        c3.play();
        wPress = 0; //sends information for key that will be changed
        keyPress = 0;
      }
      if (j == 1 && keyPress != 1) {
        d3.play();
        wPress = 1;
        keyPress = 1;
      }
      if (j == 2 && keyPress != 2) {
        e3.play();
        wPress = 2;
        keyPress = 2;
      }
      if (j == 3 && keyPress != 3) {
        f3.play();
        wPress = 3;
        keyPress = 3;
      }
      if (j == 4 && keyPress != 4) {
        g3.play();
        wPress = 4;
        keyPress = 4;
      }
      if (j == 5 && keyPress != 5) {
        a3.play();
        wPress = 5;
        keyPress = 5;
      }
      if (j == 6 && keyPress != 6) {
        b3.play();
        wPress = 6;
        keyPress = 6;
      }
      if (j == 7 && keyPress != 7) {
        c4.play();
        wPress = 7;
        keyPress = 7;
      }
      if (j == 8 && keyPress != 8) {
        d4.play();
        wPress = 8;
        keyPress = 8;
      }
      if (j == 9 && keyPress != 9) {
        e4.play();
        wPress = 9;
        keyPress = 9;
      }
      if (j == 10 && keyPress != 10) {
        f4.play();
        wPress = 10;
        keyPress = 10;
      }
      if (j == 11 && keyPress != 11) {
        g4.play();
        wPress = 11;
        keyPress = 11;
      }
      if (j == 12 && keyPress != 12) {
        a4.play();
        wPress = 12;
        keyPress = 12;
      }
      if (j == 13 && keyPress != 13) {
        b4.play();
        wPress = 13;
        keyPress = 13;
      }
      if (j == 14 && keyPress != 14) {
        c5.play();
        wPress = 14;
        keyPress = 14;
      }
      if (j == 15 && keyPress != 15) {
        d5.play();
        wPress = 15;
        keyPress = 15;
      }
      if (j == 16 && keyPress != 16) {
        e5.play();
        wPress = 16;
        keyPress = 16;
      }
      if (j == 17 && keyPress != 17) {
        f5.play();
        wPress = 17;
        keyPress = 17;
      }
      if (j == 18 && keyPress != 18) {
        g5.play();
        wPress = 18;
        keyPress = 18;
      }
      if (j == 19 && keyPress != 19) {
        a5.play();
        wPress = 19;
        keyPress = 19;
      }
      if (j == 20 && keyPress != 20) {
        b5.play();
        wPress = 20;
        keyPress = 20;
      }
      if (j == 21 && keyPress != 21) {
        c6.play();
        wPress = 21;
        keyPress = 21;
      }
      if (j == 22 && keyPress != 22) {
        d6.play();
        wPress = 22;
        keyPress = 22;
      }
      if (j == 23 && keyPress != 23) {
        e6.play();
        wPress = 23;
        keyPress = 23;
      }
    }
    else if (mouseX > x + j * (w + 2) && mouseX < (x + j * (w + 2)) + w / 2.2 && mouseY > (y - (h / 1.5)) && mouseY < y - (h / 1.5) + h ){
      if (j == 0 && keyPress != 0) {
        c3.play();
        wPress = 0;
        keyPress = 0;
      }
      if (j == 3 && keyPress != 3) {
        f3.play();
        wPress = 3;
        keyPress = 3;
      }
      if (j == 7 && keyPress != 7) {
        c4.play();
        wPress = 7;
        keyPress = 7;
      }
      if (j == 10 && keyPress != 10) {
        f4.play();
        wPress = 10;
        keyPress = 10;
      }
      if (j == 14 && keyPress != 14) {
        c5.play();
        wPress = 14;
        keyPress = 14;
      }
      if (j == 17 && keyPress != 17) {
        f5.play();
        wPress = 17;
        keyPress = 17;
      }
       if (j == 21 && keyPress != 21) {
        c6.play();
        wPress = 21;
        keyPress = 21;
      }
    }
    else if (mouseX > x + j * (w + 2) + w / 2.2 && mouseX < (x + j * (w + 2) + w / 2.2) + w / 1.9 && mouseY > y - h / 1.5 && mouseY < (y - h / 1.5) + h) {
      if (j == 2 && keyPress != 2) {
        e3.play();
        wPress = 2;
        keyPress = 2;
      }
      if (j == 6 && keyPress != 6) {
        b3.play();
        wPress = 6;
        keyPress = 6;
      }
      if (j == 9 && keyPress != 9) {
        e4.play();
        wPress = 9;
        keyPress = 9;
      }
      if (j == 13 && keyPress != 13) {
        b4.play();
        wPress = 13;
        keyPress = 13;
      }
      if (j == 16 && keyPress != 16) {
        e5.play();
        wPress = 16;
        keyPress = 16;
      }
      if (j == 20 && keyPress != 20) {
        b5.play();
        wPress = 20;
        keyPress = 20;
      }
      if (j == 23 && keyPress != 23) {
        e6.play();
        wPress = 23;
        keyPress = 23;
      }
    }

    //sounds for black keys
    if (mouseX > (x + w / 2) + j * (w + 2) && mouseX < (x + w / 2) + j * (w + 2) + w && mouseY > y - h / 1.5 && mouseY < (y - h / 1.5) + h) {
      if (j == 0 && keyPress != 24) {
        db3.play();
        bPress = 0;
        keyPress = 24;
      }
      if (j == 1 && keyPress != 25) {
        eb3.play();
        bPress = 1;
        keyPress = 25;
      }
      if (j == 3 && keyPress != 27) {
        gb3.play();
        bPress = 3;
        keyPress = 27;
      }
      if (j == 4 && keyPress != 28) {
        ab3.play();
        bPress = 4;
        keyPress = 28;
      }
      if (j == 5 && keyPress != 29) {
        bb3.play();
        bPress = 5;
        keyPress = 29;
      }
      if (j == 7 && keyPress != 31) {
        db4.play();
        bPress = 7;
        keyPress = 31;
      }
      if (j == 8 && keyPress != 32) {
        eb4.play();
        bPress = 8;
        keyPress = 32;
      }
      if (j == 10 && keyPress != 34) {
        gb4.play();
        bPress = 10;
        keyPress = 34;
      }
      if (j == 11 && keyPress != 35) {
        ab4.play();
        bPress = 11;
        keyPress = 35;
      }
      if (j == 12 && keyPress != 36) {
        bb4.play();
        bPress = 12;
        keyPress = 36;
      }
      if (j == 14 && keyPress != 38) {
        db5.play();
        bPress = 14;
        keyPress = 38;
      }
      if (j == 15 && keyPress != 39) {
        eb5.play();
        bPress = 15;
        keyPress = 39;
      }
      if (j == 17 && keyPress != 41) {
        gb5.play();
        bPress = 17;
        keyPress = 41;
      }
      if (j == 18 && keyPress != 42) {
        ab5.play();
        bPress = 18;
        keyPress = 42;
      }
      if (j == 19 && keyPress != 43) {
        bb5.play();
        bPress = 19;
        keyPress = 43;
      }
      if (j == 21 && keyPress != 45) {
        db6.play();
        bPress = 21;
        keyPress = 45
      }
      if (j == 22 && keyPress != 46) {
        eb6.play();
        bPress = 22;
        keyPress = 46;
      }
    }
  }

  return false;
}

//this creates sounds when a key is pressed
function keyTyped() {
  if (key === 'z') {
    c3.play();
    wPress = 0; //sends information for key that will be changed
    keyPress = 0;
  }
  if (key === 's') {
    db3.play();
    bPress = 0;
    keyPress = 24;
  }
  if (key === 'x') {
    d3.play();
    wPress = 1;
    keyPress = 1;
  }
  if (key === 'd') {
    eb3.play();
    bPress = 1;
    keyPress = 25;
  }
  if (key === 'c') {
    e3.play();
    wPress = 2;
    keyPress = 2;
  }
  if (key === 'v') {
    f3.play();
    wPress = 3;
    keyPress = 3;
  }
  if (key === 'g') {
    gb3.play();
    bPress = 3;
    keyPress = 27;
  }
  if (key === 'b') {
    g3.play();
    wPress = 4;
    keyPress = 4;
  }
  if (key === 'h') {
    ab3.play();
    bPress = 4;
    keyPress = 28;
  }
  if (key === 'n') {
    a3.play();
    wPress = 5;
    keyPress = 5;
  }
  if (key === 'j') {
    bb3.play();
    bPress = 5;
    keyPress = 29;
  }
  if (key === 'm') {
    b3.play();
    wPress = 6;
    keyPress = 6;
  }
  if (key === ',') {
    c4.play();
    wPress = 7;
    keyPress = 7;
  }
  if (key === 'l') {
    db4.play();
    bPress = 7;
    keyPress = 31;
  }
  if (key === '.') {
    d4.play();
    wPress = 8;
    keyPress = 8;
  }
  if (key === ';') {
    eb4.play();
    bPress = 8;
    keyPress = 32;
  }
  if (key === '/') {
    e4.play();
    wPress = 9;
    keyPress = 9;
  }
  if (key === 'q') {
    f4.play();
    wPress = 10;
    keyPress = 10;
  }
  if (key === '2') {
    gb4.play();
    bPress = 10;
    keyPress = 34;
  }
  if (key === 'w') {
    g4.play();
    wPress = 11;
    keyPress = 11;
  }
  if (key === '3') {
    ab4.play();
    bPress = 11;
    keyPress = 35;
  }
  if (key === 'e') {
    a4.play();
    wPress = 12;
    keyPress = 12;
  }
  if (key === '4') {
    bb4.play();
    bPress = 12;
    keyPress = 36;
  }
  if (key === 'r') {
    b4.play();
    wPress = 13;
    keyPress = 13;
  }
  if (key === 't') {
    c5.play();
    wPress = 14;
    keyPress = 14;
  }
  if (key === '6') {
    db5.play();
    bPress = 14;
    keyPress = 38;
  }
  if (key === 'y') {
    d5.play();
    wPress = 15;
    keyPress = 15;
  }
  if (key === '7') {
    eb5.play();
    bPress = 15;
    keyPress = 39;
  }
  if (key === 'u') {
    e5.play();
    wPress = 16;
    keyPress = 16;
  }
  if (key === 'i') {
    f5.play();
    wPress = 17;
    keyPress = 17;
  }
  if (key === '9') {
    gb5.play();
    bPress = 17;
    keyPress = 41;
  }
  if (key === 'o') {
    g5.play();
    wPress = 18;
    keyPress = 18;
  }
  if (key === '0') {
    ab5.play();
    bPress = 18;
    keyPress = 42;
  }
  if (key === 'p') {
    a5.play();
    wPress = 19;
    keyPress = 19;
  }
  if (key === '-') {
    bb5.play();
    bPress = 19;
    keyPress = 43;
  }
  if (key === '[') {
    b5.play();
    wPress = 20;
    keyPress = 20;
  }
  if (key === ']') {
    c6.play();
    wPress = 21;
    keyPress = 21;
  }
}