//const cartersPage = require('../pageobjects/moveToElement')
const amazonPage = require('../pageobjects/moveToElementAm')

describe("Page action features",  () =>{

    it("Move to Element",async() =>{

        //browser.url('https://www.cartersoshkosh.ca/')
        browser.url('https://www.amazon.ca/b?ie=UTF8&node=16040885011')
        await browser.maximizeWindow()
        await browser.pause(2000)

        // await cartersPage.moveToElement(await cartersPage.baby)
        // await cartersPage.moveToElement(await cartersPage.babyGirl)
        // await cartersPage.clickElement(await cartersPage.babyGirlOptions)
        await amazonPage.moveToElement(await amazonPage.Account)
        await amazonPage.clickElement(await amazonPage.Orders)
        await browser.pause(2000)

        
    })

    it("Keys Action", async() =>{
        
    })
})