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
    getProjects(pcallback){
      // Sends a method call to the XML-RPC server

        this.xmlclient.methodCall('tl.getProjects', [{'devKey':this.settings.devKey}], pcallback || this.settings.callback);
    }

    getProjectByName(project,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestProjectByName', [{'devKey':this.settings.devKey,'testprojectname':project}], pcallback || this.settings.callback);
    }

    getProjectTestPlans(project,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getProjectTestPlans', [{'devKey':this.settings.devKey,'testprojectid':project}], pcallback || this.settings.callback);
    }

    getBuildsForTestPlan(testplanid,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getBuildsForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }
    getTestPlanPlatforms(testsuite_id,get_tests,pcallback){
      // Sends a method call to the XML-RPC server
      this.xmlclient.methodCall('tl.getTestPlanPlatforms', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }

    getTestSuitesForTestPlan (testplanid,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestSuitesForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }

    getTestCasesForTestPlan(testplanid,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCasesForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }

    getTestCaseIDByName (testcasename,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCaseIDByName', [{'devKey':this.settings.devKey,'testcasename':testcasename}], pcallback || this.settings.callback);
    }

    getTestCase(testcaseid,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestCase', [{'devKey':this.settings.devKey,'testcaseid':testcaseid}], pcallback || this.settings.callback);
    }

    getLatestBuildForTestPlan(testplanid,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getLatestBuildForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }

    getTestPlanByName(testplanname,testprojectname,pcallback){
      // Sends a method call to the XML-RPC server
        this.xmlclient.methodCall('tl.getTestPlanByName', [{'devKey':this.settings.devKey,'testprojectname':testprojectname,'testplanname':testplanname}], pcallback || this.settings.callback);
    }
    getTotalsForTestPlan(testplanid,pcallback){
      // Sends a method call to the XML-RPC server
      this.xmlclient.methodCall('tl.getTotalsForTestPlan', [{'devKey':this.settings.devKey,'testplanid':testplanid}], pcallback || this.settings.callback);
    }


}

module = module.exports = API;
