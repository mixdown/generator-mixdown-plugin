var fn1 = function() {
  throw new Error("TODO: implement fn1");
};

var fn2 = function() {
  throw new Error("TODO: implement fn2");
}

// Plugin for mixdown exposing the interfaces.
var YourNewPlugin = function(namespace) {

  if (!this instanceof YourNewPlugin) {
    throw new Error('Please instantiate using keyword "new."  Broadway expects this.');
  }

  namespace = namespace || 'undefined';

  this.attach = function(options) {
    this[namespace] = {
      fn1: fn1,
      fn2: fn2
    };
  };

  // Initialize the plugin here.
  this.init = function(done) {
    done();
  };

};

// Export the library functions and the plugin functions.  
// This pattern works for a utility library like https://github.com/vast-eng/mixdown-geotools
// In some cases, you might want to export only the plugin like https://github.com/vast-eng/broadway-handlebars/blob/master/index.js
// In other cases, you might want to export library and the plugin separately.  This is done here - https://github.com/mixdown/oauth/blob/master/index.js
module.exports = {
  YourNewPlugin: YourNewPlugin,
  fn1: fn1,
  fn2: fn2
};