<script setup lang="ts">
definePageMeta({
  layout: 'collapse',
  title: 'Dashboard',
  preview: {
    title: 'Dashboard',
    description: 'For authentication and sign up',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-signup-3.png',
    srcDark: '/img/screens/auth-signup-3-dark.png',
    order: 159
  }
})
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
            <span>Welcome back, {{ user?.name }}</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButton>
          <span>View Reports</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Manage Store</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Quick stats -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard class="p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Your Quick Stats</span>
            </BaseHeading>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                rounded="full"
                color="none"
              >
                <Icon
                  name="ph:nut-duotone"
                  class="size-5"
                />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>2,870</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Sales this month
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
                rounded="full"
                color="none"
              >
                <Icon
                  name="ph:handshake-duotone"
                  class="size-5"
                />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>159</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    New users
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400"
                rounded="full"
                color="none"
              >
                <Icon
                  name="ph:sketch-logo-duotone"
                  class="size-5"
                />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$429.18</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Earned today
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"
            >
              <BaseIconBox
                size="md"
                class="bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
                rounded="full"
                color="none"
              >
                <Icon
                  name="ph:bank-duotone"
                  class="size-5"
                />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$6816.32</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Total balance
                  </span>
                </BaseParagraph>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Area Chart card -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard class="p-6">
          <!-- Title -->
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Customers</span>
            </BaseHeading>
          </div>
          <AddonApexcharts
            v-bind="areaCustomers"
            class="-ms-4"
          />
        </BaseCard>
      </div>
      <!-- CTA card -->
      <div
        class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"
      >
        <BaseCard
          class="from-primary-600 to-primary-700 relative flex h-full items-center justify-center bg-gradient-to-br p-6"
        >
          <div class="relative z-20 flex flex-col gap-3 py-10 text-center">
            <BaseHeading
              as="h4"
              size="lg"
              weight="semibold"
              lead="tight"
              class="text-white"
            >
              <span>Hey Maya, you're doing great.</span>
            </BaseHeading>
            <BaseParagraph
              size="md"
              class="mx-auto max-w-[280px]"
            >
              <span class="text-white/80">
                Start using our team and project management tools
              </span>
            </BaseParagraph>
            <NuxtLink
              class="font-sans text-white underline-offset-4 hover:underline"
              to="#"
            >
              Learn More
            </NuxtLink>
          </div>
          <div
            class="absolute bottom-4 end-4 z-10 flex size-14 items-center justify-center"
          >
            <Icon
              name="ph:crown-duotone"
              class="text-primary-900/50 size-14"
            />
          </div>
        </BaseCard>
      </div>
      <!-- Radial Bar card -->
      <div
        class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4"
      >
        <BaseCard class="relative p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Team Efficiency</span>
            </BaseHeading>
          </div>
          <div
            class="absolute inset-x-0 top-24 flex items-center justify-center gap-4"
          >
            <BaseAvatar src="/img/avatars/4.svg" />
            <BaseAvatar
              text="H"
              class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
            />
            <BaseAvatar src="/img/avatars/3.svg" />
          </div>
          <AddonApexcharts v-bind="radialBarTeam" />
        </BaseCard>
      </div>
      <!-- Bar chart card -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <BaseCard class="relative p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Profit Evolution</span>
            </BaseHeading>
          </div>
          <AddonApexcharts v-bind="barProfit" />
        </BaseCard>
      </div>
    </div>
  </NuxtLayout>
</template>
