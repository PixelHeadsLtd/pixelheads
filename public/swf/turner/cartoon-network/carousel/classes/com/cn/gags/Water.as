/**
* Class Water
* @author Adam Messner
* @version 0.1
*/

/*
* Variable key:
* Vars with underscords (_var) are used as global vars.
* Vars with dollar symbols ($var) are used as passed variables to the method/function.
* Vars with none of the above characteristics are local to the method/function.
*/

package com.cn.gags {
	import com.cn.Ticker;
	import flash.display.MovieClip;
	import flash.display.Loader;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.media.SoundMixer;
	import flash.events.Event;
	import flash.events.StatusEvent;
	import flash.events.TimerEvent;
	import flash.utils.Timer;
	import flash.net.URLRequest;
	import flash.external.ExternalInterface;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.*;
	
	import com.vml.utils.Delegate;
	import com.vml.utils.CreateInstance;
	import com.cn.gags.utils.HtmlObject;
	import com.gs.TweenLite;
	
	public class Water extends MovieClip{
		private var _completedFunction:Function;
		private var _jsCallBack:String;
		private var _tweenList:Array;
		private var _wave1:MovieClip;
		private var _wave2:MovieClip;
		private var _bubbles:Array;
		private var _timer:Timer;
		private var _timer2:Timer;
		private var _cont:MovieClip;
		private var _loaders:Array;
		private var _loader:Loader;
		private var _urlRequest:URLRequest;
		private var _magnet:MovieClip;
		private var _image:MovieClip;
		private var _imageArray:Array;
		private var _imageNumber:Number = 0;
		private var _sound:Sound;
		
		public function Water() 
		{
			// Nothing to do here.
			SoundMixer.soundTransform = new SoundTransform(.5);
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}

		public function Execute($args:Array) {			
			_tweenList			= new Array();
			_cont 				= new container_mc();
			addChild(_cont);
			
			_imageArray = HtmlObject.images(ExternalInterface.call("GetImages", $args[1]));
			_loaders = new Array();
			
			createNextImage();
		}
		
		public function createNextImage() {
			var request 	= new URLRequest(_imageArray[_imageNumber].src);
			var newloader 	= new Loader();
			newloader.x 	= _imageArray[_imageNumber].x;
			newloader.y 	= _imageArray[_imageNumber].y;
			
			newloader.contentLoaderInfo.addEventListener(Event.COMPLETE, imageCompleteHandler);
			newloader.load(request);
			_cont.addChild(newloader);
			_loaders.push(newloader);
		}
		
		private function imageCompleteHandler($e:Event):void {
			_imageNumber++;
			
			if (_imageNumber < _imageArray.length) {
				createNextImage();
			}else {
				imagesComplete();
			}
		}
		
		private function imagesComplete(){
			ExternalInterface.call("RemoveImages", "navImage");
			createBubbles();
			
			_wave2 				= new wave2_mc();
			_wave2.x 			= -351;
			_wave2.width 		= stage.stageWidth + 500;
			_wave2.y 			= stage.stageHeight;
			_cont.addChild(_wave2);
			
			_wave1 				= new wave1_mc();
			_wave1.x 			= -141;
			_wave1.width 		= stage.stageWidth + 500;
			_wave1.y 			= stage.stageHeight;
			_cont.addChild(_wave1);
			
			TweenLite.to(_wave1, 10, {y: 0, ease:Strong.easeOut, onComplete:startFade});
			TweenLite.to(_wave2, 10, { y: 0, ease:Strong.easeOut } );
			
			_timer2 = new Timer(4500);
			_timer2.addEventListener(TimerEvent.TIMER, startFloat);
			_timer2.start();
		}
		
		private function createBubbles() {
			_timer = new Timer(150);
			_timer.addEventListener(TimerEvent.TIMER, timerHandler);
			_timer.start();
		}
		
		private function timerHandler($e:TimerEvent) {
			var rnd:Number 			= Math.floor(Math.random() * 3) + 1;
			var name:String			= "bubble" + rnd + "_mc";
			
			var bubble:MovieClip 	= CreateInstance.create(name) as MovieClip;
			bubble.x 				= Math.random() * stage.stageWidth;
			bubble.y 				= stage.stageHeight;
			bubble.addEventListener(Event.ENTER_FRAME, enterHandler);
			_cont.addChild(bubble);
		}
		
		private function enterHandler($e:Event) {
			$e.currentTarget.y -= Math.floor(Math.random() * 10) + 3;
			if ($e.currentTarget.y < 100) {
				$e.currentTarget.y 		= 100;
				$e.currentTarget.alpha -= .1;
			}
		}
		
		private function startFloat($e:TimerEvent) {
			ExternalInterface.call("ShowWater");
			_timer2.stop();
			_timer2.removeEventListener(TimerEvent.TIMER, startFloat);
			for (var i = 0; i < _loaders.length; i++) {
				var clip:Loader 	= _loaders[i];
				var rnd:Number		= Math.floor(Math.random() * 50);
				rnd					= (i % 2 == 1)? rnd: rnd * -1;
				if (i == 0) {
					TweenLite.to(clip, 3, { y: 75, x:clip.x + rnd, rotation:rnd, ease:Bounce.easeOut, onComplete:startFade} );
				}else {
					TweenLite.to(clip, 3, { y: 75, x:clip.x + rnd,  rotation:rnd, ease:Bounce.easeOut } );
				}
			}
		}
		
		private function startFade() {
			var tween:Tween = new Tween(_cont, "alpha", None.easeNone, _cont.alpha, 0, 1, true);
			tween.addEventListener(TweenEvent.MOTION_FINISH, endOfAnimation);
			_tweenList.push(tween);
		}

		private function endOfAnimation($event:TweenEvent):void {
			_timer.stop();
			_timer.removeEventListener(TimerEvent.TIMER, timerHandler);
			_completedFunction();
		}
	}
	
}