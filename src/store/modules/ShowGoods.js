const showgoods = {
  state: {
    presell: {
      id: '1',
      name: '龙之谷六周年限定礼包大Boss冰龙款男士T袖',
      price: '800',
      inventory: 2,
      img:
        'https://github.com/Loving-xinxin/vue-mozandata/blob/master/src/assets/scar.png',
      style: '',
      size: '',
      qty: 1
    }
  },
  mutations: {
    pickStyle(state, payload) {
      state.presell.style = payload.style;
    },
    pickSize(state, payload) {
      state.presell.size = payload.size;
    },
    add(state) {
      state.presell.qty++;
    },
    sub(state) {
      if (state.presell.qty > 1) {
        state.presell.qty--;
      }
    }
  }
};
export default showgoods;
