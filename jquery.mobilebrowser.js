
(function ( $ ) {
 
    $.isMobile = function() {
    	// thx for http://stackoverflow.com/a/3540295/2132069
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		return false;
    };
 
}( jQuery ));

