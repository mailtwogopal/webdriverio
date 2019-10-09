var Page = require('./page')

var SearchPage = Object.create(Page, {
    yahooSearchBox : {get: function () { return browser.element("//input[@name='p']");}},

    enterValue: {value : function (searchText) {
        this.yahooSearchBox.setValue(searchText);
    }

    }
})

module.exports = SearchPage;