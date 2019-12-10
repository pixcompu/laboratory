<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nombre
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nombre"
          v-model="newItem.name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="hours">
          Horas
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hours"
          type="number"
          placeholder="Horas"
          v-model="newItem.hours"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          v-bind:disabled="!enableSave"
          v-on:click="save"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
/*
    Child component to manage the form
*/
export default {
  name: "ItemForm",
  data() {
    return {
      newItem: {
        name: null,
        hours: null
      }
    };
  },
  methods: {
    // when save we don't have the list so we need to notify the parent to add the element
    save() {
      this.$emit("add-item", this.newItem);
      // reset fields
      this.newItem.name = null;
      this.newItem.hours = null;
    }
  },
  computed: {
    // we need to know if we got valid data to save
    enableSave() {
      return this.newItem.name && this.newItem.hours;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
