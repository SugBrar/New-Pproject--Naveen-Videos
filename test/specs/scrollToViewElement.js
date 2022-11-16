const CRMPage = require("..//pageobjects/scrollToElement")

describe("Scroll to View Element", () =>{

    it.skip("View Element and click", async () =>{

        console.log("First method")
        browser.url("https://classic.crmpro.com/index.html")
        await CRMPage.forgotPswdLink.scrollIntoView()
        console.log("Wait for Display After",  await CRMPage.forgotPswdLink.isDisplayedInViewport())
        await CRMPage.forgotPswdLink.click()
    })

    it("Scroll to Element, move to element and click", async () =>{

        console.log("Second method")
        browser.url("https://classic.crmpro.com/index.html")
        await CRMPage.forgotPswdLink.scrollIntoView()
        await CRMPage.forgotPswdLink.isDisplayedInViewport()
        await CRMPage.moveToElement(CRMPage.forgotPswdLink)
        await CRMPage.forgotPswdLink.click()
    })


})