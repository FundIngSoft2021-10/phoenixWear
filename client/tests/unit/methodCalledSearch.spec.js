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

    it('method called with clickButton searchBar', async () =>{
        let changeMode = jest.fn()

        const wrapper = mount(Header, {
            localVue,
            vuetify,
            methods: {
                changeMode
            },
          })
       
        wrapper.find('#buscar').trigger('click')
        expect(changeMode).toHaveBeenCalledTimes(1)  
    })
})

