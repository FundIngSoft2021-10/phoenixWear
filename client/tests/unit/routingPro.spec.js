import { createLocalVue, mount } from '@vue/test-utils'
import Contact from '@/components/contact/Main-contact.vue'
import VueRouter from 'vue-router'

describe('rountingContact', () => { 
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const routes = [  //Can also be rreplaced with route(router.js) file
                {
                path: '/contacto',
                component: Contact,
                name: 'Contacto'
                }
                ]
    const router = new VueRouter({
                routes
                })
    router.push({ 
                name: 'Contacto',
                params: {} 
                }) 

                const wrapper = mount(Contact, {localVue, router})
                
                beforeEach(function() {      
                });

    it('rounting 2 Contact', () => {
      
        expect(wrapper.vm.$route.path).toBe(routes[0].path)
    });
});