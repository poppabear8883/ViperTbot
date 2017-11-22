<template>
    <div class="profile-followers">
        <h1 style="margin-left: -5px">
            <small>{{title}}</small>
        </h1>

        <ul class="list-inline followers-list">
            <li v-for="follower in recent_followers">
                <a href="#" @click.prevent="$emit('clicked', follower.user._id)">
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
                <a :href="`${url}/followers`" target="_blank">See All</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            followers: {type: Object, required: true},
            url: {type: String, required: true},
            limit: {type: Number, default: 25},
            title: {type: String, default: 'Followers'},
        },
        computed: {
            recent_followers() {
                return _.take(this.followers.follows, this.limit);
            }
        }
    }
</script>
<style>
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