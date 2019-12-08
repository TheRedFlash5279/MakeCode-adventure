namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
function ChangeLevel () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
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
    info.changeLifeBy(-1e-12)
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
let Stages: Image[] = []
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
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 3 7 7 7 7 7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 c c b b b b c c 7 7 7 7 7 7 3 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 8 c c b b b b c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 8 c c 7 7 7 7 c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 8 c c c c c c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c c c c c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c c c c c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 8 8 8 2 2 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 3 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 3 7 7 7 7 7 7 7 3 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(3, img`
7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 
7 7 7 7 7 c 6 7 7 6 c 7 7 7 7 7 
7 7 7 7 c 6 7 5 7 7 6 c 7 7 7 7 
7 7 6 6 c c 6 5 5 6 c c 6 6 7 7 
6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
7 c c c 6 6 7 6 6 5 7 6 c c 6 7 
6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
6 6 7 7 7 c c c c c c 7 7 7 6 6 
6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
7 c c 5 5 7 6 7 7 6 7 5 5 c c 7 
7 c 6 7 5 5 6 7 7 6 5 5 7 6 c 7 
7 6 6 7 7 6 6 5 5 6 6 7 7 6 6 7 
7 7 6 6 6 6 c 6 7 6 c 6 6 6 7 7 
7 7 7 6 6 c 7 6 6 6 7 c 6 7 7 7 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 5 7 7 7 7 7 7 5 7 7 7 
5 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 5 5 7 7 7 7 7 5 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
scene.setTile(15, img`
7 7 7 f f f f f f f f f f 7 7 7 
7 7 f b b b b f f f b b b f 7 7 
7 f b b b b b b b b b b b b f 7 
f f f f f b b b b b b b b b b f 
f b b b b f b b b b f f f b b f 
f b b b b f b b b b b b f f b f 
f b b b f b b b b b b b b f b f 
f b b b b f f b b b b b b f b f 
f b b b b b f b b b b b b f b f 
f b b b b b b b b b b b b f b f 
f b b b b b b b b f f f b f b f 
f b b b b b b b f f b b b b b f 
f f f f f b b f f b b b b b b f 
7 f b b b f f f b b b b f f f 7 
7 7 f b b b b b b f f f f f 7 7 
7 7 7 f f f f f f f f f f 7 7 7 
`, true)
scene.setTile(12, img`
c 1 c c c c c c c 1 c c c c c c 
c 1 c c c c c c c 1 c c c c c c 
c 1 c c c c c c c 1 c c c c c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
c c c c c 1 c c c c c c c 1 c c 
c c c c c 1 c c c c c c c 1 c c 
c c c c c 1 c c c c c c c 1 c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
c 1 c c c c c c c 1 c c c c c c 
c 1 c c c c c c c 1 c c c c c c 
c 1 c c c c c c c 1 c c c c c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
c c c c c 1 c c c c c c c 1 c c 
c c c c c 1 c c c c c c c 1 c c 
c c c c c 1 c c c c c c c 1 c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(11, img`
b 1 b b b b b b b 1 b b b b b b 
b 1 b b b b b b b 1 b b b b b b 
b 1 b b b b b b b 1 b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b b b b b 1 b b b b b b b 1 b b 
b b b b b 1 b b b b b b b 1 b b 
b b b b b 1 b b b b b b b 1 b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b 1 b b b b b b b 1 b b b b b b 
b 1 b b b b b b b 1 b b b b b b 
b 1 b b b b b b b 1 b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b b b b b 1 b b b b b b b 1 b b 
b b b b b 1 b b b b b b b 1 b b 
b b b b b 1 b b b b b b b 1 b b 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 8 9 8 8 8 6 8 8 8 8 
8 8 8 9 9 9 8 8 8 8 8 8 9 8 8 8 
8 8 8 8 8 8 9 6 8 8 8 8 8 8 8 8 
8 9 8 8 8 8 6 9 8 8 8 8 8 8 8 8 
8 9 8 8 8 8 8 8 8 6 6 6 8 8 8 8 
8 9 8 8 8 8 8 6 6 8 6 8 8 8 8 8 
8 6 8 8 8 8 8 8 9 8 6 8 8 8 8 8 
8 8 8 6 6 6 6 9 8 8 8 8 8 9 8 8 
8 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 6 6 6 8 8 8 8 
8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 9 8 8 8 8 8 9 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(13, img`
d d d d d d d d d d d d d d d d 
d d d 1 1 d d d d d d d d b d d 
d d d 1 1 d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d b d d d d d d b b d d d d d 
d d d d d d d d d b b d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d b d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
1 1 d d d d d d d d d d d d d d 
1 1 d d d d d d d d d d b d d d 
d d d d d d 1 d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d b d 
`, false)
scene.setTile(2, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
scene.setTile(4, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 c c c c 6 7 7 7 7 7 
7 7 7 7 c c 6 7 7 5 5 6 6 7 7 7 
7 7 c c 6 6 6 6 7 5 5 7 c c 7 7 
7 c 6 6 6 7 7 7 7 7 7 5 6 c c 7 
7 c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
7 c c 6 6 6 6 c 6 6 6 6 6 c c c 
7 c c 6 6 c 6 6 c 6 c 6 6 c c 7 
7 7 c c f f 6 6 c f f c c f 7 7 
7 7 7 7 c f c c c f c f f 7 7 7 
7 7 7 7 7 4 f f f c 7 e 7 7 7 7 
7 7 7 7 7 7 e e e 7 7 4 7 7 7 7 
7 7 7 7 7 7 7 e e 7 e 7 7 7 7 7 
`, true)
scene.setTile(5, img`
7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 7 
7 7 7 7 6 6 6 6 6 6 6 6 7 7 6 7 
b b b 7 6 6 6 6 7 7 6 6 7 7 7 6 
6 7 7 6 6 b 6 6 6 7 6 b 7 7 7 6 
6 6 7 7 b b 7 7 6 6 6 7 7 7 7 6 
6 6 7 7 b 7 7 7 6 6 6 6 b 7 6 6 
6 6 7 b 7 7 7 7 6 7 7 6 6 6 6 6 
6 6 7 7 7 6 7 7 6 6 6 6 7 6 6 6 
6 6 7 7 7 7 7 6 6 6 7 7 7 6 7 6 
6 6 6 6 7 7 7 6 7 6 6 7 6 7 b 6 
6 6 b 6 6 6 6 6 6 6 6 6 6 7 b 6 
6 6 6 6 6 7 7 6 6 b 6 6 6 7 7 6 
6 7 6 6 6 6 7 7 7 7 6 6 6 6 7 6 
6 7 6 6 6 6 7 7 6 6 7 7 7 7 7 6 
7 6 6 6 6 6 7 7 6 6 6 6 6 6 6 7 
7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 7 
`, false)
scene.setTile(14, img`
c b c c c c c c c c c c c c b c 
c b b b b b b b b b b b b b b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b c c c c c c c c c c c c b c 
c b b b b b b b b b b b b b b c 
c b c c c c c c c c c c c c b c 
`, true)
scene.setTile(1, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
scene.setTile(9, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
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
Stages = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 3 7 7 7 7 7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 c c b b b b c c 7 7 7 7 7 7 3 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c b b b b c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c 7 7 7 7 c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c c c c c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c c e e c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 c c c e e c c c 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 8 8 8 8 2 2 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 3 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 3 7 7 7 7 7 7 7 3 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, img`
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e e e e e e e e e e e e e 9 9 9 9 9 e e e e e e e e e e e e e e 
e b b b b b b b b b b b e 9 9 9 9 9 e b b b b b b b b b b b b e 
e b b b b b b b b b b b e 9 9 9 9 9 e b b b b b b b b b b b b e 
e e e e e e e e e e e e e 9 9 9 9 9 e e e e e e e e e e e e e e 
e e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e e 
e e e e 1 1 e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e e e 1 1 e e e e 
e 1 1 1 1 1 1 1 1 1 1 1 e e e 1 1 e e e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
e e e e e 1 1 e e e e e e e e 1 1 e e e e e e e e 1 1 e e e e e 
e e 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 e e 
e e 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 e e 
e e 1 1 1 1 1 e 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 e 1 1 1 1 1 e e 
e e 1 1 1 1 1 e e e 1 1 1 1 e 1 1 e 1 1 1 e e e e 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 e e 
e e 1 1 1 1 1 1 1 1 1 1 1 1 e 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`, img`
5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 5 5 5 5 5 5 
5 5 5 5 5 4 4 4 7 7 7 7 7 4 4 7 7 7 7 7 7 7 7 7 7 4 4 5 5 5 5 5 
5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 5 5 5 
5 4 4 4 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 4 4 5 5 
4 4 7 7 7 7 7 7 7 7 4 4 5 5 5 5 5 5 5 5 5 5 4 4 7 7 7 7 7 4 4 5 
4 7 7 7 7 7 7 7 7 7 4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 7 7 7 7 7 4 4 
4 7 7 7 4 4 4 7 7 7 7 4 4 4 4 4 5 4 4 4 4 4 4 4 4 7 7 7 7 7 7 4 
4 7 7 7 4 5 4 4 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 4 4 7 7 7 7 7 7 4 
4 7 7 7 4 5 5 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 7 7 7 7 7 7 4 
4 7 7 7 4 5 5 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 4 7 7 7 4 
4 7 7 7 4 5 5 4 7 7 7 7 7 7 4 7 7 7 7 7 4 7 7 7 4 7 7 7 7 7 7 4 
4 4 7 7 4 5 5 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 4 7 7 4 4 5 5 4 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 4 7 7 7 4 5 5 4 7 4 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 4 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 4 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 7 4 7 7 7 4 7 7 7 7 7 7 7 
5 4 4 7 7 7 7 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 4 
5 5 4 4 7 7 7 4 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 4 7 7 4 
5 5 5 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 4 4 7 7 4 
5 5 5 5 5 5 5 4 7 7 7 7 7 7 7 7 7 4 4 7 7 7 7 4 4 7 7 4 4 7 7 4 
5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 4 4 7 7 4 
4 4 4 4 5 5 5 5 5 4 4 7 7 4 4 4 7 7 7 7 7 7 4 4 4 7 4 4 4 7 7 4 
4 7 7 4 4 4 5 5 5 5 4 4 4 4 5 4 4 4 4 4 4 4 4 4 4 7 7 7 4 7 7 4 
4 7 7 7 7 4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 4 5 5 5 5 5 5 5 5 5 5 4 4 4 7 4 4 7 4 7 7 7 7 7 7 4 
4 7 4 7 7 7 4 4 5 5 5 5 5 5 4 4 4 4 7 7 7 7 4 4 4 7 4 4 7 7 7 4 
4 7 7 7 7 7 7 4 4 5 5 5 5 4 4 7 7 7 7 7 7 7 7 4 4 4 4 4 7 7 7 4 
4 7 7 7 4 7 7 7 4 4 4 4 4 4 7 7 7 7 7 7 4 7 7 7 7 4 4 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
let Entry_Way = sprites.create(img`
f f f f f f f f f f f f f f f f 
f e e f e e e e f e e e e f e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e f e e e e f e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e f e e e e f e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f e e f e e e e f e e e e f e f 
f e e e e e e e e e e e e e e f 
f e e e e e e e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Door)
Entry_Way.setPosition(240, 282)
game.onUpdateInterval(500, function () {
	
})
