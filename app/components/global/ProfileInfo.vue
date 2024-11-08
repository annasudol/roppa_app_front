<script setup lang="ts">
const { user } = useUserSession()
console.log(user.value, 'user')
</script>

<template>
  <div>
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <BaseAvatar
          :src="user?.pic"
          size="lg"
        />
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Hello, {{ user?.name }}</span>
          </BaseHeading>
        </div>
      </div>
    </div>
  </div>
</template>
