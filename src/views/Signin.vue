<template>
    <div class="text.center row flex text-center">
        <div class="col align-content-center border" id="signin-form">
            
            <form  @submit.prevent="submit">
                <br><br><br><br>

                <div>
                    <label for="email">
                        Email :
                    </label>
                    <br>
                    <input type="text" name="email" id="email" v-model="email">
                </div>
                <br>
                <div>
                    <label for="password">
                        Mot de passe :
                    </label>
                    <br>
                    <input type="password" name="password" id="password" v-model="password">
                </div>
                <br><br>
                <div>
                    <button class="btn btn-dark" type="submit">Se connecter</button>
                </div>
            </form>
            <br>
            <p>
                <router-link :to="{name: 'Register'}">Créer un compte ici</router-link>
            </p>
        </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex';
//import axios from 'axios';

export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
    }
  },


  methods: {
      ...mapActions({
            signin: 'auth/signin'
        }),
        submit() {
            console.log("submitted");
            console.log(this.email);
            
            this.signin([this.email, this.password]).then(() => { //si login, on redirige vers dashboard
                this.$router.replace({
                    name: 'Dashboard'
                }).catch(() => {
                    console.log('login failed'); //ou bien afficher un message d'erreur dans la page HTML
                });
            })
            /*
            let res = await axios.post('http://localhost:8000/api/auth/signin', {
                'email': this.email,
                'password': this.password
            });
            console.log(res.data);
            */

        }
  }
}
</script>

<style scoped>


</style>