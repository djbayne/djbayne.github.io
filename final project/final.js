(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"final_atlas_1", frames: [[0,0,1824,1824]]},
		{name:"final_atlas_2", frames: [[0,0,1824,1824]]},
		{name:"final_atlas_3", frames: [[0,0,1824,1824]]},
		{name:"final_atlas_4", frames: [[0,0,1824,1824]]},
		{name:"final_atlas_5", frames: [[0,0,1824,1824]]},
		{name:"final_atlas_6", frames: [[0,0,735,444]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(ss["final_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["final_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["final_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["final_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bed = function() {
	this.initialize(img.bed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.bed_ripped = function() {
	this.initialize(img.bed_ripped);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.coffee_table = function() {
	this.initialize(img.coffee_table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.couch_1 = function() {
	this.initialize(img.couch_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.couch_1_ripped = function() {
	this.initialize(img.couch_1_ripped);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.couch_2 = function() {
	this.initialize(img.couch_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.couch_2_ripped = function() {
	this.initialize(img.couch_2_ripped);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.door = function() {
	this.initialize(img.door);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.door_frame = function() {
	this.initialize(img.door_frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);


(lib.IMG_001112 = function() {
	this.initialize(ss["final_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Stand = function() {
	this.initialize(ss["final_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.walls = function() {
	this.initialize(img.walls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5260,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_001112();
	this.instance.setTransform(-229.45,-138.6,0.6244,0.6244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-229.4,-138.6,458.9,277.2), null);


(lib.init = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.door();
	this.instance.setTransform(-2630,-540);

	this.instance_1 = new lib.door_frame();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.init, new cjs.Rectangle(-2630,-540,5260,1080), null);


(lib.couch_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.couch_2();
	this.instance.setTransform(-2630,-540);

	this.instance_1 = new lib.couch_2_ripped();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2630,-540,5260,1080);


(lib.couch_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.couch_1();
	this.instance.setTransform(-2630,-540);

	this.instance_1 = new lib.couch_1_ripped();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2630,-540,5260,1080);


(lib.chucky_walk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// walk
	this.instance = new lib._1();
	this.instance.setTransform(912,-912,1,1,0,0,180);

	this.instance_1 = new lib._2();
	this.instance_1.setTransform(912,-912,1,1,0,0,180);

	this.instance_2 = new lib._3();
	this.instance_2.setTransform(912,-912,1,1,0,0,180);

	this.instance_3 = new lib._4();
	this.instance_3.setTransform(912,-912,1,1,0,0,180);

	this.instance_4 = new lib.Stand();
	this.instance_4.setTransform(912,-912,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-912,-912,1824,1824);


(lib.bed_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.bed();
	this.instance.setTransform(-2630,-540);

	this.instance_1 = new lib.bed_ripped();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2630,-540,5260,1080);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// computer
	this.instance = new lib.computer();
	this.instance.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// walls
	this.instance_1 = new lib.walls();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-2630,-540,5260,1080), null);


(lib.foreground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bed
	this.bed = new lib.bed_1();
	this.bed.name = "bed";

	this.timeline.addTween(cjs.Tween.get(this.bed).wait(1));

	// coffee_table
	this.instance = new lib.coffee_table();
	this.instance.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// couch_2
	this.couch_2 = new lib.couch_2_1();
	this.couch_2.name = "couch_2";

	this.timeline.addTween(cjs.Tween.get(this.couch_2).wait(1));

	// couch_1
	this.couch_1 = new lib.couch_1_1();
	this.couch_1.name = "couch_1";

	this.timeline.addTween(cjs.Tween.get(this.couch_1).wait(1));

	// doorframe
	this.instance_1 = new lib.door_frame();
	this.instance_1.setTransform(-2630,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foreground, new cjs.Rectangle(-2630,-540,5260,1080), null);


// stage content:
(lib._final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.chucky_mc.currentFrame == 9){
				root.chucky_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -670) {
				root.chucky_mc.scaleX = .16;
				root.background_mc.x = root.background_mc.x - speed;
				root.foreground_mc.x = root.foreground_mc.x - speed;
			}
		
			if (event.keyCode == 37 && root.background_mc.x < 2500) {
				root.chucky_mc.scaleX = -.16;
				root.background_mc.x = root.background_mc.x + speed;
				root.foreground_mc.x = root.foreground_mc.x + speed;
			}
		}
		
		function handleKeyUp(event){
			root.chucky_mc.gotoAndPlay("standing");
		}
		
		this.foreground_mc.couch_1.addEventListener("click",handleClickPlane1);
		
		function handleClickPlane1(event){
			root.foreground_mc.couch_1.play();
			var swoosh_snd = createjs.Sound.play("swoosh");
		}
		
		this.foreground_mc.couch_2.addEventListener("click",handleClickPlane2);
		
		function handleClickPlane2(event){
			root.foreground_mc.couch_2.play();
			var swoosh_snd = createjs.Sound.play("swoosh");
		}
		
		this.foreground_mc.bed.addEventListener("click",handleClickPlane3);
		
		function handleClickPlane3(event){
			root.foreground_mc.bed.play();
			var swoosh_snd = createjs.Sound.play("swoosh");
		}
		
		this.init_mc.addEventListener("click", handleClickPlayButton);
		
		function handleClickPlayButton(event){
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// init
	this.instance = new lib.text();
	this.instance.setTransform(841,426.7);

	this.init_mc = new lib.init();
	this.init_mc.name = "init_mc";
	this.init_mc.setTransform(2630,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.init_mc},{t:this.instance}]}).to({state:[]},1).wait(1));

	// foreground
	this.foreground_mc = new lib.foreground();
	this.foreground_mc.name = "foreground_mc";
	this.foreground_mc.setTransform(2630,540);
	this.foreground_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.foreground_mc).wait(1).to({_off:false},0).wait(1));

	// chucky
	this.chucky_mc = new lib.chucky_walk();
	this.chucky_mc.name = "chucky_mc";
	this.chucky_mc.setTransform(853.35,753.95,0.1645,0.1645,0,0,0,0.6,0.6);
	this.chucky_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chucky_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2630,540);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,4300,540);
// library properties:
lib.properties = {
	id: '0B2A8AB2908247D1B6B25A18518827A8',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bed.png", id:"bed"},
		{src:"images/bed_ripped.png", id:"bed_ripped"},
		{src:"images/coffee_table.png", id:"coffee_table"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/couch_1.png", id:"couch_1"},
		{src:"images/couch_1_ripped.png", id:"couch_1_ripped"},
		{src:"images/couch_2.png", id:"couch_2"},
		{src:"images/couch_2_ripped.png", id:"couch_2_ripped"},
		{src:"images/door.png", id:"door"},
		{src:"images/door_frame.png", id:"door_frame"},
		{src:"images/walls.png", id:"walls"},
		{src:"images/final_atlas_1.png", id:"final_atlas_1"},
		{src:"images/final_atlas_2.png", id:"final_atlas_2"},
		{src:"images/final_atlas_3.png", id:"final_atlas_3"},
		{src:"images/final_atlas_4.png", id:"final_atlas_4"},
		{src:"images/final_atlas_5.png", id:"final_atlas_5"},
		{src:"images/final_atlas_6.png", id:"final_atlas_6"},
		{src:"sounds/swoosh.mp3", id:"swoosh"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B2A8AB2908247D1B6B25A18518827A8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;