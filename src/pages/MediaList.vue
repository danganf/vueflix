<template>
    <div>
        <!-- page title -->
        <section class="section section--first section--bg media-grid" style="background: url(static/img/section.jpg) center center / cover no-repeat">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            <!-- section title -->
                            <h2 class="section__title">{{media}}</h2>
                            <!-- end section title -->

                            <!-- breadcrumb -->
                            <ul class="breadcrumb">                                
                                <li class="breadcrumb__item"><router-link :to="{ name: 'home'}">Inicio</router-link></li>
                                <li class="breadcrumb__item breadcrumb__item--active">{{media}}</li>
                            </ul>
                            <!-- end breadcrumb -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->

        <c-filter @emit-filter="filter" :media="media"></c-filter>

        <!-- catalog -->
        <div class="catalog">
            <div class="container">
                <div class="row">
                    <div v-if="preloader" style="text-align: center;width: 100%">
                        <i class="fas fa-spinner fa-pulse preloader fa-1x"></i>
                    </div>
                    <!-- card -->
                    <div class="col-6 col-sm-4 col-lg-3 col-xl-2" v-for="(product, idx) in products" :key="`prod`+idx">
                        <div class="card">
                            <div class="card__cover">
                                <img :src="product.poster_path" alt="">
                                <a href="#" class="card__play">
                                    <i class="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div class="card__content">
                                <h3 class="card__title"><a href="#">{{product.title}}</a></h3>
                                <span class="card__category">
                                    <a href="#">Action</a>
                                    <a href="#">Triler</a>
                                </span>
                                <span class="card__rate"><i class="icon ion-ios-star"></i>{{product.vote_average}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- end card -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CFilter from '../components/product/Filter';    
    export default {
        props:{

        },

        components: { CFilter },
        
        data(){
            return {
                preloader: false,
                media: this.$route.params.media,
                products: [],
                urlFilter:  '',
                page: 1,        
            }
        },

        methods:{
            async getList(){
                this.preloader = true;
                this.products  = [];
                await window.axios.get( `${process.env.URL_API_BACKEND}media/${this.media}/search/${this.page}?${this.urlFilter}` )
                    .then(( result ) => {
                        this.preloader = false;
                        this.products  = result.data;

                    }).catch(error => {
                        this.preloader = false;
                    });
            },
            async filter(filter){
                this.urlFilter = Object.keys(filter).map(function(key) { 
                    return key + '=' + ( filter[key] || '' ); 
                }).join('&'); 
            }
        },

        watch:{
            urlFilter(){
                this.getList();
            }
        },

        updated(){
            
        },

        mounted(){
            this.getList();
        }
    }
</script>

<style scoped>
    .section__title{text-transform: uppercase;}
</style>