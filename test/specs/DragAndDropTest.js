describe("Drag and Drop action", () =>{

    it("Handle Drag and drop", async () =>{

        browser.url("https://jqueryui.com/droppable/")
        const frame = await $('//iframe[@class="demo-frame"]')
        await browser.pause(5000)
        //expect(frame).toExist()
        await browser.switchToFrame(1)
        await browser.pause(5000)

        const selectorElement = await $('#draggable')
        const targetElement = await $('#droppable')
        await selectorElement.dragAndDrop(targetElement)
        await browser.pause(5000)
    })
})