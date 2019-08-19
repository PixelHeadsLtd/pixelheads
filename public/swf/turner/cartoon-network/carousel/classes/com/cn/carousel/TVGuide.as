package com.cn.carousel {
	import flash.display.Bitmap;
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.events.TextEvent;
	import flash.events.Event;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import flash.system.Capabilities;
	import flash.xml.XMLDocument;
	
	import com.gs.TweenLite;
	
	public class TVGuide extends MovieClip{
		private var _contents:Array 	= new Array();
		private var _loader:URLLoader 	= new URLLoader();
		private var _bgOnLoader:Loader	= new Loader();
		private var _bgLoader:Loader	= new Loader();
		private var _loaders:Array		= new Array();
		private var _loaded:Number 		= 0;
		private var _right:MovieClip	= new MovieClip();
		private var _left:MovieClip		= new MovieClip();
		private var _start:Number		= -3;
		private var _end:Number			= -1;
		private var _xml:XML;
		
		public function TVGuide() {
			trace("TVGuide");
			if (this.loaderInfo.parameters.content != undefined) {	
				trace(String(this.loaderInfo.parameters.content));
				_loader.load(new URLRequest(String(this.loaderInfo.parameters.content)));
				_loader.addEventListener(Event.COMPLETE, loaded);
				_loaders.push(_loader);
			}
		}
		
		private function loaded($e:Event) {
			_xml = XML(_loader.data);
						
			init();
		}
		
		public function init() {
			//Left Arrow
			var leftLoader:Loader = new Loader();
			leftLoader.load(new URLRequest(_xml.arrow_left));
			leftLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, leftComplete);
			_loaders.push(leftLoader);
			
			//Right Arrow
			var rightLoader:Loader = new Loader();
			rightLoader.load(new URLRequest(_xml.arrow_right));
			rightLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, rightComplete);
			_loaders.push(rightLoader);
			
			//Background On
			_bgOnLoader.load(new URLRequest(_xml.background_on));
			_bgOnLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, bgComplete);
			_loaders.push(_bgOnLoader);
			
			//Background Off
			_bgLoader.load(new URLRequest(_xml.background));
			_bgLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, bgComplete);
			_loaders.push(_bgLoader);
		}
		
		private function bgComplete($e:Event) {
			_loaded++;
			
			if (_loaded > 1) {
				loadComplete();
			}
		}
		
		private function loadComplete() {
			if(_xml.item.length() > 0){
				trace("Total Length: " + _xml.item.length());
				for (var i = 0; i < 6; i ++) {
					var clip:MovieClip 		= new container_mc();
					trace("Position: "+ i);
					trace("Title: "+ _xml.item[i].title);
					trace("Episode: "+ _xml.item[i].episode);
					trace("Link: "+ _xml.item[i].link);
					trace("Time: "+ _xml.item[i].time);
					trace("Logo: "+ _xml.item[i].logo);
					if(_xml.item[i].logo != ""){
						var logoLoader:Loader	= new Loader();
						logoLoader.load(new URLRequest(_xml.item[i].logo));
						_loaders.push(logoLoader);
						clip.logo_mc.addChild(logoLoader);
					}
					clip.x					= 172 * i;
					
					//Background
					if (i == 0) {
						clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgOnLoader.content).bitmapData));
					}else {
						clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgLoader.content).bitmapData));
						clip.time_txt.htmlText 	= _xml.item[i].time;
					}
					if(_xml.item[i].link != ""){
						clip.text_txt.htmlText 	= "<b><a href='event:" + _xml.item[i].link + "'>" + convertHTMLEntities(_xml.item[i].title) + "</a></b><br/>" + _xml.item[i].episode;
					}else {
						clip.text_txt.htmlText 	= "<b>" + convertHTMLEntities(_xml.item[i].title) + "</b><br/>" + _xml.item[i].episode;
					}
					clip.text_txt.addEventListener(TextEvent.LINK, linkHandler);
					clip.time_txt.textColor = (i == 0)? _xml.color_on: _xml.color;
					clip.text_txt.textColor = (i == 0)? _xml.color_on: _xml.color;
					clip.cacheAsBitmap		= true;
					main_mc.addChild(clip);
					_contents.push(clip);
					_end++;
				}
				
				_right.buttonMode = true;
				_right.addEventListener(MouseEvent.CLICK, rightClickHandler);
				_right.addEventListener(MouseEvent.MOUSE_OVER, overHandler);
				_right.addEventListener(MouseEvent.MOUSE_OUT, outHandler);
				
				_left.buttonMode = true;
				_left.addEventListener(MouseEvent.CLICK, leftClickHandler);
				_left.addEventListener(MouseEvent.MOUSE_OVER, overHandler);
				_left.addEventListener(MouseEvent.MOUSE_OUT, outHandler);
			}
		}
		
		private function completeHandler($side:String) {
			_right.addEventListener(MouseEvent.CLICK, rightClickHandler);
			_left.addEventListener(MouseEvent.CLICK, leftClickHandler);
			
			if ($side == "right") {
				for (var i = 0; i < 3; i++) {
					if(_start >= 0){
						main_mc.removeChild(_contents.shift());
					}
					_start++;
				}
				
				for (i = 0; i < 3; i++) {
					var pos:Number			= _end + 1;
					if(pos < _xml.item.length()){
						trace("Position: "+ pos);
						trace("Title: "+ _xml.item[pos].title);
						trace("Episode: "+ _xml.item[pos].episode);
						trace("Link: "+ _xml.item[pos].link);
						trace("Time: "+ _xml.item[pos].time);
						trace("Logo: "+ _xml.item[pos].logo);
						var clip:MovieClip 		= new container_mc();
						if(_xml.item[pos].logo != ""){
							var logoLoader:Loader	= new Loader();
							logoLoader.load(new URLRequest(_xml.item[pos].logo));
							_loaders.push(logoLoader);
							clip.logo_mc.addChild(logoLoader);
						}
						clip.x					= 172 * pos;
						
						//Background
						if (pos == 0) {
							clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgOnLoader.content).bitmapData));
						}else {
							clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgLoader.content).bitmapData));
							clip.time_txt.htmlText 	= _xml.item[pos].time;
						}
						
						
						if(_xml.item[pos].link != ""){
							clip.text_txt.htmlText 	= "<b><a href='event:" + _xml.item[pos].link + "'>" + convertHTMLEntities(_xml.item[pos].title) + "</a></b><br/>" + _xml.item[pos].episode;
						}else {
							clip.text_txt.htmlText 	= "<b>" + convertHTMLEntities(_xml.item[pos].title) + "</b><br/>" + _xml.item[pos].episode;
						}
						clip.text_txt.addEventListener(TextEvent.LINK, linkHandler);
						clip.time_txt.textColor = (pos == 0)? _xml.color_on: _xml.color;
						clip.text_txt.textColor = (pos == 0)? _xml.color_on: _xml.color;
						clip.cacheAsBitmap		= true;
						main_mc.addChild(clip);
						_contents.push(clip);
						_end++;
					}
				}
			}else {
				for (i = 0; i < 3; i++) {
					main_mc.removeChild(_contents.pop());
					_end--;
				}
				
				for (i = 0; i < 3; i++) {
					pos						= _start - 1;
					trace("Position: "+ pos);
					trace("Title: "+ _xml.item[pos].title);
					trace("Episode: "+ _xml.item[pos].episode);
					trace("Link: "+ _xml.item[pos].link);
					trace("Time: "+ _xml.item[pos].time);
					trace("Logo: "+ _xml.item[pos].logo);
					if(pos >= 0){
						clip			 		= new container_mc();
						if(_xml.item[pos].logo != ""){
							logoLoader	= new Loader();
							logoLoader.load(new URLRequest(_xml.item[pos].logo));
							_loaders.push(logoLoader);
							clip.logo_mc.addChild(logoLoader);
						}
						clip.x					= 172 * pos;
						
						//Background
						if (pos == 0) {
							clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgOnLoader.content).bitmapData));
						}else {
							clip.bgContainer_mc.addChild(new Bitmap(Bitmap(_bgLoader.content).bitmapData));
							clip.time_txt.htmlText 	= _xml.item[pos].time;
						}
						
						
						if(_xml.item[pos].link != ""){
							clip.text_txt.htmlText 	= "<b><a href='event:" + _xml.item[pos].link + "'>" + convertHTMLEntities(_xml.item[pos].title) + "</a></b><br/>" + _xml.item[pos].episode;
						}else {
							clip.text_txt.htmlText 	= "<b>" + convertHTMLEntities(_xml.item[pos].title) + "</b><br/>" + _xml.item[pos].episode;
						}
						clip.text_txt.addEventListener(TextEvent.LINK, linkHandler);
						clip.time_txt.textColor = (pos == 0)? _xml.color_on: _xml.color;
						clip.text_txt.textColor = (pos == 0)? _xml.color_on: _xml.color;
						clip.cacheAsBitmap		= true;
						main_mc.addChild(clip);
						_contents.unshift(clip);
					}
					_start--;
				}
			}
		}
		
		private function rightComplete($e:Event) {
			_right.x = 578.5 - $e.currentTarget.content.width / 2;
			_right.y = 147.5 - $e.currentTarget.content.height / 2;
			_right.addChild($e.currentTarget.content);
			addChild(_right);
		}
		
		private function leftComplete($e:Event) {
			_left.x = 21.5 - $e.currentTarget.content.width / 2;
			_left.y = 147.5 - $e.currentTarget.content.height / 2;
			_left.addChild($e.currentTarget.content);
			addChild(_left);
		}
		
		private function rightClickHandler($e:MouseEvent) {
			if(_end != _xml.item.length() - 1){
				_right.removeEventListener(MouseEvent.CLICK, rightClickHandler);
				_left.removeEventListener(MouseEvent.CLICK, leftClickHandler);
				TweenLite.to(main_mc, .75, { x:main_mc.x - 516, onComplete:completeHandler, onCompleteParams:["right"] } );
			}
		}
		
		private function leftClickHandler($e:MouseEvent) {
			if(_start >= 0){
				_right.removeEventListener(MouseEvent.CLICK, rightClickHandler);
				_left.removeEventListener(MouseEvent.CLICK, leftClickHandler);
				TweenLite.to(main_mc, .75, { x:main_mc.x + 516, onComplete:completeHandler, onCompleteParams:["left"] } );
			}
		}
		
		private function linkHandler($e:TextEvent) {
			if (Capabilities.os.substr(0, 3) == "Mac") {
				navigateToURL(new URLRequest(encodeURI($e.text)), "_top");
			}else{
				navigateToURL(new URLRequest("javascript:window.location.href='" + $e.text + "';"), "_top");
			}
		}
		
		private function overHandler($e:MouseEvent) {
			$e.currentTarget.alpha = .5;
		}
		
		private function outHandler($e:MouseEvent) {
			$e.currentTarget.alpha = 1;
		}
		
		public function convertHTMLEntities(str:String):String {
			var htmlEntities:Array = ["&nbsp;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&not;", "&shy;", "&reg;", "&macr;", "&deg;", "&plusmn;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&raquo;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&fnof;", "&Alpha;", "&Beta;", "&Gamma;", "&Delta;", "&Epsilon;", "&Zeta;", "&Eta;", "&Theta;", "&Iota;", "&Kappa;", "&Lambda;", "&Mu;", "&Nu;", "&Xi;", "&Omicron;", "&Pi;", "&Rho;", "&Sigma;", "&Tau;", "&Upsilon;", "&Phi;", "&Chi;", "&Psi;", "&Omega;", "&alpha;", "&beta;", "&gamma;", "&delta;", "&epsilon;", "&zeta;", "&eta;", "&theta;", "&iota;", "&kappa;", "&lambda;", "&mu;", "&nu;", "&xi;", "&omicron;", "&pi;", "&rho;", "&sigmaf;", "&sigma;", "&tau;", "&upsilon;", "&phi;", "&chi;", "&psi;", "&omega;", "&thetasym;", "&upsih;", "&piv;", "&bull;", "&hellip;", "&prime;", "&Prime;", "&oline;", "&frasl;", "&weierp;", "&image;", "&real;", "&trade;", "&alefsym;", "&larr;", "&uarr;", "&rarr;", "&darr;", "&harr;", "&crarr;", "&lArr;", "&uArr;", "&rArr;", "&dArr;", "&hArr;", "&forall;", "&part;", "&exist;", "&empty;", "&nabla;", "&isin;", "&notin;", "&ni;", "&prod;", "&sum;", "&minus;", "&lowast;", "&radic;", "&prop;", "&infin;", "&ang;", "&and;", "&or;", "&cap;", "&cup;", "&int;", "&there4;", "&sim;", "&cong;", "&asymp;", "&ne;", "&equiv;", "&le;", "&ge;", "&sub;", "&sup;", "&nsub;", "&sube;", "&supe;", "&oplus;", "&otimes;", "&perp;", "&sdot;", "&lceil;", "&rceil;", "&lfloor;", "&rfloor;", "&lang;", "&rang;", "&loz;", "&spades;", "&clubs;", "&hearts;", "&diams;", "''", "&#038;", "<", ">", "&OElig;", "&oelig;", "&Scaron;", "&scaron;", "&Yuml;", "&circ;", "&tilde;", "&ensp;", "&emsp;", "&thinsp;", "&zwnj;", "&zwj;", "&lrm;", "&rlm;", "&ndash;", "&mdash;", "&lsquo;", "&rsquo;", "&sbquo;", "&ldquo;", "&rdquo;", "&bdquo;", "&dagger;", "&Dagger;", "&permil;", "&lsaquo;", "&rsaquo;", "&euro;"];
			var numberEntities:Array = ["&#160;", "&#161;", "&#162;", "&#163;", "&#164;", "&#165;", "&#166;", "&#167;", "&#168;", "&#169;", "&#170;", "&#171;", "&#172;", "&#173;", "&#174;", "&#175;", "&#176;", "&#177;", "&#178;", "&#179;", "&#180;", "&#181;", "&#182;", "&#183;", "&#184;", "&#185;", "&#186;", "&#187;", "&#188;", "&#189;", "&#190;", "&#191;", "&#192;", "&#193;", "&#194;", "&#195;", "&#196;", "&#197;", "&#198;", "&#199;", "&#200;", "&#201;", "&#202;", "&#203;", "&#204;", "&#205;", "&#206;", "&#207;", "&#208;", "&#209;", "&#210;", "&#211;", "&#212;", "&#213;", "&#214;", "&#215;", "&#216;", "&#217;", "&#218;", "&#219;", "&#220;", "&#221;", "&#222;", "&#223;", "&#224;", "&#225;", "&#226;", "&#227;", "&#228;", "&#229;", "&#230;", "&#231;", "&#232;", "&#233;", "&#234;", "&#235;", "&#236;", "&#237;", "&#238;", "&#239;", "&#240;", "&#241;", "&#242;", "&#243;", "&#244;", "&#245;", "&#246;", "&#247;", "&#248;", "&#249;", "&#250;", "&#251;", "&#252;", "&#253;", "&#254;", "&#255;", "&#402;", "&#913;", "&#914;", "&#915;", "&#916;", "&#917;", "&#918;", "&#919;", "&#920;", "&#921;", "&#922;", "&#923;", "&#924;", "&#925;", "&#926;", "&#927;", "&#928;", "&#929;", "&#931;", "&#932;", "&#933;", "&#934;", "&#935;", "&#936;", "&#937;", "&#945;", "&#946;", "&#947;", "&#948;", "&#949;", "&#950;", "&#951;", "&#952;", "&#953;", "&#954;", "&#955;", "&#956;", "&#957;", "&#958;", "&#959;", "&#960;", "&#961;", "&#962;", "&#963;", "&#964;", "&#965;", "&#966;", "&#967;", "&#968;", "&#969;", "&#977;", "&#978;", "&#982;", "&#8226;", "&#8230;", "&#8242;", "&#8243;", "&#8254;", "&#8260;", "&#8472;", "&#8465;", "&#8476;", "&#8482;", "&#8501;", "&#8592;", "&#8593;", "&#8594;", "&#8595;", "&#8596;", "&#8629;", "&#8656;", "&#8657;", "&#8658;", "&#8659;", "&#8660;", "&#8704;", "&#8706;", "&#8707;", "&#8709;", "&#8711;", "&#8712;", "&#8713;", "&#8715;", "&#8719;", "&#8721;", "&#8722;", "&#8727;", "&#8730;", "&#8733;", "&#8734;", "&#8736;", "&#8743;", "&#8744;", "&#8745;", "&#8746;", "&#8747;", "&#8756;", "&#8764;", "&#8773;", "&#8776;", "&#8800;", "&#8801;", "&#8804;", "&#8805;", "&#8834;", "&#8835;", "&#8836;", "&#8838;", "&#8839;", "&#8853;", "&#8855;", "&#8869;", "&#8901;", "&#8968;", "&#8969;", "&#8970;", "&#8971;", "&#9001;", "&#9002;", "&#9674;", "&#9824;", "&#9827;", "&#9829;", "&#9830;", "&#34;", "&#38;", "&#60;", "&#62;", "&#338;", "&#339;", "&#352;", "&#353;", "&#376;", "&#710;", "&#732;", "&#8194;", "&#8195;", "&#8201;", "&#8204;", "&#8205;", "&#8206;", "&#8207;", "&#8211;", "&#8212;", "&#8216;", "&#8217;", "&#8218;", "&#8220;", "&#8221;", "&#8222;", "&#8224;", "&#8225;", "&#8240;", "&#8249;", "&#8250;", "&#8364;"];
			str = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
			var i:uint = htmlEntities.length;
			while (i > 0) {
				i--;
				str = str.split(htmlEntities[i]).join(numberEntities[i]);
			}
			return new XMLDocument(str).firstChild.nodeValue;
		}

	}
	
}