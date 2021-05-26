import { shallowMount} from "@vue/test-utils"
import Ropa from "@/components/clothes/Main-clothes.vue"

it('routing ropa', async () =>{
    const $route = { path: '/ropa' }
    const wrapper = shallowMount(Ropa, {
     mocks: {
        $route
     }
    })
    expect(wrapper.vm.$route.path).toBe($route.path)

})