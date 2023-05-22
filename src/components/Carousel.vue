<template>
  <!---------------------CARRUSEL----------------->
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        id="carrusel"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        id="carrusel"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        id="carrusel"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/imagenes/6.jpg"
          class="d-block w-100"
          min-width=""
          height="400"
        />
        <div class="">
          <div class="carousel-caption text-start">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/imagenes/5.jpg"
          class="d-block w-100"
          width="auto"
          height="400"
        />

        <div class="">
          <div class="carousel-caption">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/imagenes/4.jpg"
          class="d-block w-100"
          width="auto"
          height="400"
        />

        <div class="">
          <div class="carousel-caption text-end">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCarousel",
  props: {},
};
</script>
