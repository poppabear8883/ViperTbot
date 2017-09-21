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
                            <i class="icon-append fa fa-user"></i>
                            <input type="text" v-model="frmData.title" placeholder="Username">
                            <b class="tooltip tooltip-bottom-right">Enter the title of your stream.</b>
                        </label>
                    </section>

                    <section>
                        <label class="input"> <i class="icon-append fa fa-user"></i>
                            <multiselect v-model="frmData.game"
                                         :options="games"
                                         :close-on-select="true"
                                         :clear-on-select="false"
                                         placeholder="Select one"
                                         label="name"
                                         track-by="name"
                            ></multiselect>
                            <b class="tooltip tooltip-bottom-right">Needed to enter the website</b> </label>
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

<style>

</style>

<script>
    import Widget from './Widget.vue'
    import Multiselect from 'vue-multiselect'

    export default{
        props: {
            
        },
        data() {
            return {
                games: ['list', 'of', 'options'],
                frmData: {
                    title: '',
                    game: ''
                }
            }
        },
        components:{
            Widget,
            Multiselect
        },
        methods: {
            updateStream() {

            }
        },
        computed: {
            
        }
    }
</script>