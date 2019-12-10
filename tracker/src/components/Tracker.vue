<template>
  <div class="container">
    <h1 class="font-semibold text-xl tracking-tight">
      {{ title }} que me gustan
    </h1>
    <item-form v-on:add-item="save"></item-form>
    <item-list v-bind:items="list" v-bind:topic="topic"></item-list>
    <p>
      Llevo <strong>{{ totalTime }}</strong> horas invertidas total.
    </p>
    <img v-bind:src="reactionImageSrc" alt="reaction" />

    <!-- modal the we will show to congratulate the user in case he invested many hours -->
    <modal
      title="Felicidades"
      v-on:close-modal="closeModal"
      v-bind:is-open="isModalOpen"
    >
      Invertiste {{ totalTime }} horas en {{ topic }}, descanza un poco.
    </modal>
    <slot></slot>
  </div>
</template>

<script>
/*
    Main component for list and form interaction
*/
import ItemForm from "./ItemForm";
import ItemList from "./ItemList.vue";
import Modal from "./Modal.vue";
export default {
  name: "Tracker",
  components: {
    ItemForm,
    ItemList,
    Modal
  },
  // parent properties that we need to build this list
  // topic is the type of items that we will track
  // happyImgSrc and sadImgSrc will be the image ursl that we will show with an empty/not empty list
  props: ["topic", "happyImgSrc", "sadImgSrc"],
  data() {
    return {
      list: [],
      isModalOpen: false,
      totalTime: 0
    };
  },
  // return the image corresponding depending if the list is empty or not
  computed: {
    reactionImageSrc() {
      if (this.totalTime > 0) {
        return this.happyImgSrc;
      } else {
        return this.sadImgSrc;
      }
    },
    // title is formated as pascal case in plural
    title() {
      return this.topic[0].toUpperCase() + this.topic.slice(1) + "s";
    }
  },
  // with each modification to the list we may want to update the total of hours invested
  watch: {
    list() {
      this.totalTime = this.list.reduce(
        (acumulated, current) => acumulated + current.hours,
        0
      );
    },
    totalTime() {
      if (this.totalTime > 50) {
        this.isModalOpen = true;
      }
    }
  },
  methods: {
    // add a new element to the list
    save(newItem) {
      this.list.push({
        name: newItem.name,
        hours: parseInt(newItem.hours, 10)
      });
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
