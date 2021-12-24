const newman = require("newman");
const args = require("minimist")(process.argv.slice(2));
const collectionPath = args["collection"];
const environmentPath = args["environment"];
const reportName=(collectionPath.replace('./collections/','')).replace('.json','')
const reportPath= './reports/'+reportName+'_report.html'

//console.log(collectionPath)
//console.log(reportName)

//collection: './collections/JSONPlaceholdercollection.json', // Collection URL from a public link or the Postman API can also be used
//environment: './env/JSONPlaceholderenvironment.json',

const runnerConfig = {
  collection: collectionPath, // Collection URL from a public link or the Postman API can also be used
  environment: environmentPath,
  reporters: ["cli", "htmlextra"],
  iterationCount: 1,
  reporter: {
    htmlextra: {
      export: reportPath,
      // template: './template.hbs'
      logs: true,
      // showOnlyFails: true,
      // noSyntaxHighlighting: true,
      // testPaging: true,
      browserTitle: reportName + "API Test",
      title: "API Test Resport",
      // titleSize: 4,
      // omitHeaders: true,
      // skipHeaders: "Authorization",
      // omitRequestBodies: true,
      // omitResponseBodies: true,
      // hideRequestBody: ["Login"],
      // hideResponseBody: ["Auth Request"],
      // showEnvironmentData: true,
      // skipEnvironmentVars: ["API_KEY"],
      // showGlobalData: true,
      // skipGlobalVars: ["API_TOKEN"],
      // skipSensitiveData: true,
      // showMarkdownLinks: true,
      // showFolderDescription: true,
      // timezone: "Australia/Sydney",
      // skipFolders: "folder name with space,folderWithoutSpace",
      // skipRequests: "request name with space,requestNameWithoutSpace"
    },
  },
};

newman.run(runnerConfig);
