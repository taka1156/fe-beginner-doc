<template>
  <div v-for="writer in writers" :key="writer.name" class="writers-box">
    <p>{{ writer.writerName }}</p>
    <div class="profile-box">
      <img
        :src="imgPath(writer.imgIcon)"
        alt="プロフィール画像"
        class="profile-box__img"
      />
      <div class="sns-icons">
        <a :href="writer.github" class="sns-icons__icon">
          <img src="/site/github.png" alt="github" />
        </a>
        <a :href="writer.twitter" class="sns-icons__icon">
          <img src="/site/twitter.png" alt="twitter" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { WRITERS } from '../../constants/index.js';

  export default {
    name: 'WritersBox',
    data() {
      return {
        writers: WRITERS,
      };
    },
    methods: {
      imgPath(imgUrl) {
        if (process.env.NODE_ENV !== 'production') {
          return imgUrl;
        } else {
          return `/fe-beginner-doc${imgUrl}`;
        }
      },
    },
  };
</script>

<style scoped>
  .profile-box {
    display: flex;
    justify-content: center;
    width: 90%;
    height: 150px;
    padding: 0;
    margin: 0 auto;
    margin-left: 0;
    border: 0.5px solid gray;
    border-radius: 5px;
  }

  .profile-box__img {
    display: block;
    width: 30%;
    height: 80%;
    padding: 0;
    margin: auto;
  }

  .sns-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    padding: 10px auto;
    border-left: 1px solid gray;
  }

  .sns-icons__icon {
    height: 50px;
    width: 50px;
  }

  @media screen and (min-width: 768px) {
    .profile-box {
      width: 60%;
    }
    .profile-box__img {
      width: 30%;
    }
  }
</style>
