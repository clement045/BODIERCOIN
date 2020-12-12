<template>
    <div class="row" id="cat">
        <div 
        @mouseover="mouseOverRetailer(retailer.id)"
        @mouseleave="mouseLeaveRetailer(retailer.id)"
        v-for="retailer in retailers" 
        :key="retailer.id" 
        class="col-md-3 border" 
        id="retailer">

            <p> {{retailer.name}} </p>
            <p>{{retailer.description}}</p>
        </div>

            

    </div>

</template>

<script> 


export default {

    name: 'Categories',
    props: ["retailers"],
    data() {

    },
    methods: {
        mouseOverRetailer(index) {
            this.$emit('mouse-over-retailer', index);
        },
        mouseLeaveRetailer(index) {
            this.$emit('mouse-left-retailer', index);
        }
    }
}

</script>

<style>
#cat {

    width: 100%;

}
#retailer {
    background-color: #f3f3f3;
    width: 100%;
    margin: 10px;
}

</style>