<template>
    <div class="profile-pic">
        <a :href="url" target="_blank">
            <img :src="logo" alt="Logo" width="100%">
        </a>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            logo: {type: String, required: true},
            url: {type: String, required: true}
        }
    }
</script>
<style>
    .profile-pic > a > img {
        border-radius: 0;
        position: relative;
        border: 5px solid #fff;
        top: -30px;
        left: 10px;
        display: inline-block;
        text-align: right;
        z-index: 4;
        max-width: 100px;
        margin-bottom: -30px;
    }
</style>