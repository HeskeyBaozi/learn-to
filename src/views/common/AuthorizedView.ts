import store from '@/stores';
import { ROLE } from '@/stores/modules/authorization/contants';
import Vue from 'vue';

export default Vue.extend({
  functional: true,
  name: 'authorized-view',
  props: {
    authorities: {
      type: Array
    }
  },
  render(_, context) {
    let result = null;
    const currentRole = store.getters[`authorization/${ROLE}`];
    let isMatched = false;
    if (!context.props.authorities || context.props.authorities && context.props.authorities.includes(currentRole)) {
      isMatched = true;
    }
    const slots = context.slots();
    const slotsDefault = slots.default;
    const slotsNoMatch = slots['no-match'];
    if (isMatched) {
      result = slotsDefault && slotsDefault[0] || null;
    } else if (slotsNoMatch) {
      result = slotsNoMatch[0] || null;
    }
    return result;
  }
});
