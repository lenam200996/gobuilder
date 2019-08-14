<template>
    <div class="container-fluid">
        <div class="md-layout row tool-menu-editor">
            <div class="wrap-logo-editor">
                <img class="md-image" src="../../assets/go_logo.png" height="39" width="147">
            </div>
            <div class="wrap-page-editor">
                <span>Page:</span>
                <i-select>
                    <i-option :value="1">Home</i-option>
                    <i-option :value="2">About</i-option>
                </i-select>
            </div>
            <div class="wrap-platform-editor">
                <RadioGroup type="button">
                    <Radio label="desktop">
                        <span class="icon-desktop"></span>
                    </Radio>
                    <Radio label="mobile">
                        <span class="icon-mobile"></span>
                    </Radio>
                </RadioGroup>
                
            </div>
            <div class="wrap-list-tool-editor">

            </div>
            <div class="wrap-undo-redo-editor">
                <ul>
                    <li class="enable">
                        <span class="icon-undo"></span>
                    </li>
                    <li>
                        <span class="icon-redo"></span>
                    </li>
                </ul>
            </div>
            <div class="wrap-save-button-editor">

            </div>
            <div class="wrap-preview-button-editor">

            </div>
            <div class="wrap-publish-button-editor">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>