<template>
    <div class="card" :class="className">
        <div class="card__cover">
            <img :src="product.poster_path" alt="">
            <a class="card__play" @click="toDetail(product.id)"><i class="icon ion-ios-play"></i></a>
        </div>
        <div class="card__content">
            <h3 class="card__title" @click="toDetail(product.id)"><a>{{product.title}}</a></h3>
            <span class="card__category">
                <a href="#">Action</a>
                <a href="#">Triler</a>
            </span>
            <span class="card__rate"><i class="icon ion-ios-star"></i>{{product.vote_average}}</span>
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
            mediaType:{
                type: String,
                default: 'movie'
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
            toDetail(prodId){
                this.$router.push({name: 'prod-detail', params: { type: this.mediaType, id: prodId } } )
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>
    .card__title, .card__play{cursor: pointer;}
</style>