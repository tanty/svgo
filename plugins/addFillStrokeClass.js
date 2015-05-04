'use strict';

exports.type = 'perItem';

exports.active = true;

var EXTEND = require('whet.extend'),
    shape = require('./_collections').elemsGroups.shape

/**
 * Adds class="fill" or class="stroke".
 *
 * http://www.w3.org/TR/SVG11/styling.html#StyleAttribute
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Andres Gomez
 */
exports.fn = function(item) {

    if (item.isElem(shape) && !item.hasAttr('class')) {
	var attrs = {};
	var value;

    	if (item.hasAttr('fill') || !item.hasAttr('stroke')) {
	    value = 'filled';
    	} else {
	    value = 'stroked';
    	}

	attrs['class'] = {
	    name: 'class',
	    value: value,
	    local: 'class',
	    prefix: ''
	};

	EXTEND(item.attrs, attrs);
    }

    return item;
};
