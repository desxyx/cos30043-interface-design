<template>
  <div>
    <h1 class="mb-3">Welcome to SwinTech Travel</h1>
    <p class="lead mb-4">
      Discover the world's most remarkable destinations — from mist-covered mountain peaks
      to sun-drenched beaches. Let SwinTech Travel inspire your next adventure.
    </p>

    <div id="travelCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#travelCarousel" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner rounded">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=2069&auto=format&fit=crop"
            class="d-block w-100"
            alt="Beach"
            style="max-height: 480px; object-fit: cover;"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Beautiful Beaches</h5>
            <p>Feel the sand between your toes.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop"
            class="d-block w-100"
            alt="Train on bridge through forest"
            style="max-height: 480px; object-fit: cover;"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Scenic Journeys</h5>
            <p>The journey is the destination.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1710&auto=format&fit=crop"
            class="d-block w-100"
            alt="Scooter in an Italian street"
            style="max-height: 480px; object-fit: cover;"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>City Escapes</h5>
            <p>Explore the culture and character of every city.</p>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#travelCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#travelCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="card border-0 bg-light h-100 text-center p-3">
          <h3 class="h5">Destinations</h3>
          <p class="mb-0 text-muted">Curated destinations across mountains, oceans, beaches, and cities worldwide.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 bg-light h-100 text-center p-3">
          <h3 class="h5">Search &amp; Filter</h3>
          <p class="mb-0 text-muted">Find exactly what you're looking for by name, country, or category.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 bg-light h-100 text-center p-3">
          <h3 class="h5">Personalise</h3>
          <p class="mb-0 text-muted">Tell us your preference and we'll match the perfect scenery for you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
