const allSprites = [];
const guardians = [];
const enemies = [];

function addToGroup(sprite, group) {
    group.push(sprite);
}

function removeFromGroup(sprite, group) {
    const index = group.indexOf(sprite);
    if (index !== -1) {
        group.splice(index, 1);
    }
}

function updateAllSprites() {
    for (const sprite of allSprites) {
        sprite.update();
    }
}

function drawAllSprites(context) {
    for (const sprite of allSprites) {
        sprite.draw(context);
    }
}

export { 
    addToGroup, removeFromGroup,
    allSprites, guardians, enemies,
    updateAllSprites, drawAllSprites
};