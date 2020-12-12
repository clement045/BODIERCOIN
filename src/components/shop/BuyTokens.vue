<template>
    <form id="secure-paiement-solution dx897678930998898 atlanta-md4-layout-flex">
                <p>
                    Ajouter
                    <input
                    id="number"
                    v-model="number"
                    type="number"
                    name="number"
                    >
                    tokens à votre portefeuille.
                    
                </p>
                <button class="buttonpay" v-on:click="buyTokens()">Trader</button>
                

    </form>
</template>

<script>
export default {
  name: 'BuyTokens',
  data(){
      return{
          number: null
      }
  },
  methods: {
      buyTokens(){
        console.log(this.number)
        this.emitToParent()
      },
      emitToParent() {
        this.$emit('numberCoins', this.number)
      }
  },
  mounted() {

  },
}
</script>

<style>
  #number{
    background-color:#ffa008;
    border: none;
    font-size: 15px;
    color: white;
    font-weight: 700;
  }
  .buttonpay {

      color: white;
      background-color:#ffa008;
      border: none;
      padding: 15px;
      border-radius: 3em;
      font-weight: bold;

  }
</style>>

