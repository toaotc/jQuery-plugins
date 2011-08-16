(function($) {
	$.fn.src = function(uri, callback) {
		return this.each(function() {
			var $this = $(this);
			$this.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
			$this.one('load', callback);
			$this.attr('src', uri);
		});
	};
})(jQuery);
