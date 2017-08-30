'use strict;'

/**
 *  This module determines if a site override view exists.
 *  The the site elve file exists we will use it later in Handlebars.
 */

const Promise = require("bluebird");

const pathExists = require('path-exists');

// Create the return object
var AR = function () {};

/**
 * 
 * @param object site
 * @param string page
 * @returns {nm$_index.Promise}
 */
AR.prototype.page = function (arRoot, page, site) {
    
    return new Promise(
        function (resolve, reject) {
          
          var sitePath = arRoot +  'site/' +  site.site + '/view/page/' + page + '.hbs';  
          
          var defaultPath = arRoot +  'site/default/view/page/' + page + '.hbs';

          pathExists(sitePath)
          .then(exists => {
              if(exists) {
                 resolve(sitePath);
              } else {
                resolve(defaultPath);
              }
          });
      }
    );
};

// Export a new instance of the object/function
module.exports = exports = new AR();

