<template>

    <div class="retailers-list">

        <div class="">
            <ul class="list-group list-group-flush" v-for="(retailer,index) in retailers" :key="retailer.id" >
                <div class="retailer-total"
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeave(index)"
                >
                    <li 
                    class="list-group-item" 
                    
                    > 
                    <b> {{ retailer.storeName }} </b> : {{ retailer.storeType }}
                    </li>
                    <div class="retailer-detail">
                        <div class="card">
                            <img class="card-img-top" :src="retailer.pictures" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{ retailer.storeName }}</h5>
                                <p class="card-text">{{ retailer.storeDescription }}</p>
                                <router-link :to="{name: 'Retailer', params: {id: retailer.id, retailer: retailer}}">
                                    <a href="#" class="btn btn-primary">Plus d'informations</a>
                                </router-link>
                            </div> 
                        </div>
                    </div>
                </div>
                
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
            var t = document.querySelectorAll(".retailer-detail")
            t[index].style.display = "block"
        },
        mouseLeave(index) {
            var ta = document.querySelectorAll(".retailer-detail")
            ta[index].style.display = "none"
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


ul :hover {
    background-color: darkgrey !important;
}

.retailer-detail {
    display: none;
}
</style>