﻿var $bueue={c:function(b){var a=this;a.qs[a.ids]=b;if(a.debug){console.log("[Bueue]Added new , id:"+a.ids)}a.ids=Number(a.ids)+1;return a.ids-1},e:function(a,c){var b=this;if(typeof b.qs[a]=="undefined"){if(a<=b.ids){b.qs[a]=c;if(b.debug){console.log("[Bueue]Inserted new , id:"+a)}}else{b.c(c)}}else{if(b.debug){console.log("[Bueue]Place Exists.")}}},d:function(a){if(typeof this.qs[a]!=="undefined"){delete this.qs[a];if(this.debug){console.log("[Bueue]Deleted id:"+a)}}},jump:function(a){var b=this;if(typeof b.qs[a]!=="undefined"){b.onque=a;if(b.debug){console.log("[Bueue]Jump to id:"+a)}}},start:function(){this.next();if(this.debug){console.log("[Bueue]Started.")}},re:function(a){if(a){this.qs={};this.ids=0}this.onque=0;this.state=1;if(this.debug){console.log("[Bueue]Reseted.")}},next:function(){var a=this;while(a.onque<=a.ids&&typeof a.qs[a.onque]=="undefined"){a.onque=a.onque+1}setTimeout(function(){if(a.onque<=a.ids){a.qs[a.onque]();a.state=2;a.onque=a.onque+1;if(a.onque==a.ids||typeof a.qs[a.onque]=="undefined"){a.state=3;if(a.debug){console.log("[Bueue]Finished.")}}}else{if(a.debug){console.log("[Bueue]Already finished.")}}},10)},de:function(a){if(a){this.debug=true}else{this.debug=false}},state:1,ids:0,onque:0,qs:{},debug:false};/*Bueue-min SomeBottle*/