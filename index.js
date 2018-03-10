'use strict';

var API = require('./src/API.js');

class TestLinkNG{
  constructor(settings){
    var that = this;
    this.settings = settings;
    this.settings.pcallback = this.settings.callback;
    this.settings.callback = (err,res)=>{
      that.settings.pcallback(err,res);
    };
    this.testlink = new API(this.settings);

  }

}


module = module.exports = TestLinkNG;
