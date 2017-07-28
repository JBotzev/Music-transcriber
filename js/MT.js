window.onload = function() {
		var file = document.getElementById("thefile");
		var audio = document.getElementById("audio");
		audio.volume=1
		  
		file.onchange = function() {
			var files = this.files;
			audio.src = URL.createObjectURL(files[0]);
			audio.load();
			audio.play();
			var context = new AudioContext();
			var src = context.createMediaElementSource(audio);
			var analyser = context.createAnalyser();

			var canvas = document.getElementById("canvas");
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			var ctx = canvas.getContext("2d");

			src.connect(analyser);
			analyser.connect(context.destination);

			analyser.fftSize = 2048;

			var bufferLength = analyser.frequencyBinCount;
			console.log(bufferLength);

			var dataArray = new Uint8Array(bufferLength);
			

			var WIDTH = canvas.width;
			var HEIGHT = canvas.height;

			var barWidth = (WIDTH / bufferLength) * 2.5;//* 2.5
			var barHeight;
			var x = 0;

			var sredno=[];
			
			function renderFrame() {
				requestAnimationFrame(renderFrame);

				x=0
				var hertz;
				analyser.getByteFrequencyData(dataArray);

				ctx.fillStyle = "#000";
				ctx.fillRect(0, 0, WIDTH, HEIGHT);
				
				for (var i = 0; i < bufferLength; i++) {//				for (var i = 0; i < bufferLength; i++) {
					barHeight = dataArray[i];
					hertz = dataArray[0];
					
					
					var r = barHeight + (25 * (i/bufferLength));
					var g = 250 * (i/bufferLength);
					var b = 50;

					ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
					ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
					
					
					
					x +=barWidth+1;	
					if(i>15 && i <21){
						//sredno[0]=barHeight;
						arit(barHeight)
					}else if(i==22){
						sredno[0]=sum/5//Math.round((sredno[0]/5)*100)/100
						sum=0
					}
					if(i>17 && i<23){
						//sredno[1]=barHeight;
						arit2(barHeight)
					}else if(i==24){
						sredno[1]=sum2/5//Math.round((sredno[0]/5)*100)/100
						sum2=0
					}
					if(i>21 && i<26){
						arit3(barHeight)
					}else if(i==27){
						sredno[2]=sum3/4//Math.round((sredno[0]/5)*100)/100
						sum3=0
					}
					if(i>23 && i<28){
						arit4(barHeight)
					}else if(i==29){
						sredno[3]=sum4/4//Math.round((sredno[0]/5)*100)/100
						sum4=0
					}
					if(i==500){
						//for(var h=0;h<3;h++){
						var valll=""
						var swi//=indexOfMax(sredno)
						if(sredno[0]>sredno[1] && sredno[0]>sredno[2] && sredno[0]>sredno[3]){
							swi=0
						}else if(sredno[1]>sredno[0] && sredno[1]>sredno[2] && sredno[1]>sredno[3]){
							swi=1
						}else if(sredno[2]>sredno[1] && sredno[2]>sredno[0] && sredno[2]>sredno[3]){
							swi=2
						}else if(sredno[3]>sredno[1] && sredno[3]>sredno[2] && sredno[3]>sredno[0]){
							swi=3
						}else{
							swi="mama ti"
							//document.getElementById("stats").innerHTML+=sredno[0]+' '
							//document.getElementById("stats").innerHTML+=sredno[1]+' '
							//document.getElementById("stats").innerHTML+=sredno[2]+' '
							//document.getElementById("stats").innerHTML+=sredno[3]+' '
						}
						
						switch(swi){
							case 0:
								valll="1";
								break;
							case 1:
								valll="-1";
								break;
							case 2:
								valll="2";
								break;
							case 3:
								valll="-2";
								break;
							default:
								valll="   ";
						}
							document.getElementById("stats").innerHTML+=valll+' '
					}
				}
			}
			
			audio.play();
			renderFrame();
		};
		file.value=""
	};
	function color(){
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
	}
	function indexOfMax(arr) {
		if (arr.length === 0) {
			return -1;
		}

		var max = arr[0];
		var maxIndex = 0;

		for (var jjj = 0; jjj < arr.length; jjj++) {
			if (arr[jjj] > max) {
				maxIndex = jjj;
				max = arr[jjj];
			} 
		}
		

		return maxIndex;
	}
	var c=0
	var sum=0
	function arit(val){
		sum+=val
		c++
		if(c==5){
			c=0
		}
	}
	var c2=0
	var sum2=0
	function arit2(val){
		sum2+=val
		c2++
		if(c2==5){
			c2=0
		}
	}
	var c3=0
	var sum3=0
	function arit3(val){
		sum3+=val
		c3++
		if(c3==5){
			c3=0
		}
	}
	var c4=0
	var sum4=0
	function arit4(val){
		sum4+=val
		c4++
		if(c4==5){
			c4=0
		}
	}