<template>
  <div class="container">
  <image src="http://www.zch.world/static/chat-images/user.png" class="avatar">
  </image>
  <div class="section">
    <button @click="login" class="login">登 录</button>

    <div class="item" data-pay="wechat" bindtap="onItemClick">
      <image src="http://www.zch.world/static/chat-images/pay_wx_order.png" class="icon"></image>
      <text class="pay-text">支持</text>
    </div>
    <div class="item" data-pay="alipay" bindtap="onItemClick">
      <image src="http://www.zch.world/static/chat-images/pay_zhifubao_order.png" class="icon"></image>
      <text class="pay-text">支持</text>
    </div>
  </div>
	
	
  </div>



</template>

<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    login:function(){

    }
  }
}
</script>

<style scoped> 
.container {
    background: #00868B;
    background-size: cover;
  /*  background: url(http://www.zch.world/static/chat-images/bg.jpg);*/
}
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 40px;
}

.section {
    margin: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.item {
    box-sizing: border-box;
    font-size: 14px;
    margin: 20px auto 0;
    padding: 5px 15px;
    width: 100px;
    height: 36px;
    line-height: 36px;
    background: rgba(255,255,255,.5);
    display: flex;
    border-radius: 5px;
}
.icon {
    width: 25px;
    height: 25px;
}
.pay-text {
    line-height: 25px;
    margin-left: 5px;
}

.login {
    width: 100px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
}

</style>
