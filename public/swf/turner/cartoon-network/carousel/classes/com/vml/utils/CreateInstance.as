/**
* Class CreatInstance
* @author Adam Messner
* @version 0.1
* @usage Used for dynamic instancing of Classes added to a container
* 		 Easily create new instances without hard coding the Class name
*			ex. Old way:  var instance:Box = new Box();
*
*			ex. New way:  var instance:DisplayObject = CreateInstance.create("Box");
* @param className - String class identifier
*/
package com.vml.utils{
	import flash.display.MovieClip;
	import flash.display.DisplayObject;
	import flash.utils.getDefinitionByName;
	
	public class CreateInstance{
		
		public static function create(className:String, ...args):DisplayObject{
			var ClassReference:Class = getDefinitionByName(className) as Class;
			var instance:Object = new ClassReference();

			return(DisplayObject(instance));
		}
	}
}