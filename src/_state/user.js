import { atom } from 'recoil';

const localStorageSync = (key) => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  
  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

const userState = atom({
  key: 'userState',
  default: {},
  effects: [localStorageSync('user')]
});

export { userState };
