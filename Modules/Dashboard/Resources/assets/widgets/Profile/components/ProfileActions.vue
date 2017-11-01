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
        }
    }
</script>
<style>

</style>