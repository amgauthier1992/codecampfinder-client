import { atom, selector } from 'recoil';

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

const sessionState = atom({
  key: 'sessionState',
  default: {},
  effects: [localStorageSync('session')]
});

const isAuthenticatedState = selector({
  key: 'isAuthenticatedState',
  get: ({ get }) => get(sessionState)?.isAuthenticated,
  set: ({ get, set }, newValue) =>
    set(sessionState, { ...get(sessionState), ...{ isAuthenticated: newValue } })
});

export { sessionState, isAuthenticatedState };
