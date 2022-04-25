export class Util {
    static random(min, max) {
        let resul = Math.floor((Math.random() * max) + min)
        return resul
    }

    static distance(x, y, x2, y2) {
        let dis = Math.abs(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)))
        return dis
    }

    static knockback(firstObj, secondObj, distance) {
        let disObj = this.distance(firstObj.x, firstObj.y, secondObj.x, secondObj.y)
        
        let pos = distance / disObj
    
        let x = secondObj.x + pos * (secondObj.x - firstObj.x)
    
        let y = secondObj.y + pos * (secondObj.y - firstObj.y,2)
    
        return {x: x, y: y}
    }

    static followPlayer(player, zombie, speed) {
        let disObj = this.distance(zombie.x, zombie.y, player.x, player.y)
        
        let pos = speed / disObj
    
        let x = player.x - pos * (player.x - zombie.x)
    
        let y = player.y - pos * (player.y - zombie.y,2)
    
        return {x: x, y: y}
    }
}