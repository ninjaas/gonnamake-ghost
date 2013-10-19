/**
 * Main JS file for Goonamake behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        (function() {
			$('.share').on('click', function(e) {

				e.preventDefault();

				var $this = $(this);

				$this.animate({
					'width': $this.width() == 304 ? '64px' : '304px'
				}, 400, 'swing');

			});

		} () );

    });

}(jQuery));