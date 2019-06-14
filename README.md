# video

### Description
This is the assignment for a vuejs video manager

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run end-to-end tests
```
npm run test:e2e
```

### Run unit tests
```
npm run test:unit
```

# Developer's notes
### Youtube
During this test, only Youtube tests have been used, with the knowledge that other type of videos (Vimeo etc) needed their own way of handling. However for the sake of speed, only this case was covered.

### Vue video player
In order to enable event handling while one video was ending and trigger other actions, npm package `vue-video-player` is used.

### Design
Even though I work with Vuetify, I wanted to experiment with my own mini styling framework, so as to demonstrate SCSS and CSS skills. Therefore, some components might seem too rough, given the time I spent to create them.

### Unit testing VS e2e testing
Due to the amount of time I had to invest to research on video manipulation (haven't worked with videos up to now), I managed to set a full set of e2e tests, covering all functionality. However, I didn't have time to invest on unit testing, so I covered only one component (header), as a proof-of-concept for unit testing in this project.
