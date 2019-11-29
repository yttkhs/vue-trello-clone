export const LocalStorage = {
  /**
   * ローカルストレージからデータを呼び出す
   * @param STORAGE_KEY
   * @returns {any}
   */
  fetch(STORAGE_KEY) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  },
  /**
   * ローカルストレージにデータを格納する
   * @param STORAGE_KEY
   * @param DATA
   */
  set(STORAGE_KEY, DATA) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
  }
};
