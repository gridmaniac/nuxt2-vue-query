<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useQuery } from '@tanstack/vue-query'

export default defineComponent({
  setup() {
    const { data } = useQuery(['pokemons'], async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon')
      return res.json()
    })

    return {
      data
    }
  }
})
</script>
