import store from '@/store';
import axios from 'axios';

store.subscribe((mutation) => { //on "écoute" chaque mutation
    //console.log(mutation);
    
    switch(mutation.type) { 
        case 'auth/SET_TOKEN': //si mutation vient de auth / SET_TOKEN
            //console.log(mutation.payload);
            if (mutation.payload) { 
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`; //on ajoute le header à la requete
                localStorage.setItem('token', mutation.payload); //et on garde le token en local storage
            } else {
                axios.defaults.headers.common['Authorization'] = null; //sinon pas de header
                localStorage.removeItem('token'); //et on enlmeve le token du local storage
            }

            break;
    }


})