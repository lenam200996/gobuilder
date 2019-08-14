<template>
    <footer class="container-fluid">
        <div class="row" :style="style">
            <!-- render footer -->
        </div>
    </footer>
</template>

<script>
    export default {
        data:()=>({ // template
            style: {
                height: 50 +'px',
                background: 'black'
            }
        })
    }
</script>

<style lang="scss" scoped>

</style>