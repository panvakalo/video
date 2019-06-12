const baseUrl = 'http://localhost:8080'
module.exports = {
  'User logins and logs out successfully': (browser) => {
    browser
      .url(baseUrl)
      .waitForElementVisible('.login', 1000)
      .setValue('.login input[type=text]', 'whatever')
      .setValue('.login input[type=password]', 'whateverAgain')
      .click('button[type=submit]')
      .pause(1000)
      .assert.urlEquals(baseUrl + '/home')
      .click('.header-wrapper button')
      .pause(1000)
      .assert.urlEquals(baseUrl + '/login')
      .end()
  }
}
