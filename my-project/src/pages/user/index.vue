<template>
  <div clsss="all">
    <div class="container">
      <div class="dimg">
        <image src="http://www.zch.world/static/chat-images/user.png" class="avatar"></image>
        <br/><br/>
        北京蓝天教育有限公司
      </div>

      <div class="item">
        <image src="http://www.zch.world/static/chat-images/pay_wx_order.png" class="icon"></image>
        <text class="pay-text">支持</text>
      </div>
      <div class="item" @click="mapLocal">
        <image src="http://www.zch.world/static/chat-images/pay_wx_order.png" class="icon"></image>
        <text class="pay-text">北京市昌平区沙河镇于辛庄</text>
      </div>
      <div class="item">
        <image src="http://www.zch.world/static/chat-images/pay_wx_order.png" class="icon"></image>
        <text class="pay-text">10:30-21:00</text>
      </div>
      <div class="item" @click="callPhone">
        <image src="http://www.zch.world/static/chat-images/pay_wx_order.png" class="icon"></image>
        <text class="pay-text phone">18511753008</text>
      </div>
    </div>

    <div class="botContent">
       <div class="feal">
          <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
          </image>
       </div>
       <div class="feal">
           <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
           </image>
        </div>
       <div class="feal">
           <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
           </image>
       </div>
       <div class="feal">
           <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
           </image>
       </div>
       <div class="feal">
           <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
           </image>
       </div>
       <div class="feal">
           <image src="http://www.zch.world/static/images/pin.jpg" class="fimg">
           </image>
       </div>
    </div>

  </div>
</template>
<script>
export default{

    data(){
        return{
            phone:'18513658649',
            msg:'我是一个用户组件',
            list:[]
        }
    },
    methods:{
      run(){
        console.log('执行方法');
      },
      mapLocal(){
        // 地图选择

        wx.openLocation({
          longitude:116.31,
          latitude:40.15,
          scale:5,
          name:'北京市昌平区沙河镇于辛庄村',
          success: function (res) {
          // success
          console.log(res,"location")
          console.log(res.name)
          console.log(res.latitude)
          console.log(res.longitude)
          that.setData({
          roomname:res.name
          })
          },
          fail: function () {
          // fail
          },
          complete: function () {
          // complete
          }
        })

      },
      callPhone(){
          wx.makePhoneCall({
            phoneNumber: this.phone
          })
      }
    },
    //生命周期函数
    created(){
      for(var i=0;i<10;i++){
        this.list.push('我是第'+i);
      }
    }


}
</script>

<style scoped>
.all{width:100%;height:auto;margin:0px;padding:0px;}
.container {
    background: #00868B;
    background-size: cover;
    background: url(http://www.zch.world/static/chat-images/bg.jpg);
    width:100%;
    height:270px;
    display:block;
}
.dimg{text-align:center;margin-bottom:5px;margin-top:-60px;}
.avatar {
    width: 100px;height: 100px;
    border-radius: 50%;
}
.botContent{width:100%;height:auto;margin:10px;}
div.feal{
  width:110px;height:100px;float:left;padding:6px 6px 9px 4px;
}
.fimg{width: 115px;height: 110px;}
div.item {
    box-sizing: border-box;
    font-size: 14px;
    margin: 10px auto 0;
    padding: 3px 10px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    display: flex;
    float:left;
}
.icon {
    width: 25px;
    height: 25px;
}
.pay-text {
    line-height: 25px;
    margin-left: 5px;
}
</style>
