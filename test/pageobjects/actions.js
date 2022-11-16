class Actions{

    get search(){
        return $('#target')
    }

    get resultLabel(){
        return $('#result')
    }

    getResultLabelText(){
        this.resultLabel.waitForDisplayed({timeout: 50000})
        return this.resultLabel.getText()
    }

    enterSearch(text){
        this.search.waitForDisplayed()
        this.search.setValue(text)
    }
}

module.exports = new Actions()