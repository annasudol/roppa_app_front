<script setup lang="ts">
const { classes } = defineProps<{
  classes?: string
}>()
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <div>
    <BaseButton
      v-if="!loggedIn"
      rounded="lg"
      color="primary"
      to="/auth/signin"
      class="w-32 text-nowrap"
      :class="classes"
    >
      <span class="ml-3">Sign in</span>
      <Icon
        name="ant-design:login-outlined"
        class="ms-1 h-4 w-4 relative top-0.5"
      />
    </BaseButton>
    <BaseButton
      v-else-if="loggedIn"
      rounded="lg"
      color="primary"
      class="w-32 text-nowrap"
      :class="classes"
      @click="clear"
    >
      <span>Logout</span>
      <Icon
        name="line-md:logout"
        class="ms-1 h-4 w-4 relative top-0.5"
      />
    </BaseButton>
  </div>
</template>
