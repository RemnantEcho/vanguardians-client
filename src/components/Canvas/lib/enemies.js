import { addToGroup, removeFromGroup, allSprites, guardians, enemies } from "./groups";
import { Sprite } from "./sprite";


// --------------------  ENEMY CLASSES  -------------------------
class Enemy extends Sprite {
    constructor() {
        super();
        addToGroup(this, enemies);

        this.attackTimer = null;
        this.attackCooldown = 0;
    }

    // Default target for Enemies if not overriden in the subclass
    updateTarget() {
        this.target = this.findNearestTarget(guardians, "enemy");
    }

    // Default movement for Enemies if not overriden in the subclass
    updatePosition() {
        if (this.target && this.target && this.checkTargetInRange() == false) {
            this.position.x -= this.movSpd;
        }
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 5); 
    }

    updateAttacking() {
        if (this.target && this.checkTargetInRange() && this.atkCooldown <= 0) {
            this.attack();
            this.atkCooldown = this.atkSpd;
            this.atkTimer = setTimeout(() => {
              this.isAttacking = false;
            }, 50);
        }
        if (this.atkCooldown > 0) {
        this.atkCooldown -= 16;
        }
    }

    update() {
        if (this.currHealth <= 0) {
            this.isAlive = false;
            removeFromGroup(this, allSprites);
            removeFromGroup(this, enemies);
        }
        this.updateTarget()
        this.updatePosition()
        this.updateAttacking()
    }
}

class Skeleton extends Enemy {
    constructor(x, y) {
        super()
        this.position = {x, y}
        this.width = 70
        this.height = 150
        this.maxHealth = 20
        this.currHealth = this.maxHealth
        this.atk = 20
        this.atkSpd = 2000
        this.atkRange = 200
        this.movSpd = 4

        this.isAttacking = false;
        this.atkTimer = null;
        this.atkCooldown = 0;
        this.atkBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: this.atkRange,
            height: 50,
        }
    }

    draw(context) {
        this.atkBox.position.x = this.position.x - this.atkRange
        this.atkBox.position.y = this.position.y + 50
        context.fillStyle = "red"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);

        if (this.isAttacking) {
            context.fillRect(
                this.atkBox.position.x,
                this.atkBox.position.y,
                this.atkBox.width,
                this.atkBox.height
            );
        }
    }
}

export { Skeleton }