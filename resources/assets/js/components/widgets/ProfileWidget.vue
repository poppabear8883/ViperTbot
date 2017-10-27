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
                        <div class="air air-bottom-right padding-10">
                            <a href="javascript:void(0);"
                               class="btn txt-color-white bg-color-teal btn-sm"><i
                                    class="fa fa-check"></i> Follow</a>&nbsp; <a
                                href="javascript:void(0);"
                                class="btn txt-color-white bg-color-pinkDark btn-sm"><i
                                class="fa fa-link"></i> Connect</a>
                        </div>
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
                                        <i class="fa fa-phone"></i>&nbsp;&nbsp;
                                        (<span class="txt-color-darken">313</span>)
                                        <span class="txt-color-darken">464</span> -
                                        <span class="txt-color-darken">6473</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;<a
                                            :href="`mailto:${$root.user.email}`">{{$root.user.email}}</a>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-skype"></i>&nbsp;&nbsp;<span
                                            class="txt-color-darken">john12</span>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-calendar"></i>&nbsp;&nbsp;<span
                                            class="txt-color-darken">Free after <a
                                            href="javascript:void(0);" rel="tooltip" title=""
                                            data-placement="top"
                                            data-original-title="Create an Appointment">4:30 PM</a></span>
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
                                    class="fa fa-envelope-o"></i> Send Message</a>
                            <br>
                            <br>

                        </div>
                        <div class="col-sm-3">
                            <h1>
                                <small>Connections</small>
                            </h1>
                            <ul class="list-inline friends-list">
                                <li><img src="img/avatars/1.png" alt="friend-1">
                                </li>
                                <li><img src="img/avatars/2.png" alt="friend-2">
                                </li>
                                <li><img src="img/avatars/3.png" alt="friend-3">
                                </li>
                                <li><img src="img/avatars/4.png" alt="friend-4">
                                </li>
                                <li><img src="img/avatars/5.png" alt="friend-5">
                                </li>
                                <li><img src="img/avatars/male.png" alt="friend-6">
                                </li>
                                <li>
                                    <a href="javascript:void(0);">413 more</a>
                                </li>
                            </ul>

                            <h1>
                                <small>Recent visitors</small>
                            </h1>
                            <ul class="list-inline friends-list">
                                <li><img src="img/avatars/male.png" alt="friend-1">
                                </li>
                                <li><img src="img/avatars/female.png" alt="friend-2">
                                </li>
                                <li><img src="img/avatars/female.png" alt="friend-3">
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
        methods: {

        },
        computed: {
            date_joined() {
                return new Date(this.$root.channel.created_at).toDateString();
            }
        },
        created() {

        }
    }
</script>