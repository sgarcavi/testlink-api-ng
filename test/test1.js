var TestLinkNG = require('../index');
var settings = {
  devKey : "devKey",
  url :"https://host:443/testlink/lib/api/xmlrpc/v1/xmlrpc.php",
  callback: (err,res)=>{
    console.log(res);
    console.log(err);
  }
};



var myTL = new TestLinkNG(settings);
// myTL.testlink.getProjectByName('ProjectName');
// myTL.testlink.getProjectTestPlans(planID);
// myTL.testlink.getBuildsForTestPlan(planID);
// myTL.testlink.getTestSuitesForTestPlan(planID);
// myTL.testlink.getTestCasesForTestPlan(planID);
// myTL.testlink.getTestCaseIDByName(TestName)
// myTL.testlink.getTestCase(TestID)
// myTL.testlink.getLatestBuildForTestPlan(planID);
// myTL.testlink.getTestPlanByName(testplanname,testprojectname)
