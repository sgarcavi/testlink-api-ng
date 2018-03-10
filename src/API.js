'use strict';


/*
*http://search.cpan.org/~teodesian/TestLink-API-0.011/lib/TestLink/API.pm#getProjects_()
*
*
*/


var xmlrpc = require('xmlrpc')
var re = /https:\/\/([^:]*):([^\/]*)([^$]*)/;
var _ = require('underscore');

class API{
    constructor(settings){
      this.settings = settings || {};
      this.tokens = settings.url.match(re);
    	this.theWholeUrl = this.tokens[0];
    	this.host = this.tokens[1];
    	this.port = this.tokens[2];
    	this.path = this.tokens[3];
      this.xmlclient = xmlrpc.createSecureClient({ host: this.host, port: this.port, path: this.path});
    }
    //CREATE METHODS (TODO)
    // createTestPlan (name, project, [notes, active, public])
    // createBuild (test_plan_id, name, [notes])
    // createTestSuite (project_id, name, [details, parent_testsuite_id, order])
    // createTestProject (name, case_prefix, [notes, options, active, public])
    // createTestCase (name, test_suite_id, test_project_id, author, summary, steps, preconditions, execution, order)


  //GET METHODS
    getProjects(){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getProjects', [{'devKey':this.settings.devKey}], this.settings.callback);
    }

    getProjectByName(project){
      // Sends a method call to the XML-RPC server
      console.log(project);
        this.xmlclient.methodCall('tl.getTestProjectByName', [{'devKey':this.settings.devKey,'testprojectname':project}], this.settings.callback);
    }

    getProjectTestPlans(project){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getProjectTestPlans', [{'devKey':this.settings.devKey,'testprojectid':project}], this.settings.callback);
    }

    getBuildsForTestPlan(testplanid){
      // Sends a method call to the XML-RPC server
        console.log("plan id loockings" + testplanid);
        this.xmlclient.methodCall('tl.getBuildsForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], this.settings.callback);
    }
    getTestPlanPlatforms(testsuite_id,get_tests){
      // Sends a method call to the XML-RPC server
      this.xmlclient.methodCall('tl.getTestPlanPlatforms', [{'devKey':this.settings.devKey,'testplanid':testplanid}], this.settings.callback);
    }

    getTestSuitesForTestPlan (testplanid){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestSuitesForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], this.settings.callback);
    }

    getTestCasesForTestPlan(testplanid){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCasesForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], this.settings.callback);
    }

    getTestCaseIDByName (testcasename){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCaseIDByName', [{'devKey':this.settings.devKey,'testcasename':testcasename}], this.settings.callback);
    }

    getTestCase(testcaseid){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCase', [{'devKey':this.settings.devKey,'testcaseid':testcaseid}], this.settings.callback);
    }

    getLatestBuildForTestPlan(testplanid){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getLatestBuildForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], this.settings.callback);
    }



}

module = module.exports = API;
