<template>
  <button :class="css" type="button" :id="id" @click="action">
    {{ placeholder }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: String,
    placeholder: String,
    long: Boolean,
    btnStyle: {
      type: String,
      default: "primary",
    },
    p: {
      type: String,
      default: "lg",
    },
  },
  setup(props, { emit }) {
    let css = "";
    let cssClass = [];

    cssClass.push("btn-padding-" + props.p);

    if (props.long) {
      cssClass.push("w-100");
    }

    switch (props.btnStyle) {
      case "primary":
        cssClass.push(...["bg-primary", "font-white"]);
        break;
      case "orange":
        cssClass.push(...["bg-secondary", "font-white"]);
        break;
      case "outline-primary":
        cssClass.push(
          ...["bg-transparent", "font-dark-blue", "btn-border-primary"]
        );
        break;
      case "outline-danger":
        cssClass.push(
          ...["bg-transparent", "font-orange", "btn-border-orange"]
        );
        break;
    }

    css = cssClass.join(" ");

    function action(payload) {
      emit("action", payload);
    }

    return {
      action,
      css,
    };
  },
};
</script>

<style scoped>
button {
  border-radius: 20px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
}

.btn-border-primary {
  border: 2px solid var(--primary);
}

.btn-border-orange {
  border: 1px solid var(--secondary);
}

.btn-padding-lg {
  padding: 8px 16px;
}

.btn-padding-sm {
  padding: 4px 16px;
}
</style>
