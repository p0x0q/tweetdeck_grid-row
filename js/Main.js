
var columns = 0;
var if_config = false;
chrome.storage.local.get(["columns"], function (value) {
columns = value.columns;
if_config = true;
});

function p0x0q_runnerloop(){
	if(if_config == false){
	setTimeout(function(){
	p0x0q_runnerloop();
	},1000);
	}else{
		if(!columns)return;
		var column_width_percent = 100 / columns;
		console.log("RUN:"+column_width_percent);
		jQuery("html.dark .is-wide-columns .column").css({'cssText': "width: calc("+column_width_percent+"% - 6px) !important"});
	}
}



$(document).ready(function(){
	p0x0q_runnerloop();
});