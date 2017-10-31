<template>
    <div class="toolbar-colorpicker">
        <a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a>
        <ul class="dropdown-menu arrow-box-up-right color-select pull-right">

            <li v-for="color in colors" @click="$emit('changed', color)">
                <span :class="'bg-color-'+color"
                      :data-widget-setstyle="'jarviswidget-color-'+color"
                      rel="tooltip"
                      data-placement="top"
                      :data-original-title="color">
                </span>
            </li>

            <li>
                <a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle=""
                   rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colors: [
                    'green',
                    'greenDark',
                    'greenLight',
                    'purple',
                    'magenta',
                    'pink',
                    'pinkDark',
                    'blueLight',
                    'teal',
                    'blue',
                    'blueDark',
                    'darken',
                    'yellow',
                    'orange',
                    'orangeDark',
                    'red',
                    'redLight',
                    'white'
                ]
            }
        },

        methods: {

        }
    }
</script>

<style>
    .toolbar-colorpicker {
        padding-top: 5px !important;
    }
</style>