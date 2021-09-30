<template>
  <footer>
    <div class="panel-layout">
      <div class="contact">
        <h3>消费者服务:</h3>
        <div class="contact-info">
          <a>防伪查询
            <div class="qrcode">
              <img src="@/static/fwcx.png" alt="防伪查询"><br/>请使用微信扫一扫
            </div>
          </a>|
          <a>售后服务
             <div class="qrcode sh">028-65232887(工作日9:00-18:00)</div>  
          </a>
        </div>
        <h3>代理商服务:</h3>
        <div class="contact-info"><a href="">代理商申请</a></div>
        <h3>消费者服务:</h3>
        <div class="contact-info">
          <a class="icon-weidian">官方微店
            <div class="qrcode">
              <img src="@/static/gfwd.png" alt="官方微店"><br/>请使用微信扫一扫
            </div>
          </a>|
          <a href="" class="icon-taobao">官网店铺</a>
        </div>
      </div>
      <div class="address">
        <div class="erweima"><img src="@/static/address-qr.png"></div>
        <p>官方微博：@PhM华西珐玛</p>
        <p>官方微信：phm-cd525</p>
        <p>客服电话：028-65232887</p>
        <p>公司地址：成都市人民南路三段17号四川大学（华西校区）内</p>
        <p>蜀ICP备18032715号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
 name: 'Footer'
}
</script>

<style scoped>
footer {
  padding-top: 25px;
  padding-bottom: 40px;
  background: #f1f6f9;
}
footer img {
  width: 150px;
  height: 150px;
}
footer .panel-layout {
  display: flex;
}
.contact-info {
  display: flex;
  margin-left: -7px;
}
.contact-info a{
  position: relative;
  color: #9b9b9b;
  display: inline-block;
  margin-left: 7px;
  margin-right: 7px;
  text-decoration: none;
  cursor: pointer;
}
.contact-info a:hover .qrcode,
.contact-info a:hover .qrcode.sh{
  display: block;
}
.qrcode {
  position: absolute;
  background-color: #fff;
  border-radius: 15px;
  display: none;
  left: -60px;
  padding: 15px;
  text-align: center;
  top: -217px;
  z-index: 999;
  white-space: nowrap;
}
.qrcode.sh {
  left: -86px;
  top: -65px;
  z-index: 999;
}
.qrcode::after {
  position: absolute;
  content: "";
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #fff;
  bottom: -15px;
  left: 75px;
}
.qrcode.sh:after {
  bottom: -15px;
  left: 100px;
}
.icon-weidian {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAATlBMVEWrq6urq6sAAACrq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6vwdsqxAAAAGXRSTlOWVAD8iO8w38OmRCX0oNPRvK1/Yk08Ew8NaskKIAAAAGNJREFUCNdlz9cOwCAIBVBcuLuX//+jtRarSe8LHhMgAIjUIojdBz1m1KVWx2v8bBglvga+yBJTrZLlRmvVe3fO9i7zyYCeI2Ign9LnMnHqXzeJz1pyOAbwebtjKVskoX4HNd4bEQ6ujjg5vAAAAABJRU5ErkJggg==) left 3px no-repeat;
  padding-left: 17px;
}
.icon-taobao {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAAAb1BMVEUAAACrq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6t6ArW1AAAAJHRSTlMA+X6I1MqqFfHhs3flcmxLCuvCuJuSWFJRPzozKiEdqHZmXgxTlna1AAAAjElEQVQI113PRxLCMBBE0VaWJSecM6nvf0YERUGVZ/dm9RtS8HdC4q2/QeqcNv8a1HAGlRqXpcwS/XSrgNGIy7oLsLnaWuJurZXQYI9ebyWcUgoNSFNna4SLUSEkXg4dA/auVGhBUT0kMmzSSRhwgGlxoC7cnL5+mFNJMHlRPCeC9J8e36kgeGo+LXoBEroP/PsOYP4AAAAASUVORK5CYII=) left 3px no-repeat;
    padding-left: 17px;
}
.address {
  overflow: hidden;
  flex: 1;
  margin-top: 25px;
}
.erweima {
  float: left;
  margin-left: 273px;
  padding: 7px 10px 5px;
  border-radius: 6px;
  background: #fff;
  margin-right: 35px;
}
.address p {
  margin-top: 12px;
}
</style>