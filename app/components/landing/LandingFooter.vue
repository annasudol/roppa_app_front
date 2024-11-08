
<template>
  <footer class="bg-muted-100 dark:dark:bg-muted-950/95  border-muted-200 dark:border-muted-700 relative border-t">
    <div class="w-7xl mx-auto p-0 xl:px-0">
      <div class="mx-auto max-w-7xl sm:px-8 pt-12">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-4">
            <NuxtLink
              to="/"
              class="ms-2 inline-flex"
              aria-label="Go to Roppa homepage"
            >
              <RoppaLogo
                class="text-primary-500 group-[&.scrolled]/landing:h-6 group-[&:not(.scrolled)]/landing:h-7 motion-safe:transition-all motion-safe:duration-200"
              />
            </NuxtLink>
            <BaseHeading
              as="h3"
              size="md"
              weight="light"
              lead="tight"
              class="text-muted-800 pr-16 mb-4 max-w-md dark:text-white"
            >
              Enhance creativity and
              productivity with cutting-edge artificial intelligence solutions for cloths desiging.
            </BaseHeading>

            <div class="flex space-x-2">
              <NuxtLink
                to="https://www.linkedin.com/in/roppaai/"
                external
                target="_blank"
                rel="noopener"
                class="hover:brightness-75 transition-opacity ease-in-out"
              >
                <Icon
                  name="iconoir:linkedin"
                  class="h-5 w-5 text-primary"
                />
              </NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/in/roppaai/"
                external
                target="_blank"
                rel="noopener"
                class="hover:brightness-75 transition-opacity ease-in-out"
              >
                <Icon
                  name="iconoir:instagram"
                  class="h-5 w-5 text-primary"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Our Solutions
                </BaseHeading>

                <ul
                  role="list"
                  class="mt-6 space-y-4"
                >
                  <li>
                    <a
                      href="/aiplatform"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >AI Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aialgorithms"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >AI Algorithms
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industryapplications"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Industry
                      Applications
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Use Cases
                </BaseHeading>

                <ul
                  role="list"
                  class="mt-6 space-y-4"
                >
                  <li>
                    <a
                      href="/predictiveanalysis"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Predictive
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="/customerexperience"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Customer
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="/automation"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Automation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Resources
                </BaseHeading>
                <ul
                  role="list"
                  class="mt-6 space-y-4"
                >
                  <li>
                    <a
                      href="/pricing"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/casestudies"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Terms
                      of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Company
                </BaseHeading>
                <ul
                  role="list"
                  class="mt-6 space-y-4"
                >
                  <li>
                    <a
                      href="/aboutus"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contactus"
                      class="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
          <div class="text-md text-center text-slate-700 dark:text-gray-200">
            Copyright <span class="text-2xl relative top-1">&reg;</span> {{ new Date().getFullYear() }} . Crafted with
            <span class="text-slate-700 dark:text-gray-200">♥</span> by AI enthusiasts at
            <BaseLink
              to="https://roppa.ai"
            >
              Roppa
            </BaseLink>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
