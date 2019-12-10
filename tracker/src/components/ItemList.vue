<template>
  <div>
    <div class="container" v-show="items.length > 0">
      <h3>Lista de {{ title }}</h3>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Horas</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td class="border px-4 py-2">{{ item.name }}</td>
            <td class="border px-4 py-2">{{ item.hours }}</td>
            <td class="border px-4 py-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                v-on:click="deleteItem(i)"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
