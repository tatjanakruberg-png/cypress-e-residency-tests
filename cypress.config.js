const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.e-resident.gov.ee/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 800,
  viewportWidth: 1280,
});
