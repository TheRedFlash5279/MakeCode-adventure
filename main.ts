namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    let Stages: number[] = []
    if (Levels < Stages.length) {
        game.splash("Castle")
        Levels += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 99) {
        Slash = sprites.createProjectileFromSprite(img`
. 6 . . . . 6 . . . . . . . . . 
. 8 8 8 8 8 8 8 . . . . . . . . 
. . 9 9 9 9 9 8 8 8 . . . . . . 
. . . 6 6 6 6 9 9 8 8 6 . . . . 
. . . . 8 8 6 6 6 9 8 . . . . . 
. . 6 . . 8 8 9 6 6 8 8 . . . . 
. . . . . . 8 8 9 6 9 8 . . . . 
. . . . . . . 8 9 6 9 8 . . . . 
. . . . . 6 . 8 9 6 9 8 . . . . 
. 6 . . . . 8 8 9 6 8 8 . . . . 
. . . . . . 8 9 6 6 8 . . . . . 
. . . . 8 8 8 6 6 9 8 . . . . . 
. . 8 8 8 6 6 6 9 8 8 . . . . . 
. . . . 6 6 9 9 8 8 . . 6 . . . 
. . . . . 9 9 . . . . . . . . . 
. . 6 . . . . . . . . . . . . . 
`, MC_2, 500, 100)
        Slash.setVelocity(100, 10)
        pause(130)
        Slash.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Weapon, function (sprite, otherSprite) {
    MC.destroy()
    MC_2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f . . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 f . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . f 1 f 1 1 1 f f 1 f . . . . . . . . 
. . . . . f 1 1 1 f 1 1 f f 1 1 f . . . . . . . 
. . . . . f 1 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f 2 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f 1 1 1 2 1 1 1 1 2 1 f . . . . . . . 
. . . . . . f 2 2 2 2 1 2 2 1 f . . . . . . . . 
. . . . . f f f f 2 2 2 2 2 f . . d b . . . . . 
. . . . f d d d d f f f f f . . d b c . . . . . 
. . . . f b b b b f 1 1 2 f 8 b b c . . . . . . 
. . . . f b b b b f 2 2 1 f d 5 c . . . . . . . 
. . . . . f c c f 2 1 1 2 f 8 f 8 . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . . . e e . . e e . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    MC_2.setPosition(100, 55)
    controller.moveSprite(MC_2)
    scene.cameraFollowSprite(MC_2)
    info.changeScoreBy(100)
    Chest.destroy()
})
let Slash: Sprite = null
let Levels = 0
let Chest: Sprite = null
let MC_2: Sprite = null
let MC: Sprite = null
MC = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f . . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 f . . . . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . f 1 f 1 1 1 f f 1 f . . . . . . . . 
. . . . . f 1 1 1 f 1 1 f f 1 1 f . . . . . . . 
. . . . . f 1 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f 2 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f 1 1 1 2 1 1 1 1 2 1 f . . . . . . . 
. . . . . . f 2 2 2 2 1 2 2 1 f . . . . . . . . 
. . . . . f f f f 2 2 2 2 2 f . . . . . . . . . 
. . . . f d d d d f f f f f . . . . . . . . . . 
. . . . f b b b b f 1 1 2 f f . . . . . . . . . 
. . . . f b b b b f 2 2 1 f d f . . . . . . . . 
. . . . . f c c f 2 1 1 2 f d f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . . . e e . . e e . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
MC.setPosition(50, 150)
controller.moveSprite(MC)
controller.moveSprite(MC_2)
scene.cameraFollowSprite(MC)
Chest = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c b d . . . . . . . 
. . . . . . c b b d . . . . . . 
. . . . . . c c b b d . . . . . 
. . . . . . . c c b b d . 8 . . 
. . . . . . . . c c b b 8 8 . . 
. . . . . . . . . c c 5 8 . . . 
. . . . . . . . . . 8 8 8 8 . . 
. . . . . . . . . 8 8 . 8 8 8 . 
. . . . . . . . . . . . . 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Weapon)
Chest.setPosition(100, 50)
info.setLife(20)
