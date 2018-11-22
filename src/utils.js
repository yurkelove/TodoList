
export const getFromLS = (key) => {
    try {
     return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return null;
    }
};

export const writeToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
