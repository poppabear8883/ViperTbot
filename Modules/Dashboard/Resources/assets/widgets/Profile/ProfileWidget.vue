<template>
    <widget wid-id="5438974" color="purple" :fullscreen="true">

        <div slot="title">Profile</div>

        <div slot="icon">
            <i class="fa fa-user txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="row" v-if="initialized">

                <div class="col-sm-12">
                    <!-- Header -->
                    <profile-widget-header :banner="channel.profile_banner">
                        <!-- Navigation -->
                        <div class="air air-bottom-right padding-10">
                            <button class="btn btn-default btn-sm"
                                    v-if="channel._id != my_channel._id"
                                    @click="getMyChannel()"
                            >
                                <i class="fa fa-user"></i> My Profile
                            </button>
                            &nbsp;
                            <button class="btn txt-color-white bg-color-teal btn-sm"
                                    v-if="prev_channels.length > 0"
                                    @click="back()"
                            >
                                <i class="fa fa-arrow-left"></i> Back
                            </button>
                        </div>
                    </profile-widget-header>
                </div>

                <div class="col-sm-12">

                    <div class="row">
                        <div class="col-sm-3">
                            <!-- Logo -->
                            <profile-widget-logo
                                    :url="channel.url"
                                    :logo="channel.logo"
                            >
                                <div class="padding-10">
                                    <h4 class="font-md"><strong>{{channel.followers}}</strong>
                                        <br>
                                        <small>Followers</small>
                                    </h4>
                                    <br>
                                    <h4 class="font-md"><strong>{{channel.views}}</strong>
                                        <br>
                                        <small>Views</small>
                                    </h4>
                                </div>
                            </profile-widget-logo>
                        </div>

                        <div class="col-sm-6">
                            <!-- Details -->
                            <profile-widget-details :channel="channel">

                                <!-- Actions -->
                                <ul class="profile-actions padding-bottom-10"
                                    v-if="channel._id != my_channel._id"
                                >
                                    <li>
                                        <button :class="btn.following.classes"
                                                @mouseenter="btnFollowingHover"
                                                @mouseleave="btnFollowingHover"
                                        >
                                            <i :class="['fa', btn.following.icon] "></i> {{ btn.following.text }}
                                        </button>
                                    </li>
                                    <li>
                                        <button class="btn btn-xs bg-color-blueLight txt-color-white">
                                            <i class="fa fa-comments"></i> Send Message
                                        </button>
                                    </li>
                                </ul>
                            </profile-widget-details>

                        </div>
                        <div class="col-sm-3">
                            <!-- Followers -->
                            <profile-widget-followers
                                    title="Recent Followers"
                                    :followers="followers"
                                    :limit="18"
                                    :url="channel.url"
                                    @clicked="setChannel"
                            ></profile-widget-followers>
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
    import Widget from 'Core/components/widget/Widget.vue'
    import * as alerts from 'Core/utils/alerts';

    import ProfileWidgetHeader from './components/ProfileHeader.vue';
    import ProfileWidgetLogo from './components/ProfileLogo.vue';
    import ProfileWidgetDetails from './components/ProfileDetails.vue';
    import ProfileWidgetFollowers from './components/ProfileFollowers.vue';

    export default {
        components: {
            Widget,
            ProfileWidgetHeader,
            ProfileWidgetLogo,
            ProfileWidgetDetails,
            ProfileWidgetFollowers
        },
        data() {
            return {
                initialized: false,
                channel: {},
                followers: {},
                following: false,
                prev_channels: [],
                history: [],
                btn: {
                    following: {
                        text: 'Follow',
                        icon: 'fa-heart',
                        classes: [
                            'btn',
                            'btn-xs',
                            'bg-color-purple',
                            'txt-color-white',
                            'follow-btn'
                        ]
                    }
                }
            }
        },
        computed: {
            my_channel() {
                return this.$store.getters.getChannel;
            }
        },
        watch: {
            my_channel() {
                if(!this.initialized && this.my_channel._id) {
                    this.getMyChannel();
                    this.initialized = true;
                }
            }
        },
        methods: {
            isFollowing() {
                this.following = true;
                this.btn.following = {
                    text: 'Following',
                    icon: 'fa-heart',
                    classes: [
                        'btn',
                        'btn-xs',
                        'bg-color-green',
                        'txt-color-white',
                        'follow-btn'
                    ]
                };
            },
            notFollowing() {
                this.following = false;
                this.btn.following = {
                    text: 'Follow',
                    icon: 'fa-heart',
                    classes: [
                        'btn',
                        'btn-xs',
                        'bg-color-purple',
                        'txt-color-white',
                        'follow-btn'
                    ]
                };
            },
            btnFollowingHover(e) {
                let text = this.btn.following.text;

                if (this.following) {
                    if (text === 'Unfollow') {
                        this.btn.following.text = 'Following';
                        this.btn.following.icon = 'fa-heart';
                    } else {
                        this.btn.following.text = 'Unfollow';
                        this.btn.following.icon = 'fa-ban';
                    }
                }
            },
            follow() {

            },
            unfollow() {

            },
            getFollowers(channel_id) {
                return new Promise((resolve, reject) => {
                    axios.get('/api/twitch/followers', {
                        params: {
                            channel_id: channel_id
                        }
                    }).then((response) => {
                        this.followers = response.data;
                        resolve(response.data);
                    }).catch((error) => {
                        console.log(error);
                        alerts.error(error.response.data);
                        reject(error);
                    });
                });
            },

            getChannel(channel_id) {
                return new Promise((resolve, reject) => {
                    axios.get('/api/twitch/isfollowing', {
                        params: {
                            channel_id: this.my_channel._id,
                            following_id: channel_id
                        }
                    }).then((response) => {

                        if (response.data === 404) {
                            this.notFollowing();

                            axios.get('/api/twitch/channel', {
                                params: {
                                    channel_id: channel_id
                                }
                            }).then((response) => {
                                this.channel = response.data;
                                resolve(response.data);
                            }).catch((error) => {
                                console.log(error);
                                alerts.error(error.response.data);
                                reject(error);
                            });
                        } else {
                            this.isFollowing();
                            this.channel = response.data.channel;
                            resolve(response.data.channel);
                        }
                    }).catch((error) => {
                        console.log(error);
                        alerts.error(error.response.data);
                        reject(error);
                    });
                });
            },
            getMyChannel() {
                this.channel = this.my_channel;
                this.notFollowing();

                this.getFollowers(this.channel._id).then((followers) => {
                    this.lsSet(this.channel, followers, false)
                }).catch((error) => {
                    console.error(error);
                    alerts.error('getMyChannel: Unable to get followers');
                });

            },
            setChannel(channel_id) {
                this.prev_channels.push(String(this.channel._id));

                if (this.inHistory(channel_id)) {
                    this.lsLoad(channel_id);
                } else {
                    this.getChannel(channel_id).then((channel) => {
                        this.getFollowers(channel._id).then((followers) => {
                            this.lsSet(channel, followers, this.following);
                        }).catch((error) => {
                            alerts.error(error.response);
                        });
                    }).catch((error) => {
                        alerts.error(error.response);
                    });
                }
            },
            inHistory(channel_id) {

                let i = _.findIndex(this.history, (o) => {
                    return String(o.channel._id) === String(channel_id);
                });

                return (i !== -1);
            },
            lsGet(channel_id) {
                return _.find(this.history, (o) => {
                    return String(o.channel._id) === String(channel_id);
                });
            },
            lsSet(channel, followers, following) {
                this.history.push({
                    channel: channel,
                    followers: followers,
                    following: following
                });
            },
            lsLoad(channel_id) {
                let o = this.lsGet(channel_id);

                this.channel = o.channel;
                this.followers = o.followers;
                this.following = o.following;

                if (this.following) {
                    this.isFollowing();
                } else {
                    this.notFollowing();
                }
            },
            back() {
                this.$emit('loading', true);

                if (this.prev_channels.length > 0) {
                    let _id = _.last(this.prev_channels);

                    _.pull(this.prev_channels, _id);

                    this.lsLoad(_id);

                } else {
                    this.channel = this.my_channel;
                }

                this.$emit('loading', false);
            }
        }
    }
</script>
<style>
    .profile-actions {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .profile-actions li {
        margin-bottom: 5px;
    }

    .follow-btn.bg-color-green:hover {
        background-color: #8b111c !important;
    }

    .follow-btn.bg-color-purple:hover {
        background-color: #126410 !important;
    }
</style>