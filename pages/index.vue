<template>
  <div>
    <header>
      <img class="hero-flair-line" src="~/assets/svg/hero-flair-line.svg" />
      <img class="hero-flair-circle hero-flair-circle--a" src="~/assets/svg/hero-flair-circle.svg" />
      <img class="hero-flair-circle hero-flair-circle--b" src="~/assets/svg/hero-flair-circle-small.svg" />
      <img class="hero-flair-image" src="/images/hero-flair.png" />
      <img class="hero-flair" src="~/assets/svg/hero-flair.svg" />
      <h1 v-html="$t('index.hero.title')" class="h3"></h1>
      <p class="p-large">{{ $t('index.hero.description') }}</p>
    </header>
    <main>
      <section>
        <h2 class="h3">{{ $t('index.service.title') }}</h2>
        <small class="p-small">{{ $t('index.service.notice') }}</small>
        <div class="card-wrapper">
          <Card
            img="/images/acupuncture.jpg"
            :service="$t('index.service.acupuncture.title')"
            :description="$t('index.service.acupuncture.description')">
            <nuxt-link class="button" :to="localePath('service-acupuncture')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
          <Card
            img="/images/moxibustion.jpg"
            :service="$t('index.service.moxibustion.title')"
            :description="$t('index.service.moxibustion.description')">
            <nuxt-link class="button" :to="localePath('service-moxibustion')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
          <Card
            img="/images/chinese-tui-na.jpg"
            :service="$t('index.service.chinese_tui_na.title')"
            :description="$t('index.service.chinese_tui_na.description')">
            <nuxt-link class="button" :to="localePath('service-chinese-tui-na')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
          <Card
            img="/images/deep-tissue-massage.jpg"
            :service="$t('index.service.massage.title')"
            :description="$t('index.service.chinese_tui_na.description')">
            <nuxt-link class="button" :to="localePath('service-deep-tissue-massage')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
          <Card
            img="/images/cupping-therapy.jpg"
            :service="$t('index.service.cupping.title')"
            :description="$t('index.service.cupping.description')">
            <nuxt-link class="button" :to="localePath('service-cupping-therapy')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
          <Card
            img="/images/chinese-herbs.jpg"
            :service="$t('index.service.chinese_herbs.title')"
            :description="$t('index.service.chinese_herbs.description')">
            <nuxt-link class="button" :to="localePath('service-chinese-herbs')">{{ $t('index.service.learn_more') }}</nuxt-link>
          </Card>
        </div>
      </section>
      <section>
        <h2 class="h3">{{ $t('index.disclaimer.title') }}</h2>
        <p class="text-center disclaimer-content">{{ $t('index.disclaimer.description') }}</p>
      </section>
    </main>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
$break-tablet: 720px;

.hero-flair-image,
.hero-flair-line,
.hero-flair-circle {
  position: absolute;

  @media screen and (max-width: $break-tablet) {
    display: none;
  }
}

.p-large:lang(zh) {
  @media screen and (min-width: $break-tablet) and (max-width: 1130px) {
    max-width: 40vw;
  }
}

.hero-flair-line {
  right: 9vw;
  top: 11%;
  height: 220px;
  
  &:lang(zh) {
    height: 180px;
  }
}

.hero-flair-image {
  right: 15vw;
  top: 13%;
  height: 230px;
  
  &:lang(zh) {
    height: 190px;
  }
}

.hero-flair-circle--a {
  right: 43vw;
  height: 90px;
}

.hero-flair-circle--b {
  right: 40vw;
  height: 32px;
  bottom: 30%;
}

header {
  background-color: #e6f3f0;
  padding: 40px 20px 75px;
  position: relative;

  @media screen and (min-width: $break-tablet) {
    padding: 64px 8vw 95px;
  }

  h1, p {
    position: relative;
  }
}
.hero-flair {
  position: absolute;
  right: 25px;
  top: 16px;
  bottom: 17px;

  @media screen and (min-width: $break-tablet) {
    top: 36px;
    right: 8vw;
    display: none;
  }
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-wrapper {
  margin-top: 24px;

  @media screen and (min-width: $break-tablet) {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    flex-wrap: wrap;
  }

  > div {
    @media screen and (min-width: $break-tablet) {
      flex-basis: 340px;
      flex-grow: 0;
      flex-shrink: 0;
      margin-top: 40px;
    }
  }
}
.disclaimer-content {
  max-width: 60ch;
}
.card img {
  align-content: stretch;
}
</style>
