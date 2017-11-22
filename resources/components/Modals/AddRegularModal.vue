<template>
    <modal effect="fade"
           :value="show"
           @closed="$emit('closed')">
        <!-- custom header -->
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
                <i>Add A Regular</i>
            </h4>
        </div>

        <form>
            <!-- row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input class="form-control"
                               type="text"
                               @keydown.enter.prevent="addNew()"
                               v-model="formModel.name"
                               placeholder="Twitch Name ..."
                               required
                        />
                    </div>
                </div>
            </div>
        </form>

        <!-- custom buttons -->
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="cancelNew">Cancel</button>
            <button type="button" class="btn btn-primary" @click="addNew">Add</button>
        </div>
    </modal>
</template>

<style>

</style>

<script>
    import Modal from './Modal.vue'
    import * as alerts from '../../utils/alerts'

    export default {

        props: ['show'],

        data() {
            return {
                formModel: {
                    name: ''
                }
            }
        },

        components: {
            Modal
        },

        methods: {

            addNew(e) {
                if (e) e.preventDefault();

                axios.post('/api/regulars', {
                    'action': 'create',
                    'params': this.formModel
                }).then((response) => {

                    this.$store.commit('ADD_REGULAR', response.data);

                    this.$emit('closed', this.show);
                    this.clearFields();

                    alerts.success(`Successfully Added ${formModel.name}!`);

                }, (error) => {
                    console.log(error);
                    alerts.error(error);
                    this.$emit('closed', this.show);
                    this.clearFields();
                });
            },

            cancelNew(e) {
                this.clearFields();
                this.$emit('closed', this.show)
            },

            clearFields() {
                for (let item in this.formModel) {
                    this.formModel[item] = ''
                }
            }
        }
    }
</script>