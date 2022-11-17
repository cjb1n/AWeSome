<template>
  <div class="container">
    <div v-if="!submitted">
      <div class="input-form col-md-12 mx-auto">
      <h4 class="mb-3">회원가입</h4>
        <label for="title">아이디</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />

        <div class="mb-4"></div>

        <label for="description">비밀번호</label>
        <input
          type="password"
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />

        <div class="mb-4"></div>

        <label for="email">이메일</label>
        <input
         type="email"
         class="form-control"
         id="email"
         placeholder="you@email.com"
         required>

         <div class="mb-4"></div>

        <div class="mb-4"></div>
        <button @click="saveSignup" class="btn btn-primary btn-lg btn-block">가입완료</button>
      </div>
    </div>

    <div v-else>
      <h4>회원가입이 완료되었습니다.</h4>
      <button class="btn btn-success" @click="newTutorial">돌아가기</button>
    </div>
    <div class="mb-4"></div>
    <footer class="my-3 text-center text-small">
      <p class="mb-1">&copy; 2022 AWeSome</p>
    </footer>
  </div>
</template>


<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveSignup() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };
      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}

    template {
      min-height: 100vh;

      background: -webkit-gradient(linear, left bottom, right top, from(#ffffff), to(#ffffff));
      background: -webkit-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: -moz-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: -o-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: linear-gradient(to top right, #ffffff 0%, #ffffff 100%);
    }

    .input-form {
      max-width: 680px;

      margin-top: 80px;
      padding: 32px;

      background: #fff;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
    }


  body {
    margin: 0;
    min-width: 992px;
    font-family: "Helvetica";
  }

  .navbar{
    height: 60px;
    padding-left: 30px;
  }

  .logo{
    line-height: 60px;
    float: left;
  }

  .logo img{
    vertical-align: middle;
  }


  .navbar li{
    list-style-type: none;
    float: left;
    margin-right: 30px;
  }

  .navbar a{
    text-decoration: none;
    color: black;
    font-style: bold;
    font-size: 13px;
  }
</style>
