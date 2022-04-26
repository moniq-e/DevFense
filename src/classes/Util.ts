export class Util {
    static random(min: number, max: number) {
        let results = {
            float: (Math.random() * max) + min,
            int: Math.floor((Math.random() * max) + min)
        }
        return results
    }
    static distance(x: number, y: number, x2: number, y2: number) {
        let dis = Math.abs(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)))
        return dis
    }
    static knockback(firstObj: any, secondObj: any, distance: number) {
        let disObj = this.distance(firstObj.x, firstObj.y, secondObj.x, secondObj.y)

        let pos = distance / disObj

        let x = secondObj.x + pos * (secondObj.x - firstObj.x)

        let y = secondObj.y + pos * (secondObj.y - firstObj.y)

        return { x: x, y: y }
    }
    static collides(obj1: any, obj2: any) {
        let colliding = true
        if (obj2.x > obj1.width + obj1.x) {
            colliding = false
        }
        if (obj1.x > obj2.width + obj2.x) {
            colliding = false
        }
        if (obj2.y > obj1.height + obj1.y) {
            colliding = false
        }
        if (obj1.y > obj2.height + obj2.y) {
            colliding = false
        }
        return colliding
    }
    static async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    static attack(entity: any) {
        entity.destroy()
    }
}