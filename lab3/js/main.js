const fallbackEvents = [
  {
    eventid: "EVT10001",
    eventname: "Tech Innovations Conference",
    category: "Technology",
    durationhour: 8,
  },
  {
    eventid: "EVT10002",
    eventname: "Startup Pitch Day",
    category: "Business",
    durationhour: 6,
  },
  {
    eventid: "EVT10003",
    eventname: "AI & Machine Learning Summit",
    category: "Technology",
    durationhour: 10,
  },
  {
    eventid: "EVT10004",
    eventname: "Cybersecurity Workshop",
    category: "Technology",
    durationhour: 4,
  },
  {
    eventid: "EVT10005",
    eventname: "Digital Marketing Bootcamp",
    category: "Marketing",
    durationhour: 6,
  },
  {
    eventid: "EVT10006",
    eventname: "Blockchain and Cryptocurrency",
    category: "Finance",
    durationhour: 5,
  },
  {
    eventid: "EVT10007",
    eventname: "Entrepreneurship Forum",
    category: "Business",
    durationhour: 7,
  },
  {
    eventid: "EVT10008",
    eventname: "Data Science Hackathon",
    category: "Technology",
    durationhour: 12,
  },
  {
    eventid: "EVT10009",
    eventname: "Leadership and Management Summit",
    category: "Business",
    durationhour: 9,
  },
  {
    eventid: "EVT10010",
    eventname: "E-commerce Strategies",
    category: "Marketing",
    durationhour: 6,
  },
  {
    eventid: "EVT10011",
    eventname: "AI for Business",
    category: "Business",
    durationhour: 8,
  },
  {
    eventid: "EVT10012",
    eventname: "IoT & Smart Devices Expo",
    category: "Technology",
    durationhour: 7,
  },
  {
    eventid: "EVT10013",
    eventname: "Brand Strategy and Growth",
    category: "Marketing",
    durationhour: 5,
  },
  {
    eventid: "EVT10014",
    eventname: "Investment and Wealth Management",
    category: "Finance",
    durationhour: 6,
  },
  {
    eventid: "EVT10015",
    eventname: "Financial Technology (FinTech) Summit",
    category: "Finance",
    durationhour: 8,
  },
  {
    eventid: "EVT10016",
    eventname: "AI Ethics and Regulations",
    category: "Technology",
    durationhour: 4,
  },
  {
    eventid: "EVT10017",
    eventname: "Business Analytics Workshop",
    category: "Business",
    durationhour: 6,
  },
  {
    eventid: "EVT10018",
    eventname: "SEO and Content Marketing",
    category: "Marketing",
    durationhour: 7,
  },
  {
    eventid: "EVT10019",
    eventname: "Cryptocurrency Investment Strategies",
    category: "Finance",
    durationhour: 9,
  },
  {
    eventid: "EVT10020",
    eventname: "Social Media Marketing Trends",
    category: "Marketing",
    durationhour: 5,
  },
];

Vue.createApp({
  data: function () {
    return {
      events: [],
      eventsLoadError:
        "",

      search: {
        eventid: "",
        eventname: "",
        durationhour: "",
        category: "All",
      },

      registration: {
        username: "",
        password: "",
        confirmPassword: "",
        category: "",
        eventname: "",
      },
    };
  },

  mounted() {
    this.loadEvents();
  },

  computed: {
    filteredEvents() {
      return this.events.filter(
        function (event) {
          return (
            event.eventid
              .toLowerCase()
              .includes(this.search.eventid.toLowerCase()) &&
            event.eventname
              .toLowerCase()
              .includes(this.search.eventname.toLowerCase()) &&
            String(event.durationhour).includes(this.search.durationhour) &&
            (this.search.category === "All" ||
              event.category === this.search.category)
          );
        }.bind(this),
      );
    },

    categoryEvents() {
      if (this.registration.category === "") {
        return [];
      }

      return this.events.filter(
        function (event) {
          return event.category === this.registration.category;
        }.bind(this),
      );
    },

    showPasswordMessage() {
      return (
        this.registration.confirmPassword !== "" &&
        this.registration.password !== this.registration.confirmPassword
      );
    },
  },

  watch: {
    "registration.category"() {
      this.registration.eventname = "";
    },
  },

  methods: {
    async loadEvents() {
      try {
        const response = await fetch("./events.txt");

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const text = await response.text();
        const events = Function(`"use strict"; return (${text});`)();

        if (!Array.isArray(events)) {
          throw new Error("Invalid events format");
        }

        this.events = events;
        this.eventsLoadError = "";
      } catch (error) {
        this.events = fallbackEvents;
        this.eventsLoadError =
          "events.txt could not be loaded, so the page is using built-in fallback data.";
      }
    },
  },
}).mount("#app");
