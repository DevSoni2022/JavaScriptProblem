function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}


console.log(rgbToHex(255,0,255))


// Black	#000000	(0,0,0)
//  	White	#FFFFFF	(255,255,255)
//  	Red	#FF0000	(255,0,0)
//  	Lime	#00FF00	(0,255,0)
//  	Blue	#0000FF	(0,0,255)
//  	Yellow	#FFFF00	(255,255,0)
//  	Cyan / Aqua	#00FFFF	(0,255,255)
//  	Magenta / Fuchsia	#FF00FF	(255,0,255)