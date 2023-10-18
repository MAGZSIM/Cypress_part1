const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportHeight: 500,
    viewportWidth: 500,
    
  e2e: {
      baseUrl: 'http://localhost:3000',
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  });
