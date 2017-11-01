<template>
    <div class="profile-header">
        <div class="air air-bottom-right padding-10">
            <button class="btn btn-default btn-sm"
                    v-if="$parent.channel._id != my_channel._id"
                    @click="getMyChannel()"
            >
                <i class="fa fa-user"></i> My Profile
            </button>
            &nbsp;
            <button class="btn txt-color-white bg-color-teal btn-sm"
                    v-if="$parent.prev_channels.length > 0"
                    @click="back()"
            >
                <i class="fa fa-arrow-left"></i> Back
            </button>
        </div>

        <div class="profile-header-inner">
            <div>
                <img :src="$parent.channel.profile_banner" alt="demo user" width="100%">
            </div>
        </div>
    </div>
</template>
<script>
    export default {

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