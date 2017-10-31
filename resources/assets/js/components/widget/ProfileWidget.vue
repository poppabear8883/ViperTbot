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
                    <div class="profile-header">
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

                        <div class="profile-header-inner">
                            <div>
                                <img :src="channel.profile_banner" alt="demo user" width="100%">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12">

                    <div class="row">

                        <div class="col-sm-3 profile-pic">
                            <a :href="channel.url" target="_blank">
                                <img :src="channel.logo" alt="demo user">
                            </a>
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
                        </div>
                        <div class="col-sm-6">
                            <h1>{{channel.display_name}}</h1>

                            <ul class="list-unstyled">
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-twitch"></i>&nbsp;&nbsp;
                                        <span class="txt-color-darken">
                                            {{channel._id}}
                                        </span>
                                    </p>
                                </li>
                                <li v-if="channel.broadcaster_type !== ''">
                                    <p class="text-muted">
                                        <i class="fa fa-twitch"></i>&nbsp;&nbsp;
                                        <span class="txt-color-darken">
                                            {{channel.broadcaster_type}}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-calendar"></i>&nbsp;&nbsp;
                                        <span class="txt-color-darken">
                                            {{date_joined}}
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p class="text-muted">
                                        <i class="fa fa-gamepad"></i>&nbsp;&nbsp;
                                        <span class="txt-color-darken">
                                            {{channel.game}}
                                        </span>
                                    </p>
                                </li>
                                <li v-if="channel.email">
                                    <p class="text-muted">
                                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                                        <a :href="`mailto:${channel.email}`">
                                            {{channel.email}}
                                        </a>
                                    </p>
                                </li>

                            </ul>

                            <br>

                            <p class="font-md">
                                <i>A little about me...</i>
                            </p>

                            <p>{{channel.description}}</p>

                            <ul class="profile-actions" v-if="channel._id != my_channel._id">
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

                            <br>
                            <br>

                        </div>
                        <div class="col-sm-3">
                            <h1 style="margin-left: -5px">
                                <small>Recent Followers</small>
                            </h1>
                            <ul class="list-inline followers-list">
                                <li v-for="follower in recent_followers">
                                    <a href="#" @click.prevent="setChannel(follower.user._id)">
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
                                    <a :href="`${channel.url}/followers`" target="_blank">See All</a>
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
    import Widget from 'Core/components/widget/Widget.vue';
    import * as alerts from 'Core/utils/alerts';

    export default {
        components: {
            Widget
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
            recent_followers() {
                return _.take(this.followers.follows, 18);
            },
            date_joined() {
                return new Date(this.channel.created_at).toDateString();
            },
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
                    this.lsSet(this.channel, followers, this.following)
                }).catch((error) => {
                    console.error(error);
                    alerts.error('getMyChannel: Unable to get followers');
                });

            },
            setChannel(channel_id) {
                /**
                 * Lets add the channel we are leaving to the prev_channels list for "back()" navigation
                 */
                this.prev_channels.push(String(this.channel._id));

                if (this.inHistory(channel_id)) {

                    /**
                     * If the channel we are going to is in our history, pull the history results
                     */
                    this.lsLoad(channel_id);

                } else {
                    /**
                     * Otherwise, if the channel we are going to is NOT in our history
                     *
                     * We need to call an API request to get that channel and followers.
                     *
                     * Then add the channel to our history.
                     */

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
            },
            follow() {

            },
            unfollow() {

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
        }
    }
</script>
<style type="scss">
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

    .profile-header {
        position: relative !important
    }

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