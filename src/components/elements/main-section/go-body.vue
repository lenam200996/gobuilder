<template>
    <section class="container-fluid" :style="style">
        <go-section v-for="section in _getGrids" :key="section._id" :properties="section"></go-section>
    </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const module_grids = createNamespacedHelpers('grid')
    export default {
        data:()=>({
            style :{
                height : 600 +'px',
                background : '#ffffff',
                position:'relative'
            }
        }),
        computed:{
            ...module_grids.mapGetters([
                '_getGrids'
            ])
        }
    }
</script>

<style scoped>

</style>