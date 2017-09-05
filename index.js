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
AR.prototype.view = function (arRoot, view, site) {
    
    return new Promise(
        function (resolve, reject) {
          
          var sitePath = arRoot +  'site/' +  site.site + '/view/' + view + '.marko';  
 
          var defaultPath = arRoot +  'site/default/view/' + view + '.marko';

          pathExists(sitePath)
          .then(exists => {
              if(exists === true) {
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

