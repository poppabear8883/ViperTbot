<template>
    <widget wid-id="58234"
            :fullscreen="true">

        <div slot="title">Stream Setup</div>

        <div slot="icon">
            <!-- add a icon example: <i class="fa fa-comments txt-color-white"></i> -->
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="alert alert-info no-margin fade in">
                <button class="close" data-dismiss="alert">
                    ×
                </button>
                <i class="fa-fw fa fa-info"></i>
                Stream Setup Widget v1.0 Beta
            </div>

            <form class="smart-form">
                <header>
                    Setup Stream
                </header>


                <fieldset>
                    <section>
                        <label class="input">
                            <i class="icon-append fa fa-comment"></i>
                            <input type="text" v-model="title" :placeholder="current_title">
                            <b class="tooltip tooltip-bottom-right">
                                Enter the title of your stream.
                            </b>
                        </label>
                    </section>

                    <section>
                        <label>
                            Current: <strong>{{current_game}}</strong>
                        </label>
                        <multiselect v-model="game"
                                     open-direction="bottom"
                                     :searchable="true"
                                     :max-height="300"
                                     @search-change="asyncFind"
                                     :options="games"
                                     :loading="isLoading"
                                     :internal-search="false"
                                     :close-on-select="true"
                                     placeholder="Search ..."
                                     label="name"
                                     track-by="name"
                        ></multiselect>
                    </section>

                </fieldset>

                <footer>
                    <button @click.prevent="updateStream()" class="btn btn-primary">
                        <i class="fa fa-save"></i>
                        Update
                    </button>
                </footer>

            </form>

        </div>

        <!-- end body -->
    </widget>
</template>

<script>
    import Widget from './Widget.vue'
    import Multiselect from 'vue-multiselect'
    import * as alerts from '../../utils/alerts'

    export default{
        props: {
            clientId: {type: String, required: true}
        },
        data() {
            return {
                isLoading: false,
                games: [],
                game: null,
                title: null,
                delay: 0,
                feed_enabled: false,
            }
        },
        components:{
            Widget,
            Multiselect
        },
        methods: {
            asyncFind(query) {
                if(query !== '')
                {
                    this.isLoading = true;
                    axios.get('https://api.twitch.tv/kraken/search/games', {
                        params: {
                            'client_id': this.clientId,
                            'q': query,
                            'type': 'suggest'
                        }
                    }).then((response) => {
                        this.games = response.data.games;
                    }).catch((error) => {
                        console.error(error);
                    });

                    this.isLoading = false;
                }
            },
            updateStream() {
                if(this.title && this.game)
                {
                    axios.put('/api/twitch', {
                        action: 'updateChannel',
                        params: {
                            status: this.title,
                            game: this.game.name,
                            delay: this.delay,
                            channel_feed_enabled: this.feed_enabled
                        }
                    }).then((response) => {
                        this.$store.commit('SET_CHANNEL', response.data);
                        alerts.success('Channel was successfully updated!')
                    }).catch((error) => {
                        console.error(error);
                        alerts.error(error);
                    });
                }
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            channel() {
                return this.$store.getters.getChannel;
            },
            current_title() {
                return this.channel.status;
            },
            current_game() {
                return this.channel.game;
            }
        },
        created() {

        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
    .jarviswidget .widget-body.widget-hide-overflow {
        overflow: visible !important;
    }

    .multiselect__spinner:before,
    .multiselect__spinner:after {
        border-color: #DF3B4C transparent transparent;
    }
    .multiselect__tag {
        background: #DF3B4C;
    }
    .multiselect__option--highlight {
        background: #DF3B4C;
    }
    .multiselect__option--highlight:after {
        background: #DF3B4C;
    }
</style>