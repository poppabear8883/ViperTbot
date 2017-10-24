export default {
    created() {
        this.$root.loading = true;
    },
    data() {
        return {
            pageReady: false
        }
    },
    watch: {
        pageReady(newVal, oldVal) {
            if (newVal) {
                setTimeout(() => {
                    pageSetUp();
                    this.$root.loading = false;
                }, 50);
            }
        }
    }
};