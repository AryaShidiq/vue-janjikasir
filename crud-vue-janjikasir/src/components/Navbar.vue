<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="font-weight: bold;">Janji Kasir</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Kategori</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/menu">Menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<!-- <script>
    export default {
        name : "Navbar",
    };
</script> -->

<style>


.navbar {
  background-color: white;
  width: 100%;
  border-radius: 15px;
}

.collapse{
    float: right;
    display: block;
}
</style>