(function($) {
	$.fn.scoreboard = function(config) {
		config = $.extend({}, $.fn.scoreboard.defaults, config);
		config.chars = config.chars.split('');
			
		var charcode_map = {};
		$.each(config.chars, function(i, el) {
			charcode_map[el] = i;
		});
		
		return this.each(function(i, el) {
			var $this = $(this);
			var chars_orig = $this.text().split('');
			
			$this.text($.map(chars_orig, function(el, i) {
				if($.inArray(el, config.chars) != -1) {
					return config.chars[(charcode_map[el]+Math.round(Math.random()*100))%config.chars.length];
				} else {
					return el;
				}
			}).join(''));
			
			setTimeout(function() {
				var recurse=false;
				
				$this.text($.map($this.text().split(''), function(el, i) {
					if(el != chars_orig[i]) {
						recurse = true;
						return config.chars[(charcode_map[el]+1)%config.chars.length];
					} else {
						return el;
					}
				}).join(''));
				
				if(recurse) {
					setTimeout(arguments.callee, config.speed);
				} else {
					config.callback.call($this);
				}
			}, config.speed);
		});
	};
	
	$.fn.scoreboard.defaults = {
		callback:$.noop
		, chars:(function() {
			var chars=[], start=32, end=127;
			for(var i=start; i<end; ++i) {
				chars[i-start] = String.fromCharCode(i);
			}
			
			return chars.join('');
		})()
		, speed:$.fx.speeds.fast
	};
})(jQuery);
