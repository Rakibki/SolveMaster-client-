const getLocalStore = (LsName) => {
  const lsCollection = localStorage.getItem(LsName);
  if (lsCollection) {
    return JSON.parse(lsCollection);
  }
  return [];
};

export default getLocalStore;
