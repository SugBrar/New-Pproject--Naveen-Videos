class ReitmansPage {

    get parent(){
        //return $('//ul[@class="menu-category level-1"]')
        return $('ul.menu-category.level-1')
    }

    get childElements(){
        //return this.parent.$$("li[contains(@class,'level-1 ')]")
        return this.parent.$$('li.level-1')
    }

    get getTextForA(){
        return this.childElements.filter(elements =>{
            console.log(elements.getText());
        })
    }

    get customerServiceElements(){
        return $$('div.linkboxcolumn.prefix_2>ul>li')
    }
    
    get customerServiceElementsText(){
        return this.customerServiceElements.filter(element =>{
            console.log(element.getText());
        })
    }

}

module.exports = new ReitmansPage()