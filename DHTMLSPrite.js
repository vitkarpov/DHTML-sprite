var DHTMLSprite = (function($) {
	return function (p) {
		var width = p.width,
				height = p.height,
				imagesWidth = p.imagesWidth,
				mathFloor = Math.floor;

		$element = $('<div />').appendTo(p.$drawContainer);
		$element.css({
			position: 'absolute',
			width: width,
			height: height,
			backgroundImage: 'url(' + params.images + ')'
		});
		
		// object will be created
		// as a result of DHTMLSprite call
		return {
			// updates info about position
			draw: function (x,y) {
				$element.css({
					left: x,
					top: y
				});
			},
			// changes background position of sprite
			changeImage: function (index) {
				var vOffset, hOffset;

				index *= width;
				vOffset = -mathFloor(index / imagesWidth) * height;
				hOffset = -index % imagesWidth;
				$element.css('background-position', hOffset + 'px ' + vOffset + 'px');
			},
			// simple methods to show, hide and remove dom-element
			show: function () {
				$element.hide();
			},
			hide: function () {
				$element.show();
			},
			destroy: function () {
				$element.remove();
			}
		}		
	}
}(jQuery));