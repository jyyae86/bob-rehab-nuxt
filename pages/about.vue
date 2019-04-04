<template>
  <div>
    <header>
      <h1>{{ $t('about.title') }}</h1>
      <div class="glide carousel carousel--first">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img class="" src="/images/clinic-1.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-2.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-3.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-4.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-5.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-6.jpg" />
            </li>
            <li class="glide__slide">
              <img class="" src="/images/clinic-7.jpg" />
            </li>
          </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
          <button class="glide__bullet" data-glide-dir="=3"></button>
          <button class="glide__bullet" data-glide-dir="=4"></button>
          <button class="glide__bullet" data-glide-dir="=5"></button>
          <button class="glide__bullet" data-glide-dir="=6"></button>
        </div>
      </div>
    </header>
    <main>
      <section>
        <h2>{{ $t('about.bob_li.name') }}</h2>
        <div class="introduction-wrapper">
          <img src="/images/bob-li.jpg" />
          <div class="introduction">
            <p>{{ $t('about.bob_li.description.first') }}</p>
            <p class="p-second">{{ $t('about.bob_li.description.second') }}</p>
          </div>
        </div>
        <div class="timeline-wrapper">
          <div class="image-wrapper">
            <img src="/images/bob-li-2.jpg" />
            <img src="/images/bob-li-3.jpg" />
          </div>
          <div class="timeline">
            <p class="h4">{{ $t('about.bob_li.timeline.first.time') }}</p>
            <p>{{ $t('about.bob_li.timeline.first.content.first') }}</p>
            <p class="p-second">{{ $t('about.bob_li.timeline.first.content.second') }}</p>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.second.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.second.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.third.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.third.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.fourth.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.fourth.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.fifth.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.fifth.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.sixth.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.sixth.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.seventh.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.seventh.content') }}</p>
            </div>
            <div class="timeline__item">
              <p class="h4">{{ $t('about.bob_li.timeline.eighth.time') }}</p>
              <p>{{ $t('about.bob_li.timeline.eighth.content') }}</p>
            </div>
          </div>
        </div>
        <div class="specialty-wrapper">
          <div class="specialty">
            <h3>{{ $t('about.bob_li.specialty.title') }}</h3>
            <p class="specialty__description">{{ $t('about.bob_li.specialty.description') }}</p>
          </div>
          <div class="glide carousel carousel--second">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <img class="" src="/images/clinic-1.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-2.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-3.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-4.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-5.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-6.jpg" />
                </li>
                <li class="glide__slide">
                  <img class="" src="/images/clinic-7.jpg" />
                </li>
              </ul>
            </div>
            <div class="glide__bullets" data-glide-el="controls[nav]">
              <button class="glide__bullet" data-glide-dir="=0"></button>
              <button class="glide__bullet" data-glide-dir="=1"></button>
              <button class="glide__bullet" data-glide-dir="=2"></button>
              <button class="glide__bullet" data-glide-dir="=3"></button>
              <button class="glide__bullet" data-glide-dir="=4"></button>
              <button class="glide__bullet" data-glide-dir="=5"></button>
              <button class="glide__bullet" data-glide-dir="=6"></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>{{ $t('about.kejian_hu.name') }}</h2>
        <p>{{ $t('about.kejian_hu.description.first') }}</p>
        <p class="p-second">{{ $t('about.kejian_hu.description.second') }}</p>
      </section>
    </main>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted: () => {
    new Glide('.carousel--first', {autoplay: 4000, perView: 1}).mount();
    new Glide('.carousel--second', {autoplay: 4000, perView: 1}).mount();
  }
}
</script>


<style scoped lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

$break-tablet: 720px;

h1 {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: $break-tablet) {
    padding-left: 8vw;
    padding-right: 8vw;
  }
}
h2 {
  margin-bottom: 16px;
}
.h4 {
  margin-bottom: 4px;
}
header {
  padding-top: 16px;
}
.timeline-wrapper {
  margin-top: 42px;

  img {
    @media screen and (max-width: $break-tablet) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: $break-tablet) {
      max-width: 320px;
    }
  }

  @media screen and (min-width: $break-tablet) {
    margin-top: 72px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
  }
}
.image-wrapper {
  @media screen and (min-width: $break-tablet) {
    margin-left: auto;
    text-align: right;
  }
}
.timeline__item {
  margin-top: 16px;

  @media screen and (min-width: $break-tablet) {
    margin-top: 36px;
  }
}
.specialty {
  @media screen and (max-width: $break-tablet) {
    margin-top: 56px;
  }
}
.specialty__description {
  margin-top: 16px;
}
.p-second {
  margin-top: 10px;

  @media screen and (min-width: $break-tablet) {
    margin-top: 15px;
  }
}
.carousel--first {
  @media screen and (min-width: $break-tablet) {
    display: none;
  }
}
.carousel--second {
  @media screen and (max-width: $break-tablet) {
    display: none;
  }
}
.introduction-wrapper {
  @media screen and (min-width: $break-tablet) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
  }

  img {
    @media screen and (max-width: $break-tablet) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: $break-tablet) {
      max-width: 320px;
      margin-left: 6vw;
    }
  }
}
.specialty-wrapper {
  @media screen and (min-width: $break-tablet) {
    display: flex;
    margin-top: 72px;
  }

  .carousel {
    @media screen and (min-width: $break-tablet) {
      margin-left: 6vw;
      max-width: 320px;
    }
  }
}
</style>
