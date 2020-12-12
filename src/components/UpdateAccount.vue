<template>
  <div>
    <br>
    <h3>Vos informations personnelles :</h3>
    <br><br>

    <form class="form" @submit.prevent="updateProfile">
      <label>
        <textarea class="border rounded p-3" v-model="profile.firstName"></textarea>
      </label>
      <tag class="border rounded p-3">Prénom</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.lastName"></textarea>
      </label>
      <tag class="border rounded p-3">Nom</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.email"></textarea>
      </label>
      <tag class="border rounded p-3">Mail</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.address"></textarea>
      </label>
      <tag class="border rounded p-3">Adresse</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.city"></textarea>
      </label>
      <tag class="border rounded p-3">Ville</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.postalCode"></textarea>
      </label>
      <tag class="border rounded p-3">Code postal</tag>
      <p></p>
      <button type="submit" class="border btn btn-lg btn-dark rounded p-3">Editer le profil</button>
    </form>
    <br>
    <br>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'

import {mapGetters} from 'vuex';

Vue.use( axios)

export default {
  name: "UserProfile",
  data() {
    return {
      profile: ''
    }
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    }),

  },

  methods: {

    getProfile() {
      axios.get('https://haute-loire.org/api/user/' + this.user.id)
          .then((result) => {
            console.log(result);
            this.profile = result.data;
            console.log(this.profile)
          })
    },

    async updateProfile() {
      let latLong = await this.getLatLong(); //on récupère la lat et long dans cette variable

      axios.patch(('https://haute-loire.org/api/user/' + this.user.id), {
        'email': this.profile.email,
        'firstName': this.profile.firstName,
        'lastName': this.profile.lastName,
        'address': this.profile.address,
        'city': this.profile.city,
        'postalCode': this.profile.postalCode,
        'name': this.profile.firstName+" "+this.profile.lastName,
        'latitude': latLong[0], //latitude est le premier élément de la variable latLong
        'longitude': latLong[1]  //longitude est le second élément de la variable latLong
                    
      })
          .then((response) => {
            console.log(response);
          });
          //alert("La mise à jour a été effectuée avec succès");
    },
    async getLatLong() { 
            let url = "https://nominatim.openstreetmap.org/search.php";
            let params = {
                q: this.adress+" "+this.city+" "+this.postCode,
                format: 'json',
                addressdetails: 1
            };
            const res = await axios.get(url, {params: params}); //on stock la réponse dans cette variable
            console.log(res.data[0].lat);
            console.log(res.data[0].lon);
            return [res.data[0].lat, res.data[0].lon]; //on retourne un tableau avec les 2 éléments

        }
  },

  mounted() {
    this.getProfile();
    this.updateProfile()
  }
}

</script>

<style scoped>

</style>