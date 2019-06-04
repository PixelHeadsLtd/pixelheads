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
	import flash.media.Sound;
	
	public class Cracked extends MovieClip
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
		import flash.system.Capabilities;
		import flash.display.Bitmap;
		import flash.display.BitmapData;
		import com.cn.gags.utils.HtmlObject;
		
		private var _completedFunction:Function;
		private var _jsCallBack:String;
		private var _crack1XTween:Tween;
		private var _crack2XTween:Tween;
		private var _crack3XTween:Tween;
		private var _crack4XTween:Tween;
		private var _crack1YTween:Tween;
		private var _crack2YTween:Tween;
		private var _crack3YTween:Tween;
		private var _crack4YTween:Tween;
		
		private var _loader:Loader;
		private var _windowSize:Array;
		private var _position:Number;
		private var _urlRequest:URLRequest;
		private var _image:MovieClip;
		private var _timer:Timer = new Timer(100);
		
		public function Cracked() 
		{
			// Nothing to do here.
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}

		public function Execute($args:Array) {
			_position = ExternalInterface.call("GetPosition");
			_windowSize = ExternalInterface.call("GetSize");
			var io:Object = HtmlObject.image(ExternalInterface.call("GetImage", $args[0]));
			
			_urlRequest = new URLRequest(io.src);
			_loader 	= new Loader();
			_image 		= new cracked_mc();
			
			_loader.x 	= io.x;
			_loader.y 	= io.y;
			
			_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, Delegate.create(dropItHandler, io.id));
			_loader.load(_urlRequest);
			this.addChild(_loader);
		}
		
		private function dropItHandler($e:Event, $id:String):void {
			ExternalInterface.call("RemoveImage", $id)
			_image.x = _loader.x;// + (_loader.width / 2);
			_image.y = _loader.y ;// + (_loader.height / 2);
			addChild(_image);
			crack();
		}
		
		private function crack(){
			var bit:Bitmap = Bitmap(_loader.content);
			_loader.content.visible = false;
			var bmd:BitmapData = bit.bitmapData;
			
			_image.crack1_mc.imageHolder_mc.graphics.beginBitmapFill(bmd);
			_image.crack1_mc.imageHolder_mc.graphics.drawRect(0,0,_loader.content.width, _loader.content.height);
			
			_image.crack2_mc.imageHolder_mc.graphics.beginBitmapFill(bmd);
			_image.crack2_mc.imageHolder_mc.graphics.drawRect(0,0,_loader.content.width, _loader.content.height);
			
			_image.crack3_mc.imageHolder_mc.graphics.beginBitmapFill(bmd);
			_image.crack3_mc.imageHolder_mc.graphics.drawRect(0,0,_loader.content.width, _loader.content.height);
			
			_image.crack4_mc.imageHolder_mc.graphics.beginBitmapFill(bmd);
			_image.crack4_mc.imageHolder_mc.graphics.drawRect(0,0,_loader.content.width, _loader.content.height);
			
			_timer.addEventListener(TimerEvent.TIMER, fall);
			_timer.start();
		}

		private function fall($e:TimerEvent) {
			var height:Number = _windowSize[1] + _position;
			
			_crack1XTween = new Tween(_image.crack1_mc, "x", Strong.easeOut, _image.crack1_mc.x, _image.crack1_mc.x - 50, 3, true);
			_crack2XTween = new Tween(_image.crack2_mc, "x", Strong.easeOut, _image.crack2_mc.x, _image.crack2_mc.x + 75, 2.5, true);
			_crack3XTween = new Tween(_image.crack3_mc, "x", Strong.easeOut, _image.crack3_mc.x, _image.crack3_mc.x - 35, 2, true);
			_crack4XTween = new Tween(_image.crack4_mc, "x", Strong.easeOut, _image.crack4_mc.x, _image.crack4_mc.x + 150, 3.5, true);
			
			_crack1YTween = new Tween(_image.crack1_mc, "y", Bounce.easeOut, _image.crack1_mc.y, height - 73.4 - _image.y, 3, true);
			_crack2YTween = new Tween(_image.crack2_mc, "y", Bounce.easeOut, _image.crack2_mc.y, height - 49.9 - _image.y, 2.5, true);
			_crack3YTween = new Tween(_image.crack3_mc, "y", Bounce.easeOut, _image.crack3_mc.y, height - 44.6 - _image.y, 2, true);
			_crack4YTween = new Tween(_image.crack4_mc, "y", Bounce.easeOut, _image.crack4_mc.y, height - 58.9 - _image.y, 3.5, true);
			
			_crack4YTween.addEventListener(TweenEvent.MOTION_STOP, endOfAnimation);
			
			_timer.stop();
			_timer.removeEventListener(TimerEvent.TIMER, fall);
			_timer = new Timer(750);
			_timer.addEventListener(TimerEvent.TIMER, playSound);
			_timer.start();
		}
		
		private function playSound($e:TimerEvent) {
			_timer.stop();
			_timer.removeEventListener(TimerEvent.TIMER, playSound);
			
			var sound:Sound = new bricksfall();
			sound.play();
		}

		private function endOfAnimation($event:TweenEvent):void {
			_completedFunction();
		}
	}
	
}