const saveData = (key, data) => {
    localStorage.setItem(key,JSON.stringify(data));

}
const loadData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export { saveData, loadData }