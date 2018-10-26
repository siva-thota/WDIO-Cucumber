//var env = require('../support/env.js');

function selenMethods() {

    //To enter text into a text box
    this.enterText = async function (textBox, text) {
        try {
            console.log("Entering text into element : '" + textBox + "'");
            await browser.waitForVisible(textBox, 3000);
            await browser.setValue(textBox, text);//textBox.sendKeys(text);
        } catch (error) {
            console.log("Error : " + error)
        }
    };

    //To get the text of an element by its classname
    this.getElementTextByClass = async function (className) {
        return await element(by.css(className)).getText();
    }

    //To highlight an object on the web page call this function and pass the element object as parameter
    this.highlightElement = async function (el) {
        browser.waitForExist(el);
        return await browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "color: black; border: 2px dotted black;").then(function (resp) {
            browser.sleep(1000);
            return el;
        }, function (err) {
            console.log("error is :" + err);
        });
    }

    this.clickElement = async function (elemen) {
        try {
            console.log("Clicking on the element : '" + elemen + "'");
            await browser.waitForExist(elemen, 3000);
            await browser.waitForVisible(elemen, 3000);
            await browser.click(elemen);
        } catch (error) {
            console.log("Error : " + error)
        }
    }

    this.selectByText = async function (elemen, text) {
        try {
            console.log("Choosing an item in the element : '" + elemen + "'");
            await browser.waitForExist(elemen, 3000);
            await browser.selectByVisibleText(elemen, text);
            //await elemen.all(by.xpath('option[.="' + text + '"]')).click();
        } catch (error) {
            console.log("Error : " + error)
        }
    };

};

module.exports = new selenMethods();
