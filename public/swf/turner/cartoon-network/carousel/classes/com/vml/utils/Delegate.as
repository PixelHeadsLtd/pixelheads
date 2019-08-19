/**
* Class Delegate
* @author Paul Nevins
* @version 0.1
* @usage Pulled from the same concept as Joey Lott's originial delegate class and also revived by Ian Thomas
*/
package com.vml.utils {
	//
	public class Delegate    {
		public static function create(handler:Function,...args):Function
		{
			return function(...innerArgs):void
			{
				handler.apply(this,innerArgs.concat(args));
			}
		}
	}	
}