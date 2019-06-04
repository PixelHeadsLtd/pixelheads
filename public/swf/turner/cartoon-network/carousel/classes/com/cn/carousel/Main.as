package com.cn.carousel {
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.display.LoaderInfo;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.external.ExternalInterface;
	import flash.net.URLLoader;
	import flash.net.navigateToURL;
	import flash.net.URLRequest;
	import flash.system.Capabilities;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.text.AntiAliasType;
	import com.vml.utils.CreateInstance;
	
	public class Main extends MovieClip{
		private var _charList:Array		= new Array();
		private var _charActive:Array	= new Array();
		private var _linkList:Array		= new Array();
		private var _titleList:Array	= new Array();
		private var _loaderInfo:Array	= new Array();
		private var _loader:URLLoader	= new URLLoader();
		private var _offset:Number 		= 45;
		private var _hover:MovieClip 	= new hover_mc();
		private var _hover2:MovieClip 	= new hover2_mc();
		private var _tFormat:TextFormat = new TextFormat();
		private var _xml:XML;
		

		public function Main() {
			if (this.loaderInfo.parameters.content != undefined) {	
				trace(String(this.loaderInfo.parameters.content));
				_loader.load(new URLRequest(String(this.loaderInfo.parameters.content)));
				_loader.addEventListener(Event.COMPLETE, loaded);
				_tFormat.size 	= 12;
				_tFormat.color 	= 0xFFFFFF;
				_tFormat.font = "arial";
			}
		}
		
		private function loaded($e:Event) {
			_xml = XML(_loader.data);
			ExternalInterface.addCallback("slime", getSlimed);
			ExternalInterface.addCallback("water", getWatered);
			ExternalInterface.addCallback("hatOn", getSanta);
			ExternalInterface.addCallback("hatOff", getSantaHatOff);
			_hover.mouseChildren = false;
			_hover.mouseEnabled = false;
			_hover.y = 10;
			
			_hover2.mouseChildren = false;
			_hover2.mouseEnabled = false;
			_hover2.y = 10;
			
			init();
		}
		
		public function init() {			
			for (var i = 0; i < _xml.character.length(); i ++) {
				_titleList.push(_xml.character[i].title);
				_linkList.push(_xml.character[i].link);
				_charList.push(_xml.character[i].character);
			}
			
			for (i = 0; i < _charList.length; i++) {
				var char:MovieClip = MovieClip(CreateInstance.create(_charList[i]));
				carousel_mc.addChild(char);
				_charActive.push(char);
				char.stance.stop();
				char.slime_mc.gotoAndStop(1);
				char.scuba_mc.gotoAndStop(1);
				char.santahat_mc.gotoAndStop(1);
				char.name 		= _charList[i];
				char.title		= _titleList[i];
				char.link		= _linkList[i];
				char.x 			= _offset;
				char.y 			= 80;
				char.buttonMode = true;
				char.mouseChildren = false;
				char.addEventListener(MouseEvent.CLICK, clickHandler);
				char.addEventListener(MouseEvent.MOUSE_OVER, overHandler);
				char.addEventListener(MouseEvent.MOUSE_OUT, outHandler);
				
				_offset += char.width/2 + 800 / Math.min(10, _charList.length);
			}
			
			right_btn.addEventListener(MouseEvent.MOUSE_DOWN, rightDownHandler);
			left_btn.addEventListener(MouseEvent.MOUSE_DOWN, leftDownHandler);
		}
		
		private function playClips() {
			
			for (var i = 0; i < _charActive.length; i++) {
				_charActive[i].stance.gotoAndPlay("walk");
			}
		}
		
		private function stopClips() {
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].stance.gotoAndPlay("stop");
				//debug.text = "I've now stopped walking";
			}
		}
		
		private function swapFacing($scale:Number) {
			playClips();
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].scaleX = $scale;
				
			}
		}
		
		private function clickHandler($e:MouseEvent) {
			
			if (Capabilities.os.substr(0, 3) == "Mac") {
				navigateToURL(new URLRequest(encodeURI($e.currentTarget.link)), "_top");
			}else{
				navigateToURL(new URLRequest("javascript:window.location.href='" + $e.currentTarget.link + "';"), "_top");
			}
		}
		
		private function overHandler($e:MouseEvent) {
			var clip:MovieClip = MovieClip($e.currentTarget);
			var str:String = clip.title;
			trace(str.length);
			if (str.length > 40) {
				str = clip.title.substr(0, 40);
			}
			
			if (clip.x + clip.width / 2 + _hover.width < 600) {
				clip.hover = _hover;
				_hover.x = clip.x + clip.width / 2;
				_hover.y = 10;
				_hover.gotoAndPlay("Over");
				
				var text:TextField = new TextField();
				text.defaultTextFormat = _tFormat;
				text.x = 26;
				text.y = 2;
				text.autoSize = "center";
				text.htmlText = str;
				text.x = Math.max( 26, 70 - text.textWidth/2);
				
				_hover.hoverBG_mc.addChild(text);
				_hover.hoverBG_mc.span_mc.width = Math.max(97.3, text.textWidth + 20);
				clip.hoverText = text;
				addChild(_hover);
			}else {
				clip.hover = _hover2;
				_hover2.x = clip.x - clip.width / 2;
				_hover2.y = 10;
				_hover2.gotoAndPlay("Over");
				
				var text2:TextField = new TextField();
				text2.defaultTextFormat = _tFormat;
				text2.y = 2;
				text2.autoSize = "center";
				text2.htmlText = str;
				text2.x = Math.min( -29.8 - text2.textWidth, - 70 - text2.textWidth/2);
				
				_hover2.hoverBG_mc.addChild(text2);
				_hover2.hoverBG_mc.span2_mc.width = Math.max(97.3, text2.textWidth + 20);
				_hover2.hoverBG_mc.span2_mc.x = -29 - _hover2.hoverBG_mc.span2_mc.width;
				clip.hoverText = text2;
				addChild(_hover2);
			}
			
			if(clip.stance.currentLabel != "walk"){
				clip.stance.gotoAndPlay("pose");
			}
		}
		
		private function outHandler($e:MouseEvent) {
			var clip:MovieClip = MovieClip($e.currentTarget);
			clip.hover.gotoAndPlay("Out");
			clip.hover.hoverBG_mc.removeChild(clip.hoverText);
			
			if(clip.stance.currentLabel == "pose"){
				clip.stance.gotoAndPlay("poseOut");
			}
		}
		
		private function rightDownHandler($e:MouseEvent) {
			left_btn.removeEventListener(MouseEvent.MOUSE_DOWN, leftDownHandler);
			right_btn.removeEventListener(MouseEvent.MOUSE_DOWN, rightDownHandler);
			stage.addEventListener(MouseEvent.MOUSE_UP, upHandler);
			if(!stage.hasEventListener(Event.ENTER_FRAME)){
				stage.addEventListener(Event.ENTER_FRAME, rightHandler);
				swapFacing(1);
			}
		}
		
		private function leftDownHandler($e:MouseEvent){
			left_btn.removeEventListener(MouseEvent.MOUSE_DOWN, leftDownHandler);
			right_btn.removeEventListener(MouseEvent.MOUSE_DOWN, rightDownHandler);
			stage.addEventListener(MouseEvent.MOUSE_UP, upHandler);
			if(!stage.hasEventListener(Event.ENTER_FRAME)){
				stage.addEventListener(Event.ENTER_FRAME, leftHandler);
				swapFacing(-1);
			}
		}
		
		private function upHandler($e:MouseEvent){
			right_btn.addEventListener(MouseEvent.MOUSE_DOWN, rightDownHandler);
			left_btn.addEventListener(MouseEvent.MOUSE_DOWN, leftDownHandler);
			stage.removeEventListener(Event.ENTER_FRAME, leftHandler);
			stage.removeEventListener(Event.ENTER_FRAME, rightHandler);
			stage.removeEventListener(MouseEvent.MOUSE_UP, upHandler);
			stopClips();
		}
		
		private function rightHandler($e:Event){
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].x += 3;
				if (_charActive[i].x > _offset - 45) {
					_charActive[i].x = 0;
				}
			}
		}
		
		private function leftHandler($e:Event){
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].x -= 3;
				if (_charActive[i].x < 0) {
					_charActive[i].x = _offset - 45;
				}
			}
		}
		
		public function getSlimed() {
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].slime_mc.gotoAndPlay(2);
			}
		}
		
		public function getWatered() {
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].scuba_mc.gotoAndPlay(2);
			}
		}
		public function getSanta() {
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].santahat_mc.gotoAndStop(2);
			}
		}
		public function getSantaHatOff() {
			for(var i = 0; i < _charActive.length; i++){
				_charActive[i].santahat_mc.gotoAndPlay(50);
			}
		}
	}
}