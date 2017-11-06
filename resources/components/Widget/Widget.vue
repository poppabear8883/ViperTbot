<template>
    <!-- widget options:
        todo: Need to make prop names more appropriate!!
        usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">

        data-widget-colorbutton="false"
        data-widget-editbutton="false"
        data-widget-togglebutton="false"
        data-widget-deletebutton="false"
        data-widget-fullscreenbutton="false"
        data-widget-custombutton="false"
        data-widget-collapsed="true"
        data-widget-sortable="false"

        -->

    <!-- Widget ID (each widget will need unique ID)-->
    <div :class="['jarviswidget', titleColor, {'jarviswidget-sortable': sortable}]"
         :id="widId"
         data-widget-editbutton="false"
         role="widget"
    >

        <header role="heading">
            <div class="jarviswidget-ctrls" role="menu">

                <a v-if="collapse" href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title=""
                   data-placement="bottom"
                   data-original-title="Collapse"
                >
                    <i class="fa fa-minus "></i>
                </a>

                <a v-if="fullscreen" href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title=""
                   data-placement="bottom"
                   data-original-title="Fullscreen"
                >
                    <i class="fa fa-expand "></i>
                </a>

                <a v-if="deletebtn" href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title=""
                   data-placement="bottom"
                   data-original-title="Delete"
                >
                    <i class="fa fa-times"></i>
                </a>

            </div>

            <div class="widget-toolbar" role="menu">
                <color-picker
                        v-if="colorpicker"
                        @changed="colorChanged"
                ></color-picker>
            </div>

            <slot name="toolbars"></slot>

            <span class="widget-icon">
                <slot name="icon"></slot>
            </span>

            <!-- widget title -->
            <h2>
                <slot name="title"></slot>
            </h2>
            <!-- end title -->

            <span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>
        </header>

        <!-- widget div-->
        <div role="content">

            <!-- widget content -->
            <div class="widget-body widget-hide-overflow no-padding"
                 v-loading="is_loading"
                 element-loading-text="Loading..."
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.8)"
            >

                <slot name="body">
                    <slot name="footer"></slot>
                </slot>

            </div>
            <!-- end widget content -->

        </div>
        <!-- end widget div -->

    </div>
    <!-- end widget -->
</template>

<script>
    import ColorPicker from './partials/ToolbarColorPicker.vue'

    export default {
        props: {
            widId: {type: String, required: true},
            colorpicker: {type: Boolean, default: true},
            color: {type: String, default: 'blueDark'},
            sortable: {type: Boolean, default: true},
            collapse: {type: Boolean, default: true},
            fullscreen: {type: Boolean, default: false},
            deletebtn: {type: Boolean, default: false},
            loading: {type: Boolean, default: false}
        },
        watch: {
            loading(newVal, oldVal) {
                this.is_loading = newVal;
            }
        },
        data() {
            return{
                is_loading: false
            }
        },
        components:{
            ColorPicker
        },
        computed: {
            titleColor() {
                return `jarviswidget-color-${this.color}`;
            }
        },
        methods: {
            colorChanged(color) {
                this.$emit('colorChanged', `bg-color-${color}`)
            }
        }
    }
</script>
<style>

</style>