import { shallowMount,  createLocalVue} from "@vue/test-utils"
import Header from "@/components/general/Header.vue"
import Vuetify from 'vuetify';

describe('EmailRuleContact', () => {
    
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })

it('routing ropa', async () =>{
    const $route = { path: '/cuenta' }
    const wrapper = shallowMount(Header, {
        localVue,   
        vuetify,
        mocks: {
        $route
     }
    })
    wrapper.find('#cuentaId').exists()
    expect(wrapper.vm.$route.path).toBe($route.path)

})

})