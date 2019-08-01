const cart = {
  state: {
    order: [
      {
        id: '1',
        name: '龙之谷六周年限定礼包大Boss冰龙款男士T袖',
        price: 79.0,
        style: 'iphone x',
        size: 'M',
        qty: 1,
        img:
          'https://img.alicdn.com/tfscom/i2/195862297/O1CN01K5tISq1Sq4Hv8G30y_!!195862297.jpg_180x180xzq90.jpg_.webp',
        inventory: 2,
        checked: true,
        show: false
      },
      {
        id: '2',
        name: '龙之谷六周年限定礼包大Boss冰龙款女士T袖',
        price: 79.0,
        style: 'iphone x',
        size: 'L',
        qty: 1,
        img:
          'https://img.alicdn.com/imgextra/i4/2597378657/O1CN01Moh5a52DoxGYMshdv_!!2597378657-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
        inventory: 5,
        checked: true,
        show: false
      },
      {
        id: '3',
        name: '龙之谷六周年限定礼包大Boss冰龙款男孩T袖',
        price: 79.0,
        style: 'iphone x',
        size: 'xxs',
        qty: 1,
        img:
          'https://img.alicdn.com/imgextra/i2/274714172/O1CN01iJkXbc1ggovMmTPPT_!!274714172-0-daren.jpg_180x180xzq90.jpg_.webp',
        inventory: 15,
        checked: true,
        show: false
      },
      {
        id: '4',
        name: '龙之谷六周年限定礼包大Boss冰龙款男孩T袖',
        price: 79.0,
        style: 'iphone x',
        size: 'xxs',
        qty: 1,
        img:
          'https://img.alicdn.com/tfscom/i2/920335143/TB28velv9xjpuFjSszeXXaeMVXa_!!920335143.jpg_180x180xzq90.jpg_.webp',
        inventory: 15,
        checked: true,
        show: false
      }
    ]
  },
  mutations: {
    getPresell(state, payload) {
      state.order.productId = payload.id;
      state.order.name = payload.name;
      state.order.price = payload.price;
      state.order.img = payload.img;
      state.order.qty = payload.qty;
    },
    addQuantity(state, id) {
      state.order.find(item => item.id === id).qty++;
    },
    subQuantity(state, id) {
      if (state.order.find(item => item.id === id).qty > 1) {
        state.order.find(item => item.id === id).qty--;
      }
    },
    checked(state, id) {
      state.order.find(item => item.id === id).checked = !state.order.find(
        item => item.id === id
      ).checked;
    },
    deleteWindow(state, id) {
      state.order.find(item => item.id === id).show = !state.order.find(
        item => item.id === id
      ).show;
    },
    delcart(state, id) {
      state.order = state.order.filter(item => item.id != id);
    },
    delAllCart(state) {
      state.order = state.order.filter(item => item.checked != true);
    },
    changeChecked(state) {
      if (!state.order.find(item => item.checked === false)) {
        state.order = state.order.map(item => {
          return {
            id: item.id,
            img: item.img,
            size: item.size,
            type: item.style,
            name: item.name,
            price: item.price,
            qty: item.qty,
            checked: false
          };
        });
      } else {
        state.order = state.order.map(item => {
          return {
            id: item.id,
            src: item.src,
            size: item.size,
            style: item.style,
            name: item.name,
            price: item.price,
            qty: item.qty,
            checked: true
          };
        });
      }
    }
  },
  getters: {
    totalMoney(state) {
      const checkedArr = state.order.filter(item => item.checked);
      return checkedArr
        .reduce((res, item) => {
          return res + item.price * item.qty;
        }, 0)
        .toFixed(2);
    },
    totalqty(state) {
      const qtydArr = state.order.filter(item => item.checked);
      return qtydArr.reduce((res, item) => {
        return res + item.qty;
      }, 0);
    },
    changeCheck(state) {
      return !state.order.find(item => item.checked === false);
    },
    checkedGoods(state) {
      const goodsArr = state.order.filter(item => item.checked);
      return goodsArr;
    },
    goodsMoney(state, getters) {
      const num = getters.checkedGoods.length;
      const youhui = 10;
      const yunfei = 12;
      const money = getters.totalMoney;
      const price = 79.0;
      console.log(money);
      const goodsmy = {
        num: num,
        yunfei: yunfei,
        youhui: youhui.toFixed(2),
        price: price.toFixed(2),
        money: money,
        momeytotal: (money - youhui + yunfei).toFixed(2)
      };
      return goodsmy;
    }
  }
};
export default cart;
