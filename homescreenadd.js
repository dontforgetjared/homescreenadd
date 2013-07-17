/*
 * Home Screen Add jQuery plugin
 * authored by Jared Cole
 *
 * For use on mobile devices.
 * 
 * This super rad plugin checks to see if a local storage flag has been set
 * and shows the bound element if it hasn't. It also has a close method to hide said element.
 * 
 * Required: jQuery
 *
 * usage:
 *			//initialize plugin 
 *      $('#test').homescreenadd();
 *			 
 *			//to override instructions element, pass these setting to the init
 *			$('#test').homescreenadd({instructionsElm: '.new_instrictions_elem'});
 *			
 *			//to add a close event to the popup
 *			$('#close').click(function() {
 *				$('#test').homescreenadd('close');
 *			});
 *        
 */
(function($) {

	var methods = {
		
		// initialize the plugin
		init: function(options) {
		
			var settings = $.extend( {
		      'instructionsElm' : '.instructions'
		    }, options);
		
			var instructions = '',
				nav = window.navigator,
				isIDevice = 'platform' in nav && (/iphone|ipod|ipad/gi).test(nav.platform),
				isIPad = (/ipad/gi).test(nav.platform),
				isRetina = window.devicePixelRatio && window.devicePixelRatio > 1,
				fontCSS = 'css/font-awesome.min.css',
				isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(nav.platform);

			// Append font awesome 
			$('head').prepend(fontCSS);
				
			if (isRetina) {
				img = '<img width="24" height="20" src="img/add-icon@2x.png" />';
			} else {
				img = '<img src="img/add-icon.png" />';
			}

			// show correct instructions for the device
			if (isIDevice && !isIPad) {
				instructions = '<p class="install-msg">'; 
				instructions += 'Install this web app on your iPhone: ';
				instructions += 'tap <i class="icon-share"></i> and then \'Add to Home Screen\'';
				instructions += '</p>';
			} else {
				instructions = '<p class="install-msg">'; 
				instructions += 'To add this app to your home screen: </p>';
				instructions += '<ol><li>Bookmark the page you want to add to the home screen</li>';
				instructions += '<li>Open the browser\'s "bookmarks" screen</li>';
				instructions += '<li>Long-press the bookmark you want</li>';
				instructions += '<li>Select "Add to Home screen"</li>';
				instructions += '</ol>';
			}
		
			// check if is mobile device or tablet
			if (isMobile) {

				return this.each(function() {
				
						// check if browser supports localstorage
						if (typeof(Storage) !== 'undefined') {
			
							// check if plugin has already set
							if (localStorage.getItem('homescreenMsg') === null) {
								
								var element = $(this);
								
								// add the instructions to the popup
								$(settings.instructionsElm).html(instructions);
								
								// show popup
								element.fadeIn('normal');
								
								// set localstorage var to remember 
								// that popup has been seen
								localStorage.homescreenMsg = true;
								
							} 
							
						}
					
				}); 
				
			}
			
		},
		
		close: function() {
			var element = $(this);
			element.fadeOut('fast');
		}
		
	};
	
	$.fn.homescreenadd = function( method ) {
    
	    if ( methods[method] ) {
	      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on jQuery.homescreenadd' );
	    }    
	  
	  };
	
})(jQuery);