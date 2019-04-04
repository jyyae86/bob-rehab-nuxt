<template>
  <footer>
    <div class="flair-wrapper">
      <img src="~/assets/svg/footer-flair.svg" />
    </div>
    <div class="footer__content-wrapper">
      <div class="footer__info">
        <h3>{{ $t('footer.info.title') }}</h3>
        <p class="info-content">{{ $t('footer.info.description') }}</p>
      </div>
      <div class="footer__contact">
        <h3>{{ $t('footer.contact.title') }}</h3>
        <div class="footer-sub-wrapper">
          <div class="footer-sub-line">
            <img class="footer-sub-line__icon" src="~/assets/svg/telephone.svg" />
            <h4>{{ $t('footer.contact.office.title') }}</h4>
          </div>
          <p>
            <a href="tel:613-800-4677">{{ $t('footer.contact.office.content.first') }}</a>
            /
            <a href="tel:819-880-5588">{{ $t('footer.contact.office.content.second') }}</a>
          </p>
          <div class="footer-sub-line">
            <img class="footer-sub-line__icon" src="~/assets/svg/cellphone.svg" />
            <h4>{{ $t('footer.contact.cell.title') }}</h4>
          </div>
          <p><a href="tel:613-797-6228">{{ $t('footer.contact.cell.content') }}</a></p>
          <div class="footer-sub-line">
            <img class="footer-sub-line__icon" src="~/assets/svg/email.svg" />
            <h4>{{ $t('footer.contact.email.title') }}</h4>
          </div>
          <p><a href="mailto:baoguolirac@gmail.com">{{ $t('footer.contact.email.content') }}</a></p>
        </div>
      </div>
      <div class="footer__location">
        <h3>{{ $t('footer.location.title') }}</h3>
        <div class="footer-sub-wrapper">
          <div class="footer-sub-line">
            <img class="footer-sub-line__icon" src="~/assets/svg/marker.svg" />
            <h4>{{ $t('footer.location.primary.title') }}</h4>
          </div>
          <p v-html="$t('footer.location.primary.content')"></p>
          <div class="footer-sub-line">
            <img class="footer-sub-line__icon" src="~/assets/svg/marker.svg" />
            <h4>{{ $t('footer.location.secondary.title') }}</h4>
          </div>
          <p v-html="$t('footer.location.secondary.content')"></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$break-tablet: 720px;
$break-desktop: 1080px;

p {
  margin-top: 4px;
}
.flair-wrapper {
  display: flex;
  justify-content: center;
}
.footer-sub-wrapper {
  margin-top: 24px;
}
h4 {
  margin-left: 8px;

  &:lang(zh) {
    font-weight: normal;
    font-size: 17px;
  }
}
.footer-sub-line {
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 12px;
  }
}
ul {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}
.info-content {
  margin-top: 16px;
}
footer > div:not(:first-child) {
  margin-top: 48px;

  @media screen and (min-width: $break-tablet) {
    margin-top: 100px;
  }
}
.footer__content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .footer__info {
    @media screen and (max-width: $break-tablet) {
      flex-basis: $break-tablet;
    }

    @media screen and (min-width: $break-tablet + 1) {
      flex-basis: 35%;
    }
  }

  .footer__contact,
  .footer__location {
    flex-basis: 330px;

    @media screen and (min-width: $break-tablet + 1) {
      flex-basis: 25%;
    }
  }
}
.footer__contact,
.footer__location {
  @media screen and (max-width: $break-tablet) {
    margin-top: 56px;
  }
}
.footer-sub-line__icon {
  @media screen and (min-width: $break-tablet) {
    width: 17px;
  }
}
</style>
