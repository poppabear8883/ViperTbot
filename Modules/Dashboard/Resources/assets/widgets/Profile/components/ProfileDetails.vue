<template>
    <div class="profile-details">
        <h1>{{$parent.channel.display_name}}</h1>

        <ul class="list-unstyled">
            <li>
                <p class="text-muted">
                    <i class="fa fa-twitch"></i>&nbsp;&nbsp;
                    <span class="txt-color-darken">
                        {{$parent.channel._id}}
                    </span>
                </p>
            </li>
            <li v-if="$parent.channel.broadcaster_type !== ''">
                <p class="text-muted">
                    <i class="fa fa-twitch"></i>&nbsp;&nbsp;
                    <span class="txt-color-darken">
                        {{$parent.channel.broadcaster_type}}
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
                        {{$parent.channel.game}}
                    </span>
                </p>
            </li>
            <li v-if="$parent.channel.email">
                <p class="text-muted">
                    <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                    <a :href="`mailto:${$parent.channel.email}`">
                        {{$parent.channel.email}}
                    </a>
                </p>
            </li>

        </ul>

        <br>

        <p class="font-md">
            <i>A little about me...</i>
        </p>

        <p>{{$parent.channel.description}}</p>
    </div>
</template>
<script>
    export default {
        computed: {
            date_joined() {
                return new Date(this.$parent.channel.created_at).toDateString();
            },
        }
    }
</script>
<style>

</style>