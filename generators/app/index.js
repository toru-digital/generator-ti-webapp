'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting : function () {
    //this.log (yosay (chalk.yellow ('!')))
  },

  writing : function () {
    this.fs.copy(
      this.templatePath ('**/*'),
      this.destinationPath (''),
      { globOptions: { dot : true } }
    );
  },

  install: function () {
    this.installDependencies ();
  },

  end : function () {
    this.spawnCommand ('gulp', ['script', 'scss']);
  },
});
