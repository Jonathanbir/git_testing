# 請依照此 demo 實做
#### https://staging-occ.onead.tw/api/v1/packs/2148/preview
*  video、banner 等素材可從 debug tool 找到


### 必要實做功能描述
* 試著實做 demo 一樣的視覺
* 影片自動播放
* 點擊右上關閉鍵，整體視覺消失
* 點擊音量鍵需要有聲音
* 點擊 影片或圖片都能導到網址 https://www.onead.com.tw/
* layout 比例為 9:16
* 用 chrome mobile mode 切換不同 device, 可維持 9:16 比例
* view 相關邏輯寫在 src/layout.js
* 用 src/main.js create view 邏輯

### 必要開發環境建置描述
* grunt/gulp/webpack 擇一，設定打包環境
* NPM 初始化開發環境
* 將程式做 concat, minify, uglify
* 打包結果放置 build 資料夾


#實作方式

###實作功能
* layout 比例為 9:16 主要寫在layout.js 是以JQuery 使用resize的方式讓 chrome mobile mode 切換不同 device, 可維持 9:16 比例
* 其餘就用 關閉鍵 點擊跳導網址 播放影片 等功能 均寫在main.js

### 必要開發環境建置實作
* 我選擇以gulp來設定打包環境
* npm init 初始化開發環境
* 有安裝以下套件：
* 'gulp-concat'(合併js),'gulp-uglify-es'(壓縮js&支援es6),'gulp-minify-css'(壓縮css),"gulp-rename（重新命名）"
* 'run-sequence'(控制打包的執行順序)
* 'gulp-sass;(用來執行sass編譯css),'gulp-jquery

###主要流程
* 整體網頁都寫在index.html
* css主要連結 style.min.css, js主要連結bundle.js
* 外部影片是連結oneAd.mp4
* src/layout.js與src/main.js 執行gulp 透過concat與uglify後產生bundle.js
* css主要用sass編譯在style.scss @import _index.scss & _reset.scss
* 產出style.css 執行gulp 進行minify 壓縮style.css 產出style.min.css



# git_oneAd
# git_oneAd
# git_oneAd
