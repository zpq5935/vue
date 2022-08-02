<template>
  <div>
    <vue-markdown :source="source"></vue-markdown>
  </div>

</template>


<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      source: new Date().toLocaleTimeString(),
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.source = new Date().toLocaleTimeString();
    }, 1000);
  }
}
</script>
