<template>
    <div>
        <Retailer v-bind:retailer="retailer"/>

    </div>
</template>


<script>
import Retailer from '@/components/Retailer.vue'
import axios from 'axios';

export default {
    components: { Retailer },
    props: [],
    data() {
        return {
            retailer: [],
            id: ''
        }
    },
    methods: {
    async getSingleRetailer() {
      var res = await axios.get('https://haute-loire.org/api/retailers/'+this.$route.params.id);
      this.retailer = res.data;
    }
  },
  mounted() {
    this.getSingleRetailer()
  }
}
</script>