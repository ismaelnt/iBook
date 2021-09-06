<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui labore
      assumenda aspernatur quibusdam nisi voluptates? Voluptatem odit temporibus
      minus assumenda, voluptate beatae, voluptates cupiditate consectetur magnam
      nesciunt cumque nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui labore
      assumenda aspernatur quibusdam nisi voluptates? Voluptatem odit temporibus
      minus assumenda, voluptate beatae, voluptates cupiditate consectetur magnam
      nesciunt cumque nihil.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
    justify-self: center;
  }
}
</style>