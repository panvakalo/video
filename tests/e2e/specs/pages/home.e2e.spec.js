const baseUrl = 'http://localhost:8080'
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
const secondThumbnail = '.video-thumbnail:nth-of-type(2)'

module.exports = {
  '@tags': ['homepage'],
  before (browser) {
    browser
      .url(baseUrl)
      .execute(function () {
        window.localStorage.clear()

        return !window.localStorage.length
      }, [], (result) => {
        browser.assert.ok(result.value)
      })
  },
  'Homepage is empty and proper message is displayed': (browser) => {
    browser
      .url(baseUrl)
      .waitForElementVisible('.homepage-content', 1000)
      .assert.visible('.alert.alert__warning')
  },
  'Homepage displays video player and playlist': (browser) => {
    browser
      .url(baseUrl + '/add-video')
      .setValue('input[name=artist]', videos[0].artist)
      .setValue('input[name=title]', videos[0].title)
      .setValue('input[name=url]', videos[0].url)
      .click('button[type=submit]')
      .pause(1000)
      .setValue('input[name=artist]', videos[1].artist)
      .setValue('input[name=title]', videos[1].title)
      .setValue('input[name=url]', videos[1].url)
      .click('button[type=submit]')
      .pause(1000)
      .url(baseUrl)
      // video player and thumbnails are displayed
      .assert.visible('.video-player-box')
      .assert.visible('.video-thumbnail')
  },
  'Video player starts automatically': (browser) => {
    browser
      .url(baseUrl)
      .getCssProperty('.video-player-box', '.vjs-has-started', function (result) {
        this.assert.equal(typeof result, 'object')
        this.assert.equal(result.status, 0)
      })
  },
  'First thumbnail is marked as active': (browser) => {
    browser
      .assert.cssClassPresent('.video-thumbnail:first-of-type', 'active')
  },
  'Clicking on thumbnails changes the video and marks the thumbnail active': (browser) => {
    browser
      .waitForElementVisible('.homepage-content', 1000)
      .click(secondThumbnail)
      .pause(1000)
      .assert.cssClassPresent(secondThumbnail, 'active')
      .assert.attributeContains('.video-player-box iframe', 'src', videos[1].url)
  },
  'When playlist finishes, it starts all over again automatically': (browser) => {
    browser
      .waitForElementVisible('.homepage-content', 1000)
      .click(secondThumbnail)
      // pause for 10 seconds, since I know that the second video is only 6 seconds long
      .pause(10000)
      .assert.attributeContains('.video-player-box iframe', 'src', videos[0].url)
  },
  after (browser) {
    browser.end()
  }
}
