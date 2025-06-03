// Variables
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const sizer = 560
const clicked = false

// Drawing Screen
C_WIDTH = canvas.width = 800
C_HEIGHT = canvas.height = 800

const screenX = (C_WIDTH - sizer) / 2
const screenY = 80

c.beginPath()
c.fillStyle = '#203354'
c.fillRect(screenX, screenY, sizer, sizer)

for(let i = 1; i < 8; i++){
    c.beginPath()
    c.strokeStyle = '#152238'
    c.moveTo(screenX + (70 * i), screenY)
    c.lineTo((screenX + (70 * i)), (screenY + sizer))
    c.stroke()
}

for(let i = 1; i < 8; i++){
    c.beginPath()
    c.moveTo(screenX, screenY + (70 * i))
    c.lineTo(screenX + sizer, screenY + (70 * i))
    c.stroke()
}

class Square{
    constructor(x, y){
        this.x = x
        this.y = y
        this.size = 70
    }
    draw(){
        c.beginPath()
        c.fillStyle = 'orange'
        c.fillRect(this.x, this.y, this.size, this.size)
    }
}

const square = new Square(100, 100)
square.draw()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, C_WIDTH, C_HEIGHT)
}

window.addEventListener('mousedown', (event) => {
    const rect = canvas.getBoundingClientRect(); // Get canvas position
    const mouseX = event.clientX - rect.left;    // Convert to canvas X
    const mouseY = event.clientY - rect.top;     // Convert to canvas Y
    if ((mouseX < (square.x + square.size) && mouseX > square.x) && (mouseY < (square.y + square.size) && mouseY > square.y)){
        clicked = true
    }   
})

window.addEventListener('mouseup', () => {
    clicked = false
})

