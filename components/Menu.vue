<template>
  <nav class="menu">
    <ul>
      <li class="h2"><nuxt-link :to="localePath('index')">{{ $t('nav.home') }}</nuxt-link></li>
      <hr>
      <li class="h3"><nuxt-link :to="localePath('service-acupuncture')">{{ $t('nav.acupuncture') }}</nuxt-link></li>
      <li class="h3"><nuxt-link :to="localePath('service-moxibustion')">{{ $t('nav.moxibustion') }}</nuxt-link></li>
      <li class="h3"><nuxt-link :to="localePath('service-chinese-tui-na')">{{ $t('nav.chinese_tui_na') }}</nuxt-link></li>
      <li class="h3"><nuxt-link :to="localePath('service-deep-tissue-massage')">{{ $t('nav.massage') }}</nuxt-link></li>
      <li class="h3"><nuxt-link :to="localePath('service-cupping-therapy')">{{ $t('nav.cupping') }}</nuxt-link></li>
      <li class="h3"><nuxt-link :to="localePath('service-chinese-herbs')">{{ $t('nav.chinese_herbs') }}</nuxt-link></li>
      <hr>
      <li class="h2"><nuxt-link :to="localePath('about')">{{ $t('nav.about') }}</nuxt-link></li>
      <li class="close-wrapper"><button class="close js-close"><img src="~/assets/svg/close.svg" /></button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted: () => {
    function dismiss() {
      document.querySelector('nav.menu').style.opacity = 0;
      document.querySelector('nav.menu').style.visibility = 'hidden';
    }
    document.querySelectorAll('nav.menu a').forEach((element) => {
      element.addEventListener('click', () => {
        dismiss();
        });
      }
    );
    document.querySelector('.js-close').addEventListener('click', () => {
      dismiss();
    });
  }
}
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  display: flex;
  visibility: hidden;
  opacity: 0;
  z-index: 1000;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 150ms ease-in-out;
}
ul {
  list-style-type: none;
  margin-left: 0;
  text-align: center;
}
hr {
  width: 70px;
  margin: 16px auto;
}
.h3:not(:first-child) {
  margin-top: 8px;
}
.close-wrapper {
  position: absolute;
  top: 30px;
  right: 24px;
}
.close {
  background-color: transparent;
  cursor: pointer;
  border: none;
}
</style>
