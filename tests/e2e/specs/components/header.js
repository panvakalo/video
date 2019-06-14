const baseUrl = 'http://localhost:8080/home'
const addVideoUrl = 'http://localhost:8080/add-video'
module.exports = {
  '@tags': ['header'],
  'Header button changes pages': (browser) => {
    browser
      .url(baseUrl)
      .waitForElementVisible('.header-wrapper', 1000)
      .pause(1000)
      .click('.header-button')
      .pause(1000)
      .assert.urlEquals(addVideoUrl)
      .pause(1000)
      .click('.header-button')
      .pause(1000)
      .assert.urlEquals(baseUrl)
  },
  after (browser) {
    browser.end()
  }
}
