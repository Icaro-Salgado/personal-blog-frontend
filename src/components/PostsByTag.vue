<template>
    <div>
        <h2>Posts in #{{ $route.params.tag }}</h2>
        <PostList :posts="posts" v-if="posts" />
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import gql from 'graphql-tag'

export default {
    name: 'PostsByTag',
    components: {
        PostList,
    },
    async created() {
        const posts = await this.$apollo.query({
            query: gql`query ($tag: String!) {
        postsByTag(tag: $tag) {
          title
          subtitle
          publishDate
          published
          metaDescription
          slug
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
            variables: {
                tag: this.$route.params.tag,
            },
        })
        this.posts = posts.data.postsByTag
    },
    data() {
        return {
            posts: null,
        }
    },
}
</script>