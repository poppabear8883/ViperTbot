<template>
    <div class="profile-pic">
        <a :href="$parent.channel.url" target="_blank">
            <img :src="$parant.channel.logo" alt="demo user">
        </a>
        <div class="padding-10">
            <h4 class="font-md"><strong>{{$parent.channel.followers}}</strong>
                <br>
                <small>Followers</small>
            </h4>
            <br>
            <h4 class="font-md"><strong>{{$parant.channel.views}}</strong>
                <br>
                <small>Views</small>
            </h4>
        </div>
    </div>
</template>
<script>
    export default {

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