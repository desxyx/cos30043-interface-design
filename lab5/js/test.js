    computed: {
    sortedTasks: function () {
      return [...this.tasks].sort(function (a, b) {
        if (a.priority === b.priority) {
          return 0;
        }

        if (a.priority === "High Priority") {
          return -1;
        }

        return 1;
      });
    },
  },