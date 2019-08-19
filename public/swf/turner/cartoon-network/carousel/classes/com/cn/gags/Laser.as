/**
* Class Overlay
* @author Adam Messner (Modified by Ryan Doll)
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
	
	public class Laser extends MovieClip
	{
		import flash.events.Event;
		import flash.events.MouseEvent;
		import flash.display.LineScaleMode;
		import flash.display.CapsStyle;
		import flash.utils.Timer;
		import flash.events.TimerEvent;
		import flash.external.ExternalInterface;
		import com.cn.gags.utils.HtmlObject;
		import com.vml.utils.CreateInstance;
		
		private var _invis_mc:MovieClip;
		private var _delay:uint 		= 300;
		private var _repeat:uint 		= 4;
		private var _lazerTimer:Timer;
		private var _xStartPoint:Number;
		private var _yStartPoint:Number;	
		private var _completedFunction:Function;	
		private var _jsCallBack:String;
		
		public function Laser() 
		{
			// Nothing to do here.
		}
		
		public function set OnComplete($function:Function):void {
			_completedFunction = $function;
		}

		public function Execute($args:Array) {
			var io:Object = HtmlObject.image(ExternalInterface.call("GetImage", $args[0]));
			_xStartPoint = ($args.length > 1) ? parseInt(io.x) + parseInt($args[1]) : parseInt(io.x);
			_yStartPoint = ($args.length > 2) ? parseInt(io.y) + parseInt($args[2]) : parseInt(io.y);
			
			_lazerTimer  		= new Timer(_delay, _repeat);
            _lazerTimer.addEventListener(TimerEvent.TIMER, timerHandler);
			_lazerTimer.addEventListener(TimerEvent.TIMER_COMPLETE, timerComplete);
			_lazerTimer.start(); 
		}
		
		private function htmlImage($data:String) {
			var da:Array = $data.split("|");
			var imageObject:Object = new Object();
			for (var x = 0; x < da.length; x++ ) {
				var a:Array = da[x].split("=");
				imageObject[a[0]] = a[1];
			}
			return imageObject;
		}
		
        private function timerHandler(e:TimerEvent):void{
            createLaser(_xStartPoint, _yStartPoint);
        }

        private function timerComplete(e:TimerEvent):void{
            _lazerTimer.removeEventListener(TimerEvent.TIMER, timerHandler);
			_lazerTimer.removeEventListener(TimerEvent.TIMER_COMPLETE, timerComplete);
			_completedFunction();
        }		
		
		private function createLaser($x:Number, $y:Number) {
			var color:Array = new Array("red", "green");
			var randColor:Number = Math.floor(Math.random() * 2);
			
			var laserContainer:MovieClip = new MovieClip();
			var laser:MovieClip = MovieClip(CreateInstance.create(color[randColor] + "Laser_mc"));
			var start:MovieClip = MovieClip(CreateInstance.create(color[randColor] + "Start_mc"));
			
			laserContainer.lastX = laser.x = start.x = $x;
			laserContainer.lastY = laser.y = start.y = $y;
			laserContainer.color = color[randColor];
			laserContainer.count = 0;
			
			laser.rotation = stretchLaser(laser, start, laserContainer);
			start.rotation = 0;
			
			laserContainer.addChild(laser);
			laserContainer.addChild(start);
			addChild(laserContainer);
			
			laserContainer.addEventListener(Event.ENTER_FRAME, laserHandler);
		}
		
		private function laserHandler($e:Event) {
			var laserContainer:MovieClip = MovieClip($e.currentTarget);
			var laser:MovieClip = MovieClip(CreateInstance.create(laserContainer.color + "Laser_mc"));
			var bounce:MovieClip = MovieClip(CreateInstance.create(laserContainer.color + "Bounce_mc"));
			
			laser.x = bounce.x = laserContainer.lastX;
			laser.y = bounce.y = laserContainer.lastY;
			
			laser.rotation = stretchLaser(laser, bounce, laserContainer);
			laserContainer.addChild(laser);
			laserContainer.addChild(bounce);
			
			laserContainer.count++;
			if (laserContainer.count > 2) laserContainer.removeEventListener(Event.ENTER_FRAME, laserHandler);
		}
		
		private function stretchLaser($laser:MovieClip, $bounce:MovieClip, $laserContainer:MovieClip) {
			var laser:MovieClip = $laser;
			var bounce:MovieClip = $bounce;
			var laserContainer:MovieClip = $laserContainer;
			var ranSide:Number = Math.floor(Math.random() * 2);
			var ranPoint:Number = Math.floor(Math.random() * 2);
			var angle:Number;
			var xDist:Number;
			var yDist:Number;
			var endX:Number;
			var endY:Number;
			
			endX = Math.floor(Math.random() * stage.stageWidth);
			endY = Math.floor(Math.random() * stage.stageHeight);
			
			fixBounce(bounce, laserContainer);
			
			if (ranSide == 0) {
				if (laserContainer.lastX == 0 || laserContainer.lastX == stage.stageWidth) {
					ranSide = 1;
				}
			}else {
				if (laserContainer.lastY == 0 || laserContainer.lastY == stage.stageHeight) {
					ranSide = 0;
				}
			}
			
			if (ranSide == 0) {
				if (ranPoint == 0) {
					endX = 0;
				}else {
					endX = stage.stageWidth;
				}
			}else {
				if (ranPoint == 0) {
					endY = 0;
				}else {
					endY = stage.stageHeight;
				}
			}
			
			xDist = endX - laser.x;
			yDist = endY - laser.y;
			laserContainer.lastX = endX;
			laserContainer.lastY = endY;
			
			laser.width = Math.floor(Math.sqrt((xDist * xDist) + (yDist * yDist)))+20;
			angle = Math.floor(Math.atan2(yDist, xDist) * 180 / Math.PI);
			
			return(angle);			
		}
		
		private function fixBounce($bounce:MovieClip, $laserContainer:MovieClip){
			var bounce:MovieClip = $bounce;
			var laserContainer:MovieClip = $laserContainer;
			
			if (laserContainer.lastX == 0) {
				bounce.rotation = 0;
			}else if (laserContainer.lastX == stage.stageWidth) {
				bounce.rotation = 180;
			}else if (laserContainer.lastY == 0) {
				bounce.rotation = 90;
			}else {
				bounce.rotation = 270;
			}
		}
	}
	
}