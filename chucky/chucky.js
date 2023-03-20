(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chucky_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"chucky_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"chucky_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"chucky_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"chucky_atlas_5", frames: [[737,1082,360,360],[0,0,1920,1080],[0,1082,735,444]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["chucky_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_00081 = function() {
	this.initialize(ss["chucky_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_00082 = function() {
	this.initialize(ss["chucky_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_00083 = function() {
	this.initialize(ss["chucky_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_00084 = function() {
	this.initialize(ss["chucky_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_00085 = function() {
	this.initialize(ss["chucky_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IMG_001112 = function() {
	this.initialize(ss["chucky_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.windowLights = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AtwsOIbhAAIAAYdI7hAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AtwMPIAA4cIbhAAIAAYcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.windowLights, new cjs.Rectangle(-89.1,-79.2,178.2,158.5), null);


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


(lib.knife = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG_00085();
	this.instance.setTransform(-572,-321.75,0.5958,0.5958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.knife, new cjs.Rectangle(-572,-321.7,1144,643.5), null);


(lib.introFade = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,0,102,0)").ss(1,1,1).p("EhaXgzOMC0vAAAMAAABmdMi0vAAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhaXAzPMAAAhmdMC0vAAAMAAABmdg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.introFade, new cjs.Rectangle(-579.4,-328.8,1158.9,657.7), null);


(lib.doorFrame = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG_00084();
	this.instance.setTransform(-578.4,-325.35,0.6025,0.6025);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doorFrame, new cjs.Rectangle(-578.4,-325.3,1156.9,650.7), null);


(lib.couchAndTable = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG_00082();
	this.instance.setTransform(-578,-325.1,0.6021,0.6021);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.couchAndTable, new cjs.Rectangle(-578,-325.1,1156,650.3), null);


(lib.chucky_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG_00083();
	this.instance.setTransform(-537.5,-302.35,0.5599,0.5599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chucky_1, new cjs.Rectangle(-537.5,-302.3,1075.1,604.7), null);


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

	// windowFrame
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(115.25,-277.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// window
	this.windowLight = new lib.windowLights();
	this.windowLight.name = "windowLight";
	this.windowLight.setTransform(205.35,-187.1);
	var windowLightFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.windowLight.filters = [windowLightFilter_1];
	this.windowLight.cache(-91,-81,182,163);

	this.timeline.addTween(cjs.Tween.get(this.windowLight).wait(48));
	this.timeline.addTween(cjs.Tween.get(windowLightFilter_1).wait(1).to(new cjs.ColorFilter(0.90909091,0.90909091,0.90909091,1,21.090909,0,2.0909091,0), 0).wait(1).to(new cjs.ColorFilter(0.81818182,0.81818182,0.81818182,1,38,0,8.3636364,0), 0).wait(1).to(new cjs.ColorFilter(0.72727273,0.72727273,0.72727273,1,50.727273,0,18.818182,0), 0).wait(1).to(new cjs.ColorFilter(0.63636364,0.63636364,0.63636364,1,59.272727,0,33.454545,0), 0).wait(1).to(new cjs.ColorFilter(0.54545455,0.54545455,0.54545455,1,63.636364,0,52.272727,0), 0).wait(1).to(new cjs.ColorFilter(0.45454545,0.45454545,0.45454545,1,63.272727,0,75.818182,0), 0).wait(1).to(new cjs.ColorFilter(0.36363636,0.36363636,0.36363636,1,59.181818,0,103.09091,0), 0).wait(1).to(new cjs.ColorFilter(0.27272727,0.27272727,0.27272727,1,50.909091,0,134.54545,0), 0).wait(1).to(new cjs.ColorFilter(0.18181818,0.18181818,0.18181818,1,38.454545,0,170.18182,0), 0).wait(1).to(new cjs.ColorFilter(0.090909091,0.090909091,0.090909091,1,21.818182,0,210,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,0,0,255,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,21,0,234,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,42,0,213,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,63,0,192,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,85,0,170,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,106,0,149,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,127,0,128,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,148,0,107,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,170,0,85,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,191,0,64,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,212,0,43,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,233,0,22,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,255,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,234,0,21,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,213,0,42,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,192,0,63,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,170,0,85,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,149,0,106,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,128,0,127,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,107,0,148,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,85,0,170,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,64,0,191,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,43,0,212,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,22,0,233,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,0,0,255,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,21,0,234,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,42,0,213,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,63,0,192,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,85,0,170,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,106,0,149,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,127,0,128,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,148,0,107,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,170,0,85,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,191,0,64,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,212,0,43,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,233,0,22,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,255,0,0,0), 0).wait(1));

	// background
	this.instance_1 = new lib.IMG_00081();
	this.instance_1.setTransform(-568.35,-319.7,0.592,0.592);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B4E2").s().p("AgWAmQgIgFgCgJQgCgFACgHQgHgDgEgIQgEgGABgIQABgIAHgGQAGgGAIgBQAMgCAIAIIABACIADgBQACgHAHgEQAIgEAIAAQAIABAGAGQAHAGABAJQABAIgEAIIgCACQADADABAEQAEAMgHAKQgIAKgMAAQgHAAgGgDIgBABQgHAGgHABIgDABQgIAAgGgFg");
	this.shape.setTransform(197.3483,61.3552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(48));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.windowLight, startFrame:1, endFrame:1, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:0, endFrame:0, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:2, endFrame:2, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:3, endFrame:3, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:4, endFrame:4, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:5, endFrame:5, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:6, endFrame:6, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:7, endFrame:7, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:8, endFrame:8, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:9, endFrame:9, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:10, endFrame:10, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:11, endFrame:11, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:12, endFrame:12, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:13, endFrame:13, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:14, endFrame:14, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:15, endFrame:15, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:16, endFrame:16, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:17, endFrame:17, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:18, endFrame:18, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:19, endFrame:19, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:20, endFrame:20, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:21, endFrame:21, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:22, endFrame:22, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:23, endFrame:23, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:24, endFrame:24, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:25, endFrame:25, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:26, endFrame:26, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:27, endFrame:27, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:28, endFrame:28, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:29, endFrame:29, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:30, endFrame:30, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:31, endFrame:31, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:32, endFrame:32, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:33, endFrame:33, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:34, endFrame:34, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:35, endFrame:35, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:36, endFrame:36, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:37, endFrame:37, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:38, endFrame:38, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:39, endFrame:39, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:40, endFrame:40, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:41, endFrame:41, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:42, endFrame:42, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:43, endFrame:43, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:44, endFrame:44, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:45, endFrame:45, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:46, endFrame:46, x:-91, y:-81, w:182, h:163});
	this.filterCacheList.push({instance: this.windowLight, startFrame:47, endFrame:47, x:-91, y:-81, w:182, h:163});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-568.3,-319.7,1136.6999999999998,639.4);


// stage content:
(lib.chucky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [74];
	// timeline functions:
	this.frame_74 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		var root = this;
		var midpoint = this.stage.canvas.width / 2;
		var couchRestX = this.couch.x;
		var backgroundRestX = this.background.x;
		var chuckyRestX = this.knife.x;
		var chuckyRestY = this.knife.y;
		
		this.chucky.on("click", function(e) {
			createjs.Tween.get(root.knife, {override:false}).to({y: chuckyRestY-160}, 600, createjs.Ease.quintOut).call(emerge);
		});
		
		function emerge() {
			createjs.Tween.get(root.knife, {override:false}).to({x: chuckyRestX, y: chuckyRestY}, 2200, createjs.Ease.quintIn);
		};
		
		
		
		
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 100;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 100;
				newX *= -1;
			}
			createjs.Tween.get(root.background, {override:true}).to({x: backgroundRestX + newX}, 400, createjs.Ease.quintOut);
			createjs.Tween.get(root.couch, {override:true}).to({x: couchRestX + (newX / 2)}, 600, createjs.Ease.quintOut);
		
		
		});
		
		this.text.addEventListener("click", link.bind(this));
		
		function link(e) {
		
		var url = "https://www.syfy.com/chucky";
		
		var win = window.open(url, "_blank");
		
		win.focus();	
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// introFade
	this.introFade = new lib.introFade();
	this.introFade.name = "introFade";
	this.introFade.setTransform(479.55,322.85);

	this.timeline.addTween(cjs.Tween.get(this.introFade).wait(1).to({alpha:0.9744},0).wait(1).to({alpha:0.9487},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8974},0).wait(1).to({alpha:0.8718},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8205},0).wait(1).to({alpha:0.7949},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.7436},0).wait(1).to({alpha:0.7179},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5897},0).wait(1).to({alpha:0.5641},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5128},0).wait(1).to({alpha:0.4872},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.4359},0).wait(1).to({alpha:0.4103},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2821},0).wait(1).to({alpha:0.2564},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.2051},0).wait(1).to({alpha:0.1795},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1282},0).wait(1).to({alpha:0.1026},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.0513},0).wait(1).to({alpha:0.0256},0).wait(1).to({alpha:0},0).wait(36));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.setTransform(347.45,71.6);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.0031,scaleY:1.0031},0).wait(1).to({scaleX:1.0063,scaleY:1.0063},0).wait(1).to({scaleX:1.0094,scaleY:1.0094},0).wait(1).to({scaleX:1.0125,scaleY:1.0125},0).wait(1).to({scaleX:1.0157,scaleY:1.0157},0).wait(1).to({scaleX:1.0188,scaleY:1.0188},0).wait(1).to({scaleX:1.0219,scaleY:1.0219},0).wait(1).to({scaleX:1.0251,scaleY:1.0251},0).wait(1).to({scaleX:1.0282,scaleY:1.0282},0).wait(1).to({scaleX:1.0313,scaleY:1.0313},0).wait(1).to({scaleX:1.0345,scaleY:1.0345},0).wait(1).to({scaleX:1.0376,scaleY:1.0376},0).wait(1).to({scaleX:1.0407,scaleY:1.0407},0).wait(1).to({scaleX:1.0439,scaleY:1.0439},0).wait(1).to({scaleX:1.047,scaleY:1.047},0).wait(1).to({scaleX:1.0501,scaleY:1.0501},0).wait(1).to({scaleX:1.0533,scaleY:1.0532},0).wait(1).to({scaleX:1.0564,scaleY:1.0564},0).wait(1).to({scaleX:1.0595,scaleY:1.0595},0).wait(1).to({scaleX:1.0627,scaleY:1.0626},0).wait(1).to({scaleX:1.0658,scaleY:1.0658},0).wait(1).to({scaleX:1.0689,scaleY:1.0689},0).wait(1).to({scaleX:1.0721,scaleY:1.072},0).wait(1).to({scaleX:1.0752,scaleY:1.0752},0).wait(1).to({scaleX:1.0783,scaleY:1.0783},0).wait(1).to({scaleX:1.0815,scaleY:1.0814},0).wait(1).to({scaleX:1.0846,scaleY:1.0846},0).wait(1).to({scaleX:1.0877,scaleY:1.0877},0).wait(1).to({scaleX:1.0909,scaleY:1.0908},0).wait(1).to({scaleX:1.094,scaleY:1.094},0).wait(1).to({scaleX:1.0971,scaleY:1.0971},0).wait(1).to({scaleX:1.1003,scaleY:1.1002},0).wait(1).to({scaleX:1.1034,scaleY:1.1034},0).wait(1).to({scaleX:1.1066,scaleY:1.1065},0).wait(1).to({scaleX:1.1097,scaleY:1.1096},0).wait(1).to({scaleX:1.1128,scaleY:1.1128},0).wait(1).to({scaleX:1.116,scaleY:1.1159},0).wait(1).to({scaleX:1.1191,scaleY:1.119},0).wait(1).to({scaleX:1.1222,scaleY:1.1222},0).wait(1).to({scaleX:1.115,scaleY:1.115,alpha:0.1},0).wait(1).to({scaleX:1.1078,scaleY:1.1078,alpha:0.2},0).wait(1).to({scaleX:1.1006,scaleY:1.1006,alpha:0.3},0).wait(1).to({scaleX:1.0935,scaleY:1.0935,alpha:0.4},0).wait(1).to({scaleX:1.0863,scaleY:1.0863,alpha:0.5},0).wait(1).to({scaleX:1.0791,scaleY:1.0791,alpha:0.6},0).wait(1).to({scaleX:1.0719,scaleY:1.072,alpha:0.7},0).wait(1).to({scaleX:1.0647,scaleY:1.0648,alpha:0.8},0).wait(1).to({scaleX:1.0575,scaleY:1.0576,alpha:0.9},0).wait(1).to({scaleX:1.0503,scaleY:1.0505,alpha:1},0).wait(26));

	// door
	this.door = new lib.doorFrame();
	this.door.name = "door";
	this.door.setTransform(480.4,320.35);

	this.timeline.addTween(cjs.Tween.get(this.door).wait(75));

	// knife
	this.knife = new lib.knife();
	this.knife.name = "knife";
	this.knife.setTransform(480,485.05);

	this.timeline.addTween(cjs.Tween.get(this.knife).wait(75));

	// chucky
	this.chucky = new lib.chucky_1();
	this.chucky.name = "chucky";
	this.chucky.setTransform(479.5,337.35);

	this.timeline.addTween(cjs.Tween.get(this.chucky).wait(75));

	// couch
	this.couch = new lib.couchAndTable();
	this.couch.name = "couch";
	this.couch.setTransform(480,315.1);

	this.timeline.addTween(cjs.Tween.get(this.couch).wait(75));

	// background
	this.background = new lib.background();
	this.background.name = "background";
	this.background.setTransform(480.35,319.7);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(75));
	this.background.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(380.2,236.1,678.8,570.6999999999999);
// library properties:
lib.properties = {
	id: 'B914DF1B07F44BB89714578D71915E4E',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/chucky_atlas_1.png", id:"chucky_atlas_1"},
		{src:"images/chucky_atlas_2.png", id:"chucky_atlas_2"},
		{src:"images/chucky_atlas_3.png", id:"chucky_atlas_3"},
		{src:"images/chucky_atlas_4.png", id:"chucky_atlas_4"},
		{src:"images/chucky_atlas_5.png", id:"chucky_atlas_5"}
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
an.compositions['B914DF1B07F44BB89714578D71915E4E'] = {
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