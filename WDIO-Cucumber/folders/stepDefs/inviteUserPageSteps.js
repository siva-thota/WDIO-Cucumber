

var loginPage = require('../pages/loginPage.js');

var homePage = require('../pages/homePage.js');

var selen = require('../utils/SelenMethods.js');
//var logger = require('../support/log.js');
var expect = require('chai').expect;

var {defineSupportCode} = require('cucumber');

var configData = require('../data/config.json');

var inviteUserPage = require('../pages/inviteUserPage.js');

//var homePage;

const { Given, When, Then } = require('cucumber');

Given(/^Login to the portal as "([^"]*)"$/, async function (username) {
    homePage = await loginPage.loginAsUser(username);
});
When(/^user navigates to "([^"]*)"$/, async function (menuPath) {
    await homePage.navigateMenuToPath(menuPath);
});
When(/^user enters firstname as "([^"]*)", lastname as "([^"]*)",  role as "([^"]*)",  mobile number as "([^"]*)",  email as "([^"]*)" and confirms$/, async function (firstName, lastName, userRole, phoneNumber, email) {
    await inviteUserPage.fillInviteUserDetails(firstName, lastName, userRole, phoneNumber, email);
});
When(/^user clicks on Send Invite button$/, function () {
    //selen.highlightElement(element(by.buttonText("Send invite")))
});
Then(/^user should see a success message$/, function () {

});

