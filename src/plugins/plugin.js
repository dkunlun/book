export default function creatLocalState ({
    key = 'vuex',
    getState = (key, storage) => {
        const value = storage.getItem(key);

        try {
            return value && value !== 'undefined' ? JSON.parse(value) : undefined
        } catch (e) {
            return undefined
        }
    }
} = {}) {
    let storage = window && window.sessionStorage

    return store => {
        const savedState = getState(key, storage)
        if(typeof savedState === 'object') {
            store.replaceState(Object.assign({}, store.state, savedState))
        }
        store.subscribe((mutation, state) => {
            storage.setItem(key, JSON.stringify(state))
        })
    }
}
