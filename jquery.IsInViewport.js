(function($) {

	$.fn.isInViewport = function( options ) {

		// Establish our default settings
		var settings = $.extend({
      fuzziness	 : 1,    // percent of element height that has to be in viewport
      viewportTopAdjustment: 0, //adjustment to top of viewport for things like floating header
      viewportBottomAdjustment : 0, //adjustment to bottom of viewport
			complete	 : null  // callback
		}, options);

		// viewport 
		var viewportTop = $(window).scrollTop() + settings.viewportTopAdjustment;
		var viewportBottom = $(window).scrollTop() + $(window).height() - settings.viewportBottomAdjustment;
    
    // return filtered set of elements
		return this.map( function(i,e) {
      var $e = $(e);
      var offsetTop = $e.offset().top;
			var elementHeight = $e.outerHeight();
			var elementTop = offsetTop + (elementHeight * (1 - settings.fuzziness/2));
			var elementBottom = offsetTop + (elementHeight * (settings.fuzziness/2));
			var isInViewport = elementBottom > viewportTop && elementTop < viewportBottom;

			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call(this);
      }

      if(isInViewport) return this;
		});

	};

}(jQuery));
