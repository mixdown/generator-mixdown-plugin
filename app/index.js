'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MixdownPluginGenerator = module.exports = function MixdownPluginGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MixdownPluginGenerator, yeoman.generators.Base);

MixdownPluginGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'pluginName',
    message: 'What would you like to name this plugin?'
  },
  {
    name: 'pluginDescription',
    message: 'Description [optional]'
  }];

  this.prompt(prompts, function (props) {
    this.pluginName = props.pluginName;
    this.pluginDescription = props.pluginDescription;

    cb();
  }.bind(this));
};

MixdownPluginGenerator.prototype.app = function app() {
  var packageJSON = require(path.join(__dirname, '../app/templates/_package.json'));
  packageJSON.name = this.pluginName;
  packageJSON.description = this.pluginDescription;
  this.write('package.json', JSON.stringify(packageJSON, null, 2));
  this.copy('_index.js', 'index.js');
};

MixdownPluginGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};
