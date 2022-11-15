class amazon{

    get Account(){
        return $('#nav-link-accountList-nav-line-1')
    }

    get Orders(){
        return $('=Your Orders')
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

module.exports = new amazon()