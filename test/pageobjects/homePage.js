class homePage {
    
    get headerName() {
        return $('h1')
    }

    get subHeading() {
        return $('h2')
    }

    get supportLink() {
        return $("//a[text()='Checkboxes']")
    }

}

module.exports = new homePage()