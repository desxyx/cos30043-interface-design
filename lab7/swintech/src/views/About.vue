<template>
  <div>
    <h1 class="mb-4">About SwinTech Travel</h1>

    <p class="lead mb-5">
      SwinTech Travel is a curated guide to the world's most remarkable destinations.
      Whether you're drawn to towering mountain ranges, sun-drenched beaches, vibrant cities,
      or the open ocean, our platform helps you discover and plan your next great adventure.
      Built with Vue.js and Bootstrap as part of COS30043 Interface Design and Development.
    </p>

    <div class="row g-4">

      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h2 class="h4 mb-3">Welcome Message</h2>
            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" id="firstName" class="form-control" v-model="firstName">
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" id="lastName" class="form-control" v-model="lastName">
              </div>
            </div>
            <div v-if="firstName || lastName" class="alert alert-info mb-0">
              Welcome, {{ firstName }} {{ lastName }}! We hope you find your perfect destination.
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h2 class="h4 mb-3">Your Preference</h2>
            <p class="text-muted mb-3">Select a scenery type to see an image.</p>
            <div class="d-flex gap-4 mb-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="mountain"
                  value="Mountain"
                  v-model="preference"
                >
                <label class="form-check-label" for="mountain">Mountain</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="ocean"
                  value="Ocean"
                  v-model="preference"
                >
                <label class="form-check-label" for="ocean">Ocean</label>
              </div>
            </div>
            <img
              v-if="preference"
              v-bind:src="preferenceImage"
              v-bind:alt="preference"
              class="img-fluid rounded"
            >
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      firstName: '',
      lastName: '',
      preference: ''
    }
  },

  computed: {
    preferenceImage: function () {
      if (this.preference === 'Mountain') {
        return 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop'
      }
      return 'https://plus.unsplash.com/premium_photo-1669274936462-5ac9832ba708?q=80&w=1679&auto=format&fit=crop'
    }
  }
}
</script>
