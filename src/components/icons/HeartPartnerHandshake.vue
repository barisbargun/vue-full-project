<script setup lang="ts">
const { fill = 'hsl(var(--primary))' } = defineProps<{
  fill?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xml:space="preserve"
  >
    <path
      d="M16.792 17.836a1.5 1.5 0 1 1-2.121 2.121l-5.816-5.816-1.414 1.414 5.393 5.393a1.5 1.5 0 1 1-2.121 2.121L6.04 18.396C3.083 15.511.062 11.667.062 8.005c0-3.86 2.917-7 6.5-7 1.773 0 3.131.662 4.165 1.397L7.088 6.01c-.662.661-1.026 1.541-1.026 2.476s.364 1.814 1.024 2.474a3.475 3.475 0 0 0 2.476 1.026c.426 0 .837-.085 1.225-.229l6.005 6.08ZM14.484 8.53l-2.092 2.078 6.11 6.018a1.5 1.5 0 0 0 2.121 0c.896-.896.129-1.888.129-1.888L14.483 8.53Zm3.036-7.467c-1.634.01-3.186.72-4.382 1.834L8.501 7.503a1.5 1.5 0 1 0 2.121 2.121l3.906-3.88 7.734 7.678c1.191-1.922 1.799-3.722 1.799-5.359 0-3.86-2.958-7-6.542-7Z"
      :fill="fill"
      data-original="#000000"
    />
  </svg>
</template>

<style scoped></style>
