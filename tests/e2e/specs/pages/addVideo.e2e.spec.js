const baseUrl = 'http://localhost:8080/add-video'
const videos = [
  {
    artist: 'Video',
    title: 'Games',
    url: 'https://www.youtube.com/embed/ByDmVhx0VDA'
  },
  {
    artist: 'Star',
    title: 'Wars',
    url: 'https://www.youtube.com/embed/B7bqAsxee4I'
  }
]
module.exports = {
  '@tags': ['addVideo'],
  before (browser) {
    browser
      .url(baseUrl)
      .execute(function () {
        window.localStorage.clear()

        return !window.localStorage.length
      }, [], (result) => {
        browser.assert.ok(result.value)
        browser
          .url(baseUrl)
      })
  },
  'Video form is ready and empty': (browser) => {
    browser
      .waitForElementVisible('.videoForm', 1000)
      .assert.visible('input[name="artist"]')
      .assert.value('input[name="artist"]', '')
      .assert.visible('input[name="title"]')
      .assert.value('input[name="title"]', '')
      .assert.visible('input[name="url"]')
      .assert.value('input[name="url"]', '')
  },
  'Video form submits successfully and resets': (browser) => {
    browser
      .setValue('input[name=artist]', videos[0].artist)
      .setValue('input[name=title]', videos[0].title)
      .setValue('input[name=url]', videos[0].url)
      .click('button[type=submit]')
      .assert.value('input[name="artist"]', '')
      .assert.value('input[name="title"]', '')
      .assert.value('input[name="url"]', '')
  },
  'Video form shows error for duplicate video and prevents submitting': (browser) => {
    browser
      .setValue('input[name=artist]', videos[0].artist)
      .setValue('input[name=title]', videos[0].title)
      .setValue('input[name=url]', videos[0].url)
      .click('button[type=submit]')
      .assert.visible('.text__red')
      .assert.value('input[name="artist"]', videos[0].artist)
      .assert.value('input[name="title"]', videos[0].title)
      .assert.value('input[name="url"]', videos[0].url)
  },
  after (browser) {
    browser.end()
  }
}
