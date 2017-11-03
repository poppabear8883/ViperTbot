<template>
    <div class="profile-header">
        <slot></slot>
        <div class="profile-header-inner">
            <div>
                <img :src="banner" alt="Banner" width="100%">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            banner: {type: String, required: true}
        }
    }
</script>
<style>
    .profile-header {
        position: relative !important
    }

    .profile-header .profile-header-inner {
        max-height: 150px;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
</style>