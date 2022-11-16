//const cartersPage = require('../pageobjects/moveToElement')
//const amazonPage = require('../pageobjects/moveToElementAm')
const actionPage = require('../pageobjects/actions')

describe("Page action features",  () =>{

    // it("Move to Element",async() =>{

    //     //browser.url('https://www.cartersoshkosh.ca/')
    //     browser.url('https://www.amazon.ca/b?ie=UTF8&node=16040885011')
    //     await browser.maximizeWindow()
    //     await browser.pause(2000)

    //     // await cartersPage.moveToElement(await cartersPage.baby)
    //     // await cartersPage.moveToElement(await cartersPage.babyGirl)
    //     // await cartersPage.clickElement(await cartersPage.babyGirlOptions)
    //     await amazonPage.moveToElement(await amazonPage.Account)
    //     await amazonPage.clickElement(await amazonPage.Orders)
    //     await browser.pause(2000)

        
    // })

    it("Keys Action perform Tab", async() =>{

        browser.url('https://the-internet.herokuapp.com/key_presses?')
        await actionPage.enterSearch("Escape")
        const ent = await actionPage.getResultLabelText()
        console.log(ent)
        await browser.pause(2000)

    })
})