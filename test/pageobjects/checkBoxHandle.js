class internetPage{

    get h3Header(){
        return $('h3')
    }

    getlinkElement(index){
        return $(`ul li:nth-child(${index}) a`) 
        // when using {index}, we have to use `` instead of single quotes
    }

    clickOnLink(index){
        this.getlinkElement(index).waitForDisplayed()
        this.getlinkElement(index).click()
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes>input:nth-child(${index})`)
    }

    clickOnCheckBox(index){
        this.getCheckBoxElement(index).waitForDisplayed()
        this.getCheckBoxElement(index).click()
    }
}

module.exports = new internetPage()