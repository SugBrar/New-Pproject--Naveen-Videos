describe("Drop Down List", () => {
    it("All values of the drop down list ", async () =>{

        browser.url("https://the-internet.herokuapp.com/dropdown")
        await browser.pause(2000)
        const list = await $$("//select[@id='dropdown']//option")
        await browser.pause(2000)
        console.log("Length of list: ",list.length)
        await browser.pause(2000)

        for(let i=0;i<list.length;i++){
            const element =list[i]
            console.log("Values: ", element.getText())
        }

    // it("All values of the drop down list ", async () =>{

    //     browser.url('https://www.facebook.com/')
    //     await browser.pause(2000)
    //     const createNewAcc = await $('//a[text()="Create new account"]');
    //     await createNewAcc.click();

    //     let monthList = await $$("//select[@id='month']//option")
    //     console.log("Length of list: ", monthList.length)
    //     await browser.pause(2000)

    //     for(let i=0;i<monthList.length;i++){
    //         const element =monthList[i]
    //         console.log("Values: ", element.getText())
    //     }
    })
})