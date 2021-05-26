import { mount, createLocalVue} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Contact from '@/components/contact/Main-contact.vue'
import { config } from '@vue/test-utils'
import Vue from 'vue';

config.showDeprecationWarnings = false;

describe('EmailRuleContact', () => {
    
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })

    it('method verify email rule', async () =>{

        const wrapper = mount(Contact, {
            localVue,   
            vuetify,
          })
        const namev = '';

        let nameW = wrapper.find('#nameId')
        nameW.trigger('focus');
        nameW.setValue(namev);
        nameW.trigger('blur');
        //emailW.setValue(emailv);
        await Vue.nextTick();
       
        //expect(wrapper.vm.email).toBe(emailv);
       // expect((wrapper.vm.email).text()).toBe(emailv);
  
       expect(wrapper.find('.v-messages__message').text()).toEqual('El campo es obligatorio')
      
  
    })
})