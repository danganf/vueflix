<template>
    <div id="app">
        <c-header></c-header>
        <c-home></c-home>
        <c-footer></c-footer>
    </div>
</template>

<script>
    import CHeader from "./components/Header";
    import CFooter from "./components/Footer";
    import CHome from "./main/Home";

    export default {
        components: { CHeader, CHome, CFooter }
    }
</script>

<style>

</style>