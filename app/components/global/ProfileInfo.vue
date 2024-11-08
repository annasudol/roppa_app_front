<script setup lang="ts">
const { user } = useUserSession()
</script>

<template>
  <NuxtLayout>
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <BaseAvatar
          src="/img/avatars/2.svg"
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
            <span>Hello, {{ user?.id }}</span>
          </BaseHeading>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
