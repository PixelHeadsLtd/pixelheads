package com.cn {
	import flash.display.MovieClip;
	import flash.display.Loader;
	import flash.display.LoaderInfo;
	import flash.text.TextField;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.TimerEvent;
	import flash.utils.Timer;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import fl.transitions.easing.*;
	
	
	public class Ticker extends MovieClip{
		private var _textFields:Array 	= new Array();
		private var _tweenList:Array	= new Array();
		private var _textList:Array		= new Array();
		private var _linkList:Array		= new Array();
		private var _targList:Array		= new Array();
		private var _interval:Number;
		private var _timer:Timer;
		
		public function Ticker() {
			if (this.loaderInfo.parameters.content != undefined) {
				var splitArray:Array 	= String(this.loaderInfo.parameters.content).split(",");
				_interval				= Number(this.loaderInfo.parameters.interval) * 1000;
				for (var i = 0; i < splitArray.length; i += 3) {
					_textList.push(splitArray[i]);
					_linkList.push(splitArray[i + 1]);
					_targList.push(splitArray[i + 2]);
				}
				
				init();
			}
		}
		
		public function init() {
			for (var i = 0; i < _textList.length; i++) {
				var clip:MovieClip 		= new textClip_mc();
				var container:MovieClip = textContainer_mc;
				var text:TextField 		= clip.text_txt;
				
				clip.x				= i * 610;
				clip.y				= 0;
				clip.buttonMode		= true;
				clip.mouseChildren 	= false;
				clip.href			= _linkList[i];
				clip.targ			= _targList[i];
				text.htmlText 		= _textList[i];
				
				clip.addEventListener(MouseEvent.CLICK, clickHandler);
				_textFields.push(clip);
				container.addChild(clip);
			}
			
			_timer = new Timer(_interval);
			_timer.addEventListener(TimerEvent.TIMER, timerHandler);
			_timer.start();
		}
		
		private function clickHandler($e:MouseEvent) {
			navigateToURL(new URLRequest($e.currentTarget.href), $e.currentTarget.targ);
		}
		
		private function timerHandler($e:TimerEvent) {
			for (var i = 0; i < _textFields.length; i++) {
				var clip:MovieClip 	= _textFields[i];
				var tween:Tween 	= new Tween(clip, "x", Strong.easeIn, clip.x, clip.x - 610, 1, true);
				tween.addEventListener(TweenEvent.MOTION_FINISH, tweenHandler);
				
				_tweenList.push(tween);
			}
		}
		
		private function tweenHandler($e:TweenEvent) {
			var clip:MovieClip = $e.currentTarget.obj;
			if (clip.x < 0 - (_textFields.length - 2) * 610) {
				clip.x = 610;
			}
		}
	}
	
}