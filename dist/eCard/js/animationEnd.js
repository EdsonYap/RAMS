function pageThree(){endingBlackBox()}var boxBlackB;function endingBlackBox(){boxBlackB=createBox("#000",stageWidth,stageHeight);stage.addChild(boxBlackB).set({alpha:0});TweenMax.to(boxBlackB,1,{alpha:0.7,onComplete:endingAni})}function initEnding(){var a=new createjs.SpriteSheet({images:ssURL_arr(111,3,"images/ending/ending_",".jpg",1,"arr",0),framerate:15,frames:{height:741,width:470,count:55},animations:{runAndStop:[0,54,false],stay:[54,54,false]}});spriteEnding=new createjs.Sprite(a,0);spriteEnding.set({x:0,y:0,scaleX:2,scaleY:2,alpha:0})}function allSpriteAniRemoval(){spriteSock.gotoAndStop(0);spritePiston.gotoAndStop(0);spriteDigiStar.gotoAndStop(0);spriteAirAsia.gotoAndStop(0);spriteChicken.gotoAndStop(0);spriteSkeleton.gotoAndStop(0);spriteRobot.gotoAndStop(0);spriteBgLoop.gotoAndStop(0);stage.removeChild(spriteSock,spritePiston,spriteDigiStar,spriteAirAsia,spriteChicken,spriteSkeleton,spriteRobot,skeletonBg,spriteBgLoop)}function removeNewBg(){stage.removeChild(staticStage,staticTree)}function endingAni(){stage.addChild(spriteEnding).set({alpha:1}).play();stage.removeChild(boxBlackB);spriteEnding.addEventListener("animationend",function(){spriteEnding.gotoAndStop(0);stage.removeChild(spriteEnding);allSpriteAniRemoval();teethShineAni()})};