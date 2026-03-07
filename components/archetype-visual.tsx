'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { addWatermarkToImage, downloadImage } from '@/lib/watermark-utils'

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
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full rounded-lg bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isDownloading ? 'Preparing Image...' : 'Download with Watermark'}
        </button>

        {showPreview && (
          <div className="space-y-3 pt-4 border-t border-border">
            <p className="text-sm text-ink/40">Preview with watermark:</p>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
              <Image
                src={downloadedImage || ''}
                alt="Watermarked preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleConfirmDownload}
                className="flex-1 rounded-lg bg-gold px-6 py-3 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne"
              >
                Confirm & Save
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 rounded-lg border border-ink/20 bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {onCTA && (
        <div className="pt-6 border-t border-border space-y-4">
          <div className="text-center">
            <p className="text-sm text-ink/40 mb-4">
              Love this direction? Let's bring it to life.
            </p>
            <button
              onClick={onCTA}
              className="inline-flex rounded-lg bg-forest px-10 py-3.5 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:bg-moss"
            >
              Start Your Garden Journey
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
