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
	
	public class Slime extends MovieClip
	{
		import flash.events.Event;
		import flash.events.StatusEvent;
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
		private var _slime0Tween:Tween;
		private var _slime1Tween:Tween;
		private var _slime2Tween:Tween;
		private var _slime3Tween:Tween;
		private var _slime4Tween:Tween;
		private var _slime5Tween:Tween;
		
		private var _loader:Loader;
		private var _urlRequest:URLRequest;
		private var _image:MovieClip;
		
		public function Slime() 
		{
			// Nothing to do here.
		}
		
		private function timerHandler($e:TimerEvent) {
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}

		public function Execute($args:Array) {
			ExternalInterface.call("ShowSlime");
			
			for (var i = 0; i < ((stage.stageWidth  + 424) / 424); i++) {
				var slime:slime_mc = new slime_mc();
				
				slime.x = 423 * i;
				slime.y = - 1213.2;
				this.addChild(slime);
				this["_slime" + i + "Tween"] = new Tween(slime, "y", Strong.easeOut, slime.y, stage.stageHeight - 600, 2, true);
				
			}
			
			this["_slime" + (i-1) + "Tween"].addEventListener(TweenEvent.MOTION_STOP, endOfAnimation);
		}

		private function endOfAnimation($event:TweenEvent):void {
			_completedFunction();
		}
	}
	
}