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

        <!-- paginator -->
        <div class="col-12">
            <c-paginator @emit-paginator-page="newPage" :route_name="'media-list'" :current_page="current_page" :total_pages="total_pages" :total_results="total_results" :limit="20"></c-paginator>
        </div>
        <!-- end paginator -->

        <!-- catalog -->
        <div class="catalog">
            <div class="container">
                <div class="row">
                    <div v-if="preloader" style="text-align: center;width: 100%">
                        <i class="fas fa-spinner fa-pulse preloader fa-1x"></i>
                    </div>
                    <!-- card -->
                    <div class="col-6 col-sm-4 col-lg-3 col-xl-2" v-for="(product, idx) in products" :key="`prod`+idx">
                        <c-prod-card :class-name="''" :media-type="media" :product="product"></c-prod-card>                    
                    </div>
                    <!-- end card -->
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import CFilter from '../components/product/Filter'   
    import CProdCard from '../components/product/Card' 
    import CPaginator from '../components/Paginator' 
    
    export default {
        props:{

        },

        components: { CFilter, CProdCard, CPaginator },
                
        data(){
            return {
                preloader: false,
                media: this.$route.params.media,
                products: [],
                current_page: 0,
                total_pages: 0,
                total_results: 0,
                urlFilter:  '',                       
            }
        },

        methods:{
            async getList(){
                this.preloader = true;
                this.products  = [];
                await window.axios.get( `${process.env.URL_API_BACKEND}media/${this.media}/search/${this.current_page}?${this.urlFilter}` )
                    .then(( result ) => {
                        this.preloader     = false;
                        this.products      = result.data;
                        this.total_results = 9586;
                        this.total_pages   = 480;

                    }).catch(error => {
                        this.preloader = false;
                    });
            },
            async filter(filter){
                this.urlFilter = Object.keys(filter).map(function(key) { 
                    return key + '=' + ( filter[key] || '' ); 
                }).join('&'); 
            },
            async newPage(page){
                this.current_page = page;
            }
        },

        watch:{
            urlFilter(){
                this.getList();
            },
            current_page(){
                this.getList();
            }
        },

        updated(){
            
        },

        mounted(){
            if( this.$route.params.page ){
                this.current_page = parseInt( this.$route.params.page );
            } else {
                this.current_page = 1;
            }
        }
    }
</script>

<style scoped>
    .section__title{text-transform: uppercase;}
</style>