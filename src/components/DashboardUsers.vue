<template>
  <br /><br /><br /><br /><br />
  <!---------------------Dashboard Usuarios----------------->
  <h1 class="text-center color">Usuarios</h1>
  <main role="main">
    <p>
      <button
        class="dash-btn btn-6"
        data-bs-toggle="collapse"
        href="#collapseUsers"
      >
        v
      </button>
    </p>
    <div class="collapse" id="collapseUsers">
      <article class="panel project" v-for="user in posts" :key="user.USER_ID">
        <h1 class="project-name">{{ user.USER_FULL_NAME }}</h1>
        <div class="project-controls">
          <button class="dash-btn btn-7" v-on:click="eliminar(user.USER_ID)">
            x
          </button>
        </div>
        <ul class="project-meta">
          <li>
            Correo: <strong>{{ user.EMAIL }} </strong>
          </li>
          <li>
            Contraseña:
            <strong
              ><time>{{ user.USER_PWD }} </time></strong
            >
          </li>
          <li>
            Telefono: <strong>{{ user.TEL }} </strong>
          </li>
          <li>
            Ciudad: <strong>{{ user.MUNICIPIO }} </strong>
          </li>
        </ul>
      </article>
    </div>
  </main>
</template>

<script>
import "../assets/css/dashboard.css";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MyDashboardUsers",
  data: function () {
    return {
      posts: []
    };
  },
  created() {
    fetch("http://localhost:9000/USER")
      .then((res) => res.json())
      .then((data) => (this.posts = data));
  },
  methods: {
    eliminar(id) {
      axios.delete("http://localhost:9000/USER/" + id).then((data) => {
        console.log(data);
        Swal.fire("Se ha eliminado!", "👍🏼", "success");
      });
    },
  },
};
</script>
