<template>
  <div class="card">
    <img :src="img" />
    <div class="content-wrapper text-center">
      <h3 class="h4 text-center">{{ service }}</h3>
      <p class="text-center">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    service: String,
    description: String
  }
}
</script>

<style scoped lang="scss">
$break-tablet: 720px;

img {
  flex-shrink: 0;
}

.card {
  background: #FFFFFF;
  box-shadow: 0 5px 20px 0 rgba(110,110,110,0.10);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: $break-tablet) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
}
h3 {
  margin-top: 10px;

  @media screen and (min-width: $break-tablet) {
    margin-top: 20px;
  }
}
p {
  margin-top: 4px;
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: $break-tablet) {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
  }
}
a {
  margin-top: 24px;
  font-family: Palatino-Roman;
  font-size: 14px;
  color: #4C2354;
  letter-spacing: 0;
  text-align: center;
  line-height: 1.3;
}
.content-wrapper {
  @media screen and (min-width: $break-tablet) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  p {
    @media screen and (min-width: $break-tablet) {
      margin-bottom: 20px;
    }
  }

  a {
    @media screen and (min-width: $break-tablet) {
      margin-top: auto;
    }
  }
}
</style>
