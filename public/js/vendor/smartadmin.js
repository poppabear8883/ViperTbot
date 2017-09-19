/*         ______________________________________
  ________|                                      |_______
  \       |           SmartAdmin WebApp          |      /
   \      |      Copyright © 2016 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * SmartAdmin is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: app.config.js
 * filesize: 12kb
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 * =======================================================================
 * 
 * GLOBAL ROOT (DO NOT CHANGE)
 */
	$.root_ = $('body');	
/*
 * APP CONFIGURATION (HTML/AJAX/PHP Versions ONLY)
 * Description: Enable / disable certain theme features here
 * GLOBAL: Your left nav in your app will no longer fire ajax calls, set 
 * it to false for HTML version
 */	
	$.navAsAjax = false; 
/*
 * GLOBAL: Sound Config (define sound path, enable or disable all sounds)
 */
	$.sound_path = "sound/";
	$.sound_on = true; 
/*
 * SAVE INSTANCE REFERENCE (DO NOT CHANGE)
 * Save a reference to the global object (window in the browser)
 */
	var root = this,	
/*
 * DEBUGGING MODE
 * debugState = true; will spit all debuging message inside browser console.
 * The colors are best displayed in chrome browser.
 */
	debugState = false,	
	debugStyle = 'font-weight: bold; color: #00f;',
	debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;',
	debugStyle_red = 'font-weight: bold; color: #ed1c24;',
	debugStyle_warning = 'background-color:yellow',
	debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;',
	debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;',
/*
 * Impacts the responce rate of some of the responsive elements (lower 
 * value affects CPU but improves speed)
 */
	throttle_delay = 350,
/*
 * The rate at which the menu expands revealing child elements on click
 */
	menu_speed = 235,	
/*
 * Collapse current menu item as other menu items are expanded
 * Careful when using this option, if you have a long menu it will
 * keep expanding and may distrupt the user experience This is best 
 * used with fixed-menu class
 */
	menu_accordion = true,	
/*
 * Turn on JarvisWidget functionality
 * Global JarvisWidget Settings
 * For a greater control of the widgets, please check app.js file
 * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
 * dependency: js/jarviswidget/jarvis.widget.min.js
 */
	enableJarvisWidgets = true,
/*
 * Use localstorage to save widget settings
 * turn this off if you prefer to use the onSave hook to save
 * these settings to your datatabse instead
 */	
	localStorageJarvisWidgets = true,
/*
 * Turn off sortable feature for JarvisWidgets 
 */	
	sortableJarvisWidgets = true,		
/*
 * Warning: Enabling mobile widgets could potentially crash your webApp 
 * if you have too many widgets running at once 
 * (must have enableJarvisWidgets = true)
 */
	enableMobileWidgets = false,	
/*
 * Turn on fast click for mobile devices
 * Enable this to activate fastclick plugin
 * dependency: js/plugin/fastclick/fastclick.js 
 */
	fastClick = false,
/*
 * SMARTCHAT PLUGIN ARRAYS & CONFIG
 * Dependency: js/plugin/moment/moment.min.js 
 *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
 *             js/smart-chat-ui/smart.chat.ui.js
 * (DO NOT CHANGE BELOW) 
 */	
	boxList = [],
	showList = [],
 	nameList = [],
	idList = [],
/*
 * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
 */	
	chatbox_config = {
	    width: 200,
	    gap: 35
	},
/*
 * These elements are ignored during DOM object deletion for ajax version 
 * It will delete all objects during page load with these exceptions:
 */
	ignore_key_elms = ["#header, #left-panel, #right-panel, #main, div.page-footer, #shortcut, #divSmallBoxes, #divMiniIcons, #divbigBoxes, #voiceModal, script, .ui-chatbox"],
/*
 * VOICE COMMAND CONFIG
 * dependency: js/speech/voicecommand.js
 */
	voice_command = true,
/*
 * Turns on speech as soon as the page is loaded
 */	
	voice_command_auto = false,
/*
 * 	Sets the language to the default 'en-US'. (supports over 50 languages 
 * 	by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  Català            ['ca-ES']
 *  Čeština           ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  Español           ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'España']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'México']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'Panamá']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'Perú']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'República Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  Français          ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  Íslenska          ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmål      ['nb-NO']
 *  Polski            ['pl-PL']
 *  Português         ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  Română            ['ro-RO']
 *  Slovenčina        ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  Türkçe            ['tr-TR']
 *  български         ['bg-BG']
 *  Pусский           ['ru-RU']
 *  Српски            ['sr-RS']
 *  한국어          ['ko-KR']
 *  中文                            ['cmn-Hans-CN', '普通话 (中国大陆)']
 *                    ['cmn-Hans-HK', '普通话 (香港)']
 *                    ['cmn-Hant-TW', '中文 (台灣)']
 *                    ['yue-Hant-HK', '粵語 (香港)']
 *  日本語                         ['ja-JP']
 *  Lingua latīna     ['la']
 */
	voice_command_lang = 'en-US',
/*
 * 	Use localstorage to remember on/off (best used with HTML Version
 * 	when going from one page to the next)
 */	
	voice_localStorage = true;
/*
 * Voice Commands
 * Defines voice command variables and functions
 */	
 	if (voice_command) {
	 		
		var commands = {
					
			'show dashboard' : function() { $('nav a[href="dashboard.html"]').trigger("click"); },
			'show inbox' : function() { $('nav a[href="inbox.html"]').trigger("click"); },
			'show graphs' : function() { $('nav a[href="flot.html"]').trigger("click"); },
			'show flotchart' : function() { $('nav a[href="flot.html"]').trigger("click"); },
			'show morris chart' : function() { $('nav a[href="morris.html"]').trigger("click"); },
			'show inline chart' : function() { $('nav a[href="inline-charts.html"]').trigger("click"); },
			'show dygraphs' : function() { $('nav a[href="dygraphs.html"]').trigger("click"); },
			'show tables' : function() { $('nav a[href="table.html"]').trigger("click"); },
			'show data table' : function() { $('nav a[href="datatables.html"]').trigger("click"); },
			'show jquery grid' : function() { $('nav a[href="jqgrid.html"]').trigger("click"); },
			'show form' : function() { $('nav a[href="form-elements.html"]').trigger("click"); },
			'show form layouts' : function() { $('nav a[href="form-templates.html"]').trigger("click"); },
			'show form validation' : function() { $('nav a[href="validation.html"]').trigger("click"); },
			'show form elements' : function() { $('nav a[href="bootstrap-forms.html"]').trigger("click"); },
			'show form plugins' : function() { $('nav a[href="plugins.html"]').trigger("click"); },
			'show form wizards' : function() { $('nav a[href="wizards.html"]').trigger("click"); },
			'show bootstrap editor' : function() { $('nav a[href="other-editors.html"]').trigger("click"); },
			'show dropzone' : function() { $('nav a[href="dropzone.html"]').trigger("click"); },
			'show image cropping' : function() { $('nav a[href="image-editor.html"]').trigger("click"); },
			'show general elements' : function() { $('nav a[href="general-elements.html"]').trigger("click"); },
			'show buttons' : function() { $('nav a[href="buttons.html"]').trigger("click"); },
			'show fontawesome' : function() { $('nav a[href="fa.html"]').trigger("click"); },
			'show glyph icons' : function() { $('nav a[href="glyph.html"]').trigger("click"); },
			'show flags' : function() { $('nav a[href="flags.html"]').trigger("click"); },
			'show grid' : function() { $('nav a[href="grid.html"]').trigger("click"); },
			'show tree view' : function() { $('nav a[href="treeview.html"]').trigger("click"); },
			'show nestable lists' : function() { $('nav a[href="nestable-list.html"]').trigger("click"); },
			'show jquery U I' : function() { $('nav a[href="jqui.html"]').trigger("click"); },
			'show typography' : function() { $('nav a[href="typography.html"]').trigger("click"); },
			'show calendar' : function() { $('nav a[href="calendar.html"]').trigger("click"); },
			'show widgets' : function() { $('nav a[href="widgets.html"]').trigger("click"); },
			'show gallery' : function() { $('nav a[href="gallery.html"]').trigger("click"); },
			'show maps' : function() { $('nav a[href="gmap-xml.html"]').trigger("click"); },
			'show pricing tables' : function() { $('nav a[href="pricing-table.html"]').trigger("click"); },
			'show invoice' : function() { $('nav a[href="invoice.html"]').trigger("click"); },
			'show search' : function() { $('nav a[href="search.html"]').trigger("click"); },
			'go back' :  function() { history.back(1); }, 
			'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
			'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
			'hide navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'show navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'mute' : function() {
				$.sound_on = false;
				$.smallBox({
					title : "MUTE",
					content : "All sounds have been muted!",
					color : "#a90329",
					timeout: 4000,
					icon : "fa fa-volume-off"
				});
			},
			'sound on' : function() {
				$.sound_on = true;
				$.speechApp.playConfirmation();
				$.smallBox({
					title : "UNMUTE",
					content : "All sounds have been turned on!",
					color : "#40ac2b",
					sound_file: 'voice_alert',
					timeout: 5000,
					icon : "fa fa-volume-up"
				});
			},
			'stop' : function() {
				smartSpeechRecognition.abort();
				$.root_.removeClass("voice-command-active");
				$.smallBox({
					title : "VOICE COMMAND OFF",
					content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
					color : "#40ac2b",
					sound_file: 'voice_off',
					timeout: 8000,
					icon : "fa fa-microphone-slash"
				});
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},
			'help' : function() {
				$('#voiceModal').removeData('modal').modal( { remote: "ajax/modal-content/modal-voicecommand.html", show: true } );
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},		
			'got it' : function() {
				$('#voiceModal').modal('hide');
			},	
			'logout' : function() {
				$.speechApp.stop();
				window.location = $('#logout > span > a').attr("href");
			}
		}; 
		
	};
/*
 * END APP.CONFIG
 */ 
 
 
 
 
 	
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function b(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var c,d=a.ui.mouse.prototype,e=d._mouseInit,f=d._mouseDestroy;d._touchStart=function(a){var d=this;!c&&d._mouseCapture(a.originalEvent.changedTouches[0])&&(c=!0,d._touchMoved=!1,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))},d._touchMove=function(a){c&&(this._touchMoved=!0,b(a,"mousemove"))},d._touchEnd=function(a){c&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),c=!1)},d._mouseInit=function(){var b=this;b.element.bind({"touchstart":a.proxy(b,"_touchStart"),"touchmove":a.proxy(b,"_touchMove"),"touchend":a.proxy(b,"_touchEnd")}),e.call(b)},d._mouseDestroy=function(){var b=this;b.element.unbind({"touchstart":a.proxy(b,"_touchStart"),"touchmove":a.proxy(b,"_touchMove"),"touchend":a.proxy(b,"_touchEnd")}),f.call(b)}}}(jQuery);
function SmartUnLoading(){$(".divMessageBox").fadeOut(300,function(){$(this).remove()}),$(".LoadingBoxContainer").fadeOut(300,function(){$(this).remove()})}function getInternetExplorerVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}function checkVersion(){var a="You're not using Windows Internet Explorer.",b=getInternetExplorerVersion();b>-1&&(a=b>=8?"You're using a recent copy of Windows Internet Explorer.":"You should upgrade your copy of Windows Internet Explorer."),alert(a)}function isIE8orlower(){var a="0",b=getInternetExplorerVersion();return b>-1&&(a=b>=9?0:1),a}jQuery(document).ready(function(){$("body").append("<div id='divSmallBoxes'></div>"),$("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>")});var ExistMsg=0,SmartMSGboxCount=0,PrevTop=0;$.SmartMessageBox=function(a,b){var c,d;a=$.extend({"title":"","content":"","NormalButton":void 0,"ActiveButton":void 0,"buttons":void 0,"input":void 0,"inputValue":void 0,"placeholder":"","options":void 0},a);var e=0;if(e=1,0==isIE8orlower()&&$.sound_on){var f=document.createElement("audio");f.setAttribute("src",$.sound_path+"messagebox.mp3"),f.addEventListener("load",function(){f.play()},!0),f.pause(),f.play()}SmartMSGboxCount+=1,0==ExistMsg&&(ExistMsg=1,c="<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>",$("body").append(c),1==isIE8orlower()&&$("#MsgBoxBack").addClass("MessageIE"));var g="",h=0;if(void 0!=a.input)switch(h=1,a.input=a.input.toLowerCase(),a.input){case"text":a.inputValue="string"===$.type(a.inputValue)?a.inputValue.replace(/'/g,"&#x27;"):a.inputValue,g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"' value='"+a.inputValue+"'/><br/><br/>";break;case"password":g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"'/><br/><br/>";break;case"select":if(void 0==a.options)alert("For this type of input, the options parameter is required.");else{g="<select class='form-control' id='txt"+SmartMSGboxCount+"'>";for(var i=0;i<=a.options.length-1;i++)"["==a.options[i]?j="":"]"==a.options[i]?(k+=1,j="<option>"+j+"</option>",g+=j):j+=a.options[i];g+="</select>"}break;default:alert("That type of input is not handled yet")}d="<div class='MessageBoxContainer animated fadeIn fast' id='Msg"+SmartMSGboxCount+"'>",d+="<div class='MessageBoxMiddle'>",d+="<span class='MsgTitle'>"+a.title+"</span class='MsgTitle'>",d+="<p class='pText'>"+a.content+"</p>",d+=g,d+="<div class='MessageBoxButtonSection'>",void 0==a.buttons&&(a.buttons="[Accept]"),a.buttons=$.trim(a.buttons),a.buttons=a.buttons.split("");var j="",k=0;void 0==a.NormalButton&&(a.NormalButton="#232323"),void 0==a.ActiveButton&&(a.ActiveButton="#ed145b");for(var i=0;i<=a.buttons.length-1;i++)"["==a.buttons[i]?j="":"]"==a.buttons[i]?(k+=1,j="<button id='bot"+k+"-Msg"+SmartMSGboxCount+"' class='btn btn-default btn-sm botTempo'> "+j+"</button>",d+=j):j+=a.buttons[i];d+="</div>",d+="</div>",d+="</div>",SmartMSGboxCount>1&&($(".MessageBoxContainer").hide(),$(".MessageBoxContainer").css("z-index",99999)),$(".divMessageBox").append(d),1==h&&$("#txt"+SmartMSGboxCount).focus(),$(".botTempo").hover(function(){$(this).attr("id")},function(){$(this).attr("id")}),$(".botTempo").click(function(){var a=$(this).attr("id"),c=a.substr(a.indexOf("-")+1),d=$.trim($(this).text());if(1==h){if("function"==typeof b){var e=c.replace("Msg",""),f=$("#txt"+e).val();b&&b(d,f)}}else"function"==typeof b&&b&&b(d);$("#"+c).addClass("animated fadeOut fast"),SmartMSGboxCount-=1,0==SmartMSGboxCount&&$("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function(){ExistMsg=0,$(this).remove()})})};var BigBoxes=0;$.bigBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"number":void 0,"color":void 0,"sound":$.sound_on,"sound_file":"bigbox","timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}BigBoxes+=1,c="<div id='bigBox"+BigBoxes+"' class='bigBox animated fadeIn fast'><div id='bigBoxColor"+BigBoxes+"'><i class='botClose fa fa-times' id='botClose"+BigBoxes+"'></i>",c+="<span>"+a.title+"</span>",c+="<p>"+a.content+"</p>",c+="<div class='bigboxicon'>",void 0==a.icon&&(a.icon="fa fa-cloud"),c+="<i class='"+a.icon+"'></i>",c+="</div>",c+="<div class='bigboxnumber'>",void 0!=a.number&&(c+=a.number),c+="</div></div>",c+="</div>",$("#divbigBoxes").append(c),void 0==a.color&&(a.color="#004d60"),$("#bigBox"+BigBoxes).css("background-color",a.color),$("#divMiniIcons").append("<div id='miniIcon"+BigBoxes+"' class='cajita animated fadeIn' style='background-color: "+a.color+";'><i class='"+a.icon+"'/></i></div>"),$("#miniIcon"+BigBoxes).bind("click",function(){var a=$(this).attr("id"),b=a.replace("miniIcon","bigBox"),c=a.replace("miniIcon","bigBoxColor");$(".cajita").each(function(a){var b=$(this).attr("id"),c=b.replace("miniIcon","bigBox");$("#"+c).css("z-index",9998)}),$("#"+b).css("z-index",9999),$("#"+c).removeClass("animated fadeIn").delay(1).queue(function(){$(this).show(),$(this).addClass("animated fadeIn"),$(this).clearQueue()})});var e,f=$("#botClose"+BigBoxes),g=$("#bigBox"+BigBoxes),h=$("#miniIcon"+BigBoxes);if(void 0!=a.colors&&a.colors.length>0&&(f.attr("colorcount","0"),e=setInterval(function(){var b=f.attr("colorcount");f.animate({"backgroundColor":a.colors[b].color}),g.animate({"backgroundColor":a.colors[b].color}),h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?f.attr("colorcount",1*b+1):f.attr("colorcount",0)},a.colortime)),f.bind("click",function(){clearInterval(e),"function"==typeof b&&b&&b();var a=$(this).attr("id"),c=a.replace("botClose","bigBox"),d=a.replace("botClose","miniIcon");$("#"+c).removeClass("fadeIn fast"),$("#"+c).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#"+d).removeClass("fadeIn fast"),$("#"+d).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})}),void 0!=a.timeout){var i=BigBoxes;setTimeout(function(){clearInterval(e),$("#bigBox"+i).removeClass("fadeIn fast"),$("#bigBox"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#miniIcon"+i).removeClass("fadeIn fast"),$("#miniIcon"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})},a.timeout)}};var SmallBoxes=0,SmallCount=0,SmallBoxesAnchos=0;$.smallBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"iconSmall":void 0,"sound":$.sound_on,"sound_file":"smallbox","color":void 0,"timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}SmallBoxes+=1,c="";var e="",f="smallbox"+SmallBoxes;if(e=void 0==a.iconSmall?"<div class='miniIcono'></div>":"<div class='miniIcono'><i class='miniPic "+a.iconSmall+"'></i></div>",c=void 0==a.icon?"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>":"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='foto'><i class='"+a.icon+"'></i></div><div class='textoFoto'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>",1==SmallBoxes)$("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40;else{var g=$(".SmallBox").size();0==g?($("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40):($("#divSmallBoxes").append(c),$("#smallbox"+SmallBoxes).css("top",SmallBoxesAnchos),SmallBoxesAnchos=SmallBoxesAnchos+$("#smallbox"+SmallBoxes).height()+20,$(".SmallBox").each(function(a){0==a?($(this).css("top",20),heightPrev=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).css("top",heightPrev),heightPrev=heightPrev+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)}))}var h=$("#smallbox"+SmallBoxes);void 0==a.color?h.css("background-color","#004d60"):h.css("background-color",a.color);var i;void 0!=a.colors&&a.colors.length>0&&(h.attr("colorcount","0"),i=setInterval(function(){var b=h.attr("colorcount");h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?h.attr("colorcount",1*b+1):h.attr("colorcount",0)},a.colortime)),void 0!=a.timeout&&setTimeout(function(){clearInterval(i);var a=$(this).height()+20;$("#"+f).css("top");0!=$("#"+f+":hover").length?$("#"+f).on("mouseleave",function(){SmallBoxesAnchos-=a,$("#"+f).remove(),"function"==typeof b&&b&&b();var c=0;$(".SmallBox").each(function(a){0==a?($(this).animate({"top":20},300),c=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":c},350),c=c+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}):(clearInterval(i),SmallBoxesAnchos-=a,"function"==typeof b&&b&&b(),$("#"+f).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a}),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}))},a.timeout),$("#smallbox"+SmallBoxes).bind("click",function(){clearInterval(i),"function"==typeof b&&b&&b();var a=$(this).height()+20;$(this).attr("id"),$(this).css("top");SmallBoxesAnchos-=a,$(this).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a},350),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})})})};
!function(a,b,c,d){function e(b,c){this.obj=a(b),this.o=a.extend({},a.fn[f].defaults,c),this.objId=this.obj.attr("id"),this.pwCtrls=".jarviswidget-ctrls",this.widget=this.obj.find(this.o.widgets),this.toggleClass=this.o.toggleClass.split("|"),this.editClass=this.o.editClass.split("|"),this.fullscreenClass=this.o.fullscreenClass.split("|"),this.customClass=this.o.customClass.split("|"),this.storage={"enabled":this.o.localStorage},this.initialized=!1,this.init()}var f="jarvisWidgets",g=("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch?"touchstart":"click")+"."+f;e.prototype={"_runLoaderWidget":function(a){var b=this;b.o.indicator===!0&&a.parents(b.o.widgets).find(".jarviswidget-loader:first").stop(!0,!0).fadeIn(100).delay(b.o.indicatorTime).fadeOut(100)},"_getPastTimestamp":function(a){var b=this,c=new Date(a),d=c.getMonth()+1,e=c.getDate(),f=c.getFullYear(),g=c.getHours(),h=c.getMinutes(),i=c.getUTCSeconds();10>d&&(d="0"+d),10>e&&(e="0"+e),10>g&&(g="0"+g),10>h&&(h="0"+h),10>i&&(i="0"+i);var j=b.o.timestampFormat.replace(/%d%/g,e).replace(/%m%/g,d).replace(/%y%/g,f).replace(/%h%/g,g).replace(/%i%/g,h).replace(/%s%/g,i);return j},"_loadAjaxFile":function(b,c,d){var e=this;b.find(".widget-body").load(c,function(c,d,f){var g=a(this);if("error"==d&&g.html('<h4 class="alert alert-danger">'+e.o.labelError+"<b> "+f.status+" "+f.statusText+"</b></h4>"),"success"==d){var h=b.find(e.o.timestampPlaceholder);h.length&&h.html(e._getPastTimestamp(new Date)),"function"==typeof e.o.afterLoad&&e.o.afterLoad.call(this,b)}e=null}),this._runLoaderWidget(d)},"_loadKeys":function(){var a=this;if(a.o.ajaxnav===!0){var b=location.hash.replace(/^#/,"");a.storage.keySettings="Plugin_settings_"+b+"_"+a.objId,a.storage.keyPosition="Plugin_position_"+b+"_"+a.objId}else if(a.initialized===!1){var b=a.o.pageKey||location.pathname;a.storage.keySettings="jarvisWidgets_settings_"+b+"_"+a.objId,a.storage.keyPosition="jarvisWidgets_position_"+b+"_"+a.objId}},"_saveSettingsWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.widgets).map(function(){var b={};return b.id=a(this).attr("id"),b.style=a(this).attr("data-widget-attstyle"),b.title=a(this).children("header").children("h2").text(),b.hidden="none"==a(this).css("display")?1:0,b.collapsed=a(this).hasClass("jarviswidget-collapsed")?1:0,b}).get(),e=JSON.stringify({"widget":d});c.enabled&&c.getKeySettings!=e&&(localStorage.setItem(c.keySettings,e),c.getKeySettings=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,null,e,c.keySettings)},"_savePositionWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.grid+".sortable-grid").map(function(){var c=a(this).children(b.o.widgets).map(function(){return{"id":a(this).attr("id")}}).get();return{"section":c}}).get(),e=JSON.stringify({"grid":d});c.enabled&&c.getKeyPosition!=e&&(localStorage.setItem(c.keyPosition,e),c.getKeyPosition=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,e,c.keyPosition)},"init":function(){var b=this;if(!b.initialized){if(b._initStorage(b.storage),a("#"+b.objId).length||alert("It looks like your using a class instead of an ID, dont do that!"),b.o.rtl===!0&&a("body").addClass("rtl"),a(b.o.grid).each(function(){a(this).find(b.o.widgets).length&&a(this).addClass("sortable-grid")}),b.storage.enabled&&b.storage.getKeyPosition){var c=JSON.parse(b.storage.getKeyPosition);for(var e in c.grid){var h=b.obj.find(b.o.grid+".sortable-grid").eq(e);for(var i in c.grid[e].section)h.append(a("#"+c.grid[e].section[i].id))}}if(b.storage.enabled&&b.storage.getKeySettings){var j=JSON.parse(b.storage.getKeySettings);for(var e in j.widget){var k=a("#"+j.widget[e].id);j.widget[e].style&&k.removeClassPrefix("jarviswidget-color-").addClass(j.widget[e].style).attr("data-widget-attstyle",""+j.widget[e].style),1==j.widget[e].hidden?k.hide(1):k.show(1).removeAttr("data-widget-hidden"),1==j.widget[e].collapsed&&k.addClass("jarviswidget-collapsed").children("div").hide(1),k.children("header").children("h2").text()!=j.widget[e].title&&k.children("header").children("h2").text(j.widget[e].title)}}if(b.widget.each(function(){var c,e,f,g,h,i,j,k,l=a(this),m=a(this).children("header");if(!m.parent().attr("role")){l.data("widget-hidden")===!0&&l.hide(),l.data("widget-collapsed")===!0&&l.addClass("jarviswidget-collapsed").children("div").hide(),c=b.o.customButton===!0&&l.data("widget-custombutton")===d&&0!==b.customClass[0].length?'<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="'+b.customClass[0]+'"></i></a>':"",e=b.o.deleteButton===!0&&l.data("widget-deletebutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="'+b.o.deleteClass+'"></i></a>':"",f=b.o.editButton===!0&&l.data("widget-editbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="'+b.editClass[0]+'"></i></a>':"",g=b.o.fullscreenButton===!0&&l.data("widget-fullscreenbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="'+b.fullscreenClass[0]+'"></i></a>':"",b.o.colorButton===!0&&l.data("widget-colorbutton")===d?(h='<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>',m.prepend('<div class="widget-toolbar">'+h+"</div>")):h="",b.o.toggleButton===!0&&l.data("widget-togglebutton")===d?(j=l.data("widget-collapsed")===!0||l.hasClass("jarviswidget-collapsed")?b.toggleClass[1]:b.toggleClass[0],i='<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="'+j+'"></i></a>'):i="",k=b.o.refreshButton===!0&&l.data("widget-refreshbutton")!==!1&&l.data("widget-load")?'<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="'+b.o.refreshButtonClass+'"></i></a>':"";var n=b.o.buttonOrder.replace(/%refresh%/g,k).replace(/%delete%/g,e).replace(/%custom%/g,c).replace(/%fullscreen%/g,g).replace(/%edit%/g,f).replace(/%toggle%/g,i);(""!==k||""!==e||""!==c||""!==g||""!==f||""!==i)&&m.prepend('<div class="jarviswidget-ctrls">'+n+"</div>"),b.o.sortable===!0&&l.data("widget-sortable")===d&&l.addClass("jarviswidget-sortable"),l.find(b.o.editPlaceholder).length&&l.find(b.o.editPlaceholder).find("input").val(a.trim(m.children("h2").text())),m.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'),l.attr("role","widget").children("div").attr("role","content").prev("header").attr("role","heading").children("div").attr("role","menu")}}),b.o.buttonsHidden===!0&&a(b.o.pwCtrls).hide(),a(".jarviswidget header [rel=tooltip]").tooltip(),b.obj.find("[data-widget-load]").each(function(){var c=a(this),d=c.children(),e=c.data("widget-load"),f=1e3*c.data("widget-refresh");c.children();c.find(".jarviswidget-ajax-placeholder").length||(c.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">'+b.o.loadingLabel+"</div>"),c.data("widget-refresh")>0?(b._loadAjaxFile(c,e,d),a.intervalArr.push(setInterval(function(){b._loadAjaxFile(c,e,d)},f))):b._loadAjaxFile(c,e,d))}),b.o.sortable===!0&&jQuery.ui){var l=b.obj.find(b.o.grid+".sortable-grid").not("[data-widget-excludegrid]");l.sortable({"items":l.find(b.o.widgets+".jarviswidget-sortable"),"connectWith":l,"placeholder":b.o.placeholderClass,"cursor":"move","revert":!0,"opacity":b.o.opacity,"delay":200,"cancel":".button-icon, #jarviswidget-fullscreen-mode > div","zIndex":1e4,"handle":b.o.dragHandle,"forcePlaceholderSize":!0,"forceHelperSize":!0,"update":function(a,c){b._runLoaderWidget(c.item.children()),b._savePositionWidget(),"function"==typeof b.o.onChange&&b.o.onChange.call(this,c.item)}})}b.o.buttonsHidden===!0&&b.widget.children("header").on("mouseenter."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,1)}).on("mouseleave."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,0)}),b._clickEvents(),b.storage.enabled&&(a(b.o.deleteSettingsKey).on(g,this,function(a){var c=confirm(b.o.settingsKeyLabel);c&&localStorage.removeItem(keySettings),a.preventDefault()}),a(b.o.deletePositionKey).on(g,this,function(a){var c=confirm(b.o.positionKeyLabel);c&&localStorage.removeItem(keyPosition),a.preventDefault()})),initialized=!0}},"_initStorage":function(a){a.enabled=a.enabled&&!!function(){var a,b=+new Date;try{return localStorage.setItem(b,b),a=localStorage.getItem(b)==b,localStorage.removeItem(b),a}catch(c){}}(),this._loadKeys(),a.enabled&&(a.getKeySettings=localStorage.getItem(a.keySettings),a.getKeyPosition=localStorage.getItem(a.keyPosition))},"_clickEvents":function(){function c(){if(a("#jarviswidget-fullscreen-mode").length){var c=a(b).height(),e=a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("header").height();a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("div").height(c-e-15)}}var d=this,e=d.widget.children("header");e.on(g,".jarviswidget-toggle-btn",function(b){var c=a(this),e=c.parents(d.o.widgets);d._runLoaderWidget(c),e.hasClass("jarviswidget-collapsed")?c.children().removeClass(d.toggleClass[1]).addClass(d.toggleClass[0]).parents(d.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(d.o.toggleSpeed,function(){d._saveSettingsWidget()}):c.children().removeClass(d.toggleClass[0]).addClass(d.toggleClass[1]).parents(d.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(d.o.toggleSpeed,function(){d._saveSettingsWidget()}),"function"==typeof d.o.onToggle&&d.o.onToggle.call(this,e),b.preventDefault()}),e.on(g,".jarviswidget-fullscreen-btn",function(b){var e=a(this).parents(d.o.widgets),f=e.children("div");d._runLoaderWidget(a(this)),a("#jarviswidget-fullscreen-mode").length?(a(".nooverflow").removeClass("nooverflow"),e.unwrap("<div>").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[1]).addClass(d.fullscreenClass[0]).parents(d.pwCtrls).children("a").show(),f.hasClass("jarviswidget-visible")&&f.hide().removeClass("jarviswidget-visible")):(a("body").addClass("nooverflow"),e.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[0]).addClass(d.fullscreenClass[1]).parents(d.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(),f.is(":hidden")&&f.show().addClass("jarviswidget-visible")),c(),"function"==typeof d.o.onFullscreen&&d.o.onFullscreen.call(this,e),b.preventDefault()}),a(b).on("resize."+f,function(){c()}),e.on(g,".jarviswidget-edit-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),c.find(d.o.editPlaceholder).is(":visible")?a(this).children().removeClass(d.editClass[1]).addClass(d.editClass[0]).parents(d.o.widgets).find(d.o.editPlaceholder).slideUp(d.o.editSpeed,function(){d._saveSettingsWidget()}):a(this).children().removeClass(d.editClass[0]).addClass(d.editClass[1]).parents(d.o.widgets).find(d.o.editPlaceholder).slideDown(d.o.editSpeed),"function"==typeof d.o.onEdit&&d.o.onEdit.call(this,c),b.preventDefault()}),a(d.o.editPlaceholder).find("input").keyup(function(){a(this).parents(d.o.widgets).children("header").children("h2").text(a(this).val())}),e.on(g,"[data-widget-setstyle]",function(b){var c=a(this).data("widget-setstyle"),e="";a(this).parents(d.o.editPlaceholder).find("[data-widget-setstyle]").each(function(){e+=a(this).data("widget-setstyle")+" "}),a(this).parents(d.o.widgets).attr("data-widget-attstyle",""+c).removeClassPrefix("jarviswidget-color-").addClass(c),d._runLoaderWidget(a(this)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-custom-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),a(this).children("."+d.customClass[0]).length?(a(this).children().removeClass(d.customClass[0]).addClass(d.customClass[1]),"function"==typeof d.o.customStart&&d.o.customStart.call(this,c)):(a(this).children().removeClass(d.customClass[1]).addClass(d.customClass[0]),"function"==typeof d.o.customEnd&&d.o.customEnd.call(this,c)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-delete-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.attr("id"),f=c.children("header").children("h2").text();a.SmartMessageBox?a.SmartMessageBox({"title":"<i class='fa fa-times' style='color:#ed1c24'></i> "+d.o.labelDelete+' "'+f+'"',"content":d.o.deleteMsg,"buttons":"[No][Yes]"},function(b){"Yes"==b&&(d._runLoaderWidget(a(this)),a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}))}):a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}),b.preventDefault()}),e.on(g,".jarviswidget-refresh-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.data("widget-load"),f=c.children(),g=a(this);g.button("loading"),f.addClass("widget-body-ajax-loading"),setTimeout(function(){g.button("reset"),f.removeClass("widget-body-ajax-loading"),d._loadAjaxFile(c,e,f)},1e3),b.preventDefault()}),e=null},"destroy":function(){var c=this,d="."+f,e=c.obj.find(c.o.grid+".sortable-grid").not("[data-widget-excludegrid]");e.sortable("destroy"),c.widget.children("header").off(d),a(c.o.deleteSettingsKey).off(d),a(c.o.deletePositionKey).off(d),a(b).off(d),c.obj.removeData(f)}},a.fn[f]=function(b){return this.each(function(){var c=a(this),d=c.data(f);if(!d){var g="object"==typeof b&&b;c.data(f,d=new e(this,g))}"string"==typeof b&&d[b]()})},a.fn[f].defaults={"grid":"section","widgets":".jarviswidget","localStorage":!0,"deleteSettingsKey":"","settingsKeyLabel":"Reset settings?","deletePositionKey":"","positionKeyLabel":"Reset position?","sortable":!0,"buttonsHidden":!1,"toggleButton":!0,"toggleClass":"min-10 | plus-10","toggleSpeed":200,"onToggle":function(){},"deleteButton":!0,"deleteMsg":"Warning: This action cannot be undone","deleteClass":"trashcan-10","deleteSpeed":200,"onDelete":function(){},"editButton":!0,"editPlaceholder":".jarviswidget-editbox","editClass":"pencil-10 | delete-10","editSpeed":200,"onEdit":function(){},"colorButton":!0,"fullscreenButton":!0,"fullscreenClass":"fullscreen-10 | normalscreen-10","fullscreenDiff":3,"onFullscreen":function(){},"customButton":!0,"customClass":"","customStart":function(){},"customEnd":function(){},"buttonOrder":"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%","opacity":1,"dragHandle":"> header","placeholderClass":"jarviswidget-placeholder","indicator":!0,"indicatorTime":600,"ajax":!0,"loadingLabel":"loading...","timestampPlaceholder":".jarviswidget-timestamp","timestampFormat":"Last update: %m%/%d%/%y% %h%:%i%:%s%","refreshButton":!0,"refreshButtonClass":"refresh-10","labelError":"Sorry but there was a error:","labelUpdated":"Last Update:","labelRefresh":"Refresh","labelDelete":"Delete widget:","afterLoad":function(){},"rtl":!1,"onChange":function(){},"onSave":function(){},"ajaxnav":!0},a.fn.removeClassPrefix=function(b){return this.each(function(c,d){var e=d.className.split(" ").map(function(a){return 0===a.indexOf(b)?"":a});d.className=a.trim(e.join(" "))}),this}}(jQuery,window,document);
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={"barColor":"#ef1e25","trackColor":"#f9f9f9","scaleColor":"#dfe0e0","scaleLength":5,"lineCap":"round","lineWidth":3,"trackWidth":void 0,"size":110,"rotate":0,"animate":{"duration":1e3,"enabled":!0},"easing":function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},"onStart":function(a,b){},"onStep":function(a,b,c){},"onStop":function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={"duration":e.animate,"enabled":!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={"duration":1e3,"enabled":e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
$.blue="#2e7bcc",$.green="#3FB618",$.red="#FF0039",$.yellow="#FFA500",$.orange="#FF7518",$.pink="#E671B8",$.purple="#9954BB",$.black="#333333",function(a,b,c){!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){"use strict";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{"common":{"type":"line","lineColor":"#00f","fillColor":"#cdf","defaultPixelsPerValue":3,"width":"auto","height":"auto","composite":!1,"tagValuesAttribute":"values","tagOptionsPrefix":"spark","enableTagOptions":!1,"enableHighlight":!0,"highlightLighten":1.4,"tooltipSkipNull":!0,"tooltipPrefix":"","tooltipSuffix":"","disableHiddenCheck":!1,"numberFormatter":!1,"numberDigitGroupCount":3,"numberDigitGroupSep":",","numberDecimalMark":".","disableTooltips":!1,"disableInteraction":!1},"line":{"spotColor":"#f80","highlightSpotColor":"#5f5","highlightLineColor":"#f22","spotRadius":1.5,"minSpotColor":"#f80","maxSpotColor":"#f80","lineWidth":1,"normalRangeMin":c,"normalRangeMax":c,"normalRangeColor":"#ccc","drawNormalOnTop":!1,"chartRangeMin":c,"chartRangeMax":c,"chartRangeMinX":c,"chartRangeMaxX":c,"tooltipFormat":new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},"bar":{"barColor":d.blue,"negBarColor":"#f44","stackedBarColor":[d.blue,d.red,d.yellow,d.green,"#66aa00",d.pink,"#0099c6",d.purple],"zeroColor":c,"nullColor":c,"zeroAxis":!0,"barWidth":4,"barSpacing":1,"chartRangeMax":c,"chartRangeMin":c,"chartRangeClip":!1,"colorMap":c,"tooltipFormat":new g('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},"tristate":{"barWidth":4,"barSpacing":1,"posBarColor":"#6f6","negBarColor":"#f44","zeroBarColor":"#999","colorMap":{},"tooltipFormat":new g('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),"tooltipValueLookups":{"map":{"-1":"Loss","0":"Draw","1":"Win"}}},"discrete":{"lineHeight":"auto","thresholdColor":c,"thresholdValue":0,"chartRangeMax":c,"chartRangeMin":c,"chartRangeClip":!1,"tooltipFormat":new g("{{prefix}}{{value}}{{suffix}}")},"bullet":{"targetColor":"#f33","targetWidth":3,"performanceColor":"#33f","rangeColors":["#d3dafe","#a8b6ff","#7f94ff"],"base":c,"tooltipFormat":new g("{{fieldkey:fields}} - {{value}}"),"tooltipValueLookups":{"fields":{"r":"Range","p":"Performance","t":"Target"}}},"pie":{"offset":0,"sliceColors":[d.blue,d.red,d.yellow,d.green,"#66aa00",d.pink,"#0099c6",d.purple],"borderWidth":0,"borderColor":"#000","tooltipFormat":new g('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},"box":{"raw":!1,"boxLineColor":"#000","boxFillColor":"#cdf","whiskerColor":"#000","outlierLineColor":"#333","outlierFillColor":"#fff","medianColor":"#f00","showOutliers":!0,"outlierIQR":1.5,"spotRadius":1.5,"target":c,"targetColor":"#4a2","chartRangeMax":c,"chartRangeMin":c,"tooltipFormat":new g("{{field:fields}}: {{value}}"),"tooltipFormatFieldlistKey":"field","tooltipValueLookups":{"fields":{"lq":"Lower Quartile","med":"Median","uq":"Upper Quartile","lo":"Left Outlier","ro":"Right Outlier","lw":"Left Whisker","rw":"Right Whisker"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({"fre":/\{\{([\w.]+?)(:(.+?))?\}\}/g,"precre":/(\w+)\.(\d+)/,"init":function(a,b){this.format=a,this.fclass=b},"render":function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?"":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get("numberFormatter")?d.get("numberFormatter")(h):r(h,i,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+="number"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c["string"==typeof a.body.style.WebkitAppearance?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(j.getContext&&j.getContext("2d"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=s=f({"init":function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&"string"==typeof b&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=0===c[0].length?-(1/0):parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},"get":function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({"init":function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},"registerSparkline":function(a){this.splist.push(a),this.over&&this.updateDisplay()},"registerCanvas":function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},"reset":function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},"mouseclick":function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},"mouseenter":function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},"mouseleave":function(){d(a.body).unbind("mousemove.jqs");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},"mousemove":function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},"updateDisplay":function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event("sparklineRegionChange"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a="",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({"sizeStyle":"position: static !important;display: block !important;visibility: hidden !important;float: left !important;","init":function(b){var c,e=b.get("tooltipClassname","jqstooltip"),f=this.sizeStyle;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{"id":"jqssizetip","style":f,"class":e}),this.tooltip=d("<div/>",{"id":"jqstooltip","class":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},"updateWindowDims":function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},"getSize":function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},"setContent":function(a){return a?(this.getSize(a),this.tooltip.html(a).css({"width":this.width,"height":this.height,"visibility":"visible"}),void(this.hidden&&(this.hidden=!1,this.updatePosition()))):(this.tooltip.css("visibility","hidden"),void(this.hidden=!0))},"updatePosition":function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({"left":a,"top":b}))},"remove":function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return"html"===b||b===c?(m=this.getAttribute(h.get("tagValuesAttribute")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")):e=b,f="auto"===h.get("width")?e.length*h.get("defaultPixelsPerValue"):h.get("width"),"auto"===h.get("height")?h.get("composite")&&d.data(this,"_jqs_vcanvas")||(j=a.createElement("span"),j.innerHTML="a",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get("height"),h.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?h.get("composite")||k.reset():(k=new t(this,h),d.data(this,"_jqs_mhandler",k))),h.get("composite")&&!d.data(this,"_jqs_vcanvas")?void(d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0))):(l=new(d.fn.sparkline[h.get("type")])(this,e,h,f,g),l.render(),void(k&&k.registerSparkline(l)))},d(this).html()&&!h.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!h.get("composite")&&d.data(this,"_jqs_pending"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,"_jqs_pending",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(J[b][1].call(a),d.data(J[b][0],"_jqs_pending",!1),e.push(b)):d(a).closest("html").length||d.data(a,"_jqs_pending")||(d.data(J[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({"init":function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting("type"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},"getTagSetting":function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if("["===b.substr(0,1))for(b=b.substr(1,b.length-2).split(","),d=b.length;d--;)b[d]=j(b[d].replace(/(^\s*)|(\s*$)/g,""));else if("{"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(","),b={},d=e.length;d--;)f=e[d].split(":",2),b[f[0].replace(/(^\s*)|(\s*$)/g,"")]=j(f[1].replace(/(^\s*)|(\s*$)/g,""));else b=j(b);this.tagValCache.key=b}return b},"get":function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({"disabled":!1,"init":function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},"initTarget":function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},"render":function(){return this.disabled?(this.el.innerHTML="",!1):!0},"getRegion":function(a,b){},"setRegionHighlight":function(a,b,d){var e,f=this.currentRegion,g=!this.options.get("disableHighlight");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},"clearRegionHighlight":function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},"renderHighlight":function(){this.changeHighlight(!0)},"removeHighlight":function(){this.changeHighlight(!1)},"changeHighlight":function(a){},"getCurrentRegionTooltip":function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s="",t=[];if(this.currentRegion===c)return"";if(a=this.getCurrentRegionFields(),n=r.get("tooltipFormatter"))return n(this,r,a);if(r.get("tooltipChartTitle")&&(s+='<div class="jqs jqstitle">'+r.get("tooltipChartTitle")+"</div>\n"),b=this.options.get("tooltipFormat"),!b)return"";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get("tooltipFormatFieldlist"),k=this.options.get("tooltipFormatFieldlistKey"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],"string"==typeof o&&(o=new g(o)),f=o.fclass||"jqsfield",q=0;p>q;q++)a[q].isNull&&r.get("tooltipSkipNull")||(d.extend(a[q],{"prefix":r.get("tooltipPrefix"),"suffix":r.get("tooltipSuffix")}),h=o.render(a[q],r.get("tooltipValueLookups"),r),t.push('<div class="'+f+'">'+h+"</div>"));return t.length?s+t.join("\n"):""},"getCurrentRegionFields":function(){},"calcHighlightColor":function(a,c){var d,e,f,g,i=c.get("highlightColor"),j=c.get("highlightLighten");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return"rgb("+f.join(",")+")"}return a}}),v={"changeHighlight":function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},"render":function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{"type":"line","init":function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},"getRegion":function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(null!==f[e]&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},"getCurrentRegionFields":function(){var a=this.currentRegion;return{"isNull":null===this.yvalues[a],"x":this.xvalues[a],"y":this.yvalues[a],"color":this.options.get("lineColor"),"fillColor":this.options.get("fillColor"),"offset":a}},"renderHighlight":function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get("spotRadius"),i=g.get("highlightSpotColor"),j=g.get("highlightLineColor");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},"removeHighlight":function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},"scanValues":function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d="string"==typeof g[a],e="object"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(":"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||"null"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get("xvalues")&&(i=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},"processRangeOptions":function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},"drawNormalRange":function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},"render":function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get("spotRadius"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get("highlightSpotColor")&&!E.get("disableInteraction"),(z||E.get("minSpotColor")||E.get("spotColor")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get("maxSpotColor")||E.get("spotColor")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get("minSpotColor")||E.get("maxSpotColor"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get("spotColor")||E.get("minSpotColor")||E.get("maxSpotColor")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get("normalRangeMin")===c||E.get("drawNormalOnTop")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get("fillColor")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get("fillColor"),E.get("fillColor")).append();for(E.get("normalRangeMin")!==c&&E.get("drawNormalOnTop")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get("lineColor"),c,E.get("lineWidth")).append();if(J&&E.get("valueSpots"))for(y=E.get("valueSpots"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get("spotColor")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get("spotColor")).append(),this.maxy!==this.minyorg&&(J&&E.get("minSpotColor")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get("minSpotColor")).append()),J&&E.get("maxSpotColor")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get("maxSpotColor")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{"type":"bar","init":function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get("barWidth"),10),L=parseInt(f.get("barSpacing"),10),M=f.get("chartRangeMin"),N=f.get("chartRangeMax"),O=f.get("chartRangeClip"),P=1/0,Q=-(1/0);for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m="string"==typeof H&&H.indexOf(":")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(":"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-(1/0):M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<y)&&(y=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>z)&&(z=f.get("chartRangeMax")),this.zeroAxis=v=f.get("zeroAxis",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},"getRegion":function(a,d,e){var f=b.floor(d/this.totalBarWidth);return 0>f||f>=this.values.length?c:f},"getCurrentRegionFields":function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({"isNull":null===a,"value":a,"color":this.calcColor(b,a,c),"offset":c});return e},"calcColor":function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get("stackedBarColor"):0>b?j.get("negBarColor"):j.get("barColor"),0===b&&j.get("zeroColor")!==c&&(f=j.get("zeroColor")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},"renderRegion":function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get("nullColor")?(h=e?r.get("nullColor"):this.calcHighlightColor(r.get("nullColor"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{"type":"tristate","init":function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},"getRegion":function(a,c,d){return b.floor(c/this.totalBarWidth)},"getCurrentRegionFields":function(){var a=this.currentRegion;return{"isNull":this.values[a]===c,"value":this.values[a],"color":this.calcColor(this.values[a],a),"offset":a}},"calcColor":function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get("negBarColor"):e[b]>0?f.get("posBarColor"):f.get("zeroBarColor")},"renderRegion":function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{"type":"discrete","init":function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g="auto"===f.get("width")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight="auto"===f.get("lineHeight")?b.round(.3*this.canvasHeight):f.get("lineHeight"))},"getRegion":function(a,c,d){return b.floor(c/this.itemWidth)},"getCurrentRegionFields":function(){var a=this.currentRegion;return{"isNull":this.values[a]===c,"value":this.values[a],"offset":a}},"renderRegion":function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get("thresholdColor")&&e<j.get("thresholdValue")?j.get("thresholdColor"):j.get("lineColor"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{"type":"bullet","init":function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get("base")===c?0>h?h:0:e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f="auto"===e.get("width")?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},"getRegion":function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},"getCurrentRegionFields":function(){var a=this.currentRegion;return{"fieldkey":a.substr(0,1),"value":this.values[a.substr(1)],"region":a}},"changeHighlight":function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case"r":b=this.renderRange(c.substr(1),a);break;case"p":b=this.renderPerformance(a);break;case"t":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},"renderRange":function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},"renderPerformance":function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},"renderTarget":function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},"render":function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]="r"+a,this.valueShapes["r"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]="p1",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]="t0",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{"type":"pie","init":function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),"auto"===e.get("width")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},"getRegion":function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},"getCurrentRegionFields":function(){var a=this.currentRegion;return{"isNull":this.values[a]===c,"value":this.values[a],"percent":this.values[a]/this.total*100,"color":this.options.get("sliceColors")[a%this.options.get("sliceColors").length],"offset":a}},"changeHighlight":function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];
delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},"renderSlice":function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get("borderWidth"),n=k.get("offset"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get("sliceColors")[g%k.get("sliceColors").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);r=f}},"render":function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get("borderWidth");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get("borderColor"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{"type":"box","init":function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width="auto"===c.get("width")?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},"getRegion":function(){return 1},"getCurrentRegionFields":function(){var a=[{"field":"lq","value":this.quartiles[0]},{"field":"med","value":this.quartiles[1]},{"field":"uq","value":this.quartiles[2]}];return this.loutlier!==c&&a.push({"field":"lo","value":this.loutlier}),this.routlier!==c&&a.push({"field":"ro","value":this.routlier}),this.lwhisker!==c&&a.push({"field":"lw","value":this.lwhisker}),this.rwhisker!==c&&a.push({"field":"rw","value":this.rwhisker}),a},"render":function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get("chartRangeMin")===c?b.min.apply(b,p):r.get("chartRangeMin"),v=r.get("chartRangeMax")===c?b.max.apply(b,p):r.get("chartRangeMax"),w=0;if(C._super.render.call(this)){if(r.get("raw"))r.get("showOutliers")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get("showOutliers")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get("outlierIQR")&&(a=p[l]),p[l]<h+e*r.get("outlierIQR")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get("showOutliers")&&(w=b.ceil(r.get("spotRadius")),s-=2*b.ceil(r.get("spotRadius")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get("spotRadius"),r.get("outlierLineColor"),r.get("outlierFillColor")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get("spotRadius"),r.get("outlierLineColor"),r.get("outlierFillColor")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get("boxLineColor"),r.get("boxFillColor")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get("lineColor")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get("whiskerColor")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get("lineColor")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get("whiskerColor")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get("medianColor")).append(),r.get("target")&&(m=b.ceil(r.get("spotRadius")),o.drawLine(b.round((r.get("target")-u)*n+w),b.round(t/2-m),b.round((r.get("target")-u)*n+w),b.round(t/2+m),r.get("targetColor")).append(),o.drawLine(b.round((r.get("target")-u)*n+w-m),b.round(t/2),b.round((r.get("target")-u)*n+w+m),b.round(t/2),r.get("targetColor")).append()),o.render()}}}),F=f({"init":function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},"append":function(){return this.target.appendShape(this),this}}),G=f({"_pxregex":/(\d+)(px)?\s*$/i,"init":function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this))},"drawLine":function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},"drawShape":function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},"drawCircle":function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},"drawPieSlice":function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},"drawRect":function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},"getElement":function(){return this.canvas},"getLastShapeId":function(){return this.lastShapeId},"reset":function(){alert("reset not implemented")},"_insert":function(a,b){d(b).html(a)},"_calculatePixelDims":function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},"_genShape":function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},"appendShape":function(a){alert("appendShape not implemented")},"replaceWithShape":function(a,b){alert("replaceWithShape not implemented")},"insertAfterShape":function(a,b){alert("insertAfterShape not implemented")},"removeShapeId":function(a){alert("removeShapeId not implemented")},"getShapeAt":function(a,b,c){alert("getShapeAt not implemented")},"render":function(){alert("render not implemented")}}),H=f(G,{"init":function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({"display":"inline-block","width":b,"height":e,"verticalAlign":"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({"width":this.pixelWidth,"height":this.pixelHeight})},"_getContext":function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},"reset":function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},"_drawShape":function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},"_drawCircle":function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},"_drawPieSlice":function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},"_drawRect":function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},"appendShape":function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},"replaceWithShape":function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},"replaceWithShapes":function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},"insertAfterShape":function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),void(this.shapes[b.id]=b)},"removeShapeId":function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},"getShapeAt":function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},"render":function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this["_draw"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{"init":function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({"display":"inline-block","position":"relative","overflow":"hidden","width":b,"height":c,"margin":"0px","padding":"0px","verticalAlign":"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},"_drawShape":function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=""+b[m][0]+","+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',i=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',j=n[0]===n[n.length-1]?"x ":"",k='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+a+'" '+h+i+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+g+" l "+n.join(", ")+" "+j+'e"> </v:shape>'},"_drawCircle":function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+2*e+"px; height:"+2*e+'px"></v:oval>'},"_drawPieSlice":function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"  id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;"  path="m '+d+","+e+" wa "+k.join(", ")+' x e"> </v:shape>')},"_drawRect":function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},"reset":function(){this.group.innerHTML=""},"appendShape":function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},"replaceWithShape":function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},"replaceWithShapes":function(a,b){var c,e=d("#jqsshape"+a[0]),f="",g=b.length;for(c=0;g>c;c++)f+=this["_draw"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d("#jqsshape"+a[c]).remove()},"insertAfterShape":function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},"removeShapeId":function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},"getShapeAt":function(a,b,c){var d=a.id.substr(8);return d},"render":function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{"validate":function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},"valid":function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,d=d.concat(c.errorList)}),c.errorList=d),b},"rules":function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({"required":h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{"remote":h})),g}}),a.extend(a.expr[":"],{"blank":function(b){return!a.trim(""+a(b).val())},"filled":function(b){return!!a.trim(""+a(b).val())},"unchecked":function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{"defaults":{"messages":{},"groups":{},"rules":{},"errorClass":"error","validClass":"valid","errorElement":"label","focusCleanup":!1,"focusInvalid":!0,"errorContainer":a([]),"errorLabelContainer":a([]),"onsubmit":!0,"ignore":":hidden","ignoreTitle":!1,"onfocusin":function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},"onfocusout":function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},"onkeyup":function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b===this.lastElement)&&this.element(b)},"onclick":function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},"highlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},"unhighlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},"setDefaults":function(b){a.extend(a.validator.defaults,b)},"messages":{"required":"This field is required.","remote":"Please fix this field.","email":"Please enter a valid email address.","url":"Please enter a valid URL.","date":"Please enter a valid date.","dateISO":"Please enter a valid date ( ISO ).","number":"Please enter a valid number.","digits":"Please enter only digits.","creditcard":"Please enter a valid credit card number.","equalTo":"Please enter the same value again.","maxlength":a.validator.format("Please enter no more than {0} characters."),"minlength":a.validator.format("Please enter at least {0} characters."),"rangelength":a.validator.format("Please enter a value between {0} and {1} characters long."),"range":a.validator.format("Please enter a value between {0} and {1}."),"max":a.validator.format("Please enter a value less than or equal to {0}."),"min":a.validator.format("Please enter a value greater than or equal to {0}.")},"autoCreateRanges":!1,"prototype":{"init":function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},"form":function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},"checkForm":function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},"element":function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},"showErrors":function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({"message":b[c],"element":this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},"resetForm":function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var b,c=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(b=0;c[b];b++)this.settings.unhighlight.call(this,c[b],this.settings.errorClass,"");else c.removeClass(this.settings.errorClass)},"numberOfInvalids":function(){return this.objectLength(this.invalid)},"objectLength":function(a){var b,c=0;for(b in a)c++;return c},"hideErrors":function(){this.hideThese(this.toHide)},"hideThese":function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},"valid":function(){return 0===this.size()},"size":function(){return this.errorList.length},"focusInvalid":function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},"findLastActive":function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},"elements":function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},"clean":function(b){return a(b)[0]},"errors":function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},"reset":function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},"prepareForm":function(){this.reset(),this.toHide=this.errors().add(this.containers)},"prepareElement":function(a){this.reset(),this.toHide=this.errorsFor(a)},"elementValue":function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?this.findByName(b.name).filter(":checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},"check":function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={"method":d,"parameters":f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},"customDataMessage":function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},"customMessage":function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},"findDefined":function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},"defaultMessage":function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},"formatAndAdd":function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({"message":d,"element":b,"method":c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},"addWrapper":function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},"defaultShowErrors":function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},"validElements":function(){return this.currentElements.not(this.invalidElements())},"invalidElements":function(){return a(this.errorList).map(function(){return this.element})},"showLabel":function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},"errorsFor":function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},"idOrName":function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},"validationTargetFor":function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},"checkable":function(a){return/radio|checkbox/i.test(a.type)},"findByName":function(b){return a(this.currentForm).find("[name='"+b+"']")},"getLength":function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},"depend":function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},"dependTypes":{"boolean":function(a){return a},"string":function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},"optional":function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},"startRequest":function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},"stopRequest":function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},"previousValue":function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{"old":null,"valid":!0,"message":this.defaultMessage(b,"remote")})},"destroy":function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator")}},"classRuleSettings":{"required":{"required":!0},"email":{"email":!0},"url":{"url":!0},"date":{"date":!0},"dateISO":{"dateISO":!0},"number":{"number":!0},"digits":{"digits":!0},"creditcard":{"creditcard":!0}},"addClassRules":function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},"classRules":function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},"normalizeAttributeRule":function(a,b,c,d){/min|max/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},"attributeRules":function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},"dataRules":function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},"staticRules":function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},"normalizeRules":function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},"normalizeRule":function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},"addMethod":function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},"methods":{"required":function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},"email":function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},"url":function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},"date":function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},"dateISO":function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},"number":function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},"digits":function(a,b){return this.optional(b)||/^\d+$/.test(a)},"creditcard":function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},"minlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},"maxlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},"rangelength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},"min":function(a,b,c){return this.optional(b)||a>=c},"max":function(a,b,c){return this.optional(b)||c>=a},"range":function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},"equalTo":function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.off(".validate-equalTo").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},"remote":function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{"url":d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{"mode":"abort","port":"validate"+c.name,"dataType":"json","data":f,"context":e.currentForm,"success":function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={"definitions":{"9":"[0-9]","a":"[A-Za-z]","*":"[A-Za-z0-9]"},"autoclear":!0,"dataName":"rawMaskFn","placeholder":"_"},a.fn.extend({"caret":function(a,b){var c;return 0===this.length||this.is(":hidden")?void 0:"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{"begin":a,"end":b})},"unmask":function(){return this.trigger("unmask")},"mask":function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({"autoclear":a.mask.autoclear,"placeholder":a.mask.placeholder,"completed":null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/*!
 * Select2 4.0.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
return function(){if(!b||!b.requirejs){b?c=b:b={};/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{"f":e?e+"!"+a:a,"n":a,"pr":e,"p":c}},p={"require":function(a){return g(a)},"exports":function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},"module":function(a){return{"id":a,"uri":"","exports":q[a],"config":l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={"jQuery":!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice;this.listeners=this.listeners||{},a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{"message":"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")});var f=e.filter("[aria-selected=true]");f.length>0?f.first().trigger("mouseenter"):e.first().trigger("mouseenter")})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={"disabled":!0,"loading":!0,"text":b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={"role":"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&d.setClasses()}),b.on("unselect",function(){b.isOpen()&&d.setClasses()}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{"data":b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-d.$results.scrollTop()+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{"originalEvent":b,"data":e}):d.trigger("close",{})):void d.trigger("select",{"originalEvent":b,"data":e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{"data":c,"element":a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={"BACKSPACE":8,"TAB":9,"ENTER":13,"SHIFT":16,"CTRL":17,"ALT":18,"ESC":27,"SPACE":32,"PAGE_UP":33,"PAGE_DOWN":34,"END":35,"HOME":36,"LEFT":37,"UP":38,"RIGHT":39,"DOWN":40,"DELETE":46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{"originalEvent":a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{"originalEvent":a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{"originalEvent":b,"data":f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={"id":"","text":b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={"data":d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{"term":a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{"data":b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{"params":c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o",
"\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({"results":d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={"id":a.val(),"text":a.text(),"disabled":a.prop("disabled"),"selected":a.prop("selected"),"title":a.prop("title")};else if(a.is("optgroup")){b={"text":a.prop("label"),"children":[],"title":a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={"id":a,"text":a}),a=c.extend({},{"text":""},a);var b={"selected":!1,"disabled":!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},l,j),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={"data":function(a){return c.extend({},a,{"q":a.term})},"transport":function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({"type":"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&""!==a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");if(void 0!==f&&(this.createTag=f),b.call(this,c,d),a.isArray(e))for(var g=0;g<e.length;g++){var h=e[g],i=this._normalizeItem(h),j=this.option(i);this.$element.append(j)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({"results":i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{"id":d,"text":d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(a,b,c){function d(a){e.trigger("select",{"data":a})}var e=this;b.term=b.term||"";var f=this.tokenizer(b,this.options,d);f.term!==b.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.focus()),b.term=f.term),a.call(this,b,c)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{"id":a.term,"text":a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{"term":k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{"term":g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{"message":"inputTooShort","args":{"minimum":this.minimumInputLength,"input":b.term,"params":b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{"message":"inputTooLong","args":{"maximum":this.maximumInputLength,"input":b.term,"params":b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{"message":"maximumSelected","args":{"maximum":d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{"term":b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={"id":"","text":b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{"page":1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({"position":"absolute","top":-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{"x":a(this).scrollLeft(),"y":a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=(this.$container.position(),this.$container.offset());f.bottom=f.top+this.$container.outerHeight(!1);var g={"height":this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={"height":this.$dropdown.outerHeight(!1)},i={"top":b.scrollTop(),"bottom":b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={"left":f.left,"top":g.bottom};if("static"!==this.$dropdownParent[0].style.position){var m=this.$dropdownParent.offset();l.top-=m.top,l.left-=m.left}c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={"width":this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(){d._handleSelectOnClose()})},a.prototype._handleSelectOnClose=function(){var a=this.getHighlightedResults();if(!(a.length<1)){var b=a.data("data");null!=b.element&&b.element.selected||null==b.element&&b.selected||this.trigger("select",{"data":b})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{})},a}),b.define("select2/i18n/en",[],function(){return{"errorLoading":function(){return"The results could not be loaded."},"inputTooLong":function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},"inputTooShort":function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},"loadingMore":function(){return"Loading more results\u2026"},"maximumSelected":function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},"noResults":function(){return"No results found"},"searching":function(){return"Searching\u2026"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend({},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={"amdBase":"./","amdLanguageBase":"./i18n/","closeOnSelect":!0,"debug":!1,"dropdownAutoWidth":!1,"escapeMarkup":j.escapeMarkup,"language":C,"matcher":c,"minimumInputLength":0,"maximumInputLength":0,"maximumSelectionLength":0,"minimumResultsForSearch":0,"selectOnClose":!1,"sorter":function(a){return a},"templateResult":function(a){return a.text},"templateSelection":function(a){return a.text},"theme":"default","width":"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{"data":a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{"data":a})})}),this._sync=c.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._sync)}),this._observer.observe(this.$element[0],{"attributes":!0,"subtree":!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",b._sync,!1)},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{"data":c,"query":b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{"data":c,"query":b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={"open":"opening","close":"closing","select":"selecting","unselect":"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={"prevented":!1,"name":a,"args":b
};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{"syncCssClasses":b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({"results":d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d;return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2.");var e=Array.prototype.slice.call(arguments,1);d=c[b].apply(c,e)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{"define":b.define,"require":b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
!function(a){var b=function(b,c){this.element=a(b),this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).prepend(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),"undefined"!=typeof Modernizr&&Modernizr.touch&&(this.touchCapable=!0);var d=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find(".tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",this.element.outerWidth()),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px"}this.min=this.element.data("slider-min")||c.min,this.max=this.element.data("slider-max")||c.max,this.step=this.element.data("slider-step")||c.step,this.value=this.element.data("slider-value")||c.value,this.value[1]&&(this.range=!0),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style;var e=this.element.data("slider-handle")||c.handle;switch(e){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),"after"==this.selection?this.value[1]=this.max:this.value[1]=this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.layout(),this.touchCapable?this.picker.on({"touchstart":a.proxy(this.mousedown,this)}):this.picker.on({"mousedown":a.proxy(this.mousedown,this)}),"show"===d?this.picker.on({"mouseenter":a.proxy(this.showTooltip,this),"mouseleave":a.proxy(this.hideTooltip,this)}):this.tooltip.addClass("hide")};b.prototype={"constructor":b,"over":!1,"inDrag":!1,"showTooltip":function(){this.tooltip.addClass("in"),this.over=!0},"hideTooltip":function(){this.inDrag===!1&&this.tooltip.removeClass("in"),this.over=!1},"layout":function(){this.handle1Stype[this.stylePos]=this.percentage[0]+"%",this.handle2Stype[this.stylePos]=this.percentage[1]+"%","vertical"==this.orientation?(this.selectionElStyle.top=Math.min(this.percentage[0],this.percentage[1])+"%",this.selectionElStyle.height=Math.abs(this.percentage[0]-this.percentage[1])+"%"):(this.selectionElStyle.left=Math.min(this.percentage[0],this.percentage[1])+"%",this.selectionElStyle.width=Math.abs(this.percentage[0]-this.percentage[1])+"%"),this.range?(this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(this.percentage[0]+(this.percentage[1]-this.percentage[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*this.percentage[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},"mousedown":function(b){this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=c,this.layout(),this.touchCapable?a(document).on({"touchmove":a.proxy(this.mousemove,this),"touchend":a.proxy(this.mouseup,this)}):a(document).on({"mousemove":a.proxy(this.mousemove,this),"mouseup":a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.element.trigger({"type":"slideStart","value":f}).trigger({"type":"slide","value":f}),!1},"mousemove":function(a){this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.range&&(0===this.dragged&&this.percentage[1]<b?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>b&&(this.percentage[1]=this.percentage[0],this.dragged=0)),this.percentage[this.dragged]=b,this.layout();var c=this.calculateValue();return this.element.trigger({"type":"slide","value":c}).data("value",c).prop("value",c),!1},"mouseup":function(b){this.touchCapable?a(document).off({"touchmove":this.mousemove,"touchend":this.mouseup}):a(document).off({"mousemove":this.mousemove,"mouseup":this.mouseup}),this.inDrag=!1,0==this.over&&this.hideTooltip(),this.element;var c=this.calculateValue();return this.element.trigger({"type":"slideStop","value":c}).data("value",c).prop("value",c),!1},"calculateValue":function(){var a;return this.range?(a=[this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step],this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,this.value=[a,this.value[1]]),a},"getPercentage":function(a){this.touchCapable&&(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},"getValue":function(){return this.range?this.value:this.value[0]},"setValue":function(a){this.value=a,this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),"after"==this.selection?this.value[1]=this.max:this.value[1]=this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.layout()}},a.fn.slider=function(c,d){return this.each(function(){var e=a(this),f=e.data("slider"),g="object"==typeof c&&c;f||e.data("slider",f=new b(this,a.extend({},a.fn.slider.defaults,g))),"string"==typeof c&&f[c](d)})},a.fn.slider.defaults={"min":0,"max":10,"step":1,"orientation":"horizontal","value":5,"selection":"before","tooltip":"show","handle":"round","formater":function(a){return a}},a.fn.slider.Constructor=b}(window.jQuery);
var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @version 1.0.6
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return d&&!e&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction?!0:(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1)},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}();
/*                  ______________________________________
           ________|                                      |_______
           \       |           SmartAdmin WebApp          |      /
            \      |      Copyright © 2015 MyOrange       |     /
            /      |______________________________________|     \
           /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename  : app.js
 * filesize           : 62,499~ bytes
 * author             : Sunny (@bootstraphunt)
 * email              : info@myorange.ca
 * legal notice       : This script is part of a theme sold by 
 *                      bootstraphunter.com
 *    
 * =======================================================================
 * INDEX (Note: line numbers for index items may not be up to date):
 * 
 * 1. APP CONFIGURATION..................................[ app.config.js ]
 * 2. APP DOM REFERENCES.................................[ app.config.js ]
 * 3. DETECT MOBILE DEVICES...................................[line: 149 ]
 * 4. CUSTOM MENU PLUGIN......................................[line: 688 ]
 * 5. ELEMENT EXIST OR NOT....................................[line: 778 ]
 * 6. INITIALIZE FORMS........................................[line: 788 ]
 * 		6a. BOOTSTRAP SLIDER PLUGIN...........................[line: 794 ]
 * 		6b. SELECT2 PLUGIN....................................[line: 803 ]
 * 		6c. MASKING...........................................[line: 824 ]
 * 		6d. AUTOCOMPLETE......................................[line: 843 ]
 * 		6f. JQUERY UI DATE....................................[line: 862 ]
 * 		6g. AJAX BUTTON LOADING TEXT..........................[line: 884 ]
 * 7. INITIALIZE CHARTS.......................................[line: 902 ]
 * 		7a. SPARKLINES........................................[line: 907 ]
 * 		7b. LINE CHART........................................[line: 1026]
 * 		7c. PIE CHART.........................................[line: 1077]
 * 		7d. BOX PLOT..........................................[line: 1100]
 * 		7e. BULLET............................................[line: 1145]
 * 		7f. DISCRETE..........................................[line: 1169]
 * 		7g. TRISTATE..........................................[line: 1195]
 * 		7h. COMPOSITE: BAR....................................[line: 1223]
 * 		7i. COMPOSITE: LINE...................................[line: 1259]
 * 		7j. EASY PIE CHARTS...................................[line: 1339]
 * 8. INITIALIZE JARVIS WIDGETS...............................[line: 1379]
 * 		8a. SETUP DESKTOP WIDGET..............................[line: 1466]
 * 		8b. GOOGLE MAPS.......................................[line: 1478]
 * 		8c. LOAD SCRIPTS......................................[line: 1500]
 * 		8d. APP AJAX REQUEST SETUP............................[line: 1538]
 * 9. CHECK TO SEE IF URL EXISTS..............................[line: 1614]
 * 10.LOAD AJAX PAGES.........................................[line: 1669]
 * 11.UPDATE BREADCRUMB.......................................[line: 1775]
 * 12.PAGE SETUP..............................................[line: 1798]
 * 13.POP OVER THEORY.........................................[line: 1852]
 * 14.DELETE MODEL DATA ON HIDDEN.............................[line: 1991]
 * 15.HELPFUL FUNCTIONS.......................................[line: 2027]
 * 
 * =======================================================================
 *       IMPORTANT: ALL CONFIG VARS IS NOW MOVED TO APP.CONFIG.JS
 * =======================================================================
 * 
 * 
 * GLOBAL: interval array (to be used with jarviswidget in ajax and 
 * angular mode) to clear auto fetch interval
 */
$.intervalArr = [];
/*
 * Calculate nav height
 */
var calc_navbar_height = function () {
        var height = null;

        if ($('#header').length)
            height = $('#header').height();

        if (height === null)
            height = $('<div id="header"></div>').height();

        if (height === null)
            return 49;
        // default
        return height;
    },

    navbar_height = calc_navbar_height,
    /*
     * APP DOM REFERENCES
     * Description: Obj DOM reference, please try to avoid changing these
     */
    shortcut_dropdown = $('#shortcut'),

    bread_crumb = $('#ribbon ol.breadcrumb'),
    /*
     * Top menu on/off
     */
    topmenu = false,
    /*
     * desktop or mobile
     */
    thisDevice = null,
    /*
     * DETECT MOBILE DEVICES
     * Description: Detects mobile device - if any of the listed device is
     * detected a class is inserted to $.root_ and the variable thisDevice
     * is decleard. (so far this is covering most hand held devices)
     */
    ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    /*
     * JS ARRAY SCRIPT STORAGE
     * Description: used with loadScript to store script path and file name
     * so it will not load twice
     */
    jsArray = {},
    /*
     * App Initialize
     * Description: Initializes the app with intApp();
     */
    initApp = (function (app) {

        /*
         * ADD DEVICE TYPE
         * Detect if mobile or desktop
         */
        app.addDeviceType = function () {

            if (!ismobile) {
                // Desktop
                $.root_.addClass("desktop-detected");
                thisDevice = "desktop";
                return false;
            } else {
                // Mobile
                $.root_.addClass("mobile-detected");
                thisDevice = "mobile";

                if (fastClick) {
                    // Removes the tap delay in idevices
                    // dependency: js/plugin/fastclick/fastclick.js
                    $.root_.addClass("needsclick");
                    FastClick.attach(document.body);
                    return false;
                }

            }

        };
        /* ~ END: ADD DEVICE TYPE */

        /*
         * CHECK FOR MENU POSITION
         * Scans localstroage for menu position (vertical or horizontal)
         */
        app.menuPos = function () {

            if ($.root_.hasClass("menu-on-top") || localStorage.getItem('sm-setmenu') == 'top') {
                topmenu = true;
                $.root_.addClass("menu-on-top");
            }
        };
        /* ~ END: CHECK MOBILE DEVICE */

        /*
         * SMART ACTIONS
         */
        app.SmartActions = function () {

            var smartActions = {

                // LOGOUT MSG
                userLogout: function ($this) {

                    // ask verification
                    $.SmartMessageBox({
                        title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
                        content: $this.data('logout-msg') || "You can improve your security further after logging out by closing this opened browser",
                        buttons: '[No][Yes]'

                    }, function (ButtonPressed) {
                        if (ButtonPressed == "Yes") {
                            $.root_.addClass('animated fadeOutUp');
                            setTimeout(logout, 1000);
                        }
                    });

                    function logout() {
                        window.location = $this.attr('href');
                    }

                },

                // RESET WIDGETS
                resetWidgets: function ($this) {

                    $.SmartMessageBox({
                        title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                        content: $this.data('reset-msg') || "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                        buttons: '[No][Yes]'
                    }, function (ButtonPressed) {
                        if (ButtonPressed == "Yes" && localStorage) {
                            localStorage.clear();
                            location.reload();
                        }

                    });
                },

                // LAUNCH FULLSCREEN
                launchFullscreen: function (element) {

                    if (!$.root_.hasClass("full-screen")) {

                        $.root_.addClass("full-screen");

                        if (element.requestFullscreen) {
                            element.requestFullscreen();
                        } else if (element.mozRequestFullScreen) {
                            element.mozRequestFullScreen();
                        } else if (element.webkitRequestFullscreen) {
                            element.webkitRequestFullscreen();
                        } else if (element.msRequestFullscreen) {
                            element.msRequestFullscreen();
                        }

                    } else {

                        $.root_.removeClass("full-screen");

                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }

                    }

                },

                // MINIFY MENU
                minifyMenu: function ($this) {
                    if (!$.root_.hasClass("menu-on-top")) {
                        $.root_.toggleClass("minified");
                        $.root_.removeClass("hidden-menu");
                        $('html').removeClass("hidden-menu-mobile-lock");
                        $this.effect("highlight", {}, 500);
                    }
                },

                // TOGGLE MENU
                toggleMenu: function () {
                    if (!$.root_.hasClass("menu-on-top")) {
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $.root_.toggleClass("hidden-menu");
                        $.root_.removeClass("minified");
                        //} else if ( $.root_.hasClass("menu-on-top") && $.root_.hasClass("mobile-view-activated") ) {
                        // suggested fix from Christian Jäger
                    } else if ($.root_.hasClass("menu-on-top") && $(window).width() < 979) {
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $.root_.toggleClass("hidden-menu");
                        $.root_.removeClass("minified");
                    }
                },

                // TOGGLE SHORTCUT
                toggleShortcut: function () {

                    if (shortcut_dropdown.is(":visible")) {
                        shortcut_buttons_hide();
                    } else {
                        shortcut_buttons_show();
                    }

                    // SHORT CUT (buttons that appear when clicked on user name)
                    shortcut_dropdown.find('a').click(function (e) {
                        e.preventDefault();
                        window.location = $(this).attr('href');
                        setTimeout(shortcut_buttons_hide, 300);

                    });

                    // SHORTCUT buttons goes away if mouse is clicked outside of the area
                    $(document).mouseup(function (e) {
                        if (!shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
                            shortcut_buttons_hide();
                        }
                    });

                    // SHORTCUT ANIMATE HIDE
                    function shortcut_buttons_hide() {
                        shortcut_dropdown.animate({
                            height: "hide"
                        }, 300, "easeOutCirc");
                        $.root_.removeClass('shortcut-on');

                    }

                    // SHORTCUT ANIMATE SHOW
                    function shortcut_buttons_show() {
                        shortcut_dropdown.animate({
                            height: "show"
                        }, 200, "easeOutCirc");
                        $.root_.addClass('shortcut-on');
                    }

                }

            };

            $.root_.on('click', '[data-action="userLogout"]', function (e) {
                var $this = $(this);
                smartActions.userLogout($this);
                e.preventDefault();

                //clear memory reference
                $this = null;

            });

            /*
             * BUTTON ACTIONS
             */
            $.root_.on('click', '[data-action="resetWidgets"]', function (e) {
                var $this = $(this);
                smartActions.resetWidgets($this);
                e.preventDefault();

                //clear memory reference
                $this = null;
            });

            $.root_.on('click', '[data-action="launchFullscreen"]', function (e) {
                smartActions.launchFullscreen(document.documentElement);
                e.preventDefault();
            });

            $.root_.on('click', '[data-action="minifyMenu"]', function (e) {
                var $this = $(this);
                smartActions.minifyMenu($this);
                e.preventDefault();

                //clear memory reference
                $this = null;
            });

            $.root_.on('click', '[data-action="toggleMenu"]', function (e) {
                smartActions.toggleMenu();
                e.preventDefault();
            });

            $.root_.on('click', '[data-action="toggleShortcut"]', function (e) {
                smartActions.toggleShortcut();
                e.preventDefault();
            });

        };
        /* ~ END: SMART ACTIONS */

        /*
         * ACTIVATE NAVIGATION
         * Description: Activation will fail if top navigation is on
         */
        app.leftNav = function () {

            // INITIALIZE LEFT NAV
            if (!topmenu) {
                if (!null) {
                    $('nav ul').jarvismenu({
                        accordion: menu_accordion || true,
                        speed: menu_speed || true,
                        closedSign: '<em class="fa fa-plus-square-o"></em>',
                        openedSign: '<em class="fa fa-minus-square-o"></em>'
                    });
                } else {
                    alert("Error - menu anchor does not exist");
                }
            }

        };
        /* ~ END: ACTIVATE NAVIGATION */

        /*
         * MISCELANEOUS DOM READY FUNCTIONS
         * Description: fire with jQuery(document).ready...
         */
        app.domReadyMisc = function () {

            /*
             * FIRE TOOLTIPS
             */
            if ($("[rel=tooltip]").length) {
                $("[rel=tooltip]").tooltip();
            }

            // SHOW & HIDE MOBILE SEARCH FIELD
            $('#search-mobile').click(function () {
                $.root_.addClass('search-mobile');
            });

            $('#cancel-search-js').click(function () {
                $.root_.removeClass('search-mobile');
            });

            // ACTIVITY
            // ajax drop
            $('#activity').click(function (e) {
                let $this = $(this);

                // if ($this.find('.badge').hasClass('bg-color-red')) {
                //     $this.find('.badge').removeClassPrefix('bg-color-');
                //     $this.find('.badge').text("0");
                // }

                if (!$this.next('.ajax-dropdown').is(':visible')) {
                    $this.next('.ajax-dropdown').fadeIn(150);
                    //$this.addClass('active');
                } else {
                    $this.next('.ajax-dropdown').fadeOut(150);
                    //$this.removeClass('active');
                }

                // let theUrlVal = $this.next('.ajax-dropdown').find('.btn-group > .active > input').attr('id');
                //
                // //clear memory reference
                // $this = null;
                // theUrlVal = null;

                e.preventDefault();
            });

            // $('input[name="activity"]').change(function () {
            //     var $this = $(this);
            //
            //     url = $this.attr('id');
            //     container = $('.ajax-notifications');
            //
            //     loadURL(url, container);
            //
            //     //clear memory reference
            //     $this = null;
            // });

            // close dropdown if mouse is not inside the area of .ajax-dropdown
            $(document).mouseup(function (e) {
                if (!$('.ajax-dropdown').is(e.target) && $('.ajax-dropdown').has(e.target).length === 0) {
                    $('.ajax-dropdown').fadeOut(150);
                    $('.ajax-dropdown').prev().removeClass("active");
                }
            });

            // loading animation (demo purpose only)
            $('button[data-btn-loading]').on('click', function () {
                var btn = $(this);
                btn.button('loading');
                setTimeout(function () {
                    btn.button('reset');
                }, 3000);
            });

            // NOTIFICATION IS PRESENT
            // Change color of lable once notification button is clicked

            $this = $('#activity > .badge');

            if (parseInt($this.text()) > 0) {
                $this.addClass("bg-color-red bounceIn animated");

                //clear memory reference
                $this = null;
            }


        };
        /* ~ END: MISCELANEOUS DOM */

        /*
         * MISCELANEOUS DOM READY FUNCTIONS
         * Description: fire with jQuery(document).ready...
         */
        app.mobileCheckActivation = function () {

            if ($(window).width() < 979) {
                $.root_.addClass('mobile-view-activated');
                $.root_.removeClass('minified');
            } else if ($.root_.hasClass('mobile-view-activated')) {
                $.root_.removeClass('mobile-view-activated');
            }

            if (debugState) {
                console.log("mobileCheckActivation");
            }

        };
        /* ~ END: MISCELANEOUS DOM */

        return app;

    })({});

initApp.addDeviceType();
initApp.menuPos();
/*
 * DOCUMENT LOADED EVENT
 * Description: Fire when DOM is ready
 */
jQuery(document).ready(function () {

    initApp.SmartActions();
    initApp.leftNav();
    initApp.domReadyMisc();

});
/*
 * RESIZER WITH THROTTLE
 * Source: http://benalman.com/code/projects/jquery-resize/examples/resize/
 */
(function ($, window, undefined) {

    var elems = $([]),
        jq_resize = $.resize = $.extend($.resize, {}),
        timeout_id, str_setTimeout = 'setTimeout',
        str_resize = 'resize',
        str_data = str_resize + '-special-event',
        str_delay = 'delay',
        str_throttle = 'throttleWindow';

    jq_resize[str_delay] = throttle_delay;

    jq_resize[str_throttle] = true;

    $.event.special[str_resize] = {

        setup: function () {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }

            var elem = $(this);
            elems = elems.add(elem);
            try {
                $.data(this, str_data, {
                    w: elem.width(),
                    h: elem.height()
                });
            } catch (e) {
                $.data(this, str_data, {
                    w: elem.width, // elem.width();
                    h: elem.height // elem.height();
                });
            }

            if (elems.length === 1) {
                loopy();
            }
        },
        teardown: function () {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }

            var elem = $(this);
            elems = elems.not(elem);
            elem.removeData(str_data);
            if (!elems.length) {
                clearTimeout(timeout_id);
            }
        },

        add: function (handleObj) {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }
            var old_handler;

            function new_handler(e, w, h) {
                var elem = $(this),
                    data = $.data(this, str_data);
                data.w = w !== undefined ? w : elem.width();
                data.h = h !== undefined ? h : elem.height();

                old_handler.apply(this, arguments);
            }

            if ($.isFunction(handleObj)) {
                old_handler = handleObj;
                return new_handler;
            } else {
                old_handler = handleObj.handler;
                handleObj.handler = new_handler;
            }
        }
    };

    function loopy() {
        timeout_id = window[str_setTimeout](function () {
            elems.each(function () {
                var width;
                var height;

                var elem = $(this),
                    data = $.data(this, str_data); //width = elem.width(), height = elem.height();

                // Highcharts fix
                try {
                    width = elem.width();
                } catch (e) {
                    width = elem.width;
                }

                try {
                    height = elem.height();
                } catch (e) {
                    height = elem.height;
                }
                //fixed bug


                if (width !== data.w || height !== data.h) {
                    elem.trigger(str_resize, [data.w = width, data.h = height]);
                }

            });
            loopy();

        }, jq_resize[str_delay]);

    }

})(jQuery, this);
/*
* ADD CLASS WHEN BELOW CERTAIN WIDTH (MOBILE MENU)
* Description: tracks the page min-width of #CONTENT and NAV when navigation is resized.
* This is to counter bugs for minimum page width on many desktop and mobile devices.
* Note: This script utilizes JSthrottle script so don't worry about memory/CPU usage
*/
$('#main').resize(function () {

    initApp.mobileCheckActivation();

});

/* ~ END: NAV OR #LEFT-BAR RESIZE DETECT */

/*
 * DETECT IE VERSION
 * Description: A short snippet for detecting versions of IE in JavaScript
 * without resorting to user-agent sniffing
 * RETURNS:
 * If you're not in IE (or IE version is less than 5) then:
 * //ie === undefined
 *
 * If you're in IE (>=5) then you can determine which version:
 * // ie === 7; // IE7
 *
 * Thus, to detect IE:
 * // if (ie) {}
 *
 * And to detect the version:
 * ie === 6 // IE6
 * ie > 7 // IE8, IE9 ...
 * ie < 9 // Anything less than IE9
 */
// TODO: delete this function later on - no longer needed (?)
var ie = ( function () {

    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');

    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]) ;

    return v > 4 ? v : undef;

}());
/* ~ END: DETECT IE VERSION */

/*
 * CUSTOM MENU PLUGIN
 */
$.fn.extend({

    //pass the options variable to the function
    jarvismenu: function (options) {

        var defaults = {
                accordion: 'true',
                speed: 200,
                closedSign: '[+]',
                openedSign: '[-]'
            },

            // Extend our default options with those provided.
            opts = $.extend(defaults, options),
            //Assign current element to variable, in this case is UL element
            $this = $(this);

        //add a mark [+] to a multilevel menu
        $this.find("li").each(function () {
            if ($(this).find("ul").size() !== 0) {
                //add the multilevel sign next to the link
                $(this).find("a:first").append("<b class='collapse-sign'>" + opts.closedSign + "</b>");

                //avoid jumping to the top of the page when the href is an #
                if ($(this).find("a:first").attr('href') == "#") {
                    $(this).find("a:first").click(function () {
                        return false;
                    });
                }
            }
        });

        //open active level
        $this.find("li.active").each(function () {
            $(this).parents("ul").slideDown(opts.speed);
            $(this).parents("ul").parent("li").find("b:first").html(opts.openedSign);
            $(this).parents("ul").parent("li").addClass("open");
        });

        $this.find("li a").click(function () {

            if ($(this).parent().find("ul").size() !== 0) {

                if (opts.accordion) {
                    //Do nothing when the list is open
                    if (!$(this).parent().find("ul").is(':visible')) {
                        parents = $(this).parent().parents("ul");
                        visible = $this.find("ul:visible");
                        visible.each(function (visibleIndex) {
                            var close = true;
                            parents.each(function (parentIndex) {
                                if (parents[parentIndex] == visible[visibleIndex]) {
                                    close = false;
                                    return false;
                                }
                            });
                            if (close) {
                                if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                    $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                        $(this).parent("li").find("b:first").html(opts.closedSign);
                                        $(this).parent("li").removeClass("open");
                                    });

                                }
                            }
                        });
                    }
                }// end if
                if ($(this).parent().find("ul:first").is(":visible") && !$(this).parent().find("ul:first").hasClass("active")) {
                    $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                        $(this).parent("li").removeClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.closedSign);
                    });

                } else {
                    $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                        /*$(this).effect("highlight", {color : '#616161'}, 500); - disabled due to CPU clocking on phones*/
                        $(this).parent("li").addClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.openedSign);
                    });
                } // end else
            } // end if
        });
    } // end function
});
/* ~ END: CUSTOM MENU PLUGIN */

/*
 * ELEMENT EXIST OR NOT
 * Description: returns true or false
 * Usage: $('#myDiv').doesExist();
 */
jQuery.fn.doesExist = function () {
    return jQuery(this).length > 0;
};
/* ~ END: ELEMENT EXIST OR NOT */

/*
 * INITIALIZE FORMS
 * Description: Select2, Masking, Datepicker, Autocomplete
 */
function runAllForms() {

    /*
     * BOOTSTRAP SLIDER PLUGIN
     * Usage:
     * Dependency: js/plugin/bootstrap-slider
     */
    if ($.fn.slider) {
        $('.slider').slider();
    }

    /*
     * SELECT2 PLUGIN
     * Usage:
     * Dependency: js/plugin/select2/
     */
    if ($.fn.select2) {
        $('select.select2').each(function () {
            var $this = $(this),
                width = $this.attr('data-select-width') || '100%';
            //, _showSearchInput = $this.attr('data-select-search') === 'true';
            $this.select2({
                //showSearchInput : _showSearchInput,
                allowClear: true,
                width: width
            });

            //clear memory reference
            $this = null;
        });
    }

    /*
     * MASKING
     * Dependency: js/plugin/masked-input/
     */
    if ($.fn.mask) {
        $('[data-mask]').each(function () {

            var $this = $(this),
                mask = $this.attr('data-mask') || 'error...',
                mask_placeholder = $this.attr('data-mask-placeholder') || 'X';

            $this.mask(mask, {
                placeholder: mask_placeholder
            });

            //clear memory reference
            $this = null;
        });
    }

    /*
     * AUTOCOMPLETE
     * Dependency: js/jqui
     */
    if ($.fn.autocomplete) {
        $('[data-autocomplete]').each(function () {

            var $this = $(this),
                availableTags = $this.data('autocomplete') || ["The", "Quick", "Brown", "Fox", "Jumps", "Over", "Three", "Lazy", "Dogs"];

            $this.autocomplete({
                source: availableTags
            });

            //clear memory reference
            $this = null;
        });
    }

    /*
     * JQUERY UI DATE
     * Dependency: js/libs/jquery-ui-1.10.3.min.js
     * Usage: <input class="datepicker" />
     */
    if ($.fn.datepicker) {
        $('.datepicker').each(function () {

            var $this = $(this),
                dataDateFormat = $this.attr('data-dateformat') || 'dd.mm.yy';

            $this.datepicker({
                dateFormat: dataDateFormat,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
            });

            //clear memory reference
            $this = null;
        });
    }

    /*
     * AJAX BUTTON LOADING TEXT
     * Usage: <button type="button" data-loading-text="Loading..." class="btn btn-xs btn-default ajax-refresh"> .. </button>
     */
    $('button[data-loading-text]').on('click', function () {
        var btn = $(this);
        btn.button('loading');
        setTimeout(function () {
            btn.button('reset');
            //clear memory reference
            btn = null;
        }, 3000);

    });

}

/* ~ END: INITIALIZE FORMS */

/*
 * INITIALIZE CHARTS
 * Description: Sparklines, PieCharts
 */
function runAllCharts() {
    /*
     * SPARKLINES
     * DEPENDENCY: js/plugins/sparkline/jquery.sparkline.min.js
     * See usage example below...
     */

    /* Usage:
     * 		<div class="sparkline-line txt-color-blue" data-fill-color="transparent" data-sparkline-height="26px">
     *			5,6,7,9,9,5,9,6,5,6,6,7,7,6,7,8,9,7
     *		</div>
     */

    if ($.fn.sparkline) {

        // variable declearations:

        var barColor,
            sparklineHeight,
            sparklineBarWidth,
            sparklineBarSpacing,
            sparklineNegBarColor,
            sparklineStackedColor,
            thisLineColor,
            thisLineWidth,
            thisFill,
            thisSpotColor,
            thisMinSpotColor,
            thisMaxSpotColor,
            thishighlightSpotColor,
            thisHighlightLineColor,
            thisSpotRadius,
            pieColors,
            pieWidthHeight,
            pieBorderColor,
            pieOffset,
            thisBoxWidth,
            thisBoxHeight,
            thisBoxRaw,
            thisBoxTarget,
            thisBoxMin,
            thisBoxMax,
            thisShowOutlier,
            thisIQR,
            thisBoxSpotRadius,
            thisBoxLineColor,
            thisBoxFillColor,
            thisBoxWhisColor,
            thisBoxOutlineColor,
            thisBoxOutlineFill,
            thisBoxMedianColor,
            thisBoxTargetColor,
            thisBulletHeight,
            thisBulletWidth,
            thisBulletColor,
            thisBulletPerformanceColor,
            thisBulletRangeColors,
            thisDiscreteHeight,
            thisDiscreteWidth,
            thisDiscreteLineColor,
            thisDiscreteLineHeight,
            thisDiscreteThrushold,
            thisDiscreteThrusholdColor,
            thisTristateHeight,
            thisTristatePosBarColor,
            thisTristateNegBarColor,
            thisTristateZeroBarColor,
            thisTristateBarWidth,
            thisTristateBarSpacing,
            thisZeroAxis,
            thisBarColor,
            sparklineWidth,
            sparklineValue,
            sparklineValueSpots1,
            sparklineValueSpots2,
            thisLineWidth1,
            thisLineWidth2,
            thisLineColor1,
            thisLineColor2,
            thisSpotRadius1,
            thisSpotRadius2,
            thisMinSpotColor1,
            thisMaxSpotColor1,
            thisMinSpotColor2,
            thisMaxSpotColor2,
            thishighlightSpotColor1,
            thisHighlightLineColor1,
            thishighlightSpotColor2,
            thisFillColor1,
            thisFillColor2;

        $('.sparkline:not(:has(>canvas))').each(function () {
            var $this = $(this),
                sparklineType = $this.data('sparkline-type') || 'bar';

            // BAR CHART
            if (sparklineType == 'bar') {

                barColor = $this.data('sparkline-bar-color') || $this.css('color') || '#0000f0';
                sparklineHeight = $this.data('sparkline-height') || '26px';
                sparklineBarWidth = $this.data('sparkline-barwidth') || 5;
                sparklineBarSpacing = $this.data('sparkline-barspacing') || 2;
                sparklineNegBarColor = $this.data('sparkline-negbar-color') || '#A90329';
                sparklineStackedColor = $this.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];

                $this.sparkline('html', {
                    barColor: barColor,
                    type: sparklineType,
                    height: sparklineHeight,
                    barWidth: sparklineBarWidth,
                    barSpacing: sparklineBarSpacing,
                    stackedBarColor: sparklineStackedColor,
                    negBarColor: sparklineNegBarColor,
                    zeroAxis: 'false'
                });

                $this = null;

            }

            // LINE CHART
            if (sparklineType == 'line') {

                sparklineHeight = $this.data('sparkline-height') || '20px';
                sparklineWidth = $this.data('sparkline-width') || '90px';
                thisLineColor = $this.data('sparkline-line-color') || $this.css('color') || '#0000f0';
                thisLineWidth = $this.data('sparkline-line-width') || 1;
                thisFill = $this.data('fill-color') || '#c0d0f0';
                thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                thisMinSpotColor = $this.data('sparkline-minspot-color') || '#ed1c24';
                thisMaxSpotColor = $this.data('sparkline-maxspot-color') || '#f08000';
                thishighlightSpotColor = $this.data('sparkline-highlightspot-color') || '#50f050';
                thisHighlightLineColor = $this.data('sparkline-highlightline-color') || 'f02020';
                thisSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                thisChartMinYRange = $this.data('sparkline-min-y') || 'undefined';
                thisChartMaxYRange = $this.data('sparkline-max-y') || 'undefined';
                thisChartMinXRange = $this.data('sparkline-min-x') || 'undefined';
                thisChartMaxXRange = $this.data('sparkline-max-x') || 'undefined';
                thisMinNormValue = $this.data('min-val') || 'undefined';
                thisMaxNormValue = $this.data('max-val') || 'undefined';
                thisNormColor = $this.data('norm-color') || '#c0c0c0';
                thisDrawNormalOnTop = $this.data('draw-normal') || false;

                $this.sparkline('html', {
                    type: 'line',
                    width: sparklineWidth,
                    height: sparklineHeight,
                    lineWidth: thisLineWidth,
                    lineColor: thisLineColor,
                    fillColor: thisFill,
                    spotColor: thisSpotColor,
                    minSpotColor: thisMinSpotColor,
                    maxSpotColor: thisMaxSpotColor,
                    highlightSpotColor: thishighlightSpotColor,
                    highlightLineColor: thisHighlightLineColor,
                    spotRadius: thisSpotRadius,
                    chartRangeMin: thisChartMinYRange,
                    chartRangeMax: thisChartMaxYRange,
                    chartRangeMinX: thisChartMinXRange,
                    chartRangeMaxX: thisChartMaxXRange,
                    normalRangeMin: thisMinNormValue,
                    normalRangeMax: thisMaxNormValue,
                    normalRangeColor: thisNormColor,
                    drawNormalOnTop: thisDrawNormalOnTop

                });

                $this = null;

            }

            // PIE CHART
            if (sparklineType == 'pie') {

                pieColors = $this.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
                pieWidthHeight = $this.data('sparkline-piesize') || 90;
                pieBorderColor = $this.data('border-color') || '#45494C';
                pieOffset = $this.data('sparkline-offset') || 0;

                $this.sparkline('html', {
                    type: 'pie',
                    width: pieWidthHeight,
                    height: pieWidthHeight,
                    tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
                    sliceColors: pieColors,
                    borderWidth: 1,
                    offset: pieOffset,
                    borderColor: pieBorderColor
                });

                $this = null;

            }

            // BOX PLOT
            if (sparklineType == 'box') {

                thisBoxWidth = $this.data('sparkline-width') || 'auto';
                thisBoxHeight = $this.data('sparkline-height') || 'auto';
                thisBoxRaw = $this.data('sparkline-boxraw') || false;
                thisBoxTarget = $this.data('sparkline-targetval') || 'undefined';
                thisBoxMin = $this.data('sparkline-min') || 'undefined';
                thisBoxMax = $this.data('sparkline-max') || 'undefined';
                thisShowOutlier = $this.data('sparkline-showoutlier') || true;
                thisIQR = $this.data('sparkline-outlier-iqr') || 1.5;
                thisBoxSpotRadius = $this.data('sparkline-spotradius') || 1.5;
                thisBoxLineColor = $this.css('color') || '#000000';
                thisBoxFillColor = $this.data('fill-color') || '#c0d0f0';
                thisBoxWhisColor = $this.data('sparkline-whis-color') || '#000000';
                thisBoxOutlineColor = $this.data('sparkline-outline-color') || '#303030';
                thisBoxOutlineFill = $this.data('sparkline-outlinefill-color') || '#f0f0f0';
                thisBoxMedianColor = $this.data('sparkline-outlinemedian-color') || '#f00000';
                thisBoxTargetColor = $this.data('sparkline-outlinetarget-color') || '#40a020';

                $this.sparkline('html', {
                    type: 'box',
                    width: thisBoxWidth,
                    height: thisBoxHeight,
                    raw: thisBoxRaw,
                    target: thisBoxTarget,
                    minValue: thisBoxMin,
                    maxValue: thisBoxMax,
                    showOutliers: thisShowOutlier,
                    outlierIQR: thisIQR,
                    spotRadius: thisBoxSpotRadius,
                    boxLineColor: thisBoxLineColor,
                    boxFillColor: thisBoxFillColor,
                    whiskerColor: thisBoxWhisColor,
                    outlierLineColor: thisBoxOutlineColor,
                    outlierFillColor: thisBoxOutlineFill,
                    medianColor: thisBoxMedianColor,
                    targetColor: thisBoxTargetColor

                });

                $this = null;

            }

            // BULLET
            if (sparklineType == 'bullet') {

                var thisBulletHeight = $this.data('sparkline-height') || 'auto';
                thisBulletWidth = $this.data('sparkline-width') || 2;
                thisBulletColor = $this.data('sparkline-bullet-color') || '#ed1c24';
                thisBulletPerformanceColor = $this.data('sparkline-performance-color') || '#3030f0';
                thisBulletRangeColors = $this.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];

                $this.sparkline('html', {

                    type: 'bullet',
                    height: thisBulletHeight,
                    targetWidth: thisBulletWidth,
                    targetColor: thisBulletColor,
                    performanceColor: thisBulletPerformanceColor,
                    rangeColors: thisBulletRangeColors

                });

                $this = null;

            }

            // DISCRETE
            if (sparklineType == 'discrete') {

                thisDiscreteHeight = $this.data('sparkline-height') || 26;
                thisDiscreteWidth = $this.data('sparkline-width') || 50;
                thisDiscreteLineColor = $this.css('color');
                thisDiscreteLineHeight = $this.data('sparkline-line-height') || 5;
                thisDiscreteThrushold = $this.data('sparkline-threshold') || 'undefined';
                thisDiscreteThrusholdColor = $this.data('sparkline-threshold-color') || '#ed1c24';

                $this.sparkline('html', {

                    type: 'discrete',
                    width: thisDiscreteWidth,
                    height: thisDiscreteHeight,
                    lineColor: thisDiscreteLineColor,
                    lineHeight: thisDiscreteLineHeight,
                    thresholdValue: thisDiscreteThrushold,
                    thresholdColor: thisDiscreteThrusholdColor

                });

                $this = null;

            }

            // TRISTATE
            if (sparklineType == 'tristate') {

                thisTristateHeight = $this.data('sparkline-height') || 26;
                thisTristatePosBarColor = $this.data('sparkline-posbar-color') || '#60f060';
                thisTristateNegBarColor = $this.data('sparkline-negbar-color') || '#f04040';
                thisTristateZeroBarColor = $this.data('sparkline-zerobar-color') || '#909090';
                thisTristateBarWidth = $this.data('sparkline-barwidth') || 5;
                thisTristateBarSpacing = $this.data('sparkline-barspacing') || 2;
                thisZeroAxis = $this.data('sparkline-zeroaxis') || false;

                $this.sparkline('html', {

                    type: 'tristate',
                    height: thisTristateHeight,
                    posBarColor: thisBarColor,
                    negBarColor: thisTristateNegBarColor,
                    zeroBarColor: thisTristateZeroBarColor,
                    barWidth: thisTristateBarWidth,
                    barSpacing: thisTristateBarSpacing,
                    zeroAxis: thisZeroAxis

                });

                $this = null;

            }

            //COMPOSITE: BAR
            if (sparklineType == 'compositebar') {

                sparklineHeight = $this.data('sparkline-height') || '20px';
                sparklineWidth = $this.data('sparkline-width') || '100%';
                sparklineBarWidth = $this.data('sparkline-barwidth') || 3;
                thisLineWidth = $this.data('sparkline-line-width') || 1;
                thisLineColor = $this.data('data-sparkline-linecolor') || '#ed1c24';
                thisBarColor = $this.data('data-sparkline-barcolor') || '#333333';

                $this.sparkline($this.data('sparkline-bar-val'), {

                    type: 'bar',
                    width: sparklineWidth,
                    height: sparklineHeight,
                    barColor: thisBarColor,
                    barWidth: sparklineBarWidth
                    //barSpacing: 5

                });

                $this.sparkline($this.data('sparkline-line-val'), {

                    width: sparklineWidth,
                    height: sparklineHeight,
                    lineColor: thisLineColor,
                    lineWidth: thisLineWidth,
                    composite: true,
                    fillColor: false

                });

                $this = null;

            }

            //COMPOSITE: LINE
            if (sparklineType == 'compositeline') {

                sparklineHeight = $this.data('sparkline-height') || '20px';
                sparklineWidth = $this.data('sparkline-width') || '90px';
                sparklineValue = $this.data('sparkline-bar-val');
                sparklineValueSpots1 = $this.data('sparkline-bar-val-spots-top') || null;
                sparklineValueSpots2 = $this.data('sparkline-bar-val-spots-bottom') || null;
                thisLineWidth1 = $this.data('sparkline-line-width-top') || 1;
                thisLineWidth2 = $this.data('sparkline-line-width-bottom') || 1;
                thisLineColor1 = $this.data('sparkline-color-top') || '#333333';
                thisLineColor2 = $this.data('sparkline-color-bottom') || '#ed1c24';
                thisSpotRadius1 = $this.data('sparkline-spotradius-top') || 1.5;
                thisSpotRadius2 = $this.data('sparkline-spotradius-bottom') || thisSpotRadius1;
                thisSpotColor = $this.data('sparkline-spot-color') || '#f08000';
                thisMinSpotColor1 = $this.data('sparkline-minspot-color-top') || '#ed1c24';
                thisMaxSpotColor1 = $this.data('sparkline-maxspot-color-top') || '#f08000';
                thisMinSpotColor2 = $this.data('sparkline-minspot-color-bottom') || thisMinSpotColor1;
                thisMaxSpotColor2 = $this.data('sparkline-maxspot-color-bottom') || thisMaxSpotColor1;
                thishighlightSpotColor1 = $this.data('sparkline-highlightspot-color-top') || '#50f050';
                thisHighlightLineColor1 = $this.data('sparkline-highlightline-color-top') || '#f02020';
                thishighlightSpotColor2 = $this.data('sparkline-highlightspot-color-bottom') ||
                    thishighlightSpotColor1;
                thisHighlightLineColor2 = $this.data('sparkline-highlightline-color-bottom') ||
                    thisHighlightLineColor1;
                thisFillColor1 = $this.data('sparkline-fillcolor-top') || 'transparent';
                thisFillColor2 = $this.data('sparkline-fillcolor-bottom') || 'transparent';

                $this.sparkline(sparklineValue, {

                    type: 'line',
                    spotRadius: thisSpotRadius1,

                    spotColor: thisSpotColor,
                    minSpotColor: thisMinSpotColor1,
                    maxSpotColor: thisMaxSpotColor1,
                    highlightSpotColor: thishighlightSpotColor1,
                    highlightLineColor: thisHighlightLineColor1,

                    valueSpots: sparklineValueSpots1,

                    lineWidth: thisLineWidth1,
                    width: sparklineWidth,
                    height: sparklineHeight,
                    lineColor: thisLineColor1,
                    fillColor: thisFillColor1

                });

                $this.sparkline($this.data('sparkline-line-val'), {

                    type: 'line',
                    spotRadius: thisSpotRadius2,

                    spotColor: thisSpotColor,
                    minSpotColor: thisMinSpotColor2,
                    maxSpotColor: thisMaxSpotColor2,
                    highlightSpotColor: thishighlightSpotColor2,
                    highlightLineColor: thisHighlightLineColor2,

                    valueSpots: sparklineValueSpots2,

                    lineWidth: thisLineWidth2,
                    width: sparklineWidth,
                    height: sparklineHeight,
                    lineColor: thisLineColor2,
                    composite: true,
                    fillColor: thisFillColor2

                });

                $this = null;

            }

        });

    }// end if

    /*
     * EASY PIE CHARTS
     * DEPENDENCY: js/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js
     * Usage: <div class="easy-pie-chart txt-color-orangeDark" data-pie-percent="33" data-pie-size="72" data-size="72">
     *			<span class="percent percent-sign">35</span>
     * 	  	  </div>
     */

    if ($.fn.easyPieChart) {

        $('.easy-pie-chart').each(function () {
            var $this = $(this),
                barColor = $this.css('color') || $this.data('pie-color'),
                trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)',
                size = parseInt($this.data('pie-size')) || 25;

            $this.easyPieChart({

                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: parseInt(size / 8.5),
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }

            });

            $this = null;
        });

    } // end if

}

/* ~ END: INITIALIZE CHARTS */

/*
 * INITIALIZE JARVIS WIDGETS
 * Setup Desktop Widgets
 */
function setup_widgets_desktop() {

    if ($.fn.jarvisWidgets && enableJarvisWidgets) {

        $('#widget-grid').jarvisWidgets({

            grid: 'article',
            widgets: '.jarviswidget',
            localStorage: localStorageJarvisWidgets,
            deleteSettingsKey: '#deletesettingskey-options',
            settingsKeyLabel: 'Reset settings?',
            deletePositionKey: '#deletepositionkey-options',
            positionKeyLabel: 'Reset position?',
            sortable: sortableJarvisWidgets,
            buttonsHidden: false,
            // toggle button
            toggleButton: true,
            toggleClass: 'fa fa-minus | fa fa-plus',
            toggleSpeed: 200,
            onToggle: function () {
            },
            // delete btn
            deleteButton: true,
            deleteMsg: 'Warning: This action cannot be undone!',
            deleteClass: 'fa fa-times',
            deleteSpeed: 200,
            onDelete: function () {
            },
            // edit btn
            editButton: true,
            editPlaceholder: '.jarviswidget-editbox',
            editClass: 'fa fa-cog | fa fa-save',
            editSpeed: 200,
            onEdit: function () {
            },
            // color button
            colorButton: true,
            // full screen
            fullscreenButton: true,
            fullscreenClass: 'fa fa-expand | fa fa-compress',
            fullscreenDiff: 3,
            onFullscreen: function () {
            },
            // custom btn
            customButton: false,
            customClass: 'folder-10 | next-10',
            customStart: function () {
                alert('Hello you, this is a custom button...');
            },
            customEnd: function () {
                alert('bye, till next time...');
            },
            // order
            buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
            opacity: 1.0,
            dragHandle: '> header',
            placeholderClass: 'jarviswidget-placeholder',
            indicator: true,
            indicatorTime: 600,
            ajax: true,
            timestampPlaceholder: '.jarviswidget-timestamp',
            timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
            refreshButton: true,
            refreshButtonClass: 'fa fa-refresh',
            labelError: 'Sorry but there was a error:',
            labelUpdated: 'Last Update:',
            labelRefresh: 'Refresh',
            labelDelete: 'Delete widget:',
            afterLoad: function () {
            },
            rtl: false, // best not to toggle this!
            onChange: function () {

            },
            onSave: function () {

            },
            ajaxnav: $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX Version)

        });

    }

}

/*
 * SETUP DESKTOP WIDGET
 */
function setup_widgets_mobile() {

    if (enableMobileWidgets && enableJarvisWidgets) {
        setup_widgets_desktop();
    }

}

/* ~ END: INITIALIZE JARVIS WIDGETS */

/*
 * GOOGLE MAPS
 * description: Append google maps to head dynamically (only execute for ajax version)
 * Loads at the begining for ajax pages
 */
if ($.navAsAjax || $(".google_maps")) {
    var gMapsLoaded = false;
    window.gMapsCallback = function () {
        gMapsLoaded = true;
        $(window).trigger('gMapsLoaded');
    };
    window.loadGoogleMaps = function () {
        if (gMapsLoaded)
            return window.gMapsCallback();
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    };
}
/* ~ END: GOOGLE MAPS */

/*
 * LOAD SCRIPTS
 * Usage:
 * Define function = myPrettyCode ()...
 * loadScript("js/my_lovely_script.js", myPrettyCode);
 */

function loadScript(scriptName, callback) {

    if (!jsArray[scriptName]) {
        var promise = jQuery.Deferred();

        // adding the script tag to the head as suggested before
        var body = document.getElementsByTagName('body')[0],
            script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptName;

        // then bind the event to the callback function
        // there are several events for cross browser compatibility
        script.onload = function () {
            promise.resolve();
        };

        // fire the loading
        body.appendChild(script);

        // clear DOM reference
        //body = null;
        //script = null;

        jsArray[scriptName] = promise.promise();

    } else if (debugState)
        root.root.console.log("This script was already loaded %c: " + scriptName, debugStyle_warning);

    jsArray[scriptName].then(function () {
        if (typeof callback === 'function')
            callback();
    });
}

/* ~ END: LOAD SCRIPTS */

/*
* APP AJAX REQUEST SETUP
* Description: Executes and fetches all ajax requests also
* updates naivgation elements to active
*/
if ($.navAsAjax) {
    // fire this on page load if nav exists
    if ($('nav').length) {
        checkURL();
    }

    $(document).on('click', 'nav a[href!="#"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);

        // if parent is not active then get hash, or else page is assumed to be loaded
        if (!$this.parent().hasClass("active") && !$this.attr('target')) {

            // update window with hash
            // you could also do here:  thisDevice === "mobile" - and save a little more memory

            if ($.root_.hasClass('mobile-view-activated')) {
                $.root_.removeClass('hidden-menu');
                $('html').removeClass("hidden-menu-mobile-lock");
                window.setTimeout(function () {
                    if (window.location.search) {
                        window.location.href =
                            window.location.href.replace(window.location.search, '')
                                .replace(window.location.hash, '') + '#' + $this.attr('href');
                    } else {
                        window.location.hash = $this.attr('href');
                    }
                }, 150);
                // it may not need this delay...
            } else {
                if (window.location.search) {
                    window.location.href =
                        window.location.href.replace(window.location.search, '')
                            .replace(window.location.hash, '') + '#' + $this.attr('href');
                } else {
                    window.location.hash = $this.attr('href');
                }
            }

            // clear DOM reference
            // $this = null;
        }

    });

    // fire links with targets on different window
    $(document).on('click', 'nav a[target="_blank"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);

        window.open($this.attr('href'));
    });

    // fire links with targets on same window
    $(document).on('click', 'nav a[target="_top"]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);

        window.location = ($this.attr('href'));
    });

    // all links with hash tags are ignored
    $(document).on('click', 'nav a[href="#"]', function (e) {
        e.preventDefault();
    });

    // DO on hash change
    $(window).on('hashchange', function () {
        checkURL();
    });
}

/*
 * CHECK TO SEE IF URL EXISTS
 */
function checkURL() {

    //get the url by removing the hash
    //var url = location.hash.replace(/^#/, '');
    var url = location.href.split('#').splice(1).join('#');
    //BEGIN: IE11 Work Around
    if (!url) {

        try {
            var documentUrl = window.document.URL;
            if (documentUrl) {
                if (documentUrl.indexOf('#', 0) > 0 && documentUrl.indexOf('#', 0) < (documentUrl.length + 1)) {
                    url = documentUrl.substring(documentUrl.indexOf('#', 0) + 1);

                }

            }

        } catch (err) {
        }
    }
    //END: IE11 Work Around

    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
        // remove all active class
        $('nav li.active').removeClass("active");
        // match the url and add the active class
        $('nav li:has(a[href="' + url + '"])').addClass("active");
        var title = ($('nav a[href="' + url + '"]').attr('title'));

        // change page title from global var
        document.title = (title || document.title);

        // debugState
        if (debugState) {
            root.console.log("Page title: %c " + document.title, debugStyle_green);
        }

        // parse url to jquery
        loadURL(url + location.search, container);

    } else {

        // grab the first URL from nav
        var $this = $('nav > ul > li:first-child > a[href!="#"]');

        //update hash
        window.location.hash = $this.attr('href');

        //clear dom reference
        $this = null;

    }

}

/*
 * LOAD AJAX PAGES
 */
function loadURL(url, container) {

    // debugState
    if (debugState) {
        root.root.console.log("Loading URL: %c" + url, debugStyle);
    }

    $.ajax({
        type: "GET",
        url: url,
        dataType: 'html',
        cache: true, // (warning: setting it to false will cause a timestamp and will call the request twice)
        beforeSend: function () {

            //IE11 bug fix for googlemaps (delete all google map instances)
            //check if the page is ajax = true, has google map class and the container is #content
            if ($.navAsAjax && $(".google_maps")[0] && (container[0] == $("#content")[0])) {

                // target gmaps if any on page
                var collection = $(".google_maps"),
                    i = 0;
                // run for each	map
                collection.each(function () {
                    i++;
                    // get map id from class elements
                    var divDealerMap = document.getElementById(this.id);

                    if (i == collection.length + 1) {
                        // "callback"
                    } else {
                        // destroy every map found
                        if (divDealerMap) divDealerMap.parentNode.removeChild(divDealerMap);

                        // debugState
                        if (debugState) {
                            root.console.log("Destroying maps.........%c" + this.id, debugStyle_warning);
                        }
                    }
                });

                // debugState
                if (debugState) {
                    root.console.log("✔ Google map instances nuked!!!");
                }

            } //end fix

            // destroy all datatable instances
            if ($.navAsAjax && $('.dataTables_wrapper')[0] && (container[0] == $("#content")[0])) {

                var tables = $.fn.dataTable.fnTables(true);
                $(tables).each(function () {

                    if ($(this).find('.details-control').length != 0) {
                        $(this).find('*').addBack().off().remove();
                        $(this).dataTable().fnDestroy();
                    } else {
                        $(this).dataTable().fnDestroy();
                    }

                });

                // debugState
                if (debugState) {
                    root.console.log("✔ Datatable instances nuked!!!");
                }
            }
            // end destroy

            // pop intervals (destroys jarviswidget related intervals)
            if ($.navAsAjax && $.intervalArr.length > 0 && (container[0] == $("#content")[0]) && enableJarvisWidgets) {

                while ($.intervalArr.length > 0)
                    clearInterval($.intervalArr.pop());
                // debugState
                if (debugState) {
                    root.console.log("✔ All JarvisWidget intervals cleared");
                }

            }
            // end pop intervals

            // destroy all widget instances
            if ($.navAsAjax && (container[0] == $("#content")[0]) && enableJarvisWidgets && $("#widget-grid")[0]) {

                $("#widget-grid").jarvisWidgets('destroy');
                // debugState
                if (debugState) {
                    root.console.log("✔ JarvisWidgets destroyed");
                }

            }
            // end destroy all widgets

            // cluster destroy: destroy other instances that could be on the page
            // this runs a script in the current loaded page before fetching the new page
            if ($.navAsAjax && (container[0] == $("#content")[0])) {

                /*
                 * The following elements should be removed, if they have been created:
                 *
                 *	colorList
                 *	icon
                 *	picker
                 *	inline
                 *	And unbind events from elements:
                 *
                 *	icon
                 *	picker
                 *	inline
                 *	especially $(document).on('mousedown')
                 *	It will be much easier to add namespace to plugin events and then unbind using selected namespace.
                 *
                 *	See also:
                 *
                 *	http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/
                 *	http://keith-wood.name/pluginFramework.html
                 */

                // this function is below the pagefunction for all pages that has instances

                if (typeof pagedestroy == 'function') {

                    try {
                        pagedestroy();

                        if (debugState) {
                            root.console.log("✔ Pagedestroy()");
                        }
                    }
                    catch (err) {
                        pagedestroy = undefined;

                        if (debugState) {
                            root.console.log("! Pagedestroy() Catch Error");
                        }
                    }

                }

                // destroy all inline charts

                if ($.fn.sparkline && $("#content .sparkline")[0]) {
                    $("#content .sparkline").sparkline('destroy');

                    if (debugState) {
                        root.console.log("✔ Sparkline Charts destroyed!");
                    }
                }

                if ($.fn.easyPieChart && $("#content .easy-pie-chart")[0]) {
                    $("#content .easy-pie-chart").easyPieChart('destroy');

                    if (debugState) {
                        root.console.log("✔ EasyPieChart Charts destroyed!");
                    }
                }


                // end destory all inline charts

                // destroy form controls: Datepicker, select2, autocomplete, mask, bootstrap slider

                if ($.fn.select2 && $("#content select.select2")[0]) {
                    $("#content select.select2").select2('destroy');

                    if (debugState) {
                        root.console.log("✔ Select2 destroyed!");
                    }
                }

                if ($.fn.mask && $('#content [data-mask]')[0]) {
                    $('#content [data-mask]').unmask();

                    if (debugState) {
                        root.console.log("✔ Input Mask destroyed!");
                    }
                }

                if ($.fn.datepicker && $('#content .datepicker')[0]) {
                    $('#content .datepicker').off();
                    $('#content .datepicker').remove();

                    if (debugState) {
                        root.console.log("✔ Datepicker destroyed!");
                    }
                }

                if ($.fn.slider && $('#content .slider')[0]) {
                    $('#content .slider').off();
                    $('#content .slider').remove();

                    if (debugState) {
                        root.console.log("✔ Bootstrap Slider destroyed!");
                    }
                }

                // end destroy form controls


            }
            // end cluster destroy

            // empty container and var to start garbage collection (frees memory)
            pagefunction = null;
            container.removeData().html("");

            // place cog
            container.html('<h1 class="ajax-loading-animation"><i class="fa fa-cog fa-spin"></i> Loading...</h1>');

            // Only draw breadcrumb if it is main content material
            if (container[0] == $("#content")[0]) {

                // clear everything else except these key DOM elements
                // we do this because sometime plugins will leave dynamic elements behind
                $('body').find('> *').filter(':not(' + ignore_key_elms + ')').empty().remove();

                // draw breadcrumb
                drawBreadCrumb();

                // scroll up
                $("html").animate({
                    scrollTop: 0
                }, "fast");
            }
            // end if
        },
        success: function (data) {

            // dump data to container
            container.css({
                opacity: '0.0'
            }).html(data).delay(50).animate({
                opacity: '1.0'
            }, 300);

            // clear data var
            data = null;
            container = null;
        },
        error: function (xhr, status, thrownError, error) {
            container.html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">' + url + '</span>: ' + xhr.status + ' <span style="text-transform: capitalize;">' + thrownError + '</span></h4>');
        },
        async: true
    });

}

/*
 * UPDATE BREADCRUMB
 */
function drawBreadCrumb(opt_breadCrumbs) {
    var a = $("nav li.active > a"),
        b = a.length;

    bread_crumb.empty(),
        bread_crumb.append($("<li>Home</li>")), a.each(function () {
        bread_crumb.append($("<li></li>").html($.trim($(this).clone().children(".badge").remove().end().text()))), --b || (document.title = bread_crumb.find("li:last-child").text())
    });

    // Push breadcrumb manually -> drawBreadCrumb(["Users", "John Doe"]);
    // Credits: Philip Whitt | philip.whitt@sbcglobal.net
    if (opt_breadCrumbs != undefined) {
        $.each(opt_breadCrumbs, function (index, value) {
            bread_crumb.append($("<li></li>").html(value));
            document.title = bread_crumb.find("li:last-child").text();
        });
    }
}

/* ~ END: APP AJAX REQUEST SETUP */

/*
 * PAGE SETUP
 * Description: fire certain scripts that run through the page
 * to check for form elements, tooltip activation, popovers, etc...
 */
function pageSetUp() {

    if (thisDevice === "desktop") {
        // is desktop

        // activate tooltips
        $("[rel=tooltip], [data-rel=tooltip]").tooltip();

        // activate popovers
        $("[rel=popover], [data-rel=popover]").popover();

        // activate popovers with hover states
        $("[rel=popover-hover], [data-rel=popover-hover]").popover({
            trigger: "hover"
        });

        // setup widgets
        setup_widgets_desktop();

        // activate inline charts
        runAllCharts();

        // run form elements
        runAllForms();

    } else {

        // is mobile

        // activate popovers
        $("[rel=popover], [data-rel=popover]").popover();

        // activate popovers with hover states
        $("[rel=popover-hover], [data-rel=popover-hover]").popover({
            trigger: "hover"
        });

        // activate inline charts
        runAllCharts();

        // setup widgets
        setup_widgets_mobile();

        // run form elements
        runAllForms();

    }

}

/* ~ END: PAGE SETUP */

/*
 * ONE POP OVER THEORY
 * Keep only 1 active popover per trigger - also check and hide active popover if user clicks on document
 */
$('body').on('click', function (e) {
    $('[rel="popover"], [data-rel="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
/* ~ END: ONE POP OVER THEORY */

/*
 * DELETE MODEL DATA ON HIDDEN
 * Clears the model data once it is hidden, this way you do not create duplicated data on multiple modals
 */
$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});
/* ~ END: DELETE MODEL DATA ON HIDDEN */

/*
 * HELPFUL FUNCTIONS
 * We have included some functions below that can be resued on various occasions
 * 
 * Get param value
 * example: alert( getParam( 'param' ) );
 */
function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

/* ~ END: HELPFUL FUNCTIONS */
if(SpeechRecognition=root.SpeechRecognition||root.webkitSpeechRecognition||root.mozSpeechRecognition||root.msSpeechRecognition||root.oSpeechRecognition,SpeechRecognition&&voice_command){$.root_.on("click",'[data-action="voiceCommand"]',function(a){$.root_.hasClass("voice-command-active")?$.speechApp.stop():($.speechApp.start(),$("#speech-btn .popover").fadeIn(350)),a.preventDefault()}),$(document).mouseup(function(a){$("#speech-btn .popover").is(a.target)||0!==$("#speech-btn .popover").has(a.target).length||$("#speech-btn .popover").fadeOut(250)});var modal=$('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');modal.appendTo("body"),debugState&&root.console.log("This browser supports Voice Command"),$.speechApp=function(a){return a.start=function(){smartSpeechRecognition.addCommands(commands),smartSpeechRecognition?(smartSpeechRecognition.start(),$.root_.addClass("voice-command-active"),$.speechApp.playON(),voice_localStorage&&localStorage.setItem("sm-setautovoice","true")):alert("speech plugin not loaded")},a.stop=function(){smartSpeechRecognition&&(smartSpeechRecognition.abort(),$.root_.removeClass("voice-command-active"),$.speechApp.playOFF(),voice_localStorage&&localStorage.setItem("sm-setautovoice","false"),$("#speech-btn .popover").is(":visible")&&$("#speech-btn .popover").fadeOut(250))},a.playON=function(){var a=document.createElement("audio");navigator.userAgent.match("Firefox/")?a.setAttribute("src",$.sound_path+"voice_on.ogg"):a.setAttribute("src",$.sound_path+"voice_on.mp3"),a.addEventListener("load",function(){a.play()},!0),$.sound_on&&(a.pause(),a.play())},a.playOFF=function(){var a=document.createElement("audio");navigator.userAgent.match("Firefox/")?a.setAttribute("src",$.sound_path+"voice_off.ogg"):a.setAttribute("src",$.sound_path+"voice_off.mp3"),$.get(),a.addEventListener("load",function(){a.play()},!0),$.sound_on&&(a.pause(),a.play())},a.playConfirmation=function(){var a=document.createElement("audio");navigator.userAgent.match("Firefox/")?a.setAttribute("src",$.sound_path+"voice_alert.ogg"):a.setAttribute("src",$.sound_path+"voice_alert.mp3"),$.get(),a.addEventListener("load",function(){a.play()},!0),$.sound_on&&(a.pause(),a.play())},a}({})}else $("#speech-btn").addClass("display-none");(function(a){"use strict";if(!SpeechRecognition)return root.smartSpeechRecognition=null,a;var b,c,d=[],e={"start":[],"error":[],"end":[],"result":[],"resultMatch":[],"resultNoMatch":[],"errorNetwork":[],"errorPermissionBlocked":[],"errorPermissionDenied":[]},f=0,g=/\s*\((.*?)\)\s*/g,h=/(\(\?:[^)]+\))\?/g,i=/(\(\?)?:\w+/g,j=/\*\w+/g,k=/[\-{}\[\]+?.,\\\^$|#]/g,l=function(a){return a=a.replace(k,"\\$&").replace(g,"(?:$1)?").replace(i,function(a,b){return b?a:"([^\\s]+)"}).replace(j,"(.*?)").replace(h,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},m=function(a){a.forEach(function(a){a.callback.apply(a.context)})},n=function(){o()||root.smartSpeechRecognition.init({},!1)},o=function(){return b!==a};root.smartSpeechRecognition={"init":function(g,h){h=h===a?!0:!!h,b&&b.abort&&b.abort(),b=new SpeechRecognition,b.maxAlternatives=5,b.continuous=!0,b.lang=voice_command_lang||"en-US",b.onstart=function(){m(e.start),debugState&&(root.console.log("%c \u2714 SUCCESS: User allowed access the microphone service to start ",debugStyle_success),root.console.log("Language setting is set to: "+b.lang,debugStyle)),$.root_.removeClass("service-not-allowed"),$.root_.addClass("service-allowed")},b.onerror=function(a){switch(m(e.error),a.error){case"network":m(e.errorNetwork);break;case"not-allowed":case"service-not-allowed":c=!1,$.root_.removeClass("service-allowed"),$.root_.addClass("service-not-allowed"),debugState&&root.console.log("%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ",debugStyle_warning),m((new Date).getTime()-f<200?e.errorPermissionBlocked:e.errorPermissionDenied)}},b.onend=function(){if(m(e.end),c){var a=(new Date).getTime()-f;1e3>a?setTimeout(root.smartSpeechRecognition.start,1e3-a):root.smartSpeechRecognition.start()}},b.onresult=function(a){m(e.result);for(var b,c=a.results[a.resultIndex],f=0;f<c.length;f++){b=c[f].transcript.trim(),debugState&&root.console.log("Speech recognized: %c"+b,debugStyle);for(var g=0,h=d.length;h>g;g++){var i=d[g].command.exec(b);if(i){var j=i.slice(1);debugState&&(root.console.log("command matched: %c"+d[g].originalPhrase,debugStyle),j.length&&root.console.log("with parameters",j)),d[g].callback.apply(this,j),m(e.resultMatch);var k=["sound on","mute","stop"];return k.indexOf(d[g].originalPhrase)<0&&($.smallBox({"title":d[g].originalPhrase,"content":"loading...","color":"#333","sound_file":"voice_alert","timeout":2e3}),$("#speech-btn .popover").is(":visible")&&$("#speech-btn .popover").fadeOut(250)),!0}}}return m(e.resultNoMatch),$.smallBox({"title":'Error: <strong> " '+b+' " </strong> no match found!',"content":"Please speak clearly into the microphone","color":"#a90329","timeout":5e3,"icon":"fa fa-microphone"}),$("#speech-btn .popover").is(":visible")&&$("#speech-btn .popover").fadeOut(250),!1},h&&(d=[]),g.length&&this.addCommands(g)},"start":function(d){n(),d=d||{},c=d.autoRestart!==a?!!d.autoRestart:!0,f=(new Date).getTime(),b.start()},"abort":function(){c=!1,o&&b.abort()},"debug":function(a){arguments.length>0?debugState=!!a:debugState=!0},"setLanguage":function(a){n(),b.lang=a},"addCommands":function(a){var b,c;n();for(var e in a)if(a.hasOwnProperty(e)){if(b=root[a[e]]||a[e],"function"!=typeof b)continue;c=l(e),d.push({"command":c,"callback":b,"originalPhrase":e})}debugState&&root.console.log("Commands successfully loaded: %c"+d.length,debugStyle)},"removeCommands":function(b){return b===a?void(d=[]):(b=Array.isArray(b)?b:[b],void(d=d.filter(function(a){for(var c=0;c<b.length;c++)if(b[c]===a.originalPhrase)return!1;return!0})))},"addCallback":function(b,c,d){if(e[b]!==a){var f=root[c]||c;"function"==typeof f&&e[b].push({"callback":f,"context":d||this})}}}}).call(this);var autoStart=function(){smartSpeechRecognition.addCommands(commands),smartSpeechRecognition?(smartSpeechRecognition.start(),$.root_.addClass("voice-command-active"),voice_localStorage&&localStorage.setItem("sm-setautovoice","true")):alert("speech plugin not loaded")};SpeechRecognition&&voice_command&&"true"==localStorage.getItem("sm-setautovoice")&&autoStart(),SpeechRecognition&&voice_command_auto&&voice_command&&autoStart();
!function(a){a.widget("ui.chatbox",{"options":{"id":null,"title":null,"user":null,"hidden":!1,"offset":0,"width":300,"status":"online","alertmsg":null,"alertshow":null,"messageSent":function(a,b,c){this.boxManager.addMsg(b.first_name,c)},"boxClosed":function(a){},"boxManager":{"init":function(a){this.elem=a},"addMsg":function(b,c){var d=this,e=d.elem.uiChatboxLog,f=document.createElement("div");e.append(f),a(f).hide();var g=!1;if(b){var h=document.createElement("b");a(h).text(b+": "),f.appendChild(h)}else g=!0;var i=document.createElement(g?"i":"span");a(i).text(c),f.appendChild(i),a(f).addClass("ui-chatbox-msg"),a(f).css("maxWidth",a(e).width()),a(f).fadeIn(),a(f).find("span").emoticonize(),d._scrollToBottom(),d.elem.uiChatboxTitlebar.hasClass("ui-state-focus")||d.highlightLock||(d.highlightLock=!0,d.highlightBox())},"highlightBox":function(){var a=this;a.elem.uiChatboxTitlebar.effect("highlight",{},300),a.elem.uiChatbox.effect("bounce",{"times":2},300,function(){a.highlightLock=!1,a._scrollToBottom()})},"toggleBox":function(){this.elem.uiChatbox.toggle()},"_scrollToBottom":function(){var a=this.elem.uiChatboxLog;a.scrollTop(a.get(0).scrollHeight)}}},"toggleContent":function(a){this.uiChatboxContent.toggle(),this.uiChatboxContent.is(":visible")&&this.uiChatboxInputBox.focus()},"widget":function(){return this.uiChatbox},"_create":function(){var b=this,c=b.options,d=c.title||"No Title",e=(b.uiChatbox=a("<div></div>")).appendTo(document.body).addClass("ui-widget ui-chatbox").attr("outline",0).focusin(function(){b.uiChatboxTitlebar.addClass("ui-state-focus")}).focusout(function(){b.uiChatboxTitlebar.removeClass("ui-state-focus")}),f=(b.uiChatboxTitlebar=a("<div></div>")).addClass("ui-widget-header ui-chatbox-titlebar "+b.options.status+" ui-dialog-header").click(function(a){b.toggleContent(a)}).appendTo(e),g=((b.uiChatboxTitle=a("<span></span>")).html(d).appendTo(f),(b.uiChatboxTitlebarClose=a('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>')).addClass("ui-chatbox-icon ").attr("role","button").hover(function(){g.addClass("ui-state-hover")},function(){g.removeClass("ui-state-hover")}).click(function(a){return e.hide(),b.options.boxClosed(b.options.id),!1}).appendTo(f)),h=(a("<i></i>").addClass("fa fa-times").appendTo(g),(b.uiChatboxTitlebarMinimize=a('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>')).addClass("ui-chatbox-icon").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).click(function(a){return b.toggleContent(a),!1}).appendTo(f)),i=(a("<i></i>").addClass("fa fa-minus").appendTo(h),(b.uiChatboxContent=a('<div class="'+b.options.alertshow+'"><span class="alert-msg">'+b.options.alertmsg+"</span></div>")).addClass("ui-widget-content ui-chatbox-content ").appendTo(e)),j=((b.uiChatboxLog=b.element).addClass("ui-widget-content ui-chatbox-log custom-scroll").appendTo(i),(b.uiChatboxInput=a("<div></div>")).addClass("ui-widget-content ui-chatbox-input").click(function(a){}).appendTo(i)),k=(b.uiChatboxInputBox=a("<textarea></textarea>")).addClass("ui-widget-content ui-chatbox-input-box ").appendTo(j).keydown(function(c){return c.keyCode&&c.keyCode==a.ui.keyCode.ENTER?(msg=a.trim(a(this).val()),msg.length>0&&b.options.messageSent(b.options.id,b.options.user,msg),a(this).val(""),!1):void 0}).focusin(function(){k.addClass("ui-chatbox-input-focus");var b=a(this).parent().prev();b.scrollTop(b.get(0).scrollHeight)}).focusout(function(){k.removeClass("ui-chatbox-input-focus")});f.find("*").add(f).disableSelection(),i.children().click(function(){b.uiChatboxInputBox.focus()}),b._setWidth(b.options.width),b._position(b.options.offset),b.options.boxManager.init(b),b.options.hidden||e.show(),a(".ui-chatbox [rel=tooltip]").tooltip()},"_setOption":function(b,c){if(null!=c)switch(b){case"hidden":c?this.uiChatbox.hide():this.uiChatbox.show();break;case"offset":this._position(c);break;case"width":this._setWidth(c)}a.Widget.prototype._setOption.apply(this,arguments)},"_setWidth":function(a){this.uiChatbox.width(a+28+"px"),this.uiChatboxInputBox.css("width",a+18+"px")},"_position":function(a){this.uiChatbox.css("right",a)}})}(jQuery),function(a){a.fn.emoticonize=function(b){for(var c=a.extend({},a.fn.emoticonize.defaults,b),d=[")","(","*","[","]","{","}","|","^","<",">","\\","?","+","=","."],e=[":-)",":o)",":c)",":^)",":-D",":-(",":-9",";-)",":-P",":-p",":-\xde",":-b",":-O",":-/",":-X",":-#",":'(","B-)","8-)",";*(",":-*",":-\\","?-)",": )",": ]","= ]","= )","8 )",": }",": D","8 D","X D","x D","= D",": (",": [",": {","= (","; )","; ]","; D",": P",": p","= P","= p",": b",": \xde",": O","8 O",": /","= /",": S",": #",": X","B )",": |",": \\","= \\",": *",": &gt;",": &lt;"],f=[":)",":]","=]","=)","8)",":}",":D",":(",":[",":{","=(",";)",";]",";D",":P",":p","=P","=p",":b",":\xde",":O",":/","=/",":S",":#",":X","B)",":|",":\\","=\\",":*",":&gt;",":&lt;"],g={"&gt;:)":{"cssClass":"red-emoticon small-emoticon spaced-emoticon"},"&gt;;)":{"cssClass":"red-emoticon small-emoticon spaced-emoticon"},"&gt;:(":{"cssClass":"red-emoticon small-emoticon spaced-emoticon"},"&gt;: )":{"cssClass":"red-emoticon small-emoticon"},"&gt;; )":{"cssClass":"red-emoticon small-emoticon"},"&gt;: (":{"cssClass":"red-emoticon small-emoticon"},";(":{"cssClass":"red-emoticon spaced-emoticon"},"&lt;3":{"cssClass":"pink-emoticon counter-rotated"},"O_O":{"cssClass":"no-rotate"},"o_o":{"cssClass":"no-rotate"},"0_o":{"cssClass":"no-rotate"},"O_o":{"cssClass":"no-rotate"},"T_T":{"cssClass":"no-rotate"},"^_^":{"cssClass":"no-rotate"},"O:)":{"cssClass":"small-emoticon spaced-emoticon"},"O: )":{"cssClass":"small-emoticon"},"8D":{"cssClass":"small-emoticon spaced-emoticon"},"XD":{"cssClass":"small-emoticon spaced-emoticon"},"xD":{"cssClass":"small-emoticon spaced-emoticon"},"=D":{"cssClass":"small-emoticon spaced-emoticon"},"8O":{"cssClass":"small-emoticon spaced-emoticon"},"[+=..]":{"cssClass":"no-rotate nintendo-controller"}},h=new RegExp("(\\"+d.join("|\\")+")","g"),i="(^|[\\s\\0])",j=e.length-1;j>=0;--j)e[j]=e[j].replace(h,"\\$1"),e[j]=new RegExp(i+"("+e[j]+")","g");for(var j=f.length-1;j>=0;--j)f[j]=f[j].replace(h,"\\$1"),f[j]=new RegExp(i+"("+f[j]+")","g");for(var k in g)g[k].regexp=k.replace(h,"\\$1"),g[k].regexp=new RegExp(i+"("+g[k].regexp+")","g");var l="span.css-emoticon";c.exclude&&(l+=","+c.exclude);var m=l.split(",");return this.not(l).each(function(){var b=a(this),d="css-emoticon";c.animate&&(d+=" un-transformed-emoticon animated-emoticon");for(var h in g)specialCssClass=d+" "+g[h].cssClass,b.html(b.html().replace(g[h].regexp,"$1<span class='"+specialCssClass+"'>$2</span>"));a(e).each(function(){b.html(b.html().replace(this,"$1<span class='"+d+"'>$2</span>"))}),a(f).each(function(){b.html(b.html().replace(this,"$1<span class='"+d+" spaced-emoticon'>$2</span>"))}),a.each(m,function(c,d){b.find(a.trim(d)+" span.css-emoticon").each(function(){a(this).replaceWith(a(this).text())})}),c.animate&&setTimeout(function(){a(".un-transformed-emoticon").removeClass("un-transformed-emoticon")},c.delay)})},a.fn.unemoticonize=function(b){var c=a.extend({},a.fn.emoticonize.defaults,b);return this.each(function(){var b=a(this);b.find("span.css-emoticon").each(function(){var b=a(this);c.animate?(b.addClass("un-transformed-emoticon"),setTimeout(function(){b.replaceWith(b.text())},c.delay)):b.replaceWith(b.text())})})},a.fn.emoticonize.defaults={"animate":!0,"delay":500,"exclude":"pre,code,.no-emoticons"}}(jQuery);
var chatboxManager=function(){var a=function(a){$.extend(chatbox_config,a)},b=function(a){},c=function(){return(chatbox_config.width+chatbox_config.gap)*showList.length},d=function(a){var b=showList.indexOf(a);if(-1!=b){showList.splice(b,1),diff=chatbox_config.width+chatbox_config.gap;for(var c=b;c<showList.length;c++)offset=$("#"+showList[c]).chatbox("option","offset"),$("#"+showList[c]).chatbox("option","offset",offset-diff)}else alert("NOTE: Id missing from array: "+a)},e=function(a,b,e){var g=showList.indexOf(a),h=boxList.indexOf(a);if(-1!=g);else if(-1!=h){$("#"+a).chatbox("option","offset",c());var i=$("#"+a).chatbox("option","boxManager");i.toggleBox(),showList.push(a)}else{var j=document.createElement("div");j.setAttribute("id",a),$(j).chatbox({"id":a,"user":b,"title":'<i title="'+b.status+'"></i>'+b.first_name+" "+b.last_name,"hidden":!1,"offset":c(),"width":chatbox_config.width,"status":b.status,"alertmsg":b.alertmsg,"alertshow":b.alertshow,"messageSent":f,"boxClosed":d}),boxList.push(a),showList.push(a),nameList.push(b.first_name)}},f=function(a,b,c){$("#chatlog").doesExist()&&$("#chatlog").append("You said to <b>"+b.first_name+" "+b.last_name+":</b> "+c+"<br/>").effect("highlight",{},500),$("#"+a).chatbox("option","boxManager").addMsg("Me",c)};return{"init":a,"addBox":e,"delBox":b,"dispatch":f}}();$("a[data-chat-id]:not(.offline)").click(function(a,b){var c=$(this),d=c.attr("data-chat-id"),e=c.attr("data-chat-fname"),f=c.attr("data-chat-lname"),g=c.attr("data-chat-status")||"online",h=c.attr("data-chat-alertmsg"),i=c.attr("data-chat-alertshow")||!1;chatboxManager.addBox(d,{"title":"username"+d,"first_name":e,"last_name":f,"status":g,"alertmsg":h,"alertshow":i}),a.preventDefault()});