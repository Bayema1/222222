// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "arène 1":
            case "niveau1":return tiles.createTilemap(hex`0f000f00010707070707070707070707070702060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060900000000000000000000000a08060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008060000000000000000000000000008030505050505050505050505050504`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
