window.__require=function e(t,o,i){function n(a,r){if(!o[a]){if(!t[a]){var s=a.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!r&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var u=o[a]={exports:{}};t[a][0].call(u.exports,function(e){return n(t[a][1][e]||e)},u,u.exports,e,t,o,i)}return o[a].exports}for(var c="function"==typeof __require&&__require,a=0;a<i.length;a++)n(i[a]);return n}({AdsDialog:[function(e,t,o){"use strict";cc._RF.push(t,"f56031iQSRHyKTcWSJ2QEpj","AdsDialog");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=cc._decorator,l=s.ccclass,u=(s.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.onLoad=function(){console.log("------AdsDialog__onLoad"),r.default.dispatchEvent(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,!1)},t.prototype.onDestroy=function(){console.log("------AdsDialog__onDestroy"),r.default.dispatchEvent(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,!0)},t.prototype.start=function(){var e=this.node.getChildByName("content");e.scale=0,e.opacity=255,cc.tween(e).to(.2,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.closeBtnClick=function(){var e=this,t=this.node.getChildByName("content");t.scale=1,cc.tween(t).to(.3,{scale:0},{easing:"quadOut"}).call(function(){e.node.destroy()}).start()},t.prototype.initDialog=function(){},t.prototype.getBtnClick=function(){r.default.dispatchEvent(a.NOTI_NAME.ROTATE_TABLE),r.default.dispatchEvent(a.NOTI_NAME.CLOSE_DIALOG,{adsDialog:!0})},c([l],t)}(cc.Component));o.default=u,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager"}],AudioManager:[function(e,t,o){"use strict";cc._RF.push(t,"a9e3edN1ORAU419Gp3Rb2dy","AudioManager"),Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){this._musicVolume=1,this._effectVolume=.1,this._isBgMusicOn=!0,this._isPlayBgMusic=!1,this._bgMusicName=null}return e.prototype.initialize=function(){this.setMusicVolume(this._musicVolume),this.setEffectVolume(this._effectVolume)},e.prototype.playEffectMusic=function(e,t){return void 0===t&&(t=!1),cc.audioEngine.playEffect(e,t)},e.prototype.playBGM=function(e,t){this._bgMusicName=e,this._isPlayBgMusic=!0,cc.audioEngine.playMusic(e,t),console.log("---\u64ad\u653e\u97f3\u4e50")},e.prototype.resumeBGM=function(){this._isBgMusicOn&&cc.audioEngine.resumeMusic()},e.prototype.isPlayBGM=function(){return this._isPlayBgMusic},e.prototype.pauseBGM=function(){this._isPlayBgMusic&&cc.audioEngine.pauseMusic()},e.prototype.stopBGM=function(){this._isPlayBgMusic=!1,cc.audioEngine.stopMusic(),console.log("---\u505c\u6b62\u97f3\u4e50")},e.prototype.stopAllEffect=function(){cc.audioEngine.stopAllEffects()},e.prototype.pauseEffect=function(){cc.audioEngine.pauseAllEffects()},e.prototype.resumeEffect=function(){cc.audioEngine.resumeAllEffects()},e.prototype.stopEffect=function(e){cc.audioEngine.stopEffect(e)},e.prototype.setMusicVolume=function(e){console.log("musicVolume---",e),this._musicVolume=e,cc.audioEngine.setMusicVolume(e)},e.prototype.getMusicVolume=function(){return cc.audioEngine.getMusicVolume()},e.prototype.setEffectVolume=function(e){this._effectVolume=e,cc.audioEngine.setEffectsVolume(e)},e.prototype.getEffectVolume=function(){return cc.audioEngine.getEffectsVolume()},e}();o.default=new i,cc._RF.pop()},{}],CommonUtil:[function(e,t,o){"use strict";cc._RF.push(t,"3eb57Q48BFBgZl/jfADWTxg","CommonUtil"),Object.defineProperty(o,"__esModule",{value:!0}),o.GameOverType=o.NOTI_NAME=o.ItemType=void 0,function(e){e.changlai="changlai",e.changwang="changwang"}(o.ItemType||(o.ItemType={})),o.NOTI_NAME={SHOW_TOAST:"SHOW_TOAST",SHOW_RESULT_DIALOG:"SHOW_RESULT_DIALOG",SHOW_GAME_LAYER:"SHOW_GAME_LAYER",SHOW_TABLE_DIALOG:"SHOW_TABLE_DIALOG",INIT_GAME:"INIT_GAME",CLOSE_DIALOG:"CLOSE_DIALOG",SHOW_ADS_DIALOG:"SHOW_ADS_DIALOG",ROTATE_TABLE:"NOTI_NAME.ROTATE_TABLE",TABLE_DIALOG_VISIBLE:"TABLE_DIALOG_VISIBLE",SHOW_PRIZE_DIALOG:"SHOW_PRIZE_DIALOG"},function(e){e.timeOver="timeOver",e.longTimeNoClick="longTimeNoClick",e.success="success",e.clickFail="clickFail"}(o.GameOverType||(o.GameOverType={}));var i=function(){function e(){}return e.randomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},e.getparam1=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},e.getparam2=function(e){Object.keys(e);var t="?";for(var o in e)t+=o,t+="=",t+=e[o],t+="&";return t},e.jumpOtherWebview=function(){},e}();o.default=i,cc._RF.pop()},{}],EventManager:[function(e,t,o){"use strict";cc._RF.push(t,"8ef2dFlqdhKb6embFNXGNjE","EventManager"),Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){this._instance=new cc.EventTarget}return e.prototype.initialize=function(){},e.prototype.addListener=function(e,t,o){null!=e&&""!==e&&this._instance.on(e,t,o)},e.prototype.removeListener=function(e,t,o){this._instance.off(e,t,o)},e.prototype.dispatchEvent=function(e,t,o,i,n,c){this._instance.emit(e,t,o,i,n,c)},e}();o.default=new i,cc._RF.pop()},{}],GameManager:[function(e,t,o){"use strict";cc._RF.push(t,"28d7fgGtYNFpYQxEXVg3zli","GameManager");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=e("./ItemNode"),l=cc._decorator,u=l.ccclass,p=l.property,d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.itemNodePrefab=null,t.readyBegin=null,t.gameContent=null,t.timeLabel=null,t.scoreLabel=null,t.changlaiTipNode=null,t.changwangTipNode=null,t.gameStartTip=null,t.chooseItemType=a.ItemType.changlai,t.maxTime=60,t.gameTime=60,t.clickTime=0,t.score=0,t.clickErrCount=0,t.clickErrMaxCount=3,t.clickSuccessCount=8,t.isPlaying=!1,t.maxItemCount=8,t.checkTickTime=0,t.checkTickTimeMax=.3,t.itemMap={},t.itemCount=0,t.itemIdIndex=0,t}return n(t,e),t.prototype.onLoad=function(){r.default.addListener(a.NOTI_NAME.INIT_GAME,this.initGame,this)},t.prototype.onDestroy=function(){r.default.removeListener(a.NOTI_NAME.INIT_GAME,this.initGame,this)},t.prototype.start=function(){this.initGame()},t.prototype.initGame=function(){this.gameTime=this.maxTime,this.score=0,this.clickErrCount=0,this.clickTime=0,this.isPlaying=!1,this.timeLabel.string=this.maxTime+"\u79d2",this.scoreLabel.string="x"+this.score,this.readyBegin.active=!0,this.checkTickTime=0,this.gameContent.removeAllChildren(),this.itemMap={},this.itemCount=0,this.itemIdIndex=0,this.readyTip()},t.prototype.chooseChanglai=function(){},t.prototype.chooseChangwang=function(){},t.prototype.readyTip=function(){var e=this;this.readyBegin.active=!0,this.changlaiTipNode.x=-570,this.changlaiTipNode.runAction(cc.moveTo(.6,cc.v2(-170,this.changlaiTipNode.y)).easing(cc.easeCubicActionOut())),this.changwangTipNode.x=570,this.changwangTipNode.runAction(cc.moveTo(.6,cc.v2(168,this.changwangTipNode.y)).easing(cc.easeCubicActionOut())),this.gameStartTip.opacity=0,this.gameStartTip.runAction(cc.sequence(cc.delayTime(.5),cc.fadeIn(.3),cc.delayTime(1.5),cc.callFunc(function(){e.readyBegin.active=!1,e.chooseItemType=a.ItemType.changlai,e.startGame()})))},t.prototype.startGame=function(){this.isPlaying=!0},t.prototype.finishGame=function(e){this.isPlaying=!1,e===a.GameOverType.timeOver?this.score>=this.clickSuccessCount?r.default.dispatchEvent(a.NOTI_NAME.SHOW_RESULT_DIALOG,this.score,this.clickSuccessCount,a.GameOverType.success):r.default.dispatchEvent(a.NOTI_NAME.SHOW_RESULT_DIALOG,this.score,this.clickSuccessCount,a.GameOverType.timeOver):e===a.GameOverType.longTimeNoClick&&(this.score>=this.clickSuccessCount?r.default.dispatchEvent(a.NOTI_NAME.SHOW_RESULT_DIALOG,this.score,this.clickSuccessCount,a.GameOverType.success):0===this.score?r.default.dispatchEvent(a.NOTI_NAME.SHOW_RESULT_DIALOG,this.score,this.clickSuccessCount,a.GameOverType.longTimeNoClick):r.default.dispatchEvent(a.NOTI_NAME.SHOW_RESULT_DIALOG,this.score,this.clickSuccessCount,a.GameOverType.timeOver))},t.prototype.clickItemCb=function(e){if(this.isPlaying){this.clickTime=0;var t=this.itemMap[e];t&&(t.itemType===this.chooseItemType?(delete this.itemMap[t.id],this.itemCount--,t.chooseCorrect(),this.score++,this.scoreLabel.string="x"+this.score):(this.clickErrCount++,this.clickErrCount,this.clickErrMaxCount))}},t.prototype.destoryOneItem=function(e){delete this.itemMap[e],this.itemCount--},t.prototype.update=function(e){if(this.isPlaying&&(this.clickTime+=e,this.clickTime>=10&&this.finishGame(a.GameOverType.longTimeNoClick),this.gameTime-=e,this.gameTime<=0?(this.timeLabel.string="0\u79d2",this.finishGame(a.GameOverType.timeOver)):this.timeLabel.string=Math.floor(this.gameTime)+"\u79d2",this.checkTickTime+=e,this.checkTickTime>this.checkTickTimeMax&&(this.checkTickTime=0,this.itemCount<this.maxItemCount))){var t=cc.instantiate(this.itemNodePrefab),o=t.getComponent(s.default);o.initGame(this.chooseItemType,this.clickItemCb.bind(this),this),this.gameContent.addChild(t),t.x=-(t.width/2+30+this.gameContent.width/2),t.y=a.default.randomNumber(-this.gameContent.height/2,this.gameContent.height/2),this.itemCount++,this.itemIdIndex++,this.itemMap["id"+this.itemIdIndex]=o,o.id="id"+this.itemIdIndex,this.gameContent.children.sort(function(e,t){return t.y-e.y})}},c([p(cc.Prefab)],t.prototype,"itemNodePrefab",void 0),c([p(cc.Node)],t.prototype,"readyBegin",void 0),c([p(cc.Node)],t.prototype,"gameContent",void 0),c([p(cc.Label)],t.prototype,"timeLabel",void 0),c([p(cc.Label)],t.prototype,"scoreLabel",void 0),c([p(cc.Node)],t.prototype,"changlaiTipNode",void 0),c([p(cc.Node)],t.prototype,"changwangTipNode",void 0),c([p(cc.Node)],t.prototype,"gameStartTip",void 0),c([u],t)}(cc.Component);o.default=d,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager","./ItemNode":"ItemNode"}],ItemNode:[function(e,t,o){"use strict";cc._RF.push(t,"fa7c6QU/VJA7qWK4DcBj3TU","ItemNode");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=cc._decorator,s=r.ccclass,l=r.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.itemChangelai=null,t.itemChangewang=null,t.itemType=null,t.moveSpeed=0,t.clickCallBack=null,t.id="",t.gameManager=null,t.isDead=!1,t}return n(t,e),t.prototype.onLoad=function(){},t.prototype.onDestroy=function(){},t.prototype.start=function(){},t.prototype.initGame=function(e,t,o){this.itemType=e,this.clickCallBack=t,this.itemChangelai.active=!1,this.itemChangewang.active=!1,this.gameManager=o,this.moveSpeed=a.default.randomNumber(Math.floor(125),Math.floor(375)),1===a.default.randomNumber(1,2)?(this.itemType=a.ItemType.changlai,this.itemChangelai.active=!0,this.itemChangelai.getChildByName("aniNode").getComponent(cc.Animation).play()):(this.itemType=a.ItemType.changwang,this.itemChangewang.active=!0,this.itemChangewang.getChildByName("aniNode").getComponent(cc.Animation).play())},t.prototype.click=function(){console.log("-----\u70b9\u4e2d\u4e86",this.itemType),this.clickCallBack&&this.clickCallBack(this.id)},t.prototype.chooseCorrect=function(){var e=this;this.isDead=!0,this.node.runAction(cc.sequence(cc.fadeOut(.2),cc.callFunc(function(){e.node.destroy()})))},t.prototype.chooseError=function(){},t.prototype.update=function(e){this.gameManager&&this.gameManager.isPlaying&&(this.isDead||(this.node.x+=this.moveSpeed*e,this.node.x>this.gameManager.gameContent.width/2+this.node.width/2+50&&(this.isDead||(this.gameManager.destoryOneItem(this.id),this.node.removeFromParent()))))},c([l(cc.Node)],t.prototype,"itemChangelai",void 0),c([l(cc.Node)],t.prototype,"itemChangewang",void 0),c([s],t)}(cc.Component);o.default=u,cc._RF.pop()},{"./CommonUtil":"CommonUtil"}],MainScene:[function(e,t,o){"use strict";cc._RF.push(t,"b08eejeSsRFKZKKSlKEb864","MainScene");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./AdsDialog"),r=e("./AudioManager"),s=e("./CommonUtil"),l=e("./EventManager"),u=e("./GameManager"),p=e("./NetWork"),d=e("./PrizeDialog"),h=e("./ResultDialog"),f=e("./RuleDialog"),g=e("./TableDialog"),y=cc._decorator,m=y.ccclass,_=y.property,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ruleDialogPrefab=null,t.resultDialogPrefab=null,t.tableDialogPrefab=null,t.adsDialogPrefab=null,t.prizeDialogPrefab=null,t.gameManagerPrefab=null,t.bgmAudio=null,t.itemClickAudio=null,t.gameManagerNode=null,t}return n(t,e),t.prototype.onLoad=function(){l.default.addListener(s.NOTI_NAME.SHOW_GAME_LAYER,this.showGameLayer,this),l.default.addListener(s.NOTI_NAME.SHOW_RESULT_DIALOG,this.showResultDialog,this),l.default.addListener(s.NOTI_NAME.SHOW_TABLE_DIALOG,this.showTableDialog,this),l.default.addListener(s.NOTI_NAME.SHOW_ADS_DIALOG,this.showAdsDialog,this),l.default.addListener(s.NOTI_NAME.SHOW_PRIZE_DIALOG,this.showPrizeDialog,this),l.default.addListener(s.NOTI_NAME.CLOSE_DIALOG,this.closeDialog,this)},t.prototype.onDestroy=function(){l.default.removeListener(s.NOTI_NAME.SHOW_GAME_LAYER,this.showGameLayer,this),l.default.removeListener(s.NOTI_NAME.SHOW_RESULT_DIALOG,this.showResultDialog,this),l.default.removeListener(s.NOTI_NAME.SHOW_TABLE_DIALOG,this.showTableDialog,this),l.default.removeListener(s.NOTI_NAME.SHOW_ADS_DIALOG,this.showAdsDialog,this),l.default.removeListener(s.NOTI_NAME.SHOW_PRIZE_DIALOG,this.showPrizeDialog,this),l.default.removeListener(s.NOTI_NAME.CLOSE_DIALOG,this.closeDialog,this)},t.prototype.start=function(){var e=this.node.getChildByName("menuLayer");e.getChildByName("btnRule1").active=!0,e.getChildByName("btnMusic1").active=!0,e.getChildByName("btnRule2").active=!1,e.getChildByName("btnMusic2").active=!1,this.loadingLayerAni()},t.prototype.testBtnClick1=function(){this.showResultDialog(9,1,s.GameOverType.timeOver)},t.prototype.testBtnClick2=function(){p.default.httpGet({code:3218789},function(e){console.log("----\u8bf7\u6c42\u6210\u529f",e)},function(e,t){console.log("----\u8bf7\u6c42\u5931\u8d25",e,t)})},t.prototype.ruleBtnClick=function(e){void 0===e&&(e=!1),console.log("\u6e38\u620f\u89c4\u5219\u70b9\u51fb");for(var t=this.node.getChildByName("ruleContent"),o=0,i=t.children;o<i.length;o++)i[o].destroy();var n=cc.instantiate(this.ruleDialogPrefab);n.getComponent(f.default).initDialog(e),t.addChild(n)},t.prototype.showResultDialog=function(e,t,o){for(var i=this.node.getChildByName("resultDialogContent"),n=0,c=i.children;n<c.length;n++)c[n].destroy();var a=cc.instantiate(this.resultDialogPrefab);a.getComponent(h.default).initDialog(e,t,o),i.addChild(a)},t.prototype.showTableDialog=function(){for(var e=this.node.getChildByName("tableDialogContent"),t=0,o=e.children;t<o.length;t++)o[t].destroy();var i=cc.instantiate(this.tableDialogPrefab);i.getComponent(g.default).initDialog(),e.addChild(i)},t.prototype.showAdsDialog=function(){for(var e=this.node.getChildByName("adsDialogContent"),t=0,o=e.children;t<o.length;t++)o[t].destroy();var i=cc.instantiate(this.adsDialogPrefab);i.getComponent(a.default).initDialog(),e.addChild(i)},t.prototype.showPrizeDialog=function(e,t,o){for(var i=this.node.getChildByName("prizeDialogContent"),n=0,c=i.children;n<c.length;n++)c[n].destroy();var a=cc.instantiate(this.prizeDialogPrefab);a.getComponent(d.default).initDialog(e,t,o),i.addChild(a)},t.prototype.closeDialog=function(e){if(e){if(!0===e.resultDialog)for(var t=0,o=this.node.getChildByName("resultDialogContent").children;t<o.length;t++)o[t].destroy();if(!0===e.tableDialog)for(var i=0,n=this.node.getChildByName("tableDialogContent").children;i<n.length;i++)n[i].destroy();if(!0===e.adsDialog)for(var c=0,a=this.node.getChildByName("adsDialogContent").children;c<a.length;c++)a[c].destroy();if(!0===e.prizeDialog)for(var r=0,s=this.node.getChildByName("prizeDialogContent").children;r<s.length;r++)s[r].destroy()}},t.prototype.gameBeginClick=function(){console.log("\u6e38\u620f\u5f00\u59cb\u70b9\u51fb"),this.ruleBtnClick(!0)},t.prototype.showGameLayer=function(){this.node.getChildByName("loadLayer").active=!1;var e=this.node.getChildByName("menuLayer");e.getChildByName("btnRule1").active=!1,e.getChildByName("btnMusic1").active=!1,e.getChildByName("btnRule2").active=!0,e.getChildByName("btnMusic2").active=!0,l.default.dispatchEvent(s.NOTI_NAME.CLOSE_DIALOG,{resultDialog:!0,tableDialog:!0});var t=this.node.getChildByName("gameLayer");this.gameManagerNode?(t.active=!0,this.gameManagerNode.getComponent(u.default).initGame()):(t.removeAllChildren(),this.gameManagerNode=cc.instantiate(this.gameManagerPrefab),t.addChild(this.gameManagerNode))},t.prototype.musicBtnClick=function(){console.log("\u97f3\u4e50\u5f00\u5173\u70b9\u51fb"),r.default.isPlayBGM()?r.default.stopBGM():r.default.playBGM(this.bgmAudio,!0)},t.prototype.playItemClickAudio=function(){r.default.playEffectMusic(this.itemClickAudio)},t.prototype.loadingLayerAni=function(){var e=this.node.getChildByName("loadLayer");e.getChildByName("btnBegin").runAction(cc.sequence(cc.scaleTo(.3,1.1),cc.scaleTo(.3,1)).repeatForever());for(var t=e.getChildByName("cloudNode"),o=[{isLeft:!0,moveDis:40,moveTime:4},{isLeft:!1,moveDis:30,moveTime:6},{isLeft:!0,moveDis:30,moveTime:3.5},{isLeft:!0,moveDis:20,moveTime:4},{isLeft:!1,moveDis:20,moveTime:5}],i=0;i<5;i++){var n=t.getChildByName("sp_cloud_"+(i+1)),c=o[i],a=c.isLeft?-c.moveDis:c.moveDis,r=c.isLeft?c.moveDis:-c.moveDis;n.runAction(cc.sequence(cc.moveBy(c.moveTime,cc.v2(a,0)),cc.moveBy(c.moveTime,cc.v2(r,0))).repeatForever())}var s=e.getChildByName("sp_title");s.getChildByName("sp_swallow").runAction(cc.sequence(cc.moveBy(3,cc.v2(-30,30)),cc.moveBy(4,cc.v2(30,-30))).repeatForever()),s.getChildByName("sp_wheat_1").runAction(cc.sequence(cc.rotateBy(3,15),cc.rotateBy(4,-15)).repeatForever()),s.getChildByName("sp_wheat_2").runAction(cc.sequence(cc.rotateBy(4,-15),cc.rotateBy(5,15)).repeatForever());var l=e.getChildByName("changlaiNode"),u=l.getChildByName("changlai_hand"),p=l.getChildByName("changwang_hand");u.runAction(cc.sequence(cc.rotateBy(1.5,20),cc.rotateBy(1,-20)).repeatForever()),p.runAction(cc.sequence(cc.rotateBy(1,20),cc.rotateBy(1.5,-20)).repeatForever())},c([_(cc.Prefab)],t.prototype,"ruleDialogPrefab",void 0),c([_(cc.Prefab)],t.prototype,"resultDialogPrefab",void 0),c([_(cc.Prefab)],t.prototype,"tableDialogPrefab",void 0),c([_(cc.Prefab)],t.prototype,"adsDialogPrefab",void 0),c([_(cc.Prefab)],t.prototype,"prizeDialogPrefab",void 0),c([_(cc.Prefab)],t.prototype,"gameManagerPrefab",void 0),c([_(cc.AudioClip)],t.prototype,"bgmAudio",void 0),c([_(cc.AudioClip)],t.prototype,"itemClickAudio",void 0),c([m],t)}(cc.Component);o.default=v,cc._RF.pop()},{"./AdsDialog":"AdsDialog","./AudioManager":"AudioManager","./CommonUtil":"CommonUtil","./EventManager":"EventManager","./GameManager":"GameManager","./NetWork":"NetWork","./PrizeDialog":"PrizeDialog","./ResultDialog":"ResultDialog","./RuleDialog":"RuleDialog","./TableDialog":"TableDialog"}],NetWork:[function(e,t,o){"use strict";cc._RF.push(t,"cf1d0w+B39C5JqMfWkM3Udf","NetWork"),Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){}return e.prototype.sendXHR=function(e){var t=new XMLHttpRequest;e="https://api.sumaokeji.com/sumao/api/bank/"+e,t.open("GET","https://api.sumaokeji.com/sumao/api/bank/getOpenIdByCode?code=1000",!0),cc.sys.isNative&&t.setRequestHeader("Accept-Encoding","gzip,deflate"),t.timeout=1e4,t.onreadystatechange=function(){if(4==t.readyState&&(200==t.status||0==t.status)){console.log(t.responseText);var e=JSON.parse(t.responseText);console.log(e)}},t.send()},e.prototype.httpGet=function(e,t,o){var i="https://api.sumaokeji.com/sumao/api/bank/getOpenIdByCode?";for(var n in e)i+=n+"="+e[n],i+="&";i=i.substring(0,i.length-1),console.log("url :"+i);var c=new XMLHttpRequest;c.open("GET",i,!0),["about","error","timeout"].forEach(function(e){c["on"+e]=function(){console.log("eventname :"+e),o&&o(-1,"network error")}}),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"),c.onreadystatechange=function(){if(4===c.readyState){var e=c.responseText,o=void 0;try{o=JSON.parse(e),console.log("HTTP GET:"+JSON.stringify(o)),t&&t(o)}catch(i){cc.log(i)}finally{o=null}}},c.send()},e}();o.default=new i,cc._RF.pop()},{}],PrizeDialog:[function(e,t,o){"use strict";cc._RF.push(t,"c174clhMIBEGo2vW42AROze","PrizeDialog");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=cc._decorator,l=s.ccclass,u=s.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.failNode=null,t.succNode=null,t.recordNode=null,t}return n(t,e),t.prototype.onLoad=function(){r.default.dispatchEvent(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,!1)},t.prototype.onDestroy=function(){r.default.dispatchEvent(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,!0)},t.prototype.start=function(){var e=this.node.getChildByName("content");e.scale=0,e.opacity=255,cc.tween(e).to(.2,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.closeBtnClick=function(){var e=this,t=this.node.getChildByName("content");t.scale=1,cc.tween(t).to(.3,{scale:0},{easing:"quadOut"}).call(function(){e.node.destroy()}).start()},t.prototype.initDialog=function(e,t,o){this.failNode.active=!1,this.succNode.active=!1,this.recordNode.active=!1,"failNode"===e?this.failNode.active=!0:"succNode"===e?(this.succNode.active=!0,this.succNode.getChildByName("prizeCountLabel").getComponent(cc.Label).string=t+"\u5143"):"recordNode"===e&&(this.recordNode.active=!0,this.recordNode.getChildByName("prizeLabel").getComponent(cc.Label).string=t+"\u5143\u7ea2\u5305",this.recordNode.getChildByName("timeLabel").getComponent(cc.Label).string=""+o)},t.prototype.jumpBtnClick=function(){},c([u(cc.Node)],t.prototype,"failNode",void 0),c([u(cc.Node)],t.prototype,"succNode",void 0),c([u(cc.Node)],t.prototype,"recordNode",void 0),c([l],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager"}],ResultDialog:[function(e,t,o){"use strict";cc._RF.push(t,"f97e5aoN/hA9bO5AH1wPW+y","ResultDialog");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=cc._decorator,l=s.ccclass,u=s.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.resultLabel=null,t.resultContent1=null,t.resultContent2=null,t.resultContent3=null,t}return n(t,e),t.prototype.start=function(){var e=this.node.getChildByName("content");e.scale=0,e.opacity=255,cc.tween(e).to(.2,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.closeBtnClick=function(){var e=this,t=this.node.getChildByName("content");t.scale=1,cc.tween(t).to(.3,{scale:0},{easing:"quadOut"}).call(function(){e.node.destroy()}).start()},t.prototype.initDialog=function(e,t,o){if(this.resultContent1.active=!1,this.resultContent2.active=!1,this.resultContent3.active=!1,o===a.GameOverType.success)this.resultLabel.string="\u606d\u559c\u4f60!\u51ed\u4e00\u5df1\u4e4b\u529b\uff0c\u5171\u53d1\u73b0"+e+"\u53ea\u5e38\u6765\uff0c\u83b7\u5f97\u4e00\u6b21\u5e78\u8fd0\u62bd\u5956\u673a\u4f1a!",this.resultContent1.active=!0;else if(o===a.GameOverType.longTimeNoClick)this.resultLabel.string="\u5f88\u9057\u61be!\u8fde\u7eed10s\u4e2d\uff0c\u4f60\u4e0e\u6240\u6709\u5e38\u6765\u64e6\u80a9\u800c\u8fc7\uff0c\u4e0d\u614c\u518d\u6765!",this.resultContent2.active=!0;else if(o===a.GameOverType.timeOver){this.resultLabel.string="\u6311\u6218\u5931\u8d25! \u4f60\u4e00\u5171\u53d1\u73b0"+e+"\u53ea\u5e38\u6765\uff0c\u4e0d\u8981\u6cc4\u6c14\uff0c\u518d\u6765\u4e00\u5c40\u5427~",this.resultContent3.active=!0;for(var i=0,n=this.node.getChildByName("content").getChildByName("starContent").children;i<n.length;i++)n[i].runAction(cc.sequence(cc.delayTime(a.default.randomNumber(15,30)/10),cc.fadeOut(a.default.randomNumber(1,3)/10),cc.delayTime(a.default.randomNumber(3,6)/10),cc.fadeIn(a.default.randomNumber(1,3)/10)).repeatForever())}},t.prototype.againBtnClick=function(){r.default.dispatchEvent(a.NOTI_NAME.INIT_GAME),r.default.dispatchEvent(a.NOTI_NAME.CLOSE_DIALOG,{resultDialog:!0,tableDialog:!0})},t.prototype.tableBtnClick=function(){r.default.dispatchEvent(a.NOTI_NAME.CLOSE_DIALOG,{resultDialog:!0}),r.default.dispatchEvent(a.NOTI_NAME.SHOW_TABLE_DIALOG)},c([u(cc.Label)],t.prototype,"resultLabel",void 0),c([u(cc.Node)],t.prototype,"resultContent1",void 0),c([u(cc.Node)],t.prototype,"resultContent2",void 0),c([u(cc.Node)],t.prototype,"resultContent3",void 0),c([l],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager"}],RuleDialog:[function(e,t,o){"use strict";cc._RF.push(t,"4f314oghcxAFYKo+dBy+Q/O","RuleDialog");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=cc._decorator,l=s.ccclass,u=(s.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isCloseStartGame=!1,t}return n(t,e),t.prototype.onLoad=function(){},t.prototype.onDestroy=function(){},t.prototype.start=function(){var e=this.node.getChildByName("content");e.scale=0,e.opacity=255,cc.tween(e).to(.2,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.initDialog=function(e){!0===e&&(this.isCloseStartGame=!0)},t.prototype.closeBtnClick=function(){var e=this,t=this.node.getChildByName("content");t.scale=1,cc.tween(t).to(.3,{scale:0},{easing:"quadOut"}).call(function(){e.isCloseStartGame&&r.default.dispatchEvent(a.NOTI_NAME.SHOW_GAME_LAYER),e.node.destroy()}).start()},c([l],t)}(cc.Component));o.default=u,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager"}],TableDialog:[function(e,t,o){"use strict";cc._RF.push(t,"3b8d14d7gFKfaGIaThvUkcb","TableDialog");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__decorate||function(e,t,o,i){var n,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=e("./CommonUtil"),r=e("./EventManager"),s=cc._decorator,l=s.ccclass,u=s.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tableNode=null,t.lightNode=null,t.isStartReward=!1,t}return n(t,e),t.prototype.onLoad=function(){r.default.addListener(a.NOTI_NAME.ROTATE_TABLE,this.rotateTable,this),r.default.addListener(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,this.setContentVisible,this)},t.prototype.onDestroy=function(){r.default.removeListener(a.NOTI_NAME.ROTATE_TABLE,this.rotateTable,this),r.default.removeListener(a.NOTI_NAME.TABLE_DIALOG_VISIBLE,this.setContentVisible,this)},t.prototype.start=function(){var e=this.node.getChildByName("content");e.scale=0,e.opacity=255,cc.tween(e).to(.2,{scale:1.1}).to(.1,{scale:1}).start()},t.prototype.closeBtnClick=function(){var e=this,t=this.node.getChildByName("content");t.scale=1,cc.tween(t).to(.3,{scale:0},{easing:"quadOut"}).call(function(){e.node.destroy()}).start()},t.prototype.initDialog=function(){this.lightNode.active=!1,this.addLightAni()},t.prototype.addLightAni=function(){for(var e=function(e){var o=cc.instantiate(t.lightNode);o.active=!0,o.setPosition(e.x,e.y);var i=o.getChildByName("tableDialog_sp_light_yellow"),n=o.getChildByName("tableDialog_sp_light_white");t.tableNode.addChild(o,1),o.runAction(cc.sequence(cc.callFunc(function(){i.active=!0,n.active=!1}),cc.delayTime(.3),cc.callFunc(function(){i.active=!1,n.active=!0}),cc.delayTime(.3)).repeatForever())},t=this,o=0,i=[{x:1.8,y:236},{x:1.8,y:-231},{x:-233,y:1.3},{x:234,y:1.3}];o<i.length;o++)e(i[o]);for(var n=function(e){var t=cc.instantiate(c.lightNode);t.active=!0,t.setPosition(e.x,e.y);var o=t.getChildByName("tableDialog_sp_light_yellow"),i=t.getChildByName("tableDialog_sp_light_white");c.tableNode.addChild(t,1),t.runAction(cc.sequence(cc.callFunc(function(){o.active=!1,i.active=!0}),cc.delayTime(.3),cc.callFunc(function(){o.active=!0,i.active=!1}),cc.delayTime(.3)).repeatForever())},c=this,a=0,r=[{x:-165,y:166},{x:165,y:166},{x:-165,y:-163},{x:165,y:-163}];a<r.length;a++)n(r[a])},t.prototype.drawBtnClick=function(){r.default.dispatchEvent(a.NOTI_NAME.SHOW_ADS_DIALOG)},t.prototype.rotateTable=function(){var e=this,t=[1.68,8.88,2.68,5.88,"\u8c22\u8c22\u53c2\u4e0e",16.88,1.68,2.68];this.tableNode.angle=0;for(var o=0,i=0;i<t.length;i++)""+t[i]=="\u8c22\u8c22\u53c2\u4e0e"&&(o=-22.5-45*i-720,console.log("-----\u65cb\u8f6c\u7684\u662f",i,t[i]));console.log("----rotate",o),this.isStartReward=!0,this.tableNode.runAction(cc.sequence(cc.rotateBy(2,o).easing(cc.easeCubicActionOut()),cc.delayTime(.5),cc.callFunc(function(){e.isStartReward=!1})))},t.prototype.setContentVisible=function(e){console.log("-----\u8bbe\u7f6e\u4e86\u53ef\u89c1\u5ea6",e?255:0),this.node.getChildByName("content").opacity=e?255:0},t.prototype.jumpBtnClick=function(){},t.prototype.recordBtnClick=function(){},c([u(cc.Node)],t.prototype,"tableNode",void 0),c([u(cc.Node)],t.prototype,"lightNode",void 0),c([l],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./EventManager":"EventManager"}],weixin:[function(e,t,o){"use strict";cc._RF.push(t,"ff6f5wbWeBFmrd1SoGfxD/m","weixin");var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))(function(n,c){function a(e){try{s(i.next(e))}catch(t){c(t)}}function r(e){try{s(i.throw(e))}catch(t){c(t)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(a,r)}s((i=i.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var o,i,n,c,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return c={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function r(e){return function(t){return s([e,t])}}function s(c){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(n=2&c[0]?i.return:c[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,c[1])).done)return n;switch(i=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,i=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){a.label=c[1];break}if(6===c[0]&&a.label<n[1]){a.label=n[1],n=c;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(c);break}n[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(r){c=[6,r],i=0}finally{o=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var c=function(){function e(){}return e.prototype.weixinOALoginFlow=function(){return i(this,void 0,void 0,function(){var e,t,o,i,c;return n(this,function(n){switch(n.label){case 0:return checkIsWechatBrowser()?(e=getCurrentPages(),t=e[e.length-1],(o=t.options.code||"")?[4,this.weixinOALogin(o)]:[3,5]):[3,7];case 1:return n.sent()?[4,this.getUserInfo()]:[3,3];case 2:return[2,n.sent()];case 3:return uni.showToast({title:"\u767b\u5f55\u5931\u8d25",icon:"error",duration:2e3}),[2,!1];case 4:return[3,6];case 5:i=t.__page__.fullPath,"",c=i&&"/"==i[0]?"http://"+document.domain+i:"http://"+document.domain+"/"+i,this.jumpToWechatAuthorizePage(c),n.label=6;case 6:return[3,8];case 7:return[2,0];case 8:return[2]}})})},e.prototype.weixinOALogin=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(o){switch(o.label){case 0:return[4,APP.$api.wxoaLogin({code:e})];case 1:return"0"===(t=o.sent()).code&&t.data.access_token?(uni.setStorageSync("access_token",t.data.access_token),[2,!0]):[2,!1]}})})},e.prototype.jumpToWechatAuthorizePage=function(e){var t=config.wechatCallbackUrl+"?frompage="+encodeURIComponent(e),o=config.wechatAuthorizeLink.replace("{APPID}",config.wechatAppId).replace("{REDIRECT_URI}",encodeURIComponent(t));window.location.href=o},e.prototype.getUserInfo=function(e){return void 0===e&&(e=!0),i(this,void 0,void 0,function(){var t,o,i;return n(this,function(n){switch(n.label){case 0:return!e&&(t=uni.getStorageSync("_user_info"))?[2,JSON.parse(t)]:(o=uni.getStorageSync("access_token"))?[4,APP.$api.getUserInfo({access_token:o})]:[2,!1];case 1:return"0"===(i=n.sent()).code?(uni.setStorageSync("_user_info",JSON.stringify(i.data)),[2,i.data]):(uni.removeStorageSync("access_token"),uni.removeStorageSync("_user_info"),[2,!1])}})})},e.prototype.onLoad=function(e){if(e.frompage){var t=e.code||"",o=e.frompage;t&&(-1!==o.indexOf("?")?o+="&code="+t:o+="?code="+t),window.location.href=o}},e}();o.default=new c,cc._RF.pop()},{}]},{},["AdsDialog","AudioManager","CommonUtil","EventManager","GameManager","ItemNode","MainScene","NetWork","PrizeDialog","ResultDialog","RuleDialog","TableDialog","weixin"]);