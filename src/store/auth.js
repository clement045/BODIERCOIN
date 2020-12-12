
import axios from 'axios';


export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) { // retourn true si il y a un token + user dans le state, false sinon
            //var est = false;
            if (state.token && state.user) {
               return true;
            } else {
                return false;
            }
        },

        user(state) { //retourne l'utilisatuer
            return state.user;
        }
    },

    mutations: {
        SET_TOKEN(state, token) { 
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },

    actions: {
        async signin( { dispatch } , credentials ) { // on appelle la method signin, avec email et mdp
            
            let res = await axios.post('https://haute-loire.org/api/auth/signin', { //vérifie si mail et mdp sont les bons
                'email': credentials[0],
                'password': credentials[1]
            });
            //console.log(res.data);
            return dispatch('attempt', res.data.token); //en envoie le token de la réponse dans la methode attempt
        },

        async attempt( { commit, state }, token) { //on récupère la réponse du signin (le token, ou rien du tout)
            //console.log(token);
            if (token) {
                commit('SET_TOKEN', token); // on change le state en ajoutant le token
                //on ajoute le token au header dans le subscriber.js pdt le commit SET_TOKEN car on "écoute" la mutation du commit
            }
            if(!state.token) {
                return
            }

            try {
                let response = await axios.get('https://haute-loire.org/api/auth/me' //on teste si le token est valide
                   
                );
                commit('SET_USER', response.data); //si oui, on set le state avec les users (réponse du auth/me)
            }
            catch (err) { // token non valide => on supprime les infos stockées dans VUE, par null
                console.log('failed get me API request :) ');
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },

        signout( { commit } ) {
            return axios.post('https://haute-loire.org/api/auth/signout').then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            })
        }
    }
}