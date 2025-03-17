<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large',
  author: 'Farhan Madni',
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCreator: '@mfm347',
  twitterCard: 'summary_large_image',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: '%s - XYZDev',
  link: [
    { rel: 'icon', type: 'image/png', href: '/avatar.png' },
    { rel: 'canonical', href: 'https://xyzdev.vercel.app/' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <Nuxtpage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
