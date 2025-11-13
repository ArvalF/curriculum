<script setup>
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue'
import { useAppStore } from '@/store/appStore'

const store= useAppStore()
const canvasRef = ref(null)

const CELL_SIZE = 16
let GRID_WIDTH, GRID_HEIGHT

let direction = { x: 1, y: 0 }
let wormSegments = []

const MOVE_INTERVAL = 100
let hitTimeStamp = ref(null)
let animationFrameId = null
let progress = 0
let lastMoveTimestamp
const WORM_DISAPPEAR_TIME = 3000 // Temps en ms pour que le ver disparaisse après un hit
const timestampNow = ref()
const wormTransparency = computed(() => {
  if (hitTimeStamp.value === null) return 1
  const elapsed = timestampNow.value - hitTimeStamp.value
  if (elapsed > WORM_DISAPPEAR_TIME) return 0
  return 1 - (elapsed / WORM_DISAPPEAR_TIME)
})

watch(() => store.hitProject, (hitProject) => {
  console.log('hitProject changed:', hitProject)
  if (hitProject) {
    hitTimeStamp.value = Date.now()
  }
})

function setupGrid() {
  GRID_WIDTH = Math.floor(window.innerWidth / CELL_SIZE)
  GRID_HEIGHT = Math.floor(window.innerHeight / CELL_SIZE)
}

function initWorm() {
  const startX = Math.floor(GRID_WIDTH / 4)
  const startY = Math.floor(GRID_HEIGHT / 2)
  wormSegments = []
  for (let i = 0; i < 8; i++) {
    wormSegments.push({ x: startX - i, y: startY })
  }
}

// Rotation 90° à gauche
function turnLeft() {
  const { x, y } = direction
  direction = { x: -y, y: x }
}

// Rotation 90° à droite
function turnRight() {
  const { x, y } = direction
  direction = { x: y, y: -x }
}

// Décide aléatoirement de tourner ou pas (par exemple 10% de chance par déplacement)
function maybeTurn() {
  const random = Math.random()
  if (random < 0.05) turnLeft()
  else if (random < 0.1) turnRight()
}

function drawWorm(context, interpProgress) {
  context.clearRect(0, 0, GRID_WIDTH * CELL_SIZE, GRID_HEIGHT * CELL_SIZE)
  context.fillStyle = `rgb(249, 98, 125, ${wormTransparency.value})`

  const head = wormSegments[0]
  const nextHead = { x: head.x + direction.x, y: head.y + direction.y }
  const interpX = head.x + (nextHead.x - head.x) * interpProgress
  const interpY = head.y + (nextHead.y - head.y) * interpProgress

  context.fillRect(interpX * CELL_SIZE, interpY * CELL_SIZE, CELL_SIZE, CELL_SIZE)

  for (let i = 1; i < wormSegments.length; i++) {
    const segment = wormSegments[i]
    const prevSegment = wormSegments[i - 1]
    const segmentInterpX = segment.x + (prevSegment.x - segment.x) * interpProgress
    const segmentInterpY = segment.y + (prevSegment.y - segment.y) * interpProgress
    context.fillRect(segmentInterpX * CELL_SIZE, segmentInterpY * CELL_SIZE, CELL_SIZE, CELL_SIZE)
  }
}

function moveWorm() {
  const head = wormSegments[0]
  let newHead = { x: head.x + direction.x, y: head.y + direction.y }
  let out = false
  // Rebond sur les bords
  if (newHead.x < 0 || newHead.x >= GRID_WIDTH) {
    direction.x *= -1
    newHead = { x: head.x + direction.x, y: head.y + direction.y }
    out = true;
  }
  if (newHead.y < 0 || newHead.y >= GRID_HEIGHT) {
    direction.y *= -1
    newHead = { x: head.x + direction.x, y: head.y + direction.y }
    out = true;
  }

  // On peut garder un peu d’aléatoire de virage si tu veux :
  if(!out) maybeTurn();

  wormSegments.unshift(newHead)
  wormSegments.pop()

  store.setWormHeadPixelX(head.x * CELL_SIZE + CELL_SIZE / 2)
  store.setWormHeadPixelY(head.y * CELL_SIZE + CELL_SIZE / 2)
}


function animationLoop(timestamp) {
  if (!lastMoveTimestamp) lastMoveTimestamp = timestamp
  const elapsed = timestamp - lastMoveTimestamp

  progress = Math.min(elapsed / MOVE_INTERVAL, 1)
  const canvas = canvasRef.value
  const context = canvas.getContext('2d')
  timestampNow.value = Date.now()
  drawWorm(context, progress)

  if (progress === 1) {
    moveWorm()
    lastMoveTimestamp = timestamp
    progress = 0
  }

  animationFrameId = requestAnimationFrame(animationLoop)
}

onMounted(() => {
  const canvas = canvasRef.value
  setupGrid()
  initWorm()
  canvas.width = GRID_WIDTH * CELL_SIZE
  canvas.height = GRID_HEIGHT * CELL_SIZE

  animationFrameId = requestAnimationFrame(animationLoop)

  window.addEventListener('resize', () => {
    setupGrid()
    canvas.width = GRID_WIDTH * CELL_SIZE
    canvas.height = GRID_HEIGHT * CELL_SIZE
    initWorm()
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <canvas v-if="wormTransparency" ref="canvasRef" />
</template>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
  background: transparent;
}

</style>