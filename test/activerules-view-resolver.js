// Use Chai expect to assert our tests
var expect    = require("chai").expect;

// Our module should be up one level from the test directory
var viewResolver = require("../index.js");
// 
// We need the full path to the current directory.
// We know where the relevant files are from there.
var thisDirectory = __dirname;

// Our test data is in a sub-directory of the test directory
var arRoot = thisDirectory + '/data/';

// Describe what we expect from the module
describe('Module - activerules-view-resolver', function() {
  
  // Most basic use case
  describe('Given a site with a home page override', function() {
    it('the site home page path is returned.', function () {
      // Determine which view to load for the site
      viewResolver.page(site, 'home')
      .then(function(pagePath) {
        console.log(pagePath);
        expect(pagePath).to.equal(arRoot + 'site/' + site.site + '/example/view/home.hbs');
      })
    });
  });
  
  // Most basic use case
  describe('Given a site without a faq page override', function() {
    it('the default faq page path is returned.', function () {
      // Determine which view to load for the site
      viewResolver.page(site, 'home')
      .then(function(pagePath) {
        console.log(pagePath);
        expect(pagePath).to.equal(arRoot + 'site/' + site.site + '/default/view/faq.hbs');
      })
    });
  });

});
