'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { addWatermarkToImage, downloadImage } from '@/lib/watermark-utils'
import { Button } from '@/components/ui/button'

interface ArchetypeVisualProps {
  archetypeName: string
  imageUrl: string
  description: string
  onCTA?: () => void
}

export function ArchetypeVisual({
  archetypeName,
  imageUrl,
  description,
  onCTA,
}: ArchetypeVisualProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadedImage, setDownloadedImage] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const watermarkedUrl = await addWatermarkToImage(
        imageUrl,
        'Gestalt Gardens'
      )
      setDownloadedImage(watermarkedUrl)
      setShowPreview(true)
    } catch (error) {
      console.error('Failed to add watermark:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handleConfirmDownload = async () => {
    if (downloadedImage) {
      const filename = `gestalt-gardens-${archetypeName
        .toLowerCase()
        .replace(/\s+/g, '-')}.jpg`
      await downloadImage(downloadedImage, filename)
      setShowPreview(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Original Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={archetypeName}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Archetype Info */}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl text-foreground">{archetypeName}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-4">
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-medium py-6"
        >
          {isDownloading ? 'Preparing Image...' : 'Download with Watermark'}
        </Button>

        {showPreview && (
          <div className="space-y-3 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Preview with watermark:
            </p>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
              <Image
                src={downloadedImage || ''}
                alt="Watermarked preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleConfirmDownload}
                className="flex-1 bg-gold hover:bg-gold/90 text-primary-foreground font-medium"
              >
                Confirm & Save
              </Button>
              <Button
                onClick={() => setShowPreview(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {onCTA && (
        <div className="pt-6 border-t border-border space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Love this direction? Let's bring it to life.
            </p>
            <Button
              onClick={onCTA}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
            >
              Start Your Garden Journey
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
