<template>
    <section class="container-fluid" :style="style">
        <go-section v-for="section in getGrids" :key="section.id" :properties="section"></go-section>
    </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const module_grids = createNamespacedHelpers('element')
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
                'getGrids'
            ])
        }
    }
</script>

<style scoped>

</style>