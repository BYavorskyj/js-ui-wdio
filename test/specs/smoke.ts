
describe('Website', function() {

    it.skip('should be alive',function() {
        browser.url('/');
        expect($('#logo')).toBeDisplayed()
    })
    it('should allow uswer to register', function () {
        browser.url('/simpleregister/')
        browser.pause(1000000)
        const simplepage_form = $('#simplepage_form')

        const email = simplepage_form.$('#register_email')
        const emailString = `Test+${Date.now()}@gmail.com`
        email.setValue(emailString)

        const password = simplepage_form.$('#register_password')
        password.setValue('Qwerty123')

        const confirm_password = simplepage_form.$('#register_confirm_password')
        confirm_password.setValue('Qwerty123')

        const firstName = simplepage_form.$('#register_firstname')
        firstName.setValue('Test')

        const lasttName = simplepage_form.$('#register_lastname')
        lasttName.setValue('Test')

        const telephone = simplepage_form.$('#register_telephone')
        telephone.setValue('0931234567')

        const country_id = simplepage_form.$('#register_country_id')
        country_id.setValue('Украина')

        const zone_id = simplepage_form.$('#register_zone_id')
        zone_id.setValue('Киев')

        const city = simplepage_form.$('#register_city')
        city.setValue('Киев')

        const postcode = simplepage_form.$('#register_postcode')
        postcode.setValue('12345')

        const address_1 = simplepage_form.$('#register_address_1')
        address_1.setValue('12')

        const button_confirm = simplepage_form.$('3simpleregister_button_confirm')
        button_confirm.click()

        browser.pause(1000000000)

    })
})