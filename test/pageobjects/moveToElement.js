class Carters{

    get baby(){
        return $('//a[@aria-controls="baby-clothes"]//span[text()=" Baby "]')
    }
    get babyGirl(){
        return $('= Baby Girl ')
    }
    get babyGirlOptions(){
        return $('= New Baby ')
    }

    moveToElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }

    clickElement(element){
        element.waitForDisplayed()
        element.click()
    }
}

module.exports = new Carters()