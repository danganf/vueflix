<template>
    <div id="app">
        <c-header></c-header>
        
        <transition name="moveInUp">
            <router-view></router-view>
        </transition>

        <c-footer></c-footer>
    </div>
</template>

<script>
    import CHeader from "./components/Header";
    import CFooter from "./components/Footer";     
    import router from './routes/routers';  

    export default {
        router,
        components: { CHeader, CFooter }
    }
</script>

<style>

</style>