const reitmansPage = require("../pageobjects/reitmans")

describe("Reitmans Page Elements", function(){

    it("Get texts of all main link elements", async function(){
        await browser.url("https://www.reitmans.com/")
        await browser.pause(2000)

        await reitmansPage.getTextForA
        await browser.pause(2000)

    })

    it("Customer Service elements", async function(){
        await reitmansPage.customerServiceElementsText
        await browser.pause(2000)
    })
    
})