(function($) {
	$.fn.thumbroll = function() {
		return this.each(function() {
			var $this = $(this);
			var $children = $this.children();
			
			$children.hide().first().show();
			
			$this.mousemove(function(e) {
				var distance = $this.width()/$children.length;
				var idx = Math.floor(e.offsetX/distance);
				
				$children.filter(':visible').hide();
				$children.eq(idx).show();
			});
		});
	};
})(jQuery);
