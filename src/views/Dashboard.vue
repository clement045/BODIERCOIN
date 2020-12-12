<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-center " id="user-dashboard-menu">
            <br><br><br>
            <h2>menu utilisateur</h2>
            <div class="user-dashboard-profile">
              <!-- User Image -->
              <div class="profile-thumb">
                <img src="../../public/pp.jpg" alt="" class="rounded-circle">
              </div>
              <!-- User Name -->
              <br>
              <h4 class="text-center">{{ this.currentUser.name }}</h4>
              <p>Membre depuis le : </p>
              <p>{{ this.currentUser.created_at.slice(0,10) }}</p>
              <h5>Votre solde Bordier Coin:</h5>
              <p>{{ this.currentUser.payroll }} Bordier Coins</p>
            </div>

            <div class="user-dashboard-menu text-left">
              <ul>
                 <li class="" v-on:click="updateAccountMenu">
                  <a href="#"><i class="" ></i>Modifier mon compte utilisateur</a>
                </li>
                <li v-on:click="retailerRegisterMenu" >
                  <a href="#"><i class="" ></i>Editer un compte commerçant</a>
                </li>
                <li v-on:click="paimentMenu">
                  <a href="#"><i class=""></i>Solde Ethicoins</a>
                </li>
                <li @click="deleteAccount">
                  <a href="#"><i class="" ></i>Supprimer mon compte</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 text-center" id="dashboard">
            <br><br>
            <RetailerRegistration v-if="displayRetailerRegistration"/>
            <UpdateAccount v-if="displayUpdateAccount"/>
            <Paiement v-if="displayPayroll"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RetailerRegistration from '@/components/RetailerRegistration.vue';
import UpdateAccount from '@/components/UpdateAccount.vue';
import Paiement from '@/components/shop/Paiement.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'Dashboard',

  components: { RetailerRegistration, UpdateAccount, Paiement },

  data() {
    return {
      currentUser: null,
      displayUpdateAccount: true,
      displayRetailerRegistration: false,
      displayPayroll: false,
    }
  },
  methods: {
    updateAccountMenu() {
      this.displayUpdateAccount = true;
      this.displayRetailerRegistration = false;
      this.displayPayroll = false;
      this.classList.add("active");
      /*
      var t = document.querySelectorAll(".user-dashboard-menu li");
      t.forEach(element => {
        element.classList.add("active");
      });*/

    },
    retailerRegisterMenu() {
      this.displayUpdateAccount = false;
      this.displayRetailerRegistration = true;
      this.displayPayroll = false;

    },
    paimentMenu() {
      this.displayUpdateAccount = false;
      this.displayRetailerRegistration = false;
      this.displayPayroll = true;
    },
    async getUserDetails() {
      var res = await axios.get('https://haute-loire.org/api/user/'+this.user.id);
      this.currentUser = res.data;
    },
    async deleteAccount() {
      var reponse = confirm("Etes-vous certain de vouloir supprimer votre compte ?");
      if (reponse) {
        var res = await axios.delete('https://haute-loire.org/api/user/'+this.user.id);
        console.log(res);
        location.reload();
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  beforeMount() {
    this.getUserDetails();
  }
}

</script>

<style scoped>

.user-dashboard-menu li {
  margin-bottom: 5px;
  list-style: none;
}


.user-dashboard-menu li a {
  padding: 10px;
  font-size: 15px;
  display: block;
  font-weight: 600;
  color: #555;
  text-decoration: none;
}

.user-dashboard-menu li a:hover {
  color: #5672f9;
}

.user-dashboard-menu li a:hover span {
  background: #5672f9;
  color: #fff;
}

.user-dashboard-menu li a i {
  margin-right: 5px;
}


</style>