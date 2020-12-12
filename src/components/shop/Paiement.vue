<template>
  <div id="paiement">
    <div id="corpse">


        <template v-if="authenticated">  

               
                            
                            <div v-if="this.numberCoin == 0">
                                 <p class="cta">Prêt à acheter des tokens, <span class="highlighted">{{user.name}}</span> ?</p>
                                <BuyTokens v-on:numberCoins="onChildClick"/>
                            </div>
                            <div v-else>
                                   Let's pay,  <span class="highlighted">{{ user.name }}</span>.
                                <StripePaiement v-bind:numberCoin="this.numberCoin" v-bind:userId="user.id" v-bind:userName="user.name"/>
                            </div>  

                             <Exchange v-bind:userId="user.id"/>
                                                    
        </template>
      
        
        

    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';
import StripePaiement from '@/components/shop/StripePaiement.vue';
import Exchange from '@/components/shop/Exchange.vue';
import BuyTokens from '@/components/shop/BuyTokens.vue';

export default {
  name: 'Paiement',
  components: {
    StripePaiement,
    BuyTokens,
    Exchange
  },
  data() {
    return {
      number: null,
      numberCoin: 0
    }
  },
  computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
  },
  methods:{
      ...mapActions({
            signoutAction: 'auth/signout' //signoutAction = action du STORE
        }),
        signout() { //méthode appelée par la fonction 
            this.signoutAction().then(() => {
                this.$router.replace({
                    name: 'Home'
                })
            })
        },
        onChildClick (value) {
            this.numberCoin = value
            //console.log(value)
            //console.log(this.fromChild)
         }
  }
}
</script>



<style>
      #paiement{
        padding: 5em;
      }
      .highlighted{
        color:#ffa008;
        font-weight: 700;
      }
      .cta{
        font-size: 20px;
        font-weight: bold;
      }
</style>
