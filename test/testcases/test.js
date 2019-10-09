var SearchPage = require('../page/search')
var data = require('../data/testdata.json')
var keyword = data.uat1.search;
var expect = require('chai').expect;
var NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);
describe('sample test', function(){
    it('first testcase', function(){
        browser.url('/');
        SearchPage.enterValue(keyword);
        var title = browser.getTitle();
        expect(title).to.equal('Yahoo');

    })
});