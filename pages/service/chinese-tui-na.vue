<template>
  <div>
    <header>
      <small class="p-small">{{ $t('service.kicker') }}</small>
      <h1>{{ $t('service.chinese_tui_na.title') }}</h1>
      <p class="p-legend">{{ $t('service.chinese_tui_na.note') }}</p>
    </header>
    <main>
      <section>
        <table class="pricing-table">
          <tbody>
            <tr>
              <td>
                <p class="h4">{{ $t('service.chinese_tui_na.pricing.first.name') }}</p>
                <p class="p-small">{{ $t('service.chinese_tui_na.pricing.first.time') }}</p>
              </td>
              <td class="p-legend text-right">{{ $t('service.chinese_tui_na.pricing.first.price') }}</td>
            </tr>
            <tr>
              <td>
                <p class="h4">{{ $t('service.chinese_tui_na.pricing.second.name') }}</p>
                <p class="p-small">{{ $t('service.chinese_tui_na.pricing.second.time') }}</p>
              </td>
              <td class="p-legend text-right">{{ $t('service.chinese_tui_na.pricing.second.price') }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div class="introduction">
        <p v-for="item in $t('service.chinese_tui_na.introduction')">{{ item }}</p>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
$break-tablet: 720px;

header {
  padding: 36px 20px 90px;
  background-image: url('/images/chinese-tui-na-background.jpg');
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
.h4 + .p-small {
  @media screen and (min-width: $break-tablet) {
    margin-top: 4px;
  }
}
</style>
