<template>
    <widget wid-id="6843244"
            :fullscreen="true">

        <div slot="title">Requested Songs</div>

        <div slot="icon">
            <i class="fa fa-music txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <div class="widget-toolbar" role="menu">

            </div>
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="alert alert-info no-margin fade in">
                <button class="close" data-dismiss="alert">
                    ×
                </button>
                <i class="fa-fw fa fa-info"></i>
                Requested Songs Widget v1.0 Beta
            </div>

            <div class="widget-body-toolbar">

                <div class="row">

                    <div class="col-xs-9 col-sm-6 col-md-6 col-lg-6 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-search"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   v-model="searchTerm"
                                   placeholder="Search ...">
                        </div>
                    </div>

                </div>

            </div>

            <div class="custom-scroll table-responsive" :style="`max-height:${maxHeight}; overflow-y: scroll;`">

                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="songs.length > 0" v-for="song in songs">
                        <td>{{song.title}}</td>
                    </tr>
                    <tr v-if="songs.length <= 0">
                        <td class="text-center">No requested songs.</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <!-- FOOTER -->
            <footer>

            </footer>

        </div> <!-- end body -->
    </widget>
</template>

<script>

    import Widget from 'Widgets/Widget.vue';
    import * as alerts from 'Utilities/alerts';

    export default {
        props: {
            reqplaylist: {required: true, type: Array},
            maxHeight: {default: '400px'}
        },

        components: {
            Widget
        },

        data() {
            return {
                searchTerm: ''
            }
        },
        methods: {},
        computed: {
            songs() {
                if (this.searchTerm !== '') {
                    return this.reqplaylist.filter((row) => {
                        return Object.keys(row).some((key) => {
                            return String(row[key]).toLowerCase().indexOf(this.searchTerm) > -1
                        })
                    })
                }

                return this.reqplaylist;
            }
        },
        created() {

        }
    }
</script>

<style>

</style>