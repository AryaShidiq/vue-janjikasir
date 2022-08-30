<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH POST</h4>
                        <hr>

                        <form @submit.prevent="update">

                            <div class="form-group">
                                <label for="title" class="font-weight-bold">Nama Menu</label>
                                <input type="text" class="form-control" v-model="post.namamenu"
                                    placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.namamenu" class="mt-2 alert alert-danger">
                                    {{ validation.namamenu[0] }}
                                </div>
                            </div>
                            <!-- <div class="form-group">
                                <label for="title" class="font-weight-bold">Foto</label>
                                <input type="text" class="form-control" v-model="post.foto" placeholder="Masukkan Judul Post"> -->
                            <!-- validation -->
                            <!-- <div v-if="validation.foto" class="mt-2 alert alert-danger">
                                    {{ validation.foto[0] }}
                                </div>
                            </div> -->
                            <div class="form-group">
                                <label for="title" class="font-weight-bold">Kategori</label>
                                <input type="text" class="form-control" v-model="post.kategori_id"
                                    placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.kategori_id" class="mt-2 alert alert-danger">
                                    {{ validation.kategori_id[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="title" class="font-weight-bold">Harga</label>
                                <input type="text" class="form-control" v-model="post.harga"
                                    placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.harga" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="title" class="font-weight-bold">Stock</label>
                                <input type="text" class="form-control" v-model="post.stock"
                                    placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.stock" class="mt-2 alert alert-danger">
                                    {{ validation.stock[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {reactive,ref,onMounted} from 'vue'
    import {useRouter,useRoute} from 'vue-router'
    import axios from 'axios'

    export default {

        setup() {

            //state posts
            const post = reactive({
                namamenu: '',
                kategori_id: '',
                harga: '',
                stock: '',
            })

            //state validation
            const validation = ref([])

            //vue router
            const router = useRouter()

            //vue router
            const route = useRoute()

            //mounted
            onMounted(() => {

                //get API from Laravel Backend
                axios.get(`http://127.0.0.1:8000/api/menu/${route.params.id}`)
                    .then(response => {

                        //assign state posts with response data
                        post.namamenu = response.data.data.namamenu
                        post.kategori_id = response.data.data.kategori_id
                        post.harga = response.data.data.harga
                        post.stock = response.data.data.stock

                    }).catch(error => {
                        console.log(error.response.data)
                    })

            })

            //method update
            function update() {

                let namamenu = post.namamenu
                let kategori_id = post.kategori_id
                let harga = post.harga
                let stock = post.stock
                axios.put(`http://127.0.0.1:8000/api/menu/${route.params.id}`, {
                    namamenu: namamenu,
                    kategori_id: kategori_id,
                    harga: harga,
                    stock: stock,
                }).then(() => {

                    //redirect ke post index
                    router.push({
                        name: 'menu.index'
                    })

                }).catch(error => {
                    //assign state validation with error 
                    validation.value = error.response.data
                })

            }

            //return
            return {
                post,
                validation,
                router,
                update
            }

        }

    }
</script>

<style>
    body {
        background: lightgray;
    }
</style>