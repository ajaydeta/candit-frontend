<template>
  <template v-if="isBlue">
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M0 0H2V20H0V0ZM16 0H3V20H16C17.103 20 18 19.103 18 18V2C18 0.897 17.103 0 16 0ZM15 10H6V8H15V10ZM15 6H6V4H15V6Z"
          fill="#24305E"/>
    </svg>
  </template>
  <template v-else>
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M0 0H2V20H0V0ZM16 0H3V20H16C17.103 20 18 19.103 18 18V2C18 0.897 17.103 0 16 0ZM15 10H6V8H15V10ZM15 6H6V4H15V6Z"
          fill="#D0D0D0"/>
    </svg>
  </template>
</template>

<script>
export default {
  name: "MenuLapak",
  props: {
    isBlue: Boolean
  }
}
</script>