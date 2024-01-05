import { atom } from 'recoil';

const alertAtom = atom({
  key: 'alert',
  default: {
    error: {
      response: {},
      message: '',
    },
  },
});

export { alertAtom };
