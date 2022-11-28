<template>
  <div class="subpage">
    <my-header :title="title"></my-header>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
module.exports = {
  name: 'Layout',
  components: {
    'my-header': httpVueLoader('/views/layout/components/MyHeader.vue')
  },
  computed: {
    title() {
      return this.$route.meta.title
    },
    key() {
      return this.$route.path
    }
  },
}
</script>

<style scoped>
</style>
