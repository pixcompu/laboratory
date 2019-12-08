<template>
  <div>
    <div v-show="items.length > 0">
      <h3>Lista de {{ title }}</h3>
      <ol>
        <li v-for="(item, i) in items" :key="i">
          {{ item.name }} ({{ item.hours }} horas)
          <button v-on:click="deleteItem">X</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
/*
    Component to manage list behavior
*/
export default {
  name: "ItemList",
  // topic will be the type of elements that will hold this list
  // items will be the items to be rendered each one with name and hours
  props: ["topic", "items"],
  computed: {
    title() {
      return this.topic[0].toUpperCase() + this.topic.slice(1) + "s";
    }
  },
  methods: {
    // delete one item from the list by the index
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
