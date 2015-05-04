'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove style="".
 *
 * http://www.w3.org/TR/SVG11/styling.html#StyleAttribute
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Andres Gomez
 */
exports.fn = function(item) {

    if (item.elem && item.hasAttr('style')) {
        item.removeAttr('style');
    }

    return item;
};
