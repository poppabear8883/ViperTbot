<template>
    <div id="livechannels">
        <!-- Note: The activity badge color changes when clicked and resets the number to 0
             Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->
        <span id="activity" class="activity-dropdown">
            <i class="fa fa-user"></i>
            <b :class="['badge', {'bg-color-red': total > 0}]"> {{ total }} </b>
        </span>

        <!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->
        <div class="ajax-dropdown">

            <!-- notification content -->
            <div class="ajax-notifications custom-scroll">
                <div class="row">

                    <div class="col-md-12" v-for="stream in streams">

                        <div class="thumbnail">
                            <a :href="stream['channel']['url']" target="_blank">
                                <img :src="stream['preview']['medium']" alt="No Thumbnail ...">
                            </a>

                            <div class="caption">
                                <h3>
                                    {{ stream['channel']['display_name'] }}
                                    <small><i>{{ stream['channel']['game'] }}</i></small>
                                </h3>
                                <p>
                                    {{ stream['channel']['description'] }}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- end notification content -->

            <!-- footer: refresh area -->
            <span> Last updated: {{ updated_time }}
						<button @click="getLiveChannels()" type="button" data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..."
                                class="btn btn-xs btn-default pull-right">
							<i class="fa fa-refresh"></i>
						</button> </span>
            <!-- end footer -->

        </div>
        <!-- END AJAX-DROPDOWN -->
    </div>
</template>
<style>

</style>
<script>
    export default {

        data() {
            return {
                total: 0,
                streams: [],
                updated_time: ''
            }
        },
        methods: {
            getLiveChannels() {
                axios.get('/api/livechannels', {
                    'params': {
                        'action': 'all'
                    }
                }).then((response) => {
                    this.total = response.data._total;
                    this.streams = response.data.streams;
                    this.updated_time = new Date().toLocaleTimeString();
                }, (response) => {
                    console.log('-- Error --' + response);
                });
            }
        },
        created() {
            this.getLiveChannels();

            setInterval((e) => {
                this.getLiveChannels();
            }, 60000);
        }
    }
</script>