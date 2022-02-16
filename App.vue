<script>
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
  page{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .page{
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }
  /* #ifdef MP-WEIXIN */
  .status_bar {
    display: none;
  }
  view,scroll-view,swiper,swiper-item,movable-area,movable-view,cover-view,cover-image,icon,text,rich-text,progress,button,checkbox-group,checkbox,form,input,label,picker,picker-view,radio-group,radio,slider,switch,textarea,navigator,functional-page-navigator,image,video,camera,live-player,live-pusher,map,canvas,open-data,web-view,ad{
    box-sizing: border-box;
  }
  /* #endif */
</style>