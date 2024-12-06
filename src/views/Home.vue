<template>
  <div class="home">
    <h1>Welcome to Your Knowledge Base</h1>
    <p>This is a personal repository of solutions, notes, and learnings.</p>
    
    <section>
      <h2>Recent Additions</h2>
      <ul>
        <li v-for="item in recentItems" :key="item.path">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const recentItems = [
  { 
    path: '/docs/solutions/sample',
    title: 'Example Solution' 
  },
  { 
    path: '/docs/notes/getting-started', 
    title: 'Getting Started Notes' 
  }
]
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
}

ul li {
  margin-bottom: 10px;
}
</style>
