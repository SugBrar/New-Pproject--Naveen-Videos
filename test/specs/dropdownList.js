describe("Drop Down List", () => {
    // it("All values of the drop down list ", async () =>{

    //     browser.url("https://the-internet.herokuapp.com/dropdown")
    //     await browser.pause(2000)
    //     const list = await $$("//select[@id='dropdown']//option")
    //     await browser.pause(2000)
    //     console.log("Length of list: ",list.length)
    //     await browser.pause(2000)

    //     for(let i=0;i<list.length;i++){
    //         const element =list[i]
    //         console.log("Values: ", element.getText())
    //     }

    it("All values of the drop down list ", async () =>{

        browser.url('https://www.facebook.com/')
        
        const createNewAcc = await $('//a[text()="Create new account"]');
        await createNewAcc.click();
        await browser.pause(2000) // without this pause, it throws error because it takes time to oad page
        const list = await $$('//select[@name="birthday_day"]//option')
        await browser.pause(2000)
        console.log("DLength: ",list.length)
        await browser.pause(2000)

        for(let i=0;i<list.length;i++){
            const element =list[i]
            console.log("DValues: ", element.getText())
        }

        // it("All values of the drop down list ", async () =>{

        // browser.url("https://www.reitmans.com/on/demandware.store/Sites-Reitmans_CA-Site/default/Client-SignUp")
        // await browser.pause(2000)
        // const list = await $$("//select[@id='dwfrm_profile_customer_birthday__month']//option")
        // await browser.pause(2000)
        // console.log("MLength: ",list.length)
        // await browser.pause(2000)

        // for(let i=0;i<list.length;i++){
        //     const element =list[i]
        //     console.log("MValues: ", element.getText())
        // }
    })
})