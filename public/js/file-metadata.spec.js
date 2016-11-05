var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var fileMetadata = require('./file-metadata.js');

before(() => {
    jsdom()
});

describe('chooseFileButtonClick: ', () => {
    it('should exist', () => {
        assert.isFunction(fileMetadata.chooseFileButtonClick);
    });

});

describe('uploadButtonClick: ', () => {
    it('should exist', () => {
        assert.isFunction(fileMetadata.uploadButtonClick);
    });
    it('has document', function() {
        // var div = document.createElement('div')
        // assert.equal(div.nodeName, 'DIV');
        assert.isOk(document);
    });

    // it('works', function() {
    //     document.body.innerHTML = '<div class="test">hola</div>'
    //     assert.equal(document.getElementsByClassName("test").innerHTML(), 'hola');
    // })
});
