<template>
<div class="container">
    <div class="row">
        <div class="ret-list col text-center">
            <br><br>
            <h2><b>Voici la liste de nos partenaires : </b></h2>
            <br><br>
        </div>
    </div>

    <div class="row">

        <br><br>

        <div class="col-md-6">
            <RetailersList 
            v-bind:retailers="retailers"
            @mouse-over-retailer="mouseOverRetailer"
            @mouse-leave-retailer="mouseLeaveRetailer"
            />
        </div>

        <div class="col-md-6">
            <Map v-bind:retailers="retailers"/>
        </div>

    </div>
</div>
    

</template>


<script>
import Map from '@/components/Map.vue';
import RetailersList from '@/components/RetailersList.vue';
import axios from 'axios';

export default {
    name: 'Retailers',
    components: { Map, RetailersList },
    data() {
        return {
            retailers: []
        }
    },
    methods: {
    async getRetailers() {
      var res = await axios.get('https://haute-loire.org/api/retailers');
      this.retailers = res.data;
    },
    mouseOverRetailer(index) {
        console.log("mouse over : ",index);
    },
    mouseLeaveRetailer(index) {
        console.log("mouse leave :",index);
    }
    
  },
  mounted() {
    this.getRetailers()
  }
}

</script>

<style> 
.ret-list {
    color: #FFA008;
}
</style>