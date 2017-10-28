<template>
    <widget wid-id="5438974"
            color="purple"
            :fullscreen="true">
        <div slot="title">Profile</div>
        <div slot="icon">
            <i class="fa fa-user txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <div class="alert alert-info no-margin fade in">
                <button class="close" data-dismiss="alert">
                    ×
                </button>
                <i class="fa-fw fa fa-info"></i>
                Profile Widget v1.0 Beta
            </div>

            <!-- MAIN CONTAINER -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="profile-header">
                        <!--<div class="air air-bottom-right padding-10">
                            <a href="javascript:void(0);"
                               class="btn txt-color-white bg-color-teal btn-sm"><i
                                    class="fa fa-check"></i> Follow</a>&nbsp; <a
                                href="javascript:void(0);"
                                class="btn txt-color-white bg-color-pinkDark btn-sm"><i
                                class="fa fa-link"></i> Connect</a>
                        </div>-->
                        <div class="air air-top-left padding-10">
                            <h4 class="txt-color-white font-md">{{date_joined}}</h4>
                        </div>

                        <div class="profile-header-inner">
                            <div>
                                <img :src="$root.channel.profile_banner" alt="demo user" width="100%">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12">

                    <div class="row">

                        <div class="col-sm-3 profile-pic">
                            <img :src="$root.user.avatar" alt="demo user">
                            <div class="padding-10">
                                <h4 class="font-md"><strong>{{$root.channel.followers}}</strong>
                                    <br>
                                    <small>Followers</small>
                                </h4>
                                <br>
                                <h4 class="font-md"><strong>{{$root.channel.views}}</strong>
                                    <br>
                                    <small>Views</small>
                                </h4>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <h1>{{$root.channel.display_name}}</h1>

                            <ul class="list-unstyled">
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-twitch"></i>&nbsp;&nbsp;
                                        <span class="txt-color-darken">{{$root.channel._id}}</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;<a
                                            :href="`mailto:${$root.user.email}`">{{$root.user.email}}</a>
                                    </p>
                                </li>
                            </ul>
                            <br>
                            <p class="font-md">
                                <i>A little about me...</i>
                            </p>
                            <p>{{$root.channel.description}}</p>
                            <br>
                            <a href="javascript:void(0);" class="btn btn-default btn-xs"><i
                                    class="fa fa-pencil"></i> Edit Profile</a>
                            <br>
                            <br>

                        </div>
                        <div class="col-sm-3">
                            <h1>
                                <small>Recent Followers</small>
                            </h1>
                            <ul class="list-inline followers-list">
                                <li v-for="follower in recent_followers">
                                    <a href="javascript:void(0);">
                                        <img v-if="follower.user.logo != null"
                                             :src="follower.user.logo"
                                             :alt="follower.user.name"
                                             rel="tooltip"
                                             data-placement="top"
                                             :data-original-title="follower.user.display_name"
                                        >
                                        <img v-if="follower.user.logo == null"
                                             src="img/avatars/male.png"
                                             :alt="follower.user.name"
                                             rel="tooltip"
                                             data-placement="top"
                                             :data-original-title="follower.user.display_name"
                                        >
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">See All</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        <!-- end body -->
    </widget>
</template>
<style>

</style>
<script>
    import Widget from './Widget.vue'

    export default{
        props: {

        },
        components:{
            Widget
        },
        data() {
            return {
                followers: {}
            }
        },
        methods: {
            getFollowers() {
                axios.get('/api/twitch/followers').then((response) => {
                    this.followers = response.data;
                }).catch((error) => {

                });
            }
        },
        computed: {
            recent_followers() {
                return _.take(this.followers.follows, 18);
            },
            date_joined() {
                return new Date(this.$root.channel.created_at).toDateString();
            }
        },
        created() {
            this.getFollowers();
        }
    }
</script>
<style>
    .profile-header {position: relative !important}
    .profile-header .profile-header-inner {
        max-height: 150px;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .followers-list li {
        margin-bottom: 5px !important;
        margin-right: 5px !important;
        padding: 0 !important;
    }

    .followers-list img {
        width: 35px;
        border: 1px solid #fff;
        outline: 1px solid #bfbfbf;
    }
</style>