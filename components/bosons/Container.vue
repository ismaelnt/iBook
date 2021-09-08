<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    max-width: 1070px;
    @include screen('small') {
      max-width: 90%;
    }
    @include screen ('medium') {
      max-width: 85%;
    }
    @include screen ('large', 'infinity') {
      max-width: 70%;
    }
  }
</style>