class crmpro{

    get forgotPswdLink(){
        return $('=Forgot Password?')
    }

    moveToElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }

}
module.exports = new crmpro()