const HomePage = require('../pageobjects/homePage')

describe ('Calling HomePage',  function(){

    it("Using Methods from Homepage", async function(){

        await browser.url('https://the-internet.herokuapp.com/')
        await browser.pause(2000) 
        const header = await HomePage.headerName.getText()
        console.log("Header of the page: ", header)

        const subHeader = await HomePage.subHeading.getText()
        console.log("Sub Header of the page:  ", subHeader)

        await HomePage.supportLink.click();
        await browser.pause(2000)
    })
})