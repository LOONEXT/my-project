<template>

  <div>
  <!--<div class="div-tab">
    <div class="div-tab-list" data-current="0">日报</div>
    <div class="div-tab-list" data-current="1">精选</div>
  </div>-->

<div class="div-box" duration="300">
    <view>
      <Swiper :images="images" />
    </view>
    <view class="themes-box-top">
        <text class="themes-box-title">专栏</text>
        <text class="themes-box-subtitle">你想要知道生活专栏</text>
    </view>

    <!-- 日报列表 -->
      <view class="themes-list">
          <view class="themes-list-box">
              <navigator>
                  <view class="themes-list-thumbnail">
                      <image class="themes-list-img" src="http://www.zch.world/static/chat-images/user.png" />
                  </view>
                  <view class="themes-list-main">
                      <view class="themes-list-name">秋风，唱给田野动听的歌</view>
                      <view class="themes-list-description">秋风用时光的旋律，用桂花的芬芳、苹果的馨香、菊花的灿烂、牵牛花的奔放、一串红的艳丽，把一望无际的田野乡村，演绎得在自然中沉醉，渲染得天地间空旷而又阳刚。</view>
                  </view>
              </navigator>
          </view>

          <view class="themes-list-box">
              <navigator>
                  <view class="themes-list-thumbnail">
                      <image class="themes-list-img" src="http://www.zch.world/static/chat-images/user.png" />
                  </view>
                  <view class="themes-list-main">
                      <view class="themes-list-name">秋风，唱给田野动听的歌</view>
                      <view class="themes-list-description">秋风用时光的旋律，用桂花的芬芳、苹果的馨香、菊花的灿烂、牵牛花的奔放、一串红的艳丽，把一望无际的田野乡村，演绎得在自然中沉醉，渲染得天地间空旷而又阳刚。</view>
                  </view>
              </navigator>
          </view>
      </view>
</div>
</div>
</template>

<script>
import Swiper from "@/components/swiper";
export default{
    components:{Swiper},
    data(){
        return{
          images: [
              {url:"http://www.zch.world/static/chat-images/banner1.jpg"},
              {url:"http://www.zch.world/static/chat-images/banner2.jpg"},
              {url:"http://www.zch.world/static/chat-images/banner3.jpg"}]
        }
    }
  }
</script>

<style scoped>
.themes-box{ display: block; }
.themes-box-top{ text-align: center; padding-bottom: 16px; padding-top: 16px; background: #F9F9F9; }
.themes-box-title{ font-size: 16px; font-weight: 500; display: block; }
.themes-box-subtitle{ font-size: 12px; color: #666; display: block; margin-top: 4px; }
.themes-list{ background: #FFF; display: block; margin-bottom: 20px; }
.themes-list-box{ display: block; position: relative; padding: 16px 20px; border-bottom: 1px solid #F2F2F2; }
.themes-list-thumbnail{ position: absolute; left: 20px; top: 16px; height: 40px; width: 40px; }
.themes-list-img{ width: 40px; height: 40px; border-radius: 4px; border: 1px solid #F2F2F2;}
.themes-list-main{ margin-left: 50px; }
.themes-list-name{ font-size: 14px; color: #444; height: 20px; line-height: 20px; overflow: hidden; }
.themes-list-description{ font-size: 12px; color: #999; height: 20px; line-height: 20px; overflow: hidden; }
</style>
