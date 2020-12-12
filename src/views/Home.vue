<template>
  <div class="container">
    <div class="typewriter">
      <Typewriter/>
    </div>

    <div>
      <b-icon icon="arrow-down"></b-icon>
      <br/>
      <br/>
    </div>

    <div class="row">
      
      <div class="col-md-8 introduction">
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
        <br>
        
          <h1>Succombez à la<br/> Bordier Coin mania.</h1>
        <br>
        <p class="importantnotion">
          Le Bordier Coin est la Monnaie Locale Etudiante d'EPITECH. Elle est un outil monétaire, considéré comme un bien commun, au service de l’intérêt presque général et des besoins de M. Bordier.
      
          En utilisant le Bordier Coin, vous faites vivre une alternative monétaire solidaire, écologique et démocratique au système financier actuel, pour construire une société du bien vivre, et accessoirement aider M. Bordier à payer ses factures de chauffage.
        </p>
       <h2>A quoi sert une monnaie locale ?</h2> 
        <br>
        <br>

       <h4> 
         Prendre part à la gestion démocratique d’une monnaie :
        </h4>
       <p>
           1 adhérent = 1 voix
       </p>
        <br>

        <h4> 
         Rendre possible l’éducation populaire autour de la monnaie :
        </h4>
       <p>
           formations mensuelles gratuites, interventions scolaires
       </p>
        <br>

        <h4> 
         Maintenir l’argent au sein d’une économie réelle et locale :
        </h4>
       <p>
          le Bordier Coin ne peut être mis en banque en France (seulement aux iles Caïmans, ou autre paradis fiscal), il est donc voué à circuler créant de la richesse sur le territoire de la région
       </p>
        <br>

        <h4> 
          Soutenir les professionnels engagés dans la transition :
        </h4>
       <p>
        les dépenses en monnaie locale sont fléchées vers ces professionnels mis en lumière, et sont commissionnées (mais très peu)
       </p>
        <br>  

       <h4> 
          (Re)créer du lien social et une résilience économique :
        </h4>
       <p>
          nous pouvons décider ensemble, d’accorder notre confiance en cette monnaie en cas de crise
       </p>
        <br>

       <h4> 
         Alimenter une finance (presque) éthique :
        </h4>
       <p>
        1 Bordier Coin en circulation = 0.9 euro en banque éthique (+ 0.1 euro sur le compte de C. Bordier)
        </p>
        <br>

        <p> 
          Plus d'informations ici : <router-link :to="{name: 'About'}"> A propos</router-link> 
        </p>

      </div>
      <div class="col-md-4">
        <h3 class="info">Un peu plus sur le Bordier Coin...</h3>
        <br>
        <News />
        <br>
      </div>
      <div class=" col-md-8 how-to">
        <h2>Concrètement...<br/> comment...<br/> ça...<br/>marche ?</h2>
        <br>
        <p>
          Utilisée dans un réseau de plus de 1500 citoyens et  315 commerces et associations, le Bordier Coin circule sous format billets et numérique. Il suffit de créer un compte et de l'alimenter pour l’utiliser.
        </p>

        <p>
          <Add/>
          <em>1 euro = 1 Bordier Coin (comptablement et fiscalement)</em>
           
        </p>

        <h4>
          Où dépenser mes Bordier Coin ?
        </h4>


      </div>

    </div>

    <div class="row">

      <div class="col-md-6 map">
        <Map v-bind:retailers="retailers"/>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Map from '@/components/Map.vue';
import News from '@/components/News.vue';
import Typewriter from '@/components/Typewriter.vue';
import axios from 'axios';
import Add from '@/assets/add.svg'

export default {
  name: 'Home',
  components: {
    News,
    Map,
    Typewriter,
    Add
  },
  data() {
    return {
      retailers: []
    }
  }, 
  methods: {
    async getRetailers() {
      var res = await axios.get('https://haute-loire.org/api/retailers');
      this.retailers = res.data;
    }
  },
  mounted() {
    this.getRetailers()
  }
}
</script>

<style scoped>
* {
  width: 100%;
}
div {
  width: 100%;
}
.categories {
  background-color: "green";
  width: 100%;
}
h4{
  font-weight: 700;
}
h3{
  font-size: 30px;
  font-weight: 1000;
  background-color:#FFA008;
  color: white;
  padding: 15px;
}
h1{
  text-decoration: underline #FFA008;
  font-size: 50px;
}
h2{
  font-size: 70px;
  font-weight: 1000;
  color:#FFA008;
  padding-top: 1em;
  padding-bottom: 1em;
}

.importantnotion {
  color: grey;
  font-style: italic;
  font-size: 21px;
  text-align: left;
}

.typewriter {
  margin-bottom: 50px;
}

@media screen and (max-width: 900px) {
    h2 {
        font-size: 40px;
    }
}


</style>>

