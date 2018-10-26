var selen = require('../utils/SelenMethods.js');

var homePage = require('../pages/homePage.js');

var configData = require('../data/config.json');

var gv = require('../data/variables.js');

var envData = configData[gv.env];

var loginPage = function () {
    this.username = 'input[id="username"]';
    this.password = 'input[id="password"]';
    this.loginButton =  'button[id="btnLogin"]'; //browser.element('button*=Log in');

    this.loginAsUser = async function (username) {
        //await browser.driver.manage().window().maximize();
        var windowHandle = browser.windowHandle();
        browser.windowHandleMaximize('{'+windowHandle.value+'}');

        await browser.url(envData.appUrl);

        //console.log("Env selected : " + gv.env);

        //console.log(envData.users[1]);


        await selen.enterText(this.username, envData.users[username].username);
        await selen.enterText(this.password, envData.users[username].password);

        await selen.clickElement(this.loginButton);

        //browser.ignoreSynchronization = false;
        
        await homePage.checkLoggedInUser(envData.users[username].user);

        return homePage;
    };
};

module.exports = new loginPage();
