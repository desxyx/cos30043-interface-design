<template>
  <div>
    <h1 class="mb-4">Travel Destinations</h1>

    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        v-model="search"
        placeholder="Search by name, country, description or category..."
      >
    </div>

    <p class="text-muted mb-3">
      Showing {{ filteredDestinations.length }} destination(s)
    </p>

    <div class="row g-4">
      <div
        class="col-md-6 col-lg-4"
        v-for="dest in paginatedDestinations"
        v-bind:key="dest.name"
      >
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ dest.name }}</h5>
            <p class="text-muted mb-2">{{ dest.country }}</p>
            <span class="badge bg-secondary mb-3">{{ dest.category }}</span>
            <p class="card-text">{{ dest.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredDestinations.length === 0" class="alert alert-warning mt-3">
      No destinations found.
    </div>

    <nav v-if="totalPages > 1" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-bind:class="{ disabled: currentPage === 1 }">
          <button class="page-link" v-on:click="currentPage--">Previous</button>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          v-bind:key="page"
          v-bind:class="{ active: currentPage === page }"
        >
          <button class="page-link" v-on:click="currentPage = page">{{ page }}</button>
        </li>
        <li class="page-item" v-bind:class="{ disabled: currentPage === totalPages }">
          <button class="page-link" v-on:click="currentPage++">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import destinations from '../data/destinations.json'

export default {
  name: 'Travel',

  data() {
    return {
      destinations: destinations,
      search: '',
      currentPage: 1,
      perPage: 6
    }
  },

  computed: {
    filteredDestinations: function () {
      const s = this.search.toLowerCase().trim()
      if (!s) return this.destinations
      return this.destinations.filter(function (dest) {
        return (
          dest.name.toLowerCase().includes(s) ||
          dest.country.toLowerCase().includes(s) ||
          dest.description.toLowerCase().includes(s) ||
          dest.category.toLowerCase().includes(s)
        )
      })
    },

    totalPages: function () {
      return Math.ceil(this.filteredDestinations.length / this.perPage)
    },

    paginatedDestinations: function () {
      const start = (this.currentPage - 1) * this.perPage
      return this.filteredDestinations.slice(start, start + this.perPage)
    }
  },

  watch: {
    search: function () {
      this.currentPage = 1
    }
  }
}
</script>
