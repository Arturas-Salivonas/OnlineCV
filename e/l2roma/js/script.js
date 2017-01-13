document.documentElement.style.overflowX = 'hidden';

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

jQuery.noConflict();

jQuery('#slideshow_image').cycle({
	fx: 'zoom',
	timeout: 4000,
	speed: 500,
	before: onBefore
});

function onBefore() { 
	var big_title = jQuery(this).attr('big_title');
	var small_title = jQuery(this).attr('small_title');
	
	jQuery('#slideshow_text').html(this.alt); 
	jQuery('#slideshow_big_title').html(big_title); 
	jQuery('#slideshow_small_title').html(small_title); 
} 

jQuery(document).ready(function() {	
	jQuery('#loader').hide();
});

function changeShowingTop(change_to, change_to_title) {
	jQuery(document).ready(function() {
		jQuery('.change_showing_tops a').removeAttr('style').removeClass('active');
		jQuery('.' + change_to).attr('style', 'color: #f2fb00;')
    jQuery('#loader').show();
		
		jQuery('#top_content').load(global_config['home_url'] + '/index.php?nfpload=true&change_to=' + change_to + '&ajax=true', null, function() {
			jQuery(this).hide();
			jQuery('.top_panel_title').html(change_to_title);
			jQuery('#top_content').delay(500).fadeIn('fast', function () {
				jQuery('#loader').hide();
			});
		});
	});
}

function createCookie(name, value, days, refresh)  {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	if (refresh)
		location.reload(true);
}

function deleteCookie(name, info, refresh) {
  document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';

  if (refresh)
		location.reload(true);
}