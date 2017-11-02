<template>
    <ul class="profile-actions" v-if="$parent.channel._id != my_channel._id">
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
</template>
<script>
    export default {
        data() {
            return {
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

            }
        }
    }
</script>
<style>
    .follow-btn.bg-color-green:hover {
        background-color: #8b111c !important;
    }

    .follow-btn.bg-color-purple:hover {
        background-color: #126410 !important;
    }
</style>