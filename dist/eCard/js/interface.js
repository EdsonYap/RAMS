var playBtn, boxBlack;

function pageOne() {
    initBlackCanvas();
    initBackground();
    iniBgLoop();
    teethShineInit();
    teethJumpInit();
    initIntroExplode();
    teethShineAni()
}

function teethShineInit() {
    var a = new createjs.SpriteSheet({
        images: ssURL_arr(24, 3, "images/teeth_animation1/teeth_export_", ".png", 1, "arr", 0),
        framerate: 15,
        frames: {
            height: 200,
            width: 180,
            regX: 90,
            regY: 100,
            count: 12
        }
    });
    spriteTeethShine = new createjs.Sprite(a, 0);
    spriteTeethShine.set({
        x: stageWidth / 2,
        y: stageHeight / 2,
        alpha: 1,
        scaleX: 2.5,
        scaleY: 2.5,
        cursor: "pointer"
    })
}

function teethJumpInit() {
    var a = new createjs.SpriteSheet({
        images: ssURL_arr(22, 3, "images/teeth_animation2/teeth_export_", ".png", 0, "arr", 0),
        framerate: 29,
        frames: {
            height: 200,
            width: 180,
            regX: 90,
            regY: 100,
            count: 22
        }
    });
    spriteTeethJump = new createjs.Sprite(a, 0);
    spriteTeethJump.set({
        x: stageWidth / 2,
        y: stageHeight / 2,
        scaleX: 2.5,
        scaleY: 2.5,
        alpha: 1
    })
}

function initBlackCanvas() {
    boxBlack = createBox("#000", stageWidth, stageHeight)
}

function initBackground() {
    var a = new createjs.SpriteSheet({
        images: ssURL_arr(124, 3, "images/intro/bg_stage_", ".jpg", 2, "arr", 0),
        framerate: 15,
        frames: {
            height: 741,
            width: 470,
            count: 31
        },
        animations: {
            runAndStop: [0, 30, false],
        }
    });
    spriteBackground = new createjs.Sprite(a, 0);
    spriteBackground.set({
        x: 0,
        y: 0,
        scaleX: 2,
        scaleY: 2,
        alpha: 0
    })
}

function iniBgLoop() {
    var a = new createjs.SpriteSheet({
        images: ssURL_arr(101, 3, "images/stage_loop/bg_stage_loop_", ".jpg", 2, "arr", 123),
        framerate: 11,
        frames: {
            height: 741,
            width: 470,
            count: 33
        },
        animations: {
            runAndStop: [0, 32, false],
        }
    });
    spriteBgLoop = new createjs.Sprite(a, 0);
    spriteBgLoop.set({
        x: 0,
        y: 0,
        scaleX: 2,
        scaleY: 2,
        alpha: 1
    })
}

function initIntroExplode() {
    var a = new createjs.SpriteSheet({
        images: ssURL_arr(31, 2, "images/explotion/explotion_", ".png", 1, "arr", 0),
        framerate: 29,
        frames: {
            height: 741,
            width: 470,
            count: 15
        },
        animations: {
            runAndStop: [0, 14, false]
        }
    });
    spriteIntroExplode = new createjs.Sprite(a, 0);
    spriteIntroExplode.set({
        scaleX: 2,
        scaleY: 2,
        alpha: 1
    })
}

function teethShineAni() {
    stage.addChild(boxBlack).set({
        alpha: 1
    });
    stage.addChild(spriteTeethShine).play();
    spriteTeethShine.addEventListener("click", playTeeth)
}

function playTeeth() {
    teethJumpAni()
}
var firstPlay = true;
var backgroundAni_play = false;

function backgroundAni() {
    backgroundAni_play = false;
    stage.addChild(spriteBackground).gotoAndPlay(0);
    TweenMax.to(spriteBackground, 1, {
        alpha: 1
    });
    spriteBackground.addEventListener("animationend", function() {
        spriteBackground.gotoAndStop(0);
        stage.removeChild(spriteBackground);
        stage.addChild(spriteBgLoop).play();
        initGrey();
        preloadPiston();
        backgroundAni_play = true
    });
    stage.addChild(spriteIntroExplode).set({
        alpha: 1
    }).gotoAndPlay("runAndStop");
    spriteIntroExplode.addEventListener("animationend", function() {
        stage.removeChild(spriteIntroExplode)
    })
}

function introClosing() {
    TweenMax.to(boxBlack, 3, {
        alpha: 0,
        ease: Cubic.easeOut,
        onComplete: function() {
            stage.removeChild(boxBlack)
        }
    });
    backgroundAni();
    TweenMax.delayedCall(0.2, function() {
        stage.removeChild(spriteTeethJump)
    })
}

function teethJumpAni() {
    stage.removeChild(spriteTeethShine);
    stage.addChild(spriteTeethJump).gotoAndPlay(0);
    TweenMax.delayedCall(0.45, introClosing)
}

function createText(c, b) {
    var d = new createjs.Text(c, b + "px moonshinerround, Arial", "#000");
    d.textAlign = "center";
    d.width = d.getMeasuredWidth() * 1.1;
    d.height = d.getMeasuredHeight() * 2.2;
    var e = new createjs.Container();
    var a = createBox("#fff", d.width, d.height);
    e.addChild(a).set({
        x: -d.width / 2
    });
    e.addChild(d);
    d.lineHeight = b;
    d.maxWidth = d.width;
    return e
};