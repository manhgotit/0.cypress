const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  //parse xlsx
  // on('task', {
  //   parseXlsx({ filePath }) {
  //     return new Promise((resolve, reject) => {
  //       try {
  //         const jsonData = xlsx.parse(fs.readFileSync(filePath));
  //         resolve(jsonData);
  //       } catch (e) {
  //         reject(e);
  //       }
  //     });
  //   }
  // });

  // allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  // chromeWebSecurity: false,
  e2e: {
    //switch on/off POM and BDD by enable/disable this specPattern
    // specPattern: "**/*.feature",
    
    setupNodeEvents,
    // projectId: "SHiring",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    experimentalStudio: true,
    // baseUrl: "https://app.shiring.rework.vn",
  },
});