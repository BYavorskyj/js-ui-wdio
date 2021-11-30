
describe('Website', function() {

    it('should be alive',function() {
        browser.url('/');
        expect($('#header_logo')).toBeDisplayed()
        
    })
})