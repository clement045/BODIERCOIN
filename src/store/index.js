import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'

Vue.use(Vuex);

const state = {
    retailerCategories: [
        {
            id: 0,
            category: "Commerce alimentaire"
        },
        {
            id: 1,
            category: "Restaurant, bar"
        },
        {
            id: 2,
            category: "Artisanat"
        },
        {
            id: 3,
            category: "Habillement, mode"
        },
        {
            id: 4,
            category: "Librairie"
        },
        {
            id: 5,
            category: "Mécanique, réparation"
        },
        {
            id: 6,
            category: "Services"
        },
        {
            id: 7,
            category: "Autre catégorie"
        }
    ]
}

const getters = {
    getRetailerCategories(state) {
        return state.retailerCategories;
    }
}

const mutations = {

}





const actions = {
   
}



export default new Vuex.Store({

    state: state,

    getters: getters,

    mutations: mutations,

    actions: actions,

    modules: {
        auth
    }


});