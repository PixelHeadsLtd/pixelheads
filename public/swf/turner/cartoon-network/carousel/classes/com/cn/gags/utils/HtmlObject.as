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

package com.cn.gags.utils
{
	public class HtmlObject
	{
		public static function image($data:String):Object {
			var da:Array = $data.split("|");
			var imageObject:Object = new Object();
			for (var x = 0; x < da.length; x++ ) {
				var a:Array = da[x].split("=");
				imageObject[a[0]] = a[1];
			}
			return imageObject;
		}
		public static function images($data:String):Array {
			var returnArray:Array = new Array();
			var images:Array = $data.split(",");
			for (var i = 0; i < images.length; i++ ) {
				var imageObject:Object = new Object();
				var da:Array = images[i].split("|");
				for (var x = 0; x < da.length; x++ ) {
					var a:Array = da[x].split("=");
					imageObject[a[0]] = a[1];
				}
				returnArray.push(imageObject);
			}

			return returnArray;
		}
	}
}