<template>
  <!--------<br><br><br><br><br>------------>
  <!---------------------Dashboard Usuarios----------------->
  <!--------<h1 class="text-center color">Usuarios</h1>
  <main role="main">
    <p><button class="dash-btn btn-6" data-bs-toggle="collapse" href="#collapseUsers">F</button></p>
    <div class="collapse" id="collapseUsers">
      <article class="panel project" v-for="user in formU" :key="user.USER_ID">
        <h1 class="project-name">{{user.USER_FULL_NAME}} </h1>
        <div class="project-controls">
          <router-link to="" id="switch1"><button class="dash-btn btn-7">S</button></router-link>
          <router-link to="" id="switch1"><button class="dash-btn btn-7">A</button></router-link>

        </div>
        <ul class="project-meta">
          <li>Correo: <strong>{{user.EMAIL}} </strong></li>
          <li>Contraseña: <strong><time>{{user.USER_PWD}} </time></strong></li>
          <li>Telefono: <strong>{{user.TEL}} </strong></li>
          <li>Ciudad: <strong>{{user.MUNICIPIO}} </strong></li>
        </ul>
      </article>

    </div>
  </main>
    <br><br><br><br>------------>

  <!---------------------Dashboard Productos----------------->
  <!-----------<h1 class="text-center color">Productos</h1> ------->
  <!-----------<main role="main">
    <p><button class="dash-btn btn-6" data-bs-toggle="collapse" href="#collapseProducts">F</button></p>
    <div class="collapse" id="collapseProducts">
      INFORMACION 
      <h4 class="text-center color">Información</h4><br>
      <div class="" id="">
        <div id="" class="card card-body container text-center">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <form>
                  <div class="row g-3">
                    <div class="col-sm-6" >
                      <label for="firstName" class="form-label">Nombre</label>
                      <input type="text" class="form-control" maxLength="100" id="TITULO" v-model="form.TITULO"  required>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">Descripcion</label>
                      <input type="text" class="form-control" maxLength="100" id="DESCRIPCION" v-model="form.DESCRIPCION" required>
                    </div>

                    <div class="col-sm-6" >
                      <label for="lastName" class="form-label">Categoria</label>
                      <select class="form-select"  id="CATEGORIA" v-model="form.CATEGORIA"  required> 
                        <option>Plumas</option>
                        <option>Marca textos</option>
                        <option>Marcadores</option>
                        <option>Libretas</option>
                        <option>Colores</option>
                        <option>Blocs</option>
                      </select><br> 
                    </div>       

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Precio</label>
                    <input type="number" class="form-control" min="0" id="PRECIO" v-model="form.PRECIO" required>
                  </div>  

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Stock</label>
                    <input type="number" class="form-control" min="1" id="STOCK" v-model="form.STOCK" required>
                   </div>  
                  </div>
                  <button class="dash-btn btn-7" v-on:click="guardar()">g</button> 
                </form>
              </div>
            </div>
        </div>
      </div>
       <br><br><br>
    <article class="panel project" v-for="prod in form" :key="prod.PRODUCTOS_ID">
      <h1 class="project-name">{{prod.TITULO}}</h1>
      <div class="project-controls">
        <router-link to="" id="switch1"><button class="dash-btn btn-7">S</button></router-link>
        <router-link to="" id="switch1"><button class="dash-btn btn-7">A</button></router-link>
        <router-link to="" id="switch1"><button class="dash-btn btn-7">E</button></router-link>
      </div>
      <ul class="project-meta">
        <li>Client name: <strong>{{prod.DESCRIPCION}}</strong></li>
        <li>Start from: <strong><time>{{prod.CATEGORIA}}</time></strong></li>
        <li>Developed by: <strong>{{prod.PRECIO}}</strong></li>
      </ul>
    </article>

    
    </div>
  </main>------->
    <br><br><br><br>
</template>

<script>
/*
import '../assets/css/dashboard.css'
import axios from "axios";

export default {
  name: 'MyDashboard',
  data: function()
  {
    return {
              form:
                {
                  "PRODUCTOS_ID": 0,
                  "TITULO": "",
                  "DESCRIPCION": "",
                  "PIC": "",
                  "CATEGORIA": "",
                  "PRECIO": 0,
                  "STOCK": 0,
                  "FK_SECTION_ID": 1
                },
                formU:
                {
                  "USER_ID": 0,
                  "EMAIL": "",
                  "USER_PWD": "",
                  "USER_FULL_NAME": "",
                  "PIC": "",
                  "TEL": "",
                  "TIPO": "",
                  "CALLE": "",
                  "NUMERO": null,
                  "COLONIA": "",
                  "MUNICIPIO": "",
                  "ESTADO": "",
                  "FK_ID_USER": 3
                    } 
              
            }
  },
  

  methods:
  {
    guardar()
    {
      axios.post("http://localhost:9000/PRODUCT",this.form).then(data =>
      {
        console.log(data);
      })
    },
      async modifyPost() {
    let post = {
                  PRODUCTOS_ID: null,
                  TITULO: "",
                  DESCRIPCION: "",
                  PIC: "",
                  CATEGORIA: "",
                  PRECIO: null,
                  STOCK: null,
                  FK_SECTION_ID: 1    };
    let response = await axios.post("http://localhost:9000/PRODUCT", post)
    console.log(response.data);
  }

  },



    created(){

    fetch('http://localhost:9000/PRODUCT').then(res=> res.json()).then((data) => (this.form=data));    
    
    fetch('http://localhost:9000/USER').then(res=> res.json()).then((data) => (this.formU=data));
  },
}
 */

</script>