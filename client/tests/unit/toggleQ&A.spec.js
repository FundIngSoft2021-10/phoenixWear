import Question from '@/components/Q&A/Question.vue'
import { config } from '@vue/test-utils'
config.showDeprecationWarnings = false;

describe('Question.vue', () => {

    it('clickButtonDropDown', async () =>{
        
          let data = Question.data()
          expect(data.show).toBe(false)
    })

})

