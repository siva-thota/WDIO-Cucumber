/* eslint-disable max-len */

const selen = require('../utils/SelenMethods.js');

const homePage = function () {
    this.welcomeMessageLabel = 'h1.dashboard.ng-binding';

    this.toggleMenu = 'svg[id="svgHamburger"]';

    this.checkLoggedInUser = async function (user) {
        await browser.waitForExist(this.welcomeMessageLabel);
        const welcomeMsg = await browser.getText(this.welcomeMessageLabel);
        await expect(welcomeMsg).contains(user);
    };

    this.navigateMenuToPath = async function (path) {
        await selen.clickElement(this.toggleMenu);
        switch (path) {
            case "Dashboard":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(1) > a');
                }
                break;
            case "New transaction":
                if(browser.waitForExist('#menu-open',3000)) {
                    await selen.clickElement('#payments > div > span');
                    await selen.clickElement('#menuBtnPayPageModal > span');
                }
                break;
            case "Transactions and settlements":
                if(browser.waitForVisible('#nav-menu > div > div.list-group.sub-list-group > ul > li:nth-child(6)',3000)) {
                    await selen.clickElement('#payments > div > span');
                    await selen.clickElement('#menuBtnViewTransactions > span');
                }
                break;
            case "Recurring payments":
                if(browser.waitForVisible('#nav-menu > div > div.list-group.sub-list-group > ul > li:nth-child(6)',3000)) {
                    await selen.clickElement('#payments > div > span');
                    await selen.clickElement('#menuBtnViewSubscriptions > span');
                }
                break;
            case "Manage users":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnViewUsers > span');
                }
                break;
            case "Invite new user":
                /*browser.pause(2000);
                await browser.moveToObject('#nav-menu > div > div:nth-child(3) > span');
                browser.pause(2000);
                */
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnAdduser > span');
                }
                break;
            case "Authentication log":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnUserLogs > span');
                    await selen.clickElement('#menuBtnAuthLogs > span');
                }
                break;
            case "Activity log":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnUserLogs > span');
                    await selen.clickElement('#menuBtnActivityLogs > span');
                }
                break;
            case "Profile":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnMyProfile > span');
                    await selen.clickElement('#menuBtnProfile > span');
                }
                break;
            case "Change password":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > div:nth-child(3) > span');
                    await selen.clickElement('#menuBtnMyProfile > span');
                    await selen.clickElement('#menuBtnPassword > span');
                }
                break;
            case "Account settings":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnAccountSettings > span');
                }
                break;
            case "Fraud settings":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnFraudSettings > span');
                    await selen.clickElement('#menuBtnBasicSettings > span');
                }
                break;
            case "Restriction lists":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnFraudSettings > span');
                    await selen.clickElement('#menuBtnRestrictionsLists > span');
                }
                break;
            case "Trust lists":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnFraudSettings > span');
                    await selen.clickElement('#menuBtnTrustLists > span');
                }
                break;
            case "Integration settings":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnIntegration > span');
                }
                break;
            case "Ecommerce":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnPayPageMTConf > span');
                    await selen.clickElement('#menuBtnPaypageConfEcomm > span');
                }
                break;
            case "Contact centre":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(4) > div > span');
                    await selen.clickElement('#menuBtnPayPageMTConf > span');
                    await selen.clickElement('#menuBtnPaypageConfMoto > span');
                }
                break;
            case "Test and publish":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access.ng-scope.ng-isolate-scope > div > a');
                }
                break;
            case "Support":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#nav-menu > div > main-nav-access:nth-child(6) > div > a');
                }
                break;
            case "Log out":
                if(browser.waitForExist('#menu-open',2000)) {
                    await selen.clickElement('#menuBtnLogout > span');
                }
                break;
            default:
                break;
        }
        /*let menuElement;
        // var destinationPageObject = null;
        let navPath = path.split('>');

        try {
        navPath.forEach(async (item) => {
            menuElement = await getMenuElementByText(item);
            //console.log('------------' + item);
            console.log(menuElement);
            //console.log('------------');
            //await browser.pause(3000);
            await selen.clickElement(menuElement);
            await browser.pause(3000);
            //await browser.sleep(10000);
        });
         }
        catch(error){
            console.log("Sriram" +error);
        }*/
        //await browser.waitforInterval(5000);
    };

    /*async function getMenuElementByText(labelText) {
        //console.log(labelText);
        let elemen;
        switch (labelText) {
            case 'Dashboard':
                elemen = await element(by.id('menuBtnDashboard'));
                break;
            case 'Payments':
                elemen = element(by.id('menuBtnPayments'));
                break;
            case 'New transaction':
                elemen = element(by.xpath("//span[contains(text(),'New transaction')]"));
                break;
            case 'Transactions and settlements':
                elemen = element(by.xpath("//span[contains(text(),'Transactions and settlements')]"));
                break;
            case 'Recurring payments':
                elemen = element(by.xpath("//span[contains(text(),'Recurring payments')]"));
                break;
            case 'Users':
                //elemen =  'body.testView:nth-child(4) div.sg:nth-child(1) div.ng-scope div.panel.panel-default.navigation-menu.nav-menu-move-left:nth-child(2) div.navigation-menu-inner div.list-group.sub-list-group:nth-child(7) ul:nth-child(1) li:nth-child(6) a.list-group-item.animated._5.slideInRightSml.close-menu-item.ng-scope > span.ng-scope';
                //elemen= '//span[id="#menuBtnUsers"]';
                //elemen = '//!*[@id="menuBtnUsers"]/span';
                //elemen = 'span:contains("Users")';
                //elemen = element(by.id('menuBtnUsers'));#menuBtnUsers
                elemen = '#nav-menu > div > div:nth-child(3) > span';

                break;
            case 'Manage users':
                elemen = element(by.xpath("//span[contains(text(),'Manage users')]"));
                break;
            case 'Invite new user':
                // elemen = element(by.xpath=("//!*[normalize-space(text()) and normalize-space(.)='Manage users'])[1]/following::span[1]"));
                // browser.sleep(1000);
                // elemen = element(by.id("menuBtnAdduser"));
                //elemen = element(by.xpath("//a[@id='menuBtnAdduser']/span[contains(text(),'Invite new user')]"));
                // elemen = element(by.xpath("(.//!*[normalize-space(text()) and normalize-space(.)='Users'])[1]/following::span[2]"));
                // var EC = protractor.ExpectedConditions;
                //elemen = '//!*[@id="menuBtnAdduser"]/span';
                // destinationPageObject = inviteUserPage;
                //elemen = 'span=Invite new user';
                elemen = '#menuBtnAdduser > span';
                //#menuBtnAdduser > span
                break;
            case 'User logs':
                // elemen = element(by.xpath("//span[contains(text(),'User logs')]"));
                // elemen = element(by.xpath("//a[@id='menuBtnUserLogs']/span[contains(text(),'User logs')]"));
                elemen = element(by.id('menuBtnUserLogs'));
                break;
            case 'My profile':
                elemen = element(by.xpath("//span[contains(text(),'My profile')]"));
                break;
            case 'Settings':
                elemen = element(by.id('menuBtnSettings'));
                break;
            case 'Account settings':
                elemen = element(by.xpath("//span[contains(text(),'Account settings')]"));
                break;
            case 'Fraud management':
                elemen = element(by.xpath("//span[contains(text(),'Fraud management')]"));
                break;
            case 'Integration settings':
                elemen = element(by.xpath("//span[contains(text(),'Integration settings')]"));
                break;
            case 'Payment page':
                elemen = element(by.xpath("//span[contains(text(),'Payment page')]"));
                break;
            case 'Test and Publish':
                elemen = element(by.id('menuTestandpublish'));
                break;
            case 'Support':
                elemen = element(by.id('menuBtnSupport'));
                break;
            case 'Log out':
                elemen = element(by.id('menuBtnLogout'));
                break;
            default:
                break;
        }
        return elemen;
    }*/
};

module.exports = new homePage();
