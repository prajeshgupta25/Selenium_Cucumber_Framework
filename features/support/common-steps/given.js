const { Given } = require("cucumber")

Given(`a user opens {string}`, (url) => {
    console.log(url)
    // const driver  = new WebDriver();
    // driver.get(url);
})