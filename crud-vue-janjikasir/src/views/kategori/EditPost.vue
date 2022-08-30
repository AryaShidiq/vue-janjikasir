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
                                <label for="title" class="font-weight-bold">TITLE</label>
                                <input type="text" class="form-control" v-model="post.kategori" placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.kategori" class="mt-2 alert alert-danger">
                                    {{ validation.kategori[0] }}
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
    import { reactive, ref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import axios from 'axios'
    
    export default {
    
        setup() {
    
            //state posts
            const post = reactive({
                kategori: '',
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
                axios.get(`http://localhost:8000/api/kategori/${route.params.id}`)
                .then(response => {
                  
                  //assign state posts with response data
                  post.kategori    = response.data.data.kategori  
    
                }).catch(error => {
                    console.log(error.response.data)
                })
    
            })
    
            //method update
            function update() {
    
                let kategori   = post.kategori
                axios.put(`http://localhost:8000/api/kategori/${route.params.id}`, {
                    kategori: kategori,
                }).then(() => {
    
                    //redirect ke post index
                    router.push({
                        name: 'kategori.index'
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
    body{
        background: lightgray;
    }
</style>