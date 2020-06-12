<template>
    <section class="section details"> 
        <div v-if="preloader" style="text-align: center">
            <i class="fas fa-spinner fa-pulse preloader fa-1x"></i>
        </div>
        <!-- details background -->
		<div class="details__bg" v-if="product" :style="`background: url(${product.backdrop_path}) center center / cover no-repeat;`"></div>
		<!-- end details background -->
        <component :product="product" :is="layout"></component>
    </section>
</template>    

<script>
    import CMovieDetail from "./extends/MovieDetail"
    import CTvDetail from "./extends/TvDetail"
    
    export default {
        props:{

        },

        data(){
            return{
                preloader: false,
                product: null,
                layout: null,
            }
        },

        components: { CMovieDetail, CTvDetail },

        updated() {
            let layout = null; 
            if( this.product ){
                this.layout = `c-${this.$route.params.type}-detail`;
            }
        },

        methods:{
            async getDetail(){
                this.preloader = true;
                await window.axios.get( process.env.URL_API_BACKEND + "media\\" + this.$route.params.type + '\\' +  + this.$route.params.id   )
                    .then(( result ) => {
                        this.preloader = false;
                        this.product   = result.data;

                    }).catch(error => {
                        console.log(error);
                        this.preloader = false;
                    });
            }
        },

        created() {        
            this.getDetail();
        }
    }
</script>

<style scoped>
    @media(min-width: 320px){
        section.details{margin-top: 40px !important;}
    }
    @media(min-width: 768px){
        section.details{margin-top: 66px !important;}
    }
</style>