import React, { useEffect } from "react";
import { initCanvas } from "./lib/canvas";
import { Robbie, Lanxe, Duncan, Skeleton } from "./lib/classes";
import { drawAllSprites, updateAllSprites } from "./lib/groups";
import { checkAtkBoxCollisions } from "./lib/collision";
import { guardians, enemies } from "./lib/groups";

const Canvas = () => {
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d");

        if (canvas) {
            initCanvas(canvas);

            // Spawn objects // to be removed and use a dynamic spawner function
            new Lanxe(50, 500);
            new Robbie(50, 500);
            new Skeleton(1800, 500);

            // Main game loop logic
            const gameLoop = () => {
                // Game calculations function to be called
                // Enemy spawner function to be called

                checkAtkBoxCollisions(guardians, enemies);
                updateAllSprites();

                // Clear the canvas
                context.fillStyle = "black";
                context.fillRect(0, 0, canvas.width, canvas.height);

                // Render game objects
                drawAllSprites(context);

                requestAnimationFrame(gameLoop);
            };
            gameLoop();
        }
    }, []);

    return (
        <div>
            <canvas id="canvas"></canvas>
        </div>
    );
};

export default Canvas;
