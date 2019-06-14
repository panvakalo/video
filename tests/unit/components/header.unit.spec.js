import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import header from '../../../src/components/header'

const localVue = createLocalVue()
localVue.use(VueRouter)
const $route = { path: '/home', name: 'home' }
const router = new VueRouter()

describe('Header', () => {
  const wrapper = shallowMount(header, {
    router,
    mocks: {
      $route
    }
  })

  it('header button has correct data', () => {
    const buttonData = [
      {
        routeName: 'add-video',
        text: 'Add Video'
      },
      {
        routeName: 'home',
        text: 'Go back'
      }
    ]
    expect(wrapper.vm.buttonData).toEqual(buttonData[0])
    wrapper.vm.$route.name = ''
    expect(wrapper.vm.buttonData).toEqual(buttonData[0])
    wrapper.vm.$route.name = 'add-video'
    expect(wrapper.vm.buttonData).toEqual(buttonData[1])
  })
})
