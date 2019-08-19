package com.cn{
	import flash.display.MovieClip;
	import flash.display.Loader;
	import flash.display.LoaderInfo;
	import flash.geom.Point;
	import flash.net.URLLoader;
	import flash.text.TextField;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.TimerEvent;
	import flash.text.TextFormat;
	import flash.utils.Timer;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import fl.transitions.easing.*;

	import com.gs.TweenLite;

	public class Ticker extends MovieClip {
		private var _textFields:Array = new Array();
		private var _textList:Array= new Array();
		private var _linkList:Array= new Array();
		private var _targList:Array= new Array();
		private var _tFormat:TextFormat = new TextFormat();
		private var _stopped:Number= 0;
		private var _currentAnimationMovie:MovieClip;
		private var _animationStarted:Boolean = false;
		
		public function Ticker() {
			//if (this.loaderInfo.parameters.content != undefined) {
			if (true) {
				//var splitArray:Array = String(this.loaderInfo.parameters.content).split(",");
				trace("Ticker init");

				var s = "\"Find out how to get Cartoon Network \", \"http://www.cartoonnetwork.co.uk/help/how%20do%20i%20get%20cartoon%20network\","
				        +"\"_self\", \"The is a test string that's a bit longer than the others \", \"http://www.cartoonnetwork.co.uk/help/how%20do%20i%20get%20cartoon%20network\", \"_self\"";
				var splitArray:Array = s.split(",");
				for (var i = 0; i < splitArray.length; i += 3) {
					trace("Ticker init .."+splitArray[i]);

					_textList.push(splitArray[i]);
					trace("_linkList init .."+splitArray[i+1]);
					_linkList.push(splitArray[i + 1]);
					trace("_targList init .."+splitArray[i+2]);
					_targList.push(splitArray[i + 2]);
				}
				_tFormat.font = "Arial";
				_tFormat.bold = true;
				//_tFormat.color = 0xFFFF00;
				_tFormat.color = 0x00f6ff;
				_tFormat.size = 19;

				init();
			}
		}

		public function init() {
			for (var i = 0; i < _textList.length; i++) {
				var clip:MovieClip = new textClip_mc();

				var container:MovieClip = textContainer_mc;
				container.opposite= textContainer2_mc;

				var text:TextField = new TextField();
				text.autoSize = "left";

				clip.x= (i == 0)? 0: container.width + 40;
				clip.y= -8;
				clip.id= i;
				clip.buttonMode= true;
				clip.mouseChildren = false;
				clip.href= _linkList[i];
				clip.targ= _targList[i];
				text.htmlText = _textList[i];
				text.setTextFormat(_tFormat);
				text.embedFonts = true;
				text.antiAliasType = "advanced";
				clip.addChild(text);
				clip.cacheAsBitmap = true;

				clip.addEventListener(MouseEvent.CLICK, clickHandler);
				_textFields.push(clip);
				container.addChild(clip);
			}
			for (i = 0; i < _textList.length; i++) {
				clip = new textClip_mc();
				container = textContainer2_mc;
				container.opposite= textContainer_mc;
				text = new TextField();
				text.autoSize = "left";

				clip.x= (i == 0)? 0: container.width + 40;
				clip.y= -8;
				clip.id= i;
				clip.buttonMode= true;
				clip.mouseChildren = false;
				clip.href= _linkList[i];
				clip.targ= _targList[i];
				text.htmlText = _textList[i];
				text.setTextFormat(_tFormat);
				text.embedFonts = true;
				text.antiAliasType = "advanced";
				clip.addChild(text);
				clip.cacheAsBitmap = true;

				clip.addEventListener(MouseEvent.CLICK, clickHandler);
				container.addChild(clip);
			}
			textContainer2_mc.y = textContainer_mc.y;
			textContainer2_mc.x = textContainer_mc.x + textContainer_mc.width + 40;
			transition();
		}
		private function clickHandler($e:MouseEvent) {
			navigateToURL(new URLRequest($e.currentTarget.href), $e.currentTarget.targ);
		}
		private function transition() {
			TweenLite.to(textContainer_mc, 1, { x:textContainer_mc.x - 130, ease:None.easeNone, onComplete:stopHandler} );
			TweenLite.to(textContainer2_mc, 1, { x:textContainer2_mc.x - 130, ease:None.easeNone, onComplete:stopHandler} );
		}
		private function stopHandler() {
			_stopped++;
			if (_stopped > 1) {
				_stopped = 0;
				tweenHandler();
			}
		}
		
		private var currentAnimation:int = 0;
		
		private function tweenHandler() {
			
			
			
			
			var animations:Array = ["cheeseNbloo", "paws", "heart", "stars", "fuzzy", "bubbles", "arrow"];
			if(_currentAnimationMovie != null ) {			
			   trace("_currentAnimationMovie.currentLabel:"+_currentAnimationMovie.currentLabel);
			}
			if(_animationStarted && _currentAnimationMovie != null && _currentAnimationMovie.currentFrame == 1) {
				textContainer_mc.x = textContainer_mc.opposite.x + textContainer_mc.opposite.width + 40;            
				_animationStarted = false;
			}
			
			if (!_animationStarted && textContainer_mc.x < -textContainer_mc.width) {
				

				_animationStarted = true;

				switch( currentAnimation ) {
					case 0:
					 cheeseNbloo_mc.gotoAndPlay(2);
					 _currentAnimationMovie = cheeseNbloo_mc; break;
					case 1:
					 paws_mc.gotoAndPlay(2);
					 _currentAnimationMovie = paws_mc; break;
					case 2:
					 heart_mc.gotoAndPlay(2); 
					 _currentAnimationMovie = heart_mc;break;
					case 3:
					 stars_mc.gotoAndPlay(2);
					 _currentAnimationMovie = stars_mc; break;
					case 4:
					 fuzzy_mc.gotoAndPlay(2);
					 _currentAnimationMovie = fuzzy_mc; break;
					case 5:
					 bubbles_mc.gotoAndPlay(2);
					 _currentAnimationMovie = bubbles_mc; break;
					case 6:
					 arrow_mc.gotoAndPlay(2);
					 _currentAnimationMovie = arrow_mc; break;
				}
				currentAnimation ++;
				if(currentAnimation >= animations.length) currentAnimation = 0;
			}
			
			
			
			
			
			
			if (textContainer2_mc.x < -textContainer2_mc.width) {
				textContainer2_mc.x = textContainer2_mc.opposite.x + textContainer2_mc.opposite.width + 40;
			}
			transition();
		}
	}
}