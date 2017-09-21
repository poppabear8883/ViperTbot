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

            <form class="smart-form">
                <header>
                    Setup Stream
                </header>


                <fieldset>
                    <section>
                        <label class="input">
                            <i class="icon-append fa fa-comment"></i>
                            <input type="text" v-model="title" placeholder="Title">
                            <b class="tooltip tooltip-bottom-right">
                                Enter the title of your stream.
                            </b>
                        </label>
                    </section>

                    <section>
                        <label>Search for your game</label>
                        <multiselect v-model="game"
                                     open-direction="bottom"
                                     :searchable="true"
                                     :max-height="300"
                                     @search-change="asyncFind"
                                     :options="games"
                                     :loading="isLoading"
                                     :internal-search="false"
                                     :close-on-select="true"
                                     placeholder="Start Typing ..."
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
    import Widget from './Widget.vue'
    import Multiselect from 'vue-multiselect'

    export default{
        props: {
            clientId: {
                required: true
            }
        },
        data() {
            return {
                isLoading: false,
                games: [],
                game: '',
                title: ''
            }
        },
        components:{
            Widget,
            Multiselect
        },
        methods: {
            asyncFind(query) {
                if(query !== '') {
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
            }
        },
        computed: {
            
        },
        created() {

        }
    }
</script>