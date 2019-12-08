<template>
  <div class="modal-mask" v-if="isOpen">
    <div class="modal-wrapper">
      <div class="modal-container">
        <h3>{{ title }}</h3>
        <div>
          <slot></slot>
        </div>
        <footer>
          <button v-on:click="close">Cerrar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["title", "isOpen"],
  methods: {
    close() {
      this.$emit("close-modal");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  text-align: left;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
