<template>
    <widget wid-id="58234"
            :fullscreen="true">

        <div slot="title">Stream Setup</div>

        <div slot="icon">
            <i class="fa fa-cogs txt-color-white"></i>
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

            <form class="smart-form" v-if="initialized">
                <header>
                    Setup Stream
                </header>


                <fieldset>
                    <section>
                        <label class="input">
                            <i class="icon-append fa fa-comment"></i>
                            <input type="text" v-model="title" :placeholder="channel.status">
                            <b class="tooltip tooltip-bottom-right">
                                Enter the title of your stream.
                            </b>
                        </label>
                    </section>

                    <section>
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
                initialized: false,
                isLoading: false,
                games: [],
                game: null,
                title: null,
                delay: 0
            }
        },
        components:{
            Widget,
            Multiselect
        },
        computed: {
            channel() {
                return this.$store.getters.getChannel;
            },
        },
        watch: {
            channel() {
                if(!this.initialized && this.channel.status) {
                    this.title = this.channel.status;
                    this.games.push({name: this.channel.game});
                    this.game = {name: this.channel.game};
                    this.initialized = true;
                }
            }
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
                    axios.put('/api/v2/twitch/updatechannel', {
                            status: this.title,
                            game: this.game.name,
                            delay: this.delay
                    }).then((response) => {
                        this.$store.commit('SET_CHANNEL', response.data);
                        alerts.success('Channel was successfully updated!')
                    }).catch((error) => {
                        console.error(error);
                        alerts.error(error);
                    });
                }
            }
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