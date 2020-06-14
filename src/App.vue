<template>
    <div id="app">
        <c-header></c-header>ssss
        <transition name="moveInUp">
            <router-view :key="$route.fullPath"></router-view>
        </transition>
        <c-footer></c-footer>
    </div>
</template>

<script>
	import CHeader from "./components/Header"
	import CFooter from "./components/Footer"
	export default {
		name: 'App',
        components: { CHeader, CFooter },
        mounted(){
            let path = this.$route.fullPath.split('/');
            //path.pop();
            console.log(path);
        }
	}
</script>

<style>

</style>

