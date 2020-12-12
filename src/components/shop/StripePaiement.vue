<template>
    <div>
        You want to buy {{number}} coins.
        <form id="payment-form">
        <div>
            <label for="card-element">
            Credit or debit card
            </label>
            <div id="card-element">
            <!-- A Stripe Element will be inserted here. -->
            </div>
    
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>
    
        <button class="buttonpay" v-on:click="bankToken(userId, number)">Payer</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'StripePaiement',
  props: [
    "numberCoin",
    "userId",
    "userName"
  ],
  data() {
   return{
     number: this.numberCoin,
     stripeAPIToken: 'pk_test_51HsUUJEj14OhipKUavWcW48ZdEV1yWmFHCW0ycDia9R8OzDfW3v48ghzDWj55ZojtRdxDvMI7nj1faV9NkqNeSpW000veD7xCF',
     stripe: '',
     elements: '',
     card: ''
   }
  },
  methods:{
    //include Stripe
    includeStripe( URL, callback ){
        console.log('toto')
        let documentTag = document, tag = 'script',
            object = documentTag.createElement(tag),
            scriptTag = documentTag.getElementsByTagName(tag)[0];
        object.src = '//' + URL;
        if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
        scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    /*
    Configures Stripe by setting up the elements and 
    creating the card element.
    */
   postToLaravel(token, number){
           /* var axios = require('axios');
            var data = JSON.stringify({
              "stripeToken": token,
              "tokenNumber": number
            });*/

            //////
            console.log(token)
            console.log(number)
            var axios = require('axios');
            var data = JSON.stringify({"stripeToken":token,"tokenNumber":number});

            var config = {
              method: 'post',
              url: 'https://haute-loire.org/api/stripe',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };


            //////

            /*var config = {
              method: 'post',
              url: 'https://haute-loire.org/api/stripe',
              data : data
            };*/

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        
    },
    bankToken(idDonor, amount){
        var axios = require('axios');
        var data = JSON.stringify({"id_donor": 1,"id_receiver": idDonor,"amount": amount});

        console.log(idDonor, amount)

        var config = {
          method: 'post',
          url: 'https://haute-loire.org/api/transaction',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    configureStripe(fonction, number){
      console.log('toto')
      var stripe = window.Stripe( this.stripeAPIToken );

        var elements = stripe.elements()
        
        /*
        const card = stripe.charges.create({
          amount: 2000,
          currency: 'eur',
          source: 'tok_visa',
          description: 'My First Test Charge (created for API docs)',
        });*/

        var card = elements.create('card');

        card.mount('#card-element');
        // Handle form submission.
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function(event) {
          event.preventDefault();
        
          stripe.createToken(card).then(function(result) {
            if (result.error) {
              // Inform the user if there was an error.
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;
            } else {
              // Send the token to your server.
              //stripeTokenHandler(result.token);
              console.log(result.token.id)
              console.log(number)
              fonction(result.token.id, number)     
              //console.log(number)         
            }
          })
        })

        /*
        function stripeTokenHandler(token) {
          // Insert the token ID into the form so it gets submitted to the server
          var form = document.getElementById('payment-form');
          var hiddenInput = document.createElement('input');
          hiddenInput.setAttribute('type', 'hidden');
          hiddenInput.setAttribute('name', 'stripeToken');
          hiddenInput.setAttribute('value', token.id);
          form.appendChild(hiddenInput);

          
          // Submit the form
          form.submit();
        }*/
        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
          var displayError = document.getElementById('card-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        });

    },
    mounted(){
      console.log('toto')
      this.includeStripe('js.stripe.com/v3/', function(){
            this.configureStripe();
        }.bind(this) );
      }
    },
    created(){
      const fonction = this.postToLaravel
      this.includeStripe('js.stripe.com/v3/', function(){
            this.configureStripe(fonction, this.number);
        }.bind(this) );  
    } 
}
</script> 
<style scoped>
.buttonpay {

      color: white;
      background-color: #ffa008;;
      border: none;
      padding: 15px;
      border-radius: 3em;
      font-weight: bold;
      margin-top: 2em;
  }
</style>