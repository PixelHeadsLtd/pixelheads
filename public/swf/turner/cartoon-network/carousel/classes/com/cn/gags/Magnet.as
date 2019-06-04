package com.cn.gags {
	import flash.display.MovieClip;
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.TimerEvent;
	import flash.utils.Timer;
	import flash.net.URLRequest;
	import flash.external.ExternalInterface;
	import flash.system.Capabilities;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.*;
	
	import com.vml.utils.Delegate;
	import com.cn.gags.utils.HtmlObject;
	
	public class Magnet extends MovieClip{
		
		private var _completedFunction:Function;
		private var _jsCallBack:String;
		
		private var _tweens:Array;
		private var _loaders:Array;
		private var _windowSize:Array;
		private var _loader:Loader;
		private var _urlRequest:URLRequest;
		private var _magnet:MovieClip;
		private var _image:MovieClip;
		private var _imageArray:Array;
		private var _imageNumber:Number = 0;
		private var _offset:Number = -1;
		private var _position:Number;
		private var _imageXTween:Tween;
		private var _imageYTween:Tween;
		private var _timer:Timer = new Timer(3000, 1);
		
		public function Magnet() 
		{
			// Nothing to do here.
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}
		
		public function Execute($args:Array) {
			_position = ExternalInterface.call("GetPosition");
			_windowSize = ExternalInterface.call("GetSize");
			_imageArray = HtmlObject.images(ExternalInterface.call("GetImages", $args[1]));
			_loaders = new Array();
			
			_magnet = new magnet_mc();
			_magnet.x = stage.stageWidth;
			_magnet.y = _windowSize[1] + _position;
			addChild(_magnet);
		}
		
		public function createNextImage() {
			var request 	= new URLRequest(_imageArray[_imageNumber].src);
			var newloader 	= new Loader();
			newloader.x 	= _imageArray[_imageNumber].x;
			newloader.y 	= _imageArray[_imageNumber].y;
			
			newloader.contentLoaderInfo.addEventListener(Event.COMPLETE, imageCompleteHandler);
			newloader.load(request);
			this.addChild(newloader);
			_loaders.push(newloader);
		}
		
		private function imageCompleteHandler($e:Event):void {
			_imageNumber++;
			trace(_imageNumber);
			trace(_imageArray.length);
			
			if (_imageNumber < _imageArray.length) {
				createNextImage();
			}else {
				imagesComplete();
			}
		}
		
		private function imagesComplete() {
			ExternalInterface.call("RemoveImages", "navImage");
			_tweens = new Array();
			for (var i = 0; i < numChildren; i ++) {
				if(this.getChildAt(i) is Loader){
					var clip:Loader = Loader(this.getChildAt(i));
					var xTween:Tween = new Tween(clip, "x", Strong.easeIn, clip.x, _magnet.x - 375, 2, true);
					var yTween:Tween = new Tween(clip, "y", Strong.easeIn, clip.y, _magnet.y - 325, 2, true);
					var rTween:Tween = new Tween(clip, "rotation", Strong.easeIn, clip.rotation, -45, 2, true);
					_tweens.push([xTween, yTween, rTween]);
				}
			}
			_tweens[0][0].addEventListener(TweenEvent.MOTION_FINISH, rollOut);
		}
		
		private function completeHandler(e:Event) {
			this.addEventListener(Event.ENTER_FRAME, enterHandler);
		}
		
		private function enterHandler(e:Event) {
			_offset = (_offset > 0) ? -1: 1;
			for (var i = 0; i < numChildren; i ++) {
				if(this.getChildAt(i) is Loader){
					var clip:Loader = Loader(this.getChildAt(i));
					clip.x += _offset;
					clip.y += _offset;
				}
			}
		}
		
		private function rollOut($e:TweenEvent) {
			this.removeEventListener(Event.ENTER_FRAME, enterHandler);
			_magnet.robot_mc.gotoAndPlay(68);
			_tweens = new Array();
			for (var i = 0; i < numChildren; i ++) {
				if(this.getChildAt(i) is Loader){
					var clip:Loader = Loader(this.getChildAt(i));
					var xTween:Tween = new Tween(clip, "x", Regular.easeIn, clip.x, clip.x + 348, 25);
					_tweens.push([xTween]);
				}
			}
			_tweens[0][0].addEventListener(TweenEvent.MOTION_FINISH, endOfAnimation);
		}

		private function endOfAnimation($event:TweenEvent):void {
			_completedFunction();
		}
		
	}
	
}