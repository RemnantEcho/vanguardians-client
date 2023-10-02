import { Lanxe, Robbie, Duncan, Steph, James, Alex } from "./guardians";
import { Skeleton, Demon } from "./enemies";
import { van } from "./groups";

function spawnGuardians() {
    switch (van[0].lvl) {
        case 2:
            spawnSteph();
            break;
        case 3:
            spawnRobbie();
            break;
        case 4:
            spawnJames();
            break;
        case 5:
            // spawnAlex();
            break;
        default:
            break;
    }
}

let waveCounter = 0

function spawnEnemies() {
    waveCounter += 1
    console.log('Wave starting: ', waveCounter)

    switch (waveCounter) {
        case 1:
            for (let i = 0; i < 20; i++) {
                spawnSkeleton();
            }
            break;
        case 2:
            for (let i = 0; i < 20; i++) {
                spawnSkeleton();
            }
            break;
        case 3:
            for (let i = 0; i < 4; i++) {
                spawnSkeleton();
            }
            for (let i = 0; i < 1; i++) {
                spawnDemon();
            }
            break;
        case 4:
            for (let i = 0; i < 6; i++) {
                spawnSkeleton();
            }
            for (let i = 0; i < 3; i++) {
                spawnDemon();
            }
            break;
        case 5:
            for (let i = 0; i < 14; i++) {
                spawnSkeleton();
            }
            for (let i = 0; i < 3; i++) {
                spawnDemon();
            }
            break;
        default:
            // Win Game logic
            break;
    }
}

function spawnDuncan() {
    new Duncan(50, 513);
}

function spawnLanxe() {
    new Lanxe(50, 533);
}

function spawnRobbie() {
    new Robbie(50, 533);
}

function spawnSteph() {
    new Steph(50, 533);
}

function spawnJames() {
    new James(50, 613);
}

function spawnAlex() {
    new Alex(50, 533);
}

function spawnSkeleton() {
    const minX = 1366
    const maxX = 2000
    const randomX = Math.random() * (maxX - minX) + minX;

    new Skeleton(randomX, 533);
}

function spawnDemon() {
    const minX = 1366
    const maxX = 2000
    const randomX = Math.random() * (maxX - minX) + minX;

    new Demon(randomX, 480);
}



export { 
    spawnGuardians, spawnEnemies,
    spawnDuncan, spawnLanxe, spawnRobbie, spawnSteph, spawnJames, spawnAlex
}

