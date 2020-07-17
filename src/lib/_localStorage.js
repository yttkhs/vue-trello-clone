export const _localStorage = {
  // ローカルストレージからデータを呼び出す
  fetch(STORAGE_KEY) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  },

  // ローカルストレージにデータを格納する
  set(STORAGE_KEY, DATA) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
  },

  // ローカルストレージのデータを削除
  delete(key) {
    localStorage.removeItem(key);
  }
};
