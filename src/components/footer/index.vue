/**
* Created by vouill on 11/14/17.
*/

<template>
  <div class="sq-footer">
    Made w/ love @&nbsp;<a target="_blank" href="https://sqreen.io">Sqreen</a>
  </div>
</template>

<style scoped>
  .sq-footer {
    background-color: rgb(183, 72, 14);
    height: 20px;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    color: white;
    align-items: center;
    padding-right: 1em;
  }
  a {
    color:white;
  }
</style>

<script>
  export default {
    name: 'sqreen-footer',
  }
</script>
