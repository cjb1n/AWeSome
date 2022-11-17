<template>
  <div>
    <div class="hero_header" >
      <img src = "@/assets/bed.png" />
    </div>
    <h1>Our new Products</h1>
        <div class="products">
          <a href="#">
            <img src="@/assets/hotel4.png">
             <p>킹 배지왕 호텔</p>
             <p class="price">29,000</p>
          </a>
          <a href="#">
            <img src="@/assets/bed.png">
            <p>영도 최정빈 호텔</p>
            <p class="price">49,000</p>
          </a>
          <a href="#">
            <img src="@/assets/hotel2.png">
            <p>해운대 현재복 호텔</p>
            <p class="price">89,000</p>
          </a>
          <a href="#">
            <img src="@/assets/hotel3.png">
            <p>거제도 장수빈 호텔</p>
            <p class="price">69,000</p>
          </a>
          <a href="#">
            <img src="@/assets/hotel5.png">
            <p>다대포 박창준 호텔</p>
            <p class="price">79,000</p>
          </a>
          <div class="clearfix"></div>
        </div>
        <div class="footer">
          <a href="#"><img src="@/assets/facebook.png"></a>
          <a href="#"><img src="@/assets/instagram.png"></a>
          <a href="#"><img src="@/assets/kakao.png"></a>
        </div>


  </div>
</template>


<script>
</script>

<style>
* {
    box-sizing: border-box;
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

  .navbar ul{
    float: right;
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

  .hero_header img{
    height: 450px;
    width: 100%;
  }

  body h1{
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 24px;
    font-style: bold;
    color: #545454;
  }

  .products {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 740px;
    text-align: center;
  }

  .products img{
    width: 225px;
    height: 225px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .products a{
    text-decoration: none;
    color: black;
    float: left;
    font-size: 16px;
  }

  .price{
    margin-top: 4px;
    margin-bottom: 80px;
  }

  .clearfix{
    clear: both;
  }

  .footer{
    text-align: center;
  }

  .footer img{
    margin-top: 40px;
    height: 20px;
    margin-bottom: 80px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
