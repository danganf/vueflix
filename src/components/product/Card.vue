<template>
    <div class="card" :class="className">
        <div class="card__cover">
            <img :src="product.image" alt="">
            <a href="#" class="card__play"><i class="icon ion-ios-play"></i></a>
        </div>
        <div class="card__content">
            <h3 class="card__title"><a href="#">{{product.name}}</a></h3>
            <span class="card__category">
                <a href="#">Action</a>
                <a href="#">Triler</a>
            </span>
            <span class="card__rate"><i class="icon ion-ios-star"></i>{{product.rate}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            product:{
                type: Object,
                required: true
            },
            className:{
                type: String,
                default: 'card--big'
            }
        },

        data(){
            return {
            }
        },

        methods:{

        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>