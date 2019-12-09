<template>
  <div>
    <!-- render a tracker for each element in opur tracker list -->
    <tracker
      v-for="(tracker, i) in trackers"
      :key="i"
      v-bind:topic="tracker.topic"
      v-bind:happy-img-src="tracker.happy"
      v-bind:sad-img-src="tracker.sad"
    >
      <hr />
    </tracker>
  </div>
</template>

<script>
import Tracker from "./components/Tracker.vue";

export default {
  name: "app",
  components: {
    Tracker
  },
  data() {
    return {
      // define topic of each tracker, we also need a key that will be use to search a image of the related topic in a placeholder image API
      topics: [
        {
          name: "anime",
          key: "anime"
        },
        {
          name: "pelicula",
          key: "movie"
        }
      ]
    };
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeDestroy() {
    console.log("beforeDestroy()");
  },
  destroyed() {
    console.log("destroyed()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  computed: {
    // to render the trackers we need 2 images, one that will be shown if tracker is empty and other when the tracker has something in the list
    trackers() {
      return this.topics.map(topic => {
        // to get random images we will use a image placeholder API, passing the key of the topic
        let url = "https://loremflickr.com/320/240/";
        return {
          topic: topic.name,
          // append random=n to avoid getting the same image twice for each topic as the docs suggest
          happy: url + topic.key + "?random=1",
          sad: url + topic.key + "?random=2"
        };
      });
    }
  }
};
</script>

<style></style>
