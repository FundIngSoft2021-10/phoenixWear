import { mount, createLocalVue} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Contact from '@/components/contact/Main-contact.vue'
import { config } from '@vue/test-utils'
config.showDeprecationWarnings = false;

describe('Header.vue', () => {
    
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })

    it('method called with clickButton searchBar', async () =>{
      const $route = { path: 'https://formspree.io/f/mbjqjand' }
        const wrapper = mount(Contact, {
            localVue,
            vuetify,
            mocks: {
              $route
           }
          })
       
      wrapper.find("#formId")
      expect(wrapper.vm.$route.path).toBe($route.path)
    })
})