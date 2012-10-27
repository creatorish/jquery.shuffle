/**
 * jQuery ShuffleText Plugin
 *
 * Copyright 2011 creatorish.com
 * Author: y.hayashi
 * Site: http://creatorish.com
 * LastUpdate: 2011/02/23
 * HowToUse: http://creatorish.com/lab/1463
 * This Plugin Required ShuffleText.js (http://clockmaker.jp/blog/2012/02/html5_shuffletext/)
 *
**/
(function (window) {
	var jQueryShuffleText = function() {
		this.shuffles = [];
		this.elements = [];
	};
	jQueryShuffleText.prototype = {
		start: function(elm) {
			if (elm) {
				if ($(elm).data("shuffle")) {
					$(elm).data("shuffle").start();
				}
			} else {
				for (var i = 0; i < this.shuffles.length; i++) {
					this.shuffles[i].start();
				}
			}
		},
		stop: function(elm) {
			if (elm) {
				if ($(elm).data("shuffle")) {
					$(elm).data("shuffle").stop();
				}
			} else {
				for (var i = 0; i < this.shuffles.length; i++) {
					this.shuffles[i].stop();
				}
			}
		},
		isRunning: function(elm) {
			if (elm) {
				if ($(elm).data("shuffle")) {
					return $(elm).data("shuffle").isRunning();
				}
				return false;
			} else {
				return this.shuffles[this.shuffles.length-1].isRunning;
			}
		},
		addShuffle: function(st) {
			this.shuffles.push(st);
		}
	};
	jQuery.fn.shuffleText = function(option) {
		var jst = new jQueryShuffleText();
		jQuery.each($(this),function() {
			var shuffle = new ShuffleText(this);
			if (option) {
				if (option.sourceRandomCharacter) {
					shuffle.sourceRandomCharacter = option.sourceRandomCharacter;
				}
				if (option.emptyCharacter) {
					shuffle.emptyCharacter = option.emptyCharacter;
				}
				if (option.fps) {
					shuffle.fps = option.fps;
				}
				if (option.duration) {
					shuffle.duration = option.duration;
				}
			}
			$(this).data("shuffle",shuffle);
			jst.addShuffle(shuffle);
		});
		return jst;
	}
})(window);