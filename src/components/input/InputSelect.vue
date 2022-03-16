<template>
  <Select2
      class="slc"
      v-model="myValue"
      :options="myOptions"
      :required="true"
      :settings="{
        placeholder: 'Specifies the placeholder through settings',
        width: '100%'
      }"
      @change="myChangeEvent($event)"
      @select="mySelectEvent($event)"
  />
  <h4>Value: {{ myValue }}</h4>
</template>

<script>
import Select2 from 'vue3-select2-component'
import {ref} from "vue";

export default {
  name: "InputSelect",
  components: {
    Select2
  },
  setup() {
    const myValue = ref("");
    const myOptions = [
      {id: "key1", text: "value1"},
      {id: "key2", text: "value2"}
    ]

    function myChangeEvent(val) {
      console.log(val);
    }

    function mySelectEvent({id, text}) {
      console.log({id, text})
    }

    return {
      myValue,
      myOptions,
      myChangeEvent,
      mySelectEvent
    }
  }
}
</script>

<style scoped>
  .slc {
    width: 100%;
  }
</style>