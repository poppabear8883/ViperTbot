<template>
    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button v-if="closebutton" type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title" :id="modalId + 'Label'">
                        <slot name="title"></slot>
                    </h4>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>
    export default{
        props: {
            modalId: {
                required: true
            },
            closebutton: {
                default: true
            }
        },
        events: {
            'ShowModal': function() {
                $('#'+this.modalId).modal('show');
            },
            'CloseModal': function() {
                $('#'+this.modalId).modal('hide');
            }
        },
        created() {
            $('#'+ this.modalId).on('hidden.bs.modal', function () {
                this.$dispatch('ModalClosing')
            }.bind(this))
            $('#'+ this.modalId).on('shown.bs.modal', function () {
                this.$dispatch('ModalShown')
            }.bind(this))
            $('#'+ this.modalId).on('loaded.bs.modal', function () {
                this.$dispatch('ModalLoaded')
            }.bind(this))
        }
    }
</script>