/**
* Class Drop
* @author Ryan Doll
* @version 0.1
*/

/*
* Variable key:
* Vars with underscords (_var) are used as global vars.
* Vars with dollar symbols ($var) are used as passed variables to the method/function.
* Vars with none of the above characteristics are local to the method/function.
*/

package com.cn.gags 
{
	import flash.display.MovieClip;
	
	public class Jump extends MovieClip
	{
		import flash.events.Event;
		import fl.transitions.Tween;
		import fl.transitions.TweenEvent;
		import fl.transitions.easing.*;
		import flash.display.Loader;
		import flash.net.URLRequest;
		import com.vml.utils.Delegate;
		import flash.external.ExternalInterface;
		import flash.events.TimerEvent;
		import flash.utils.Timer;
		import flash.display.Bitmap;
		import flash.display.BitmapData;
		import com.cn.gags.utils.HtmlObject;
		
		private var _completedFunction:Function;
		private var _jsCallBack:String;
		
		
		private var _loaders:Array;
		private var _loader:Loader;
		private var _urlRequest:URLRequest;
		private var _imageArray:Array;
		private var _image:MovieClip;
		private var _imageXTween:Tween;
		private var _imageYTween:Tween;
		private var _timer:Timer = new Timer(300, 1);
		
		public function Jump() 
		{
			// Nothing to do here.
		}
		
		private function timerHandler($e:TimerEvent) {
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}
		
		public function Execute($args:Array) {
			_imageArray = HtmlObject.images(ExternalInterface.call("GetImages", $args[1]));
			_loaders = new Array();
			var request 	= new URLRequest(_imageArray[0].src);
			var newloader 	= new Loader();
			newloader.x 	= _imageArray[0].x;
			newloader.y 	= _imageArray[0].y;
			
			newloader.contentLoaderInfo.addEventListener(Event.COMPLETE, Delegate.create(firstImageHandler, $args[1], 0));
			newloader.load(request);
			this.addChild(newloader);
			_loaders[0] 	= newloader;
		}
		
		private function firstImageHandler($e:Event, $class:String, $id:Number):void {
			_image = new billy_mc();
			_image.x = parseInt(_imageArray[0].x) + _loaders[0].content.width/2;
			_image.y = parseInt(_imageArray[0].y) + _loaders[0].content.height/2;	
			
			addChild(_image);
			
			createSecondImage()
		}
		
		private function createSecondImage() {
			var request 	= new URLRequest(_imageArray[1].src);
			var newloader 	= new Loader();
			newloader.x 	= _imageArray[1].x;
			newloader.y 	= _imageArray[1].y;
			newloader.contentLoaderInfo.addEventListener(Event.COMPLETE, secondImageHandler);
			newloader.load(request);
			this.addChild(newloader);
			_loaders[1] 	= newloader;
		}
		
		private function secondImageHandler($e:Event) {
			_timer.addEventListener(TimerEvent.TIMER, tick);
			_timer.start();
		}
		
		private function tick(e:TimerEvent) {
			setChildIndex(_image, numChildren - 1);
			var xEnd:Number = parseInt(_imageArray[1].x) + _loaders[1].content.width / 2;
			var yEnd:Number = parseInt(_imageArray[1].y) + _loaders[1].content.height / 2;
			
			var xDist:Number = _image.x - xEnd;
			var yDist:Number = _image.y - yEnd;
			
			var time:Number = Math.sqrt((xDist * xDist) + (yDist * yDist))/300;
			
			_imageXTween = new Tween(_image, "x", Strong.easeOut, _image.x, xEnd, time, true); 
			_imageYTween = new Tween(_image, "y", Bounce.easeOut, _image.y, yEnd, time, true); 
			_imageYTween.addEventListener(TweenEvent.MOTION_STOP, endOfAnimation);
			_timer.removeEventListener(TimerEvent.TIMER, tick) ;
		}
		
		private function endOfAnimation($event:TweenEvent):void {
			_completedFunction();
		}
	}
	
}