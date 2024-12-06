<template>
  <div v-if="content" v-html="renderedContent" />
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const content = ref(null)
const renderedContent = ref('')

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

onMounted(async () => {
  try {
    const { type, file } = route.params
    const markdownModule = await import(`../../docs/${type}/${file}.md?raw`)
    content.value = markdownModule.default
    renderedContent.value = md.render(content.value)
  } catch (error) {
    console.error('Error loading markdown:', error)
  }
})
</script>
