	jQuery(document).ready(function(){
		chrome.storage.local.get(["columns"], function (value) {
		jQuery("#textbox_1").val(value.columns);
		});
	});
    jQuery('#save_button').click(function(){
		chrome.storage.local.set({'columns': jQuery("#textbox_1").val()}, function () {});
        document.write("Option saved.<br>(Please refresh the page)");
    });
    
let anchors = document.body.querySelectorAll('a');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].onclick = () => {
        openAnchor(anchors[i]);
    };
}
function openAnchor(anchor) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabID = tabs[0].id;
        if (tabID === undefined) {
            return;
        }
        chrome.tabs.executeScript(tabID, {
            code: `window.location.href="${anchor.href}";`
        }, console.log);
    });
}