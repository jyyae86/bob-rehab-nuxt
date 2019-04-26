<template>
  <nav>
    <ul>
      <li class="h4 hide--mobile">{{ $t('nav.title') }}</li>
      <li class="h4 hide--mobile nav-home">
        <nuxt-link :to="localePath('index')">
          {{ $t('nav.home') }}
        </nuxt-link>
      </li>
      <li class="h4 hide--mobile nav-service">
        <span>{{ $t('nav.services') }}</span>
        <img class="nav-arrow-down" src="~/assets/svg/arrow-down.svg" />
        <ul class="nav-service__dropdown">
          <li>
            <nuxt-link :to="localePath('service-acupuncture')">
              {{ $t('nav.acupuncture') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('service-moxibustion')">
              {{ $t('nav.moxibustion') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('service-chinese-tui-na')">
              {{ $t('nav.chinese_tui_na') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('service-deep-tissue-massage')">
              {{ $t('nav.massage') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('service-cupping-therapy')">
              {{ $t('nav.cupping') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('service-chinese-herbs')">
              {{ $t('nav.chinese_herbs') }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="h4 hide--mobile nav-about">
        <nuxt-link :to="localePath('about')">
          {{ $t('nav.about') }}
        </nuxt-link>
      </li>
      <li class="nav-switch"><nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </li>
      <li class="hide--desktop"><button class="menu-wrapper js-open"><img class="menu" src="~/assets/svg/menu.svg"></button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted: () => {
    document.querySelector('.js-open').addEventListener('click', () => {
      document.querySelector('nav.menu').style.opacity = 1;
      document.querySelector('nav.menu').style.visibility = 'visible';
    });
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style scoped lang="scss">
$break-tablet: 720px;

.hide--mobile {
  @media screen and (max-width: $break-tablet) {
    display: none;
  }
}

.hide--desktop {
  @media screen and (min-width: $break-tablet) {
    display: none;
  }
}

.nav-switch {
  @media screen and (min-width: $break-tablet) {
    position: relative;

    &:lang(en) {
      top: -2px;
    }
  }
}

.nav-home {
  margin-left: auto;
}

.nav-service {
  margin-left: 24px;
  color: #4C2354;
  position: relative;
  cursor: pointer;
  font-weight: 700;

  &:hover .nav-service__dropdown {
    visibility: visible;
    opacity: 1;
  }
}

.nav-arrow-down {
  margin-left: 6px;
  width: 10px;
}

.nav-service__dropdown {
  visibility: hidden;
  opacity: 0;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  background-color: white;
  top: 22px;
  min-width: 240px;
  min-height: 240px;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(110,110,110,0.10);
  padding: 20px;
  z-index: 1;

  &:lang(zh) {
    min-width: 160px;
  }
}

.nav-about {
  margin-left: 24px;
  margin-right: 56px;
}

ul {
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;

  @media screen and (min-width: $break-tablet) {
    padding: 32px 40px;
  }
}
li {
  display: flex;
  align-items: center;
}
a {
  font-weight: 700;
}
.menu-wrapper {
  height: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
.menu {
  width: 20px;
}
</style>
