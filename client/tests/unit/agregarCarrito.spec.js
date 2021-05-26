import { shallowMount,  createLocalVue} from "@vue/test-utils"
import Trending from "@/components/trending/Trending-main.vue"
import Vuetify from 'vuetify';

describe('EmailRuleContact', () => {
    
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })

it('routing ropa', async () =>{
    const $route = { path: '/carrito' }
    const wrapper = shallowMount(Trending, {
        localVue,   
        vuetify,
        mocks: {
        $route
     }
    })
    
    expect(wrapper.vm.$route.path).toBe($route.path)

})

})