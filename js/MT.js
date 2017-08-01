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
				analyser.getByteFrequencyData(dataArray);

				ctx.fillStyle = "rgba(39, 108, 139, 1)";
				//#a9233a
				//rgba(39, 108, 139, 1)
				ctx.fillRect(0, 0, WIDTH, HEIGHT);
				
				for (var i = 0; i < bufferLength; i++) {
					//				for (var i = 0; i < bufferLength; i++) {
					barHeight = dataArray[i];
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
					
					
					if(i>25 && i<31){
						arit5(barHeight)
					}else if(i==32){
						sredno[4]=sum5/5//Math.round((sredno[0]/5)*100)/100
						sum5=0
					}
					if(i>28 && i<34){
						arit6(barHeight)
					}else if(i==35){
						sredno[5]=sum6/5//Math.round((sredno[0]/5)*100)/100
						sum6=0
					}
					if(i>31 && i<37){
						arit7(barHeight)
					}else if(i==38){
						sredno[6]=sum7/5//Math.round((sredno[0]/5)*100)/100
						sum7=0
					}
					if(i>34 && i<40){
						arit8(barHeight)
					}else if(i==41){
						sredno[7]=sum8/5//Math.round((sredno[0]/5)*100)/100
						sum8=0
					}
					if(i>37 && i<43){
						arit9(barHeight)
					}else if(i==44){
						sredno[8]=sum9/5//Math.round((sredno[0]/5)*100)/100
						sum9=0
					}
					if(i>40 && i<46){
						arit10(barHeight)
					}else if(i==47){
						sredno[9]=sum10/5//Math.round((sredno[0]/5)*100)/100
						sum10=0
					}
					if(i>43 && i<49){
						arit11(barHeight)
					}else if(i==50){
						sredno[10]=sum11/5//Math.round((sredno[0]/5)*100)/100
						sum11=0
					}
					if(i>46 && i<52){
						arit12(barHeight)
					}else if(i==53){
						sredno[11]=sum12/5//Math.round((sredno[0]/5)*100)/100
						sum12=0
					}
					if(i>49 && i<55){
						arit13(barHeight)
					}else if(i==56){
						sredno[12]=sum13/5//Math.round((sredno[0]/5)*100)/100
						sum13=0
					}
					if(i>52 && i<58){
						arit14(barHeight)
					}else if(i==59){
						sredno[13]=sum14/5//Math.round((sredno[0]/5)*100)/100
						sum14=0
					}
					if(i>55 && i<61){
						arit15(barHeight)
					}else if(i==62){
						sredno[14]=sum15/5//Math.round((sredno[0]/5)*100)/100
						sum15=0
					}
					if(i>58 && i<64){
						arit16(barHeight)
					}else if(i==65){
						sredno[15]=sum16/5//Math.round((sredno[0]/5)*100)/100
						sum16=0
					}
					
					if(i==500){
						//for(var h=0;h<3;h++){
								var valll="";
								var swi=indexOfMax(sredno);
								var tda = document.getElementsByTagName("TD");
								var z;
								for (z = 0; z < tda.length; z++) {
									tda[z].style="background-color:none"
								}
						switch(swi){
							case 0:
								valll="-1";
								document.getElementById("t1").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 1:
								valll="1";
								document.getElementById("t2").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 2:
								valll="-2";
								document.getElementById("t3").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 3:
								valll="2";
								document.getElementById("t4").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 4:
								valll="-3";
								document.getElementById("t5").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 5:
								valll="3";
								document.getElementById("t6").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 6:
								valll="-4";
								document.getElementById("t7").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 7:
								valll="4";
								document.getElementById("t8").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 8:
								valll="-5";
								document.getElementById("t9").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 9:
								valll="5";
								document.getElementById("t10").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 10:
								valll="-6";
								document.getElementById("t11").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 11:
								valll="6";
								document.getElementById("t12").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 12:
								valll="-7";
								document.getElementById("t13").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 13:
								valll="7";
								document.getElementById("t14").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							case 14:
								valll="-8";
								document.getElementById("t15").style="background-color:rgba(117, 0, 2, 0.6)";
								break;
							case 15:
								valll="8";
								
								document.getElementById("t16").style="background-color:rgba(22, 117, 0, 0.6)";
								break;
							default:
								valll=" ";
								break;
						}
							document.getElementById("stats").innerHTML+=valll+' '
							document.getElementById("saved").innerHTML+=valll+' '
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
		if(max==0){
			maxIndex = "sh it"
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
	var c5=0
	var sum5=0
	function arit5(val){
		sum5+=val
		c5++
		if(c5==5){
			c5=0
		}
	}
	var c6=0
	var sum6=0
	function arit6(val){
		sum6+=val
		c6++
		if(c6==5){
			c6=0
		}
	}
	var c7=0
	var sum7=0
	function arit7(val){
		sum7+=val
		c7++
		if(c7==5){
			c7=0
		}
	}
	var c8=0
	var sum8=0
	function arit8(val){
		sum8+=val
		c8++
		if(c8==5){
			c8=0
		}
	}
	var c9=0
	var sum9=0
	function arit9(val){
		sum9+=val
		c9++
		if(c9==5){
			c9=0
		}
	}
	var c10=0
	var sum10=0
	function arit10(val){
		sum10+=val
		c10++
		if(c10==5){
			c10=0
		}
	}
	var c11=0
	var sum11=0
	function arit11(val){
		sum11+=val
		c11++
		if(c11==5){
			c11=0
		}
	}
	var c12=0
	var sum12=0
	function arit12(val){
		sum12+=val
		c12++
		if(c12==5){
			c12=0
		}
	}
	var c13=0
	var sum13=0
	function arit13(val){
		sum13+=val
		c13++
		if(c13==5){
			c13=0
		}
	}
	var c14=0
	var sum14=0
	function arit14(val){
		sum14+=val
		c14++
		if(c14==5){
			c14=0
		}
	}
	var c15=0
	var sum15=0
	function arit15(val){
		sum15+=val
		c15++
		if(c15==5){
			c15=0
		}
	}
	var c16=0
	var sum16=0
	function arit16(val){
		sum16+=val
		c16++
		if(c16==5){
			c16=0
		}
	}
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound() {
    var sounds = document.getElementsByClassName('synth');
  for(i=0; i<sounds.length; i++) {sounds[i].pause();}
}
