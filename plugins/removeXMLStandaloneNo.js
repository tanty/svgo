'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove XML Processing Instruction standalone="no" attribute.
 *
 * @example
 * <?xml version="1.0" encoding="utf-8" standalone="no"?>
 *             ⬇
 * <?xml version="1.0" encoding="utf-8"?>
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Andres Gomez
 */
exports.fn = function(item) {

    if (item.processinginstruction && item.processinginstruction.name === 'xml') {
	var newBody = item.processinginstruction.body.toLowerCase();
	item.processinginstruction.body = newBody.replace("standalone=\"no\"", "").trim()
    }

    return item;

};
