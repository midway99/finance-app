<template>
  <div class="footer-basic">
    <footer>
      <div class="social">
        <ul>
        <li><a href="#"><img src="../../assets/img/facebook.svg" alt="fb"></a></li>
        <li><a href="#"><img src="../../assets/img/instagram.svg" alt="insta"></a></li>
        <li><a href="#"><img src="../../assets/img/twitter.svg" alt="twitter"></a></li>
        </ul>
      </div>
      <ul class="list-inline">
        <router-link to="/record"><li class="list-inline-item"><a href="#">Добавить запись</a></li></router-link>
        <router-link to="/history"><li class="list-inline-item"><a href="#">История</a></li></router-link>
        <router-link to="/categories"><li class="list-inline-item"><a href="#">Категории</a></li></router-link>
      </ul>
      <p class="copyright"><router-link to="/" tag="p"><a class="footer_copyright">MoneyKeep</a></router-link> © 2021</p>
    </footer>
  </div>
</template>

<script>


export default {
  name: "Footer"
}
</script>

<style scoped>
.footer_copyright{
  text-decoration: none;
}
.footer-basic {
  text-align: center;
  width: 100%;
}

footer {
  text-align: center;
  position: absolute;
  bottom: -15%;
  left: 0;
  right: 0;
}

.footer-basic {
  padding: 20px 0;
  background-color: #ffffff;
  color: #4b4c4d;
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
}

.footer-basic li {
  padding: 0 10px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  opacity: 1;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social ul li > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social ul li > a:hover {
  opacity: 0.9;
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 6px;
}

.footer_copyright{
  text-decoration: none;
  color:#000000;
  font-size: 18px;
}

.list-inline{
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 450px){
  footer a{
    font-size: 14px;
  }
}
</style>
