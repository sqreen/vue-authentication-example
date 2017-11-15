/**
* Created by vouill on 11/13/17.
*/

<template>
  <div class="feed-item">
    <h1>{{feed.name}}</h1>
    <p>{{feed.content}}</p>
  </div>
</template>

<style scoped>
  .feed-item {
    padding: 1em;
    width: 350px;
  }
</style>
<script>
  export default {
    name: 'feedItem',
    props: {feed: Object},
  }
</script>
