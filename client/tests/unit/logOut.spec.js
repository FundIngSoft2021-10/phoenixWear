import { mount, createLocalVue} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Header from '@/components/general/Header.vue'
import { config } from '@vue/test-utils'


config.showDeprecationWarnings = false;

describe('Header.vue', () => {
    
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })

    it('method logout called', async () =>{

      let logout = jest.fn()

        const wrapper = mount(Header, {
            localVue,   
            vuetify,
            methods: {
              logout
          },
          })
          wrapper.find('#log').trigger('click')
          expect(logout).toHaveBeenCalledTimes(1)  
    })
})