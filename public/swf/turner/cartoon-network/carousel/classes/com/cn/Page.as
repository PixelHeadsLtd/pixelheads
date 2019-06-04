package com.cn {
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.display.Bitmap;
	import flash.display.SimpleButton;
	import flash.display.LoaderInfo;
	import flash.display.PixelSnapping;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.filters.GlowFilter;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.Strong;
	import flash.system.Capabilities;
	
	import com.gs.TweenLite;
	
	public class Page extends MovieClip {
		private var POSITION_0:Object 	= {"x":73, "y":65, "scale":0, "index":0};
		private var POSITION_1:Object 	= {"x":73, "y":33, "scale":.5, "index":2};
		private var POSITION_2:Object 	= {"x":139, "y":21, "scale":.75, "index":4};
		private var POSITION_3:Object 	= {"x":237, "y":1, "scale":1, "index":6};
		private var POSITION_4:Object 	= {"x":366, "y":21, "scale":.75, "index":5};
		private var POSITION_5:Object	= {"x":463, "y":33, "scale":.5, "index":3};
		private var POSITION_6:Object 	= {"x":522, "y":65, "scale":0, "index":1 };
		
		private var _charList:Array		= new Array();
		private var _linkList:Array		= new Array();
		private var _charActive:Array	= new Array();
		private var _loaderInfo:Array	= new Array();
		private var _loaders:Array		= new Array();
		private var _loaded:Number		= 0;
		private var _charOrigin:Number	= 0;
		private var _charIndex:Number	= -1;
		private var _rotations:Number 	= 0;
		private var _rotateCount:Number = 0;
		private var _rotateDir:Number 	= 0;
		private var _active:Number		= 3;
		private var _loadNum:Number		= 0;
		private var _nextBtn:MovieClip;
		private var _prevBtn:MovieClip;
		private var _next:String;
		private var _prev:String;
		
		public function Page() {
			trace("Page");
			if (this.loaderInfo.parameters.content != undefined) {
				//Load Flashvars
				_loaderInfo	= String(this.loaderInfo.parameters.content).split(",");
				_active 	= (this.loaderInfo.parameters.active >= 0)? this.loaderInfo.parameters.active: _active;
				_next		= this.loaderInfo.parameters.next;
				_prev 		= this.loaderInfo.parameters.prev;
				
				//Create Lists
				for (var i = 0; i < _loaderInfo.length; i++) {
					_charList.push(_loaderInfo[i]);
					i++;
					_linkList.push(_loaderInfo[i]);
				}
				
				//Triplicate lists in case of short lists
				if (_charList.length < 7) {
					_charList = _charList.concat(_charList).concat(_charList);
					_linkList = _linkList.concat(_linkList).concat(_linkList);
				}
				
				_loadNum = _charList.length + 2;
				
				//Create Image Loaders
				for (i = 0; i < _charList.length; i++) {
					if(_charList[i] != undefined){
						var loader:Loader 	= new Loader();
						loader.name			= "loader" + i;
						loader.load(new URLRequest(_charList[i]));
						loader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
						
						_loaders.push(loader);
					}
				}
				
				//Create Button Loaders
				var nextLoader:Loader 	= new Loader();
				nextLoader.name			= "nextLoader";
				nextLoader.load(new URLRequest(_next));
				nextLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
				
				var prevLoader:Loader	= new Loader();
				prevLoader.name			= "prevLoader";
				prevLoader.load(new URLRequest(_prev));
				prevLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
				
				_loaders.push(nextLoader);
				_loaders.push(prevLoader);
			}
		}
		
		public function init() {
			//Create Image Containers and add Images
			for (var i = 0; i < Math.min(_charList.length, 7); i++) {
				var char:MovieClip = new container_mc();
				var pos = this["POSITION_" + i];
				
				char.name 			= _charList[i];
				char.link			= _linkList[i];
				char.pos			= i;
				char.scaleX			= pos.scale;
				char.scaleY			= pos.scale;
				char.x 				= pos.x;
				char.y 				= pos.y;
				char.buttonMode 	= true;
				char.mouseChildren 	= false;
				
				char.imageContainer_mc.addChild(_loaders[i]);
				char.addEventListener(MouseEvent.CLICK, clickHandler);
				char.addEventListener(MouseEvent.MOUSE_OVER, overHandler);
				char.addEventListener(MouseEvent.MOUSE_OUT, outHandler);
				
				_charIndex ++;
				_charActive.push(char);
				addChild(char);
			}
			
			//Create Buttons
			_nextBtn			= new MovieClip();
			_nextBtn.buttonMode = true;
			_nextBtn.x			= 563 - _loaders[_loaders.length - 2].content.width / 2;
			_nextBtn.y			= 64 - _loaders[_loaders.length - 2].content.height / 2;
			_nextBtn.addChild(_loaders[_loaders.length - 2].content);
			_nextBtn.addEventListener(MouseEvent.CLICK, nextHandler);
			_nextBtn.addEventListener(MouseEvent.MOUSE_OVER, navOverHandler);
			_nextBtn.addEventListener(MouseEvent.MOUSE_OUT, navOutHandler);
			addChild(_nextBtn);
			
			_prevBtn			= new MovieClip();
			_prevBtn.buttonMode = true;
			_prevBtn.x			= 37 - _loaders[_loaders.length - 1].content.width / 2;
			_prevBtn.y			= 64 - _loaders[_loaders.length - 1].content.height / 2;
			_prevBtn.addChild(_loaders[_loaders.length - 1].content);
			_prevBtn.addEventListener(MouseEvent.CLICK, prevHandler);
			_prevBtn.addEventListener(MouseEvent.MOUSE_OVER, navOverHandler);
			_prevBtn.addEventListener(MouseEvent.MOUSE_OUT, navOutHandler);
			addChild(_prevBtn);
			
			//Rotate to the Active Index
			_rotateCount 	= 0;
			_rotations 		= Math.abs(3 - _active);
			_rotateDir 		= (3 - _active) / Math.abs(3 - _active);
			
			if (_rotations != 0) {
				for(i = 0; i < 7; i++){
					var con:MovieClip = _charActive[i];
					con.buttonMode = false;
					con.removeEventListener(MouseEvent.CLICK, clickHandler);
				}
				
				_nextBtn.removeEventListener(MouseEvent.CLICK, nextHandler);
				_prevBtn.removeEventListener(MouseEvent.CLICK, prevHandler);
			}
			
			if (_rotations == 1) {
				rotateTo(_rotateDir, 1, Strong.easeInOut, finishMultipleHandler);
			}else if(_rotations > 1){
				rotateMultiple(_rotateDir, Strong.easeIn);
			}
		}
		
		private function nextHandler($e:MouseEvent){
			_nextBtn.removeEventListener(MouseEvent.CLICK, nextHandler);
			rotateTo(-1, 1, Strong.easeInOut, finishHandler);
		}

		private function prevHandler($e:MouseEvent){
			_prevBtn.removeEventListener(MouseEvent.CLICK, prevHandler);
			rotateTo(1, 1, Strong.easeInOut, finishHandler);
		}
		
		private function rotateTo($num:Number, $spd:Number, $ease:Function, $handler:Function) {
			for(var i = 0; i < _charActive.length; i++){
				var char:MovieClip = _charActive[i];
				var pos:Object = new Object();
				
				if(char.pos + $num < 0){
					pos = POSITION_6;
					char.pos = 6;
					update(6, char);
				}else if(char.pos + $num < 7){
					pos = this["POSITION_"+(char.pos+$num)];
					char.pos = char.pos+$num;
				}else{
					pos = POSITION_0;
					char.pos = 0;
					update(0, char);
				}
				
				setChildIndex(char, pos.index);
				
				if (i == 0) {
					TweenLite.to(char, $spd, { x:pos.x, y:pos.y, scaleX:pos.scale, scaleY:pos.scale, ease:$ease, onComplete:$handler } );
				}else{
					TweenLite.to(char, $spd, { x:pos.x, y:pos.y, scaleX:pos.scale, scaleY:pos.scale, ease:$ease } );
				}
			}
		}
		
		private function rotateMultiple($num:Number, $ease:Function){
			rotateTo($num, .5, $ease, finishMultipleHandler);
		}
		
		private function finishHandler(){
			_nextBtn.addEventListener(MouseEvent.CLICK, nextHandler);
			_prevBtn.addEventListener(MouseEvent.CLICK, prevHandler);
		}
		
		private function finishMultipleHandler(){
			_rotateCount++;
			if(_rotateCount == _rotations){
				_nextBtn.addEventListener(MouseEvent.CLICK, nextHandler);
				_prevBtn.addEventListener(MouseEvent.CLICK, prevHandler);
				for(var i = 0; i < 7; i++){
					var con:MovieClip = _charActive[i];
					con.buttonMode = true;
					con.addEventListener(MouseEvent.CLICK, clickHandler);
				}
			}else{
				rotateMultiple(_rotateDir, Strong.easeOut);
			}
		}
		
		private function update($n:Number, $char:MovieClip) {
			if ($n == 0) {
				_charOrigin 		= (_charOrigin == 0)? _charList.length - 1: _charOrigin - 1;
				_charIndex 			= (_charIndex == 0)? _charList.length - 1: _charIndex - 1;
				
				$char.name 			= _charList[_charOrigin];
				$char.link 			= _linkList[_charOrigin];
				if($char.imageContainer_mc.numChildren > 0){
					$char.imageContainer_mc.removeChildAt(0);
				}
				$char.imageContainer_mc.addChild(_loaders[_charOrigin]);
			}else {
				_charOrigin 		= (_charOrigin == _charList.length - 1 )? 0: _charOrigin + 1;
				_charIndex 			= (_charIndex == _charList.length - 1 )? 0: _charIndex + 1;
				
				$char.name 			= _charList[_charIndex];
				$char.link 			= _linkList[_charIndex];
				if($char.imageContainer_mc.numChildren > 0){
					$char.imageContainer_mc.removeChildAt(0);
				}
				$char.imageContainer_mc.addChild(_loaders[_charIndex]);
			}
		}

		private function clickHandler($e:MouseEvent){
			/* Click to rotate to removed
			_rotations = Math.abs(3 - $e.currentTarget.pos);
			_rotateCount = 0;
			_rotateDir = (3 - $e.currentTarget.pos) / Math.abs(3 - $e.currentTarget.pos)
			if(_rotations > 1){
				rotateMultiple(_rotateDir, Strong.easeIn);
			}else{
				rotateTo(_rotateDir, 1, Strong.easeInOut, finishMultipleHandler);
			}
			for(var i = 0; i < 5; i++){
				var con:MovieClip = _charActive[i];
				con.buttonMode = false;
				con.removeEventListener(MouseEvent.CLICK, clickHandler);
			}
			_nextBtn.removeEventListener(MouseEvent.CLICK, nextHandler);
			_prevBtn.removeEventListener(MouseEvent.CLICK, prevHandler);
			*/
			
			trace(MovieClip($e.currentTarget).link);
			if (Capabilities.os.substr(0, 3) == "Mac") {
				navigateToURL(new URLRequest(encodeURI(MovieClip($e.currentTarget).link)), "_top");
			}else{
				navigateToURL(new URLRequest("javascript:window.location.href='" + MovieClip($e.currentTarget).link + "';"), "_top");
			}
		}
		
		private function navOverHandler($e:MouseEvent) {
			$e.currentTarget.filters = [new GlowFilter(0xFFFFFF)];
		}
		
		private function navOutHandler($e:MouseEvent) {
			$e.currentTarget.filters = [];
		}
		
		private function overHandler($e:MouseEvent) {
			$e.currentTarget.gotoAndPlay("Over");
		}
		
		private function outHandler($e:MouseEvent) {
			$e.currentTarget.gotoAndPlay("Out");
		}
		
		private function loadComplete($e:Event) {
			_loaded++;
			
			$e.currentTarget.content.smoothing		= true;
			if (_loaded == _loadNum) {
				init();
			}
		}
	}
}