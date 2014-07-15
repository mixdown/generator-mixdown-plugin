var BasePlugin = require('mixdown-app').Plugin;

// Create a new plugin from the base plugin class.
// this._options is the options hash that was passed on init.
module.exports = BasePlugin.extend({

  // Any function that does not start with _ will be attached.
  // do not use init() as it is reserved in the Resign Simple Inheritance pattern
  // http://ejohn.org/blog/simple-javascript-inheritance/
  hello: function() {

    // If you want to access a parent class's hello() function, then it is available as this._super();
    // http://ejohn.org/blog/simple-javascript-inheritance/

    this.count++;
    return 'Hello ' + this._options.name;
  },

  // Scalar values are wrapped in an accessor function on the plugin interface.
  // To get count, use .count()
  // to set count, use .count(new_val)
  count: 0,

  // _setup is part of the mixdown plugin interface.  Use this to initialize the plugin.
  // This is typically used to asynchronously init a db or api that is part of the plugin interface.
  _setup: function(done) {
    done();
  }
});
