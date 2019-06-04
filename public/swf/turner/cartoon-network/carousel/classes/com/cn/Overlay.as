/**
* Class Overlay
* @author Ryan Doll
* @version 0.1
*/

/*
* Variable key:
* Vars with underscords (_var) are used as global vars.
* Vars with dollar symbols ($var) are used as passed variables to the method/function.
* Vars with none of the above characteristics are local to the method/function.
*/

package com.cn {

	import flash.display.Stage;
	import flash.display.MovieClip;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.display.LoaderInfo;
	import flash.events.Event;
	import flash.external.ExternalInterface;
	import flash.events.MouseEvent;
	import flash.display.Loader;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.display.Shape;
	import com.vml.utils.Delegate;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.*;
	
	
	public class Overlay extends MovieClip {

		public var _stage:Stage;
		public var _background:MovieClip 	= new MovieClip();
		public var _closeBtnNeeded:Boolean 	= true;
		public var _closeBtn:MovieClip;
		public var _loader:Loader;
		public var _xmlLoader:URLLoader;
		public var _urlRequest:URLRequest;
		public var _testTween:Tween;
		public var _gags:Array;
		public var _gagXML:XML;
		public var _actionScriptIsReady		= false;
		
		// Defaults
		public var _mouseX:Number 			= 0;
		public var _mouseY:Number 			= 0;
		public var _scrollX:Number 			= 0;
		public var _scrollY:Number 			= 0;
		public var _backgroundColor:Number 	= 0x000000;
		public var _backgroundAlpha:Number 	= .0;
		

		public function Overlay() {
			
			_stage 				= this.stage;
			_stage.align 		= StageAlign.TOP_LEFT;
			_stage.scaleMode 	= StageScaleMode.NO_SCALE;
			
			// Check for Flash Vars
			if (loaderInfo.parameters.overlayColor != undefined) {
				_backgroundColor = loaderInfo.parameters.overlayColor;
			} else {
				Debug("Overlay color not passed in.  Using: " + _backgroundColor);
			}		
			
			if (loaderInfo.parameters.overlayAlpha != undefined) {
				_backgroundAlpha = loaderInfo.parameters.overlayAlpha;
			} else {
				Debug("Overlay alpha not passed in.  Using: " + _backgroundAlpha);
			}		
			
			if (loaderInfo.parameters.scrollX != undefined &&  loaderInfo.parameters.scrollY != undefined) {
				_scrollX = Number(loaderInfo.parameters.scrollX);
				_scrollY = Number(loaderInfo.parameters.scrollY);
			} else {
				Debug("Scroll offset not passed in via FlashVar!");
			}
			
			if (loaderInfo.parameters.mouseX != undefined &&  loaderInfo.parameters.mouseY != undefined) {
				_mouseX = Number(loaderInfo.parameters.mouseX);
				_mouseY = Number(loaderInfo.parameters.mouseY);
			} else {
				Debug("Mouse coordinates not passed in via FlashVar!");
			}
			
			if (loaderInfo.parameters.closeBtn != undefined && loaderInfo.parameters.closeBtn.toUpperCase() != "TRUE") {
				_closeBtnNeeded = false;
				Debug("Close button not needed.");
			} else {
				_closeBtnNeeded = true;
				_closeBtn = new closeBtn();
				_closeBtn.buttonMode = true;
				_closeBtn.addEventListener(MouseEvent.MOUSE_UP, closeHandler);
				this.addChild(_closeBtn);
			}
			
			// Create the background
			createBackground();
			loadXML();
			
			// Start listening for stage resizing
			this.addEventListener( Event.ADDED_TO_STAGE, onAddedToStage );
			
			// Start checking the ExternalInterface availability.
			if (ExternalInterface.available) {
				try {
					ExternalInterface.addCallback("IsActionScriptReady", IsActionScriptReady);
					ExternalInterface.addCallback("SetScrollOffset", SetScrollOffset);
					ExternalInterface.addCallback("Gag", Gag);
				} catch (error:SecurityError) {
					Debug("A SecurityError occurred: " + error.message + "\n");
				} catch (error:Error) {
					Debug("An Error occurred: " + error.message + "\n");
				}
			} else {
				Debug("External interface is not available for this container.");
			}
		}
		
		public function Debug($message):void {
			trace("Overlay ---> " + $message);
		}
		
		private function loadXML():void {
			_xmlLoader = new URLLoader();
			_xmlLoader.addEventListener(Event.COMPLETE, xmlLoaded);
			_xmlLoader.load(new URLRequest(this.loaderInfo.parameters.xmlPath));
		}
		
		private function xmlLoaded($e:Event):void
		{
			_gags 			= new Array();
			_gagXML 		= new XML($e.target.data);
			var il:XMLList 	= _gagXML.gag;
			
			for(var i:uint=0; i<il.length(); i++)
			{
				var obj 		= new Object();
				obj.name 		= il.name.text()[i];
				obj.swf 		= il.swflocation.text()[i];
				_gags[obj.name] = obj;
			}
			_actionScriptIsReady = true;
			ExternalInterface.call("CheckIfActionScriptIsReady");
		}	
		
		private function createBackground():void {
			var square:Shape = new Shape();
			square.graphics.beginFill(_backgroundColor, _backgroundAlpha);
			square.graphics.drawRect(0, 0, 1, 1);
			_background.addChild(square);
			this.addChild(_background);
		}		
		
		public function IsActionScriptReady():Boolean {
			return _actionScriptIsReady;
		}
		
		public function SetScrollOffset(x:Number, y:Number):void {
			if (_closeBtnNeeded) {
				_closeBtn.x = _stage.stageWidth + x;
				_closeBtn.y = 0 + y;
			}
		}
		
		private function onAddedToStage( $e:Event ):void {
			if ( _stage.stageWidth == 0 && _stage.stageHeight == 0 ) {
				_stage.addEventListener( Event.RESIZE, onStageResize );
			} else {
				_stage.addEventListener( Event.RESIZE, onStageResize );
				onStageResize( null );
			}
		}

		private function onStageResize( $e:Event):void {
			if ( _stage.stageWidth > 0 && _stage.stageHeight > 0 ) {
				if (_closeBtnNeeded) {
					_closeBtn.x		= _stage.stageWidth + _scrollX;
					_closeBtn.y		= 0 + _scrollY;
				}
				_background.width 	= _stage.stageWidth;
				_background.height 	= _stage.stageHeight;
				_background.x 		= 0;
				_background.y 		= 0;

			}
		}
		
		public function Gag($name:String,...$args):void
		{
			Debug("Loading Gag Swf: " + _gags[$name].swf);
			// This function pulls in all the arguments that the JavaScript function called, and passes them on to the GagHandler Event.
			_urlRequest = new URLRequest(_gags[$name].swf);
			_loader 	= new Loader();
			_loader.contentLoaderInfo.addEventListener(Event.INIT, Delegate.create(GagHandler, $args));
			_loader.load(_urlRequest);
			this.addChild(_loader);
		}
		
		public function GagHandler($e:Event, $args:Array):void {
			Object(_loader.content).OnComplete = CloseOverlay;
			Object(_loader.content).Execute($args);
		}
				
		private function closeHandler($event:MouseEvent):void {
			CloseOverlay();
		}
		
		// Calls to JavaScript
		
		public function CloseOverlay() {
			ExternalInterface.call("HideOverlay");
		}
	}
}