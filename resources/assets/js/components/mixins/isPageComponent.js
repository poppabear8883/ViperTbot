export default {
    created() {
        this.$root.loading = true;
    },
    updated() {
        this.$nextTick(() => {
            this.activateTooltips();
            this.activatePopovers();
        });
    },
    mounted() {
        this.$nextTick(() => {
            /**
             * If ready state is not true with-in this time we will force the page setup ??
             *
             * This will allow us not to change ready state in a page component
             * that doesn't need to wait on data ??
             */
            if (!this.ready) {
                setTimeout(() => {
                    this.ready = true;
                }, 3000)

            }
        });
    },
    data() {
        return {
            ready: false
        }
    },
    methods: {
        pageSetup() {
            this.$root.loading = false;

            this.setupWidgets();
            this.runCharts();
            this.runForms();
            this.activateTooltips();
            this.activatePopovers();

        },
        setupWidgets() {
            setup_widgets_desktop();
        },
        runCharts() {
            runAllCharts();
        },
        runForms() {
            runAllForms();
        },
        activateTooltips() {
            $("[rel=tooltip], [data-rel=tooltip]").tooltip();
        },
        activatePopovers() {
            // activate popovers
            $("[rel=popover], [data-rel=popover]").popover();

            // activate popovers with hover states
            $("[rel=popover-hover], [data-rel=popover-hover]").popover({
                trigger: "hover"
            });
        }

    },
    watch: {
        ready(newVal, oldVal) {
            if (newVal) {
                setTimeout(() => {
                    this.pageSetup();
                }, 10);
            }
        }
    }
};