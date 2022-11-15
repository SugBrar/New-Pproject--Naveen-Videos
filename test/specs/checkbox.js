const InternetPage = require('../pageobjects/checkBoxHandle')
const assert = require("assert")

describe("Handle CheckBox", function(){

    it("Check page Url", async ()=>{

        await browser.url('https://the-internet.herokuapp.com/')
        await browser.pause(2000)
        
        await expect(browser).toHaveUrlContaining("the-internet")

    })

    it("Check checkbox page header",async () =>{
        await browser.url('https://the-internet.herokuapp.com/')
        await InternetPage.clickOnLink(6)
        await InternetPage.h3Header.waitForDisplayed()
        await InternetPage.h3Header.getText()
        await browser.pause(2000)

        await  assert.equal(await InternetPage.h3Header.getText(),"Checkboxes")
        //await console.log("Title :  ", browser.getTitle())

    })

    it("Should click checkbox", async function(){

        await browser.url('https://the-internet.herokuapp.com/')
        await browser.pause(2000)

        await InternetPage.clickOnLink(6)
        await browser.pause(2000)

        await InternetPage.h3Header.waitForDisplayed()

        await InternetPage.clickOnCheckBox(1)
        await browser.pause(2000)
        await expect(InternetPage.getCheckBoxElement(1)).toBeSelected()
        //await assert.equal(await InternetPage.getCheckBoxElement(1).isSelected(),true)
        await browser.pause(2000)

    })
    it("Check checkbox page url",async () =>{
        await browser.url('https://the-internet.herokuapp.com/')
        await InternetPage.clickOnLink(6)
        await browser.pause(3000)
        // await console.log("Hello: ",await browser.getUrl())
        // await browser.pause(2000)
       
        await expect(browser).toHaveUrlContaining("checkboxes")

    })
})