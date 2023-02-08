namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . f . . 
        . . . . . . f . . f . 
        . . . . f . . f . . f 
        . . . . . f . . f . f 
        . . f . . . f . f . f 
        . . . f . . f . f . f 
        f . . . f . f . f . f 
        . f . . f . f . f . f 
        . f . . f . f . f . f 
        f . . . f . f . f . f 
        . . . f . . f . f . f 
        . . f . . . f . f . f 
        . . . . . f . . f . f 
        . . . . f . . f . . f 
        . . . . . . f . . f . 
        . . . . . . . . f . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player1.changeScoreBy(1)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.player1.score() >= 1500) {
        game.gameOver(true)
    } else {
        game.gameOver(true)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . f . . . . . . . . 
        . f . . f . . . . . . 
        f . . f . . f . . . . 
        f . f . . f . . . . . 
        f . f . f . . . f . . 
        f . f . f . . f . . . 
        f . f . f . f . . . f 
        f . f . f . f . . f . 
        f . f . f . f . . f . 
        f . f . f . f . . . f 
        f . f . f . . f . . . 
        f . f . f . . . f . . 
        f . f . . f . . . . . 
        f . . f . . f . . . . 
        . f . . f . . . . . . 
        . . f . . . . . . . . 
        `, a, -100, 0)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
})
let projectile: Sprite = null
let a: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`arène 1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . . 
    . . f f e e e e f 2 f . . . . . . 
    . f f e e e e f 2 2 2 f . . . . . 
    . f e e e f f e e e e f . . . c c 
    . f f f f e e 2 2 2 2 e f . c d c 
    . f e 2 2 2 f f f f e 2 f c d d c 
    f f f f f f f e e e f f c d d c . 
    f f e 4 4 e b f 4 4 e c d d c . . 
    f e e 4 d 4 1 f d d e c d c . . . 
    . f e e e 4 d d d e d c c c . . . 
    . . f f e e 4 4 e 4 d d e . . . . 
    . . . f 2 2 2 2 4 4 e e . . . . . 
    . . . f 2 2 2 2 e 2 f . . . . . . 
    . . . f 4 4 4 4 5 5 f . . . . . . 
    . . . . f f f f f f . . . . . . . 
    . . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
a = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f . . . . 
    . . . . . . f 8 f e e e e f f . . 
    . . . . . f 8 8 8 f e e e e f f . 
    c c . . . f e e e e f f e e e f . 
    c d c . f e 8 8 8 8 e e f f f f . 
    c d d c f 8 e f f f f 8 8 8 e f . 
    . c d d c f f e e e f f f f f f f 
    . . c d d c e 4 4 f b e 4 4 e f f 
    . . . c d c e d d f 1 4 d 4 e e f 
    . . . c c c d e d d d 4 e e e f . 
    . . . . e d d 4 e 4 4 e e f f . . 
    . . . . . e e 4 4 8 8 8 8 f . . . 
    . . . . . . f 8 e 8 8 8 8 f . . . 
    . . . . . . f 5 5 4 4 4 4 f . . . 
    . . . . . . . f f f f f f . . . . 
    . . . . . . . . . f f f . . . . . 
    `, SpriteKind.Player2)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
tiles.placeOnRandomTile(a, sprites.dungeon.collectibleBlueCrystal)
controller.player1.moveSprite(mySprite)
controller.player2.moveSprite(a)
