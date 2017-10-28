<template>
    <div class="row">
        <article class="col-sm-12 sortable-grid ui-sortable">

        </article>
        <article class="col-sm-6 sortable-grid ui-sortable">
            <profile-widget></profile-widget>
        </article>

        <article class="col-sm-6 sortable-grid ui-sortable">
            <stream-setup-widget
                    clientId="sbuautwemmz4hr6sbuabyp9bg9uwaav"
            ></stream-setup-widget>
        </article>
    </div>
</template>
<script>
    import StreamSetupWidget from './widgets/StreamSetupWidget.vue';
    import TwitchChatWidget from './widgets/TwitchChatWidget.vue';
    import ProfileWidget from './widgets/ProfileWidget.vue';

    import {mapActions} from 'vuex';
    import isPageComponent from './mixins/isPageComponent';

    export default {
        mixins: [isPageComponent],

        components: {
            StreamSetupWidget,
            TwitchChatWidget,
            ProfileWidget
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        }
    }
</script>