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
	
	public class Drop extends MovieClip
	{
		import flash.events.Event;
		import flash.events.MouseEvent;
		import fl.transitions.Tween;
		import fl.transitions.TweenEvent;
		import fl.transitions.easing.*;
		import flash.display.Loader;
		import flash.net.URLRequest;
		import com.vml.utils.Delegate;
		import flash.system.Capabilities;
		import flash.external.ExternalInterface;
		import com.cn.gags.utils.HtmlObject;
		
		private var _completedFunction:Function;
		private var _jsCallBack:String;
		private var _finalTween:Tween;
		private var _loader:Loader;
		private var _urlRequest:URLRequest;
		private var _loaders:Array;
		private var _imageArray:Array;
		private var _windowSize:Array;
		private var _position:Number;
		
		public function Drop() 
		{
			// Nothing to do here.
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}

		public function Execute($args:Array) {
			_position = ExternalInterface.call("GetPosition");
			_windowSize = ExternalInterface.call("GetSize");
			if ($args[0] == "multiple") {
				Multiple($args);
			} else {
				var io:Object = HtmlObject.image(ExternalInterface.call("GetImage", $args[0]));
				_urlRequest = new URLRequest(io.src);
				_loader 	= new Loader();
				
				_loader.x 	= io.x;
				_loader.y 	= io.y;
				
				_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, Delegate.create(dropItHandler, io.id));
				_loader.load(_urlRequest);
				this.addChild(_loader);
			}
		}
		
		public function Multiple($args:Array) {
			_imageArray = HtmlObject.images(ExternalInterface.call("GetImages", $args[1]));
			_loaders = new Array();
			for (var i = 0; i < _imageArray.length;  i++) {
				var request 	= new URLRequest(_imageArray[i].src);
				var newloader 	= new Loader();
				newloader.x 	= _imageArray[i].x;
				newloader.y 	= _imageArray[i].y;
				newloader.contentLoaderInfo.addEventListener(Event.COMPLETE, Delegate.create(dropMultipleHandler, $args[1], i));
				newloader.load(request);
				this.addChild(newloader);
				_loaders[i] 	= newloader;
			}
		}
		
		private function dropItHandler($e:Event, $id:String):void {
			ExternalInterface.call("RemoveImage", $id);
			var height:Number = _windowSize[1] + _position;
			
			var newTween2 	= new Tween(_loader, "x", None.easeInOut, _loader.x, _loader.x + 100, 1, true);
			_finalTween 	= new Tween(_loader, "y", Bounce.easeOut, _loader.y, height - _loader.height , 1, true);
			_finalTween.addEventListener(TweenEvent.MOTION_STOP, endOfAnimation);
		}
		
		private function dropMultipleHandler($e:Event, $class:String, $id:Number):void {
			var height:Number = _windowSize[1] + _position;
			
			var newTween1 	= new Tween(_loaders[$id], "x", None.easeInOut, _loaders[$id].x, _loaders[$id].x + 100, 1, true);
			var newTween2 	= new Tween(_loaders[$id], "y", Bounce.easeOut, _loaders[$id].y, height - _loaders[$id].height , 1, true);
			if ($id == 0) {
				ExternalInterface.call("RemoveImages", $class);
			}	
			if ($id == (_imageArray.length - 1)) {
				_finalTween = newTween2;
				_finalTween.addEventListener(TweenEvent.MOTION_STOP, endOfMultipleAnimations);
			}			
		}
		
		private function endOfAnimation($event:TweenEvent):void {
			_completedFunction();
		}
		private function endOfMultipleAnimations($event:TweenEvent):void {
			_completedFunction();
		}
	}
	
}