const address = {
  state: {
    address: [
      {
        id: 'a1',
        name: '阿木来提.阿不都热西提',
        local:
          '新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭姆村9连5区13号',
        phone: 18645629876,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://github.com/Loving-xinxin/vue-mozan/blob/master/src/assets/location.png',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: true,
        changeDefault: true
      },
      {
        id: 'a2',
        name: '买买提艾力',
        local: '新疆维吾尔自治区伊犁州新源县提镇农场科勒布拉克二组',
        phone: 18712354259,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: false,
        changeDefault: false
      },
      {
        id: 'a3',
        name: '爱丽木拉提',
        local: '广西壮族自治区柳州市柳南区',
        phone: 18964123589,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: false,
        changeDefault: false
      }
    ],
    selectS: true,
    selectP: true,
    selectB: true,
    selectUb: true,
    checkedone: false,
    checkedtwo: false,
    checkedthree: false,
    checkedfour: false,
    showAddress: false,
    gou: false
  },
  mutations: {
    selectStyle(state) {
      state.selectS = !state.selectS;
    },
    selectPay(state) {
      state.selectP = !state.selectP;
    },
    selectBill(state) {
      if ((state.selectUb = false)) {
        state.selectB = true;
      }
    },
    selectUbill(state) {
      if ((state.selectB = false)) {
        state.selectUb = true;
      }
    },
    showGou(state) {
      state.gou = !state.gou;
    },
    delwin(state, id) {
      state.address.find(item => item.id === id).showdel = !state.address.find(
        item => item.id === id
      ).showdel;
    },
    payCheckedone(state) {
      state.checkedone = !state.checkedone;
    },
    payCheckedtwo(state) {
      state.checkedtwo = !state.checkedtwo;
    },
    payCheckedthree(state) {
      state.checkedthree = !state.checkedthree;
    },
    payCheckedfour(state) {
      state.checkedfour = !state.checkedfour;
    },
    delAddress(state, id) {
      state.address = state.address.filter(item => item.id != id);
    },
    showdizhi(state) {
      state.showAddress = !state.showAddress;
    },
    checkedshouhuo(state, id) {
      state.address = state.address.map(item => {
        if (item.id != id) {
          return { ...item, checkedLi: false };
        } else {
          {
            return { ...item, checkedLi: true };
          }
        }
      });
    },
    changefont(state, id) {
      state.address = state.address.map(item => {
        if (item.id != id) {
          return { ...item, changeDefault: false };
        } else {
          {
            return { ...item, changeDefault: true };
          }
        }
      });
    }
  }
};
export default address;
