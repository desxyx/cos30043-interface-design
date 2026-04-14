const { createApp } = Vue;

const JobOverview = {
  template: `
    <div class="card shadow-sm border-0">
      <div class="card-body">
        <h2 class="h4 mb-3">Job Overview</h2>
        <p class="mb-3">
          This section is built with Vue Router. Click the Overview link or any job ID on the left to display the related content on the right.
        </p>

        <div class="row g-3">
          <div class="col-md-4">
            <div class="border rounded p-3 h-100 bg-light">
              <h3 class="h6">Total Jobs</h3>
              <p class="mb-0">{{ totalJobs }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border rounded p-3 h-100 bg-light">
              <h3 class="h6">Categories</h3>
              <p class="mb-0">{{ totalCategories }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border rounded p-3 h-100 bg-light">
              <h3 class="h6">Main Focus</h3>
              <p class="mb-0">AI and Tech Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
    totalJobs: function () {
      return this.$root.jobs.length;
    },
    totalCategories: function () {
      const categories = this.$root.jobs.map(function (job) {
        return job.category;
      });

      const uniqueCategories = new Set(categories);

      return uniqueCategories.size;
    },
  },
};

const JobDetail = {
  template: `
    <div>
      <div v-if="filteredJobs.length > 0" class="card border-0">
        <div class="card-body" v-for="job in filteredJobs" v-bind:key="job.job_id">
          <h2 class="h4 mb-3">Job Detail: {{ job.job_id }}</h2>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="border p-3 h-100 bg-light">
                <p class="mb-2"><strong>Title:</strong> {{ job.job_title }}</p>
                <p class="mb-2"><strong>Category:</strong> {{ job.category }}</p>
                <p class="mb-2"><strong>Company:</strong> {{ job.company }}</p>
                <p class="mb-2"><strong>Location:</strong> {{ job.location }}</p>
                <p class="mb-2"><strong>Employment Type:</strong> {{ job.employment_type }}</p>
                <p class="mb-2"><strong>Job Level:</strong> {{ job.job_level }}</p>
                <p class="mb-0"><strong>Salary Range:</strong> {{ job.salary_range }}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="border p-3 h-100 bg-light">
                <h3 class="h6">Job Description</h3>
                <p class="mb-3">{{ job.job_description }}</p>
                <p class="mb-2"><strong>Supervisor:</strong> {{ job.supervisor }}</p>
                <p class="mb-2"><strong>Positions Available:</strong> {{ job.positions_available }}</p>
                <p class="mb-2"><strong>Posted Date:</strong> {{ job.posted_date }}</p>
                <p class="mb-2"><strong>Start Date:</strong> {{ job.start_date }}</p>
                <p class="mb-0"><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="border p-3 h-100">
                <h3 class="h6">Required Skills</h3>
                <ul class="mb-0">
                  <li v-for="item in job.required_skills" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="col-md-6">
              <div class="border p-3 h-100">
                <h3 class="h6">Preferred Qualifications</h3>
                <ul class="mb-0">
                  <li v-for="item in job.preferred_qualifications" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="col-12">
              <div class="border p-3">
                <h3 class="h6">Tags</h3>
                <div class="d-flex flex-wrap gap-2">
                  <span
                    v-for="tag in job.tags"
                    :key="tag"
                    class="badge text-bg-secondary"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="alert alert-warning mb-0">
        Job not found.
      </div>
    </div>
  `,
  computed: {
    filteredJobs: function () {
      return this.$root.jobs.filter((job) =>
        job.job_id.toLowerCase().match(this.$route.params.id.toLowerCase()),
      );
    },
  },
};

const JobList = {
  props: ["jobs"],
  template: `
    <div class="card shadow-sm border-0 h-100">
      <div class="card-body">
        <h2 class="h5 mb-3">Job List</h2>
        <div class="list-group">
          <router-link to="/" class="list-group-item list-group-item-action">
            Overview
          </router-link>
          <router-link
            v-for="job in jobs"
            v-bind:key="job.job_id"
            v-bind:to="{ path: '/job/' + job.job_id }"
            class="list-group-item list-group-item-action"
          >
            {{ job.job_id }}
          </router-link>
        </div>
      </div>
    </div>
  `,
};

const ToDoList = {
  data: function () {
    return {
      newTask: "",
      tasks: [
        {
          id: 1,
          name: "Update resume and LinkedIn profile",
          priority: "Low Priority",
        },
        {
          id: 2,
          name: "Review AI research Assistant job",
          priority: "High Priority",
        },
      ],
      nextId: 3,
    };
  },

  methods: {
    addTask: function () {
      const taskName = this.newTask.trim();

      if (taskName === "") {
        return;
      }

      this.tasks.unshift({
        id: this.nextId,
        name: taskName,
        priority: "Low Priority",
      });

      this.nextId += 1;
      this.newTask = "";
    },
    deleteTask: function (taskId) {
      this.tasks = this.tasks.filter(function (task) {
        return task.id !== taskId;
      });
    },
    togglePriority: function (task) {
      if (task.priority === "High Priority") {
        task.priority = "Low Priority";
      } else {
        task.priority = "High Priority";
      }
    },
    buttonCaption: function (task) {
      if (task.priority === "High Priority") {
        return "Mark as Low Priority";
      }

      return "Mark as High Priority";
    },
  },
  template: `
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="h4 mb-3">To-Do List</h2>

        <div class="row g-2 mb-3">
          <div class="col-md-9">
            <input
              v-model="newTask"
              type="text"
              class="form-control"
              placeholder="Enter a new task"
            >
          </div>
          <div class="col-md-3 d-grid">
            <button type="button" class="btn btn-primary" v-on:click="addTask">
              Add
            </button>
          </div>
        </div>

        <ul class="list-group">
          <li
            v-for="task in tasks"
            v-bind:key="task.id"
            class="list-group-item"
          >
            <div class="d-flex flex-column flex-md-row justify-content-between gap-2">
              <span>{{ task.name }} ({{ task.priority }})</span>
              <div class="d-flex gap-2">
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  v-on:click="togglePriority(task)"
                >
                  {{ buttonCaption(task) }}
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  v-on:click="deleteTask(task.id)"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
};

const app = createApp({
  data: function () {
    return {
      jobs: [],
      isLoading: true,
      loadError: "",
    };
  },
  methods: {
    loadJobs: async function () {
      this.isLoading = true;
      this.loadError = "";

      try {
        const response = await fetch("./jobs.txt");

        if (!response.ok) {
          throw new Error("Unable to load jobs.txt");
        }

        const text = await response.text();
        this.jobs = JSON.parse(text);
      } catch (error) {
        this.loadError = "Unable to load job data. Please check jobs.txt.";
      } finally {
        this.isLoading = false;
      }
    },
  },
  created: function () {
    this.loadJobs();
  },
});

const routes = [
  { path: "/", component: JobOverview },
  { path: "/job/:id", component: JobDetail },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.component("job-list", JobList);
app.component("to-do-list", ToDoList);

app.use(router);
app.mount("#app");
