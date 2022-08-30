<template>
    <Navbar/>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA POST</h4>
                        <hr>
                        <router-link :to="{name: 'kategori.create'}" class="btn btn-md btn-success">TAMBAH POST</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(kategori, index) in kategoris" :key="index">
                                    <td>{{ kategori.id }}</td>
                                    <td>{{ kategori.kategori }}</td>
                                    <!-- <td>{{ post.content }}</td> -->
                                    <td class="text-center">
                                        <router-link :to="{name: 'kategori.edit', params:{id: kategori.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="kategoriDelete(kategori.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default {
    setup() {
        //reactive state
        let kategoris = ref([]);
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get("http://127.0.0.1:8000/api/kategori")
                .then(response => {
                //assign state posts with response data
                kategoris.value = response.data.data;
            }).catch(error => {
                console.log(error.response.data);
            });
        });
        function kategoriDelete(id) {
            //delete data post by ID
            axios.delete(`http://127.0.0.1:8000/api/kategori/${id}`)
                .then(() => {
                //splice posts 
                kategoris.value.splice(kategoris.value.indexOf(id), 1);
            }).catch(error => {
                console.log(error.response.data);
            });
        }
        //return
        return {
            kategoris,
            kategoriDelete
        };
    },
    components: { Navbar }
}
</script>

<style>
    body{
        background: lightgray;
    }
</style>