<template>
  <div>
    <cHeader />
    <router-view />
  </div>
</template>

<script>
import cHeader from './components/cHeader'
export default {
  components: {
    cHeader
  }
}
</script>
