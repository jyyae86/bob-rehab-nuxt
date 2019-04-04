<template>
  <div>
    <header>
      <small class="p-small">{{ $t('service.kicker') }}</small>
      <h1>{{ $t('service.moxibustion.title') }}</h1>
      <p class="p-legend">{{ $t('service.moxibustion.note') }}</p>
    </header>
    <main>
      <section class="intro">
        <table class="pricing-table">
          <tbody>
            <tr>
              <td>
                <p class="h4">{{ $t('service.moxibustion.pricing.name') }}</p>
                <p class="p-small">{{ $t('service.moxibustion.pricing.time') }}</p>
              </td>
              <td class="p-legend text-right">{{ $t('service.moxibustion.pricing.price') }}</td>
            </tr>
          </tbody>
        </table>
        <div class="glide carousel carousel--first">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <img class="" src="/images/moxibustion-1.jpg" />
              </li>
              <li class="glide__slide">
                <img class="" src="/images/moxibustion-2.jpg" />
              </li>
            </ul>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
          </div>
        </div>
      </section>
      <div class="introduction">
        <p>{{ $t('service.moxibustion.introduction') }}</p>
      </div>
      <div class="description-wrapper">
        <section>
          <h2 class="h3">{{ $t('service.moxibustion.types.title') }}</h2>
          <ul>
            <li v-for="item in $t('service.moxibustion.types.items')">{{ item }}</li>
          </ul>
        </section>
        <div class="glide carousel carousel--second">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <img class="" src="/images/moxibustion-1.jpg" />
              </li>
              <li class="glide__slide">
                <img class="" src="/images/moxibustion-2.jpg" />
              </li>
            </ul>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
          </div>
        </div>
        <section>
          <h2 class="h3">{{ $t('service.moxibustion.specialty.title') }}</h2>
          <ul>
            <li v-for="item in $t('service.moxibustion.specialty.items')" v-html="item"></li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted: () => {
    new Glide('.carousel--first', {autoplay: 4000}).mount();
    new Glide('.carousel--second', {autoplay: 4000}).mount();
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

$break-tablet: 720px;


header {
  padding: 36px 20px 90px;
  background-image: url('/images/moxibustion-background.jpg');
  background-size: cover;
  background-color: black;

  @media screen and (min-width: $break-tablet) {
    padding: 68px 8vw 138px;
  }

  small {
    text-transform: uppercase;
  }

  * {
    color: white;
  }

  .p-legend {
    margin-top: 4px;
  }
}
table {
  width: 100%;
}
tbody {
  border-top: 1px solid #F3F3F3;
  border-bottom: 1px solid #F3F3F3;
}
tr:not(:first-child) {
  border-top: 1px solid #f3f3f3;
}
td {
  padding-top: 10px;
  padding-bottom: 10px;
  vertical-align: middle;

  @media screen and (min-width: $break-tablet) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
@media screen and (min-width: $break-tablet) {
  table {
    display: block;
  }
  tbody {
    display: block;
  }
  tr {
    display: flex;
    justify-content: space-between;
  }
}
.introduction {
  background-color: #e6f3f0;
  padding: 36px 20px;
  margin-top: 56px;

  @media screen and (min-width: $break-tablet) {
    padding-left: 8vw;
    padding-right: 8vw;
    padding-top: 42px;
    padding-bottom: 42px;
  }

  p {
    color: #000;

    @media screen and (min-width: $break-tablet) {
      font-size: 18px;
      line-height: 28px;
    }

    & + p {
      margin-top: 12px;
    }
  }
}
ul {
  margin-top: 16px;
}
li:not(:first-child) {
  margin-top: 10px;
}
.carousel {
  margin-top: 56px;
}
.intro {
  @media screen and (min-width: $break-tablet) {
    display: flex;
    align-items: center;
  }
}
.carousel--first {
  display: none;

  @media screen and (min-width: $break-tablet) {
    display: block;
    max-width: 320px;
    margin-left: 8vw;
  }
}
.carousel--second {
  margin-top: 56px;

  @media screen and (min-width: $break-tablet) {
    display: none;
  }
}
.description-wrapper {
  @media screen and (min-width: $break-tablet) {
    display: flex;

    section {
      flex-basis: 0;
      flex-grow: 1;
      padding-right: 5vw;

      &:last-child {
        flex-grow: 2;
        padding-left: 5vw;
      }
    }
  }
}
.h4 + .p-small {
  @media screen and (min-width: $break-tablet) {
    margin-top: 4px;
  }
}
</style>
