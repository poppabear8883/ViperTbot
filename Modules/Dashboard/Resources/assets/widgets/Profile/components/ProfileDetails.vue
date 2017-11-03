<template>
    <div class="profile-details">
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

        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            channel: {type: Object, required: true}
        },
        computed: {
            date_joined() {
                return new Date(this.channel.created_at).toDateString();
            },
        }
    }
</script>
<style>

</style>