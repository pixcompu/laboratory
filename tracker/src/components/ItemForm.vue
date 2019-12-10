<template>
  <div>
    <p>
      <input type="text" placeholder="Nombre" v-model="newItem.name" />
    </p>
    <p>
      <input type="number" placeholder="Horas" v-model="newItem.hours" />
    </p>
    <p>
      <button
        class="bg-blue-500"
        v-bind:disabled="!enableSave"
        v-on:click="save"
      >
        Guardar
      </button>
    </p>
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
