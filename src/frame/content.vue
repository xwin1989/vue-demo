<template>
  <div>
    <h2 v-text="detail.title"></h2>
    <p>作者:{{ (detail.author.loginname) }}</p>
    <article v-html="detail.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in detail.replies">
        <p>评论者：{{i.author.loginname}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: {
          author: {
          }
        }
      }
    },
    created() {
      this.$api.get('topic/' + this.$route.params.id, null, r => {
        this.detail = r.data;
      })
    }
  }
</script>

<style scoped>
  article {
    font-size: 10px;
    border: solid 1px;
  }
</style>
