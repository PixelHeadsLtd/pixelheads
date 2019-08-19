/**
* Class Button
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

	import flash.display.MovieClip;
	import flash.display.LoaderInfo;
	import flash.text.TextField;
	import flash.events.Event;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import flash.events.MouseEvent;
	import flash.display.Stage;
	
	
	public class Button extends MovieClip {

		public var _xmlLoader:URLLoader;
		public var _urlRequest:URLRequest;
		public var _gags:Array;
		public var _gagXML:XML;
		
		// Defaults
		

		public function Button() {
			loadXML();
			if(this.loaderInfo.parameters.btnTitle != undefined){
				text_txt.htmlText = "<font size='"+this.loaderInfo.parameters.btnSize+"'><textformat leading='"+this.loaderInfo.parameters.btnLead+"'>"+this.loaderInfo.parameters.btnTitle+"</textformat></font>";
				text_txt.y += Number(this.loaderInfo.parameters.btnY);
			}
		}
		
		public function Debug($message):void {
			trace("DoNotPressButton ---> " + $message);
		}
		
		private function loadXML():void {
			_xmlLoader = new URLLoader();
			_xmlLoader.addEventListener(Event.COMPLETE, xmlLoaded);
			trace(this.loaderInfo.parameters.xmlPath);
			_xmlLoader.load(new URLRequest(this.loaderInfo.parameters.xmlPath));
		}
		
		private function xmlLoaded($e:Event):void
		{
			_gags 			= new Array();
			_gagXML 		= new XML($e.target.data);
			var il:XMLList 	= _gagXML.random.javascript;
			
			for(var i:uint=0; i<il.length(); i++)
			{
				_gags[i] = il.text()[i];
			}
			this.btn.buttonMode = true;
			this.btn.addEventListener(MouseEvent.MOUSE_DOWN, animate);
			this.btn.addEventListener(MouseEvent.MOUSE_UP, executeGag);
			this.btn.addEventListener(MouseEvent.MOUSE_OVER, overHandler);
			this.btn.addEventListener(MouseEvent.MOUSE_OUT, outHandler);
			
			
		}	
		private function animate($e:MouseEvent) {
			btn.gotoAndStop("down");
			stage.addEventListener( MouseEvent.MOUSE_UP, executeGag );
		}	
		private function overHandler($e:MouseEvent) {
			btn.gotoAndStop("over");
		}	
		private function outHandler($e:MouseEvent) {
			btn.gotoAndStop("up");
		}		
		private function executeGag($e:MouseEvent) {
			stage.removeEventListener( MouseEvent.MOUSE_UP, executeGag );
			btn.gotoAndStop("up");
			var randomNum:Number = Math.floor(_gags.length * Math.random());
			var link:URLRequest = new URLRequest("javascript:" + _gags[randomNum]);
			trace("javascript:" + _gags[randomNum]);
			navigateToURL(link, "_self");
		}
		
	}
}