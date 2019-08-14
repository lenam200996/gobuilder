<template>
    <header class="container-fluid" :style="style">
        <div class="md-layout row">
            <slot></slot>
        </div>
    </header>
</template>

<script>
    export default {
        data:()=>({
            style:{
                height: 80 +'px',
                background: '#f5f5f5',
                boxShadow: '0px 3px 15px rgba(55, 67, 85, 0.1)'
            }
        })
    }
</script>

<style scoped>

</style>