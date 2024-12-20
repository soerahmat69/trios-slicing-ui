<template>
  <div id="overley" class="w-small-hidden w-medium-display">
    <div id="overley_up">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 8C3.86258e-07 3.58172 3.58172 -3.86258e-07 8 0L6.99382e-07 -6.99382e-07L0 8Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <div id="overley_left">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 8C3.58172 8 -1.93129e-07 4.41828 0 -3.49691e-07L-3.49691e-07 8L8 8Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <div id="overley_right">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-3.49691e-07 0C4.41828 -1.93129e-07 8 3.58172 8 8L8 -3.49691e-07L-3.49691e-07 0Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <div id="overley_bottom">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 0C8 4.41828 4.41828 8 0 8H8V0Z"
          fill="white"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'overley-component',
}
</script>
