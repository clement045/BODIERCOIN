<template>

    <div class="retailers-list">

        <div class="cards" style="width: 18rem">
            <ul class="list-group list-group-flush" v-for="(retailer,index) in retailers" :key="retailer.id" >
                <li 
                class="list-group-item" 
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeave(index)"
                > 
                    {{ retailer.storeName }}
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'RetailersList',
    props: ['retailers'],
    data() {
        return {
          
        }
    },
    methods: {
        mouseOver(index) {
            this.$emit('mouse-over-retailer', index);
        },
        mouseLeave(index) {
            this.$emit('mouse-leave-retailer', index);
        },
    }
}
</script>

<style scoped>

.retailers-list {
    overflow-y : scroll;
    height: 95vh;
    width: 100%;
}


ul li:hover {
    background-color: darkgrey !important;
}
</style>