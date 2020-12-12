<template>
    <div class="container">
        <div class="row">
            <div class="bouton-retour">
                <router-link to = '/Retailers'>
                    <button class="btn btn-lg btn-outline-dark">Retour à la liste des magasins</button>
                </router-link>
            </div>
        </div>

        <div class="retailer-content text-center">
            <br><br><br><br>
            <h2 id="name"> {{ retailer.storeName }} </h2>
            <br>
            <h3 id="category"> {{ retailer.storeType }} </h3>
            <br>
            <div class="retailer-picture">
                <img :src="retailer.pictures" alt="image_magasin">
            </div>
            <br>
            <br>
            <h4>Description du magasin :</h4>
            <p> {{ retailer.storeDescription }}</p>

            <br>
            <br>

        </div>
        <div class="map">
            <h5>Vous pouvez trouver notre magasin : </h5>
            <p>A l'adresse suivante : <b>{{ retailer.address }}, {{retailer.postalCode }} {{ retailer.city }} </b></p>
            <Map v-bind:retailers="{retailer}"/>
        </div>

     
        

    </div>
    
</template>


<script>
import Map from '@/components/Map.vue';

export default {
    name: 'Retailer',
    props: ['retailer'],
    components: { Map },
    data() {
        return {

        };
    }
}
</script>

<style scoped>

div {
    justify-content: center;
}

.bouton-retour {
    break-after: always;
    padding-top: 50px;
}

</style>