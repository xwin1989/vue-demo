<template>
  <div>
    <img src="/static/logo.png"/>
    <h1>{{env}}</h1>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  import utils from '../utils/index';

  export default {
    data() {
      return {
        list: [],
        env: process.env.NODE_ENV
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$api.get('topics', null, r => {
          this.list = r.data;
        })
      },
      goodTime(date) {
        return utils.goodTime(date);
      }
    }
  }
</script>
<style>
  .article_list {
    margin: auto;
  }
</style>
