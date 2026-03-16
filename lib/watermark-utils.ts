export async function addWatermarkToImage(
  imageSrc: string,
  watermarkText: string = 'Gestalt Gardens'
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'))
        return
      }

      // Draw the original image
      ctx.drawImage(img, 0, 0)

      // Add semi-transparent overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add watermark text
      const fontSize = Math.max(40, Math.floor(canvas.width / 12))
      ctx.font = `italic ${fontSize}px "Playfair Display", serif`
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Add slight text shadow for better visibility
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
      ctx.shadowBlur = 8
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2

      const padding = 40
      ctx.fillText(
        watermarkText,
        canvas.width / 2,
        canvas.height - padding
      )

      // Also add a subtle dividing line
      ctx.strokeStyle = 'rgba(200, 162, 74, 0.3)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.2, canvas.height - 90)
      ctx.lineTo(canvas.width * 0.8, canvas.height - 90)
      ctx.stroke()

      const dataUrl = canvas.toDataURL('image/jpeg', 0.95)
      resolve(dataUrl)
    }

    img.onerror = () => {
      reject(new Error('Failed to load image'))
    }

    img.src = imageSrc
  })
}

export async function downloadImage(
  dataUrl: string,
  filename: string
): Promise<void> {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
