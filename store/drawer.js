
export const state = () => ({
    drawer: false 
})

export const mutations = {

    toggle(state) {
        state.drawer = !state.drawer
        console.log(state.drawer);
    }
    
}

export const getters = {
    getNavState(state) {
    return state.drawer;
    }
}