<template>
<div class="container">
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