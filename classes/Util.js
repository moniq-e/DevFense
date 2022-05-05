export class Util {
    /**
     * @param {number} min 
     * @param {number} max 
     * @returns {{float: number, int: number}}
     */
    static random(min, max) {
        let results = {
            float: (Math.random() * max) + min,
            int: Math.floor((Math.random() * max) + min)
        }
        return results
    }
    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} x2 
     * @param {number} y2 
     * @returns {number}
     */
    static distance(vec1, vec2) {
        let dis = Math.abs(Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2)))
        return dis
    }
    /**
     * @param {any} firstObj sprite
     * @param {any} secondObj sprite
     * @param {number} distance 
     * @returns {{x: number, y: number}}
     */
    static knockback(firstObj, secondObj, distance) {
        let disObj = this.distance(firstObj.x, firstObj.y, secondObj.x, secondObj.y)

        let pos = distance / disObj

        let x = secondObj.x + pos * (secondObj.x - firstObj.x)

        let y = secondObj.y + pos * (secondObj.y - firstObj.y)

        return { x: x, y: y }
    }
    /**
     * @param {any} obj1 sprite
     * @param {any} obj2 sprite
     * @returns {boolean}
     */
    static collides(obj1, obj2) {
        let colliding = false
        if (this.distance(obj1, obj2) < obj1.width / 2) colliding = true
        return colliding
    }
    /**
     * @param {number} ms 
     * @returns {Promise}
     */
    static async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    /**
     * @param {any} entity sprite
     */
    static kill(entity) {
        entity.destroy()
    }
}