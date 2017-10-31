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
    import StreamSetupWidget from './widget/StreamSetupWidget.vue';
    import TwitchChatWidget from './widget/TwitchChatWidget.vue';
    import ProfileWidget from './widget/ProfileWidget.vue';

    export default {
        components: {
            StreamSetupWidget,
            TwitchChatWidget,
            ProfileWidget
        }
    }
</script>