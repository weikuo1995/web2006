<template>
<div>
    <HeadNav />
    <router-view></router-view>
</div>
</template>

<script>
import HeadNav from '../components/HeadNav'
export default {
    name:'Layout',
    components:{
        HeadNav
    }
}
</script>

<style>

</style>