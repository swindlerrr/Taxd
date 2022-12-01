const { defineConfig  } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.taxd.co.uk/',

    env: {                                                                      //------Users setting here
      users: {     
            admin: {
              username: "qa124@taxd.co.uk",
              password: "q123456789@", 
            }  
        },
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    hideXHR: true,
    numTestsKeptInMemory: 5,                                                    //------Reducing browser consumption
    defaultCommandTimeout: 5000,
    retries: 10,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});