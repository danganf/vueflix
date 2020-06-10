<template>
    <div>
        <section class="home">
            <component :is="layout"></component>
        </section>
    </div>
</template>    

<script>
    import CMovieDetail from "./extends/MovieDetail";
    import CTvDetail from "./extends/TvDetail";
    
    export default {
        props:{

        },

        components: { CMovieDetail, CTvDetail },

        computed:{
            layout(){
                return `c-${this.$route.params.type}-detail`;
            }
        }
    }
</script>

<style scoped>

</style>