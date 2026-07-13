'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface CarouselPage {
  title: string
  description: string
}

interface FeaturesCarouselProps {
  pages?: CarouselPage[]
}

const DEFAULT_PAGES: CarouselPage[] = [
  {
    title: 'Buy Fractional Shares',
    description:
      'Invest in real estate with as little as $50. Start investing in real property today.',
  },
  {
    title: 'Hold & Earn',
    description:
      'Receive rental income distributions directly to your account. Watch your investment grow.',
  },
  {
    title: 'Trade Anytime',
    description:
      'Liquid market for buying and selling shares. Trade fractional real estate whenever you want.',
  },
]

export function FeaturesCarousel({ pages = DEFAULT_PAGES }: FeaturesCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const handlePrevious = () => {
    if (currentPage > 0) {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setTimeout(() => {
          setIsVisible(true)
        }, 100)
      }, 100)
    }
  }

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setTimeout(() => {
          setIsVisible(true)
        }, 100)
      }, 100)
    }
  }

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === pages.length - 1
  const page = pages[currentPage]

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center px-10 py-16 min-h-[500px] sm:px-8 sm:py-12 sm:min-h-[450px] lg:px-40 lg:py-20 lg:min-h-[500px]">
        {/* Page Indicator */}
        <div className="mb-6 text-sm font-normal text-gray-600 sm:text-xs lg:text-sm">
          Page {currentPage + 1} of {pages.length}
        </div>

        {/* Carousel Content with Fade Transition */}
        <div
          className={cn(
            'w-full transition-opacity duration-200 ease-in-out',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-8 lg:mb-10">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-2xl lg:text-4xl">
              {page.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-sm lg:text-base">
              {page.description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 sm:gap-3 lg:gap-4">
          <button
            onClick={handlePrevious}
            disabled={isFirstPage}
            aria-label="Previous page"
            className={cn(
              'flex items-center justify-center rounded-full transition-colors duration-200',
              'w-12 h-12 sm:w-9 sm:h-9 lg:w-12 lg:h-12',
              'text-xl sm:text-lg lg:text-xl font-semibold text-white',
              isFirstPage ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
            )}
            style={{
              backgroundColor: isFirstPage ? '#b3b3b3' : '#FF0000',
            }}
            onMouseEnter={(e) => {
              if (!isFirstPage) {
                e.currentTarget.style.backgroundColor = '#CC0000'
              }
            }}
            onMouseLeave={(e) => {
              if (!isFirstPage) {
                e.currentTarget.style.backgroundColor = '#FF0000'
              }
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={isLastPage}
            aria-label="Next page"
            className={cn(
              'flex items-center justify-center rounded-full transition-colors duration-200',
              'w-12 h-12 sm:w-9 sm:h-9 lg:w-12 lg:h-12',
              'text-xl sm:text-lg lg:text-xl font-semibold text-white',
              isLastPage ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
            )}
            style={{
              backgroundColor: isLastPage ? '#b3b3b3' : '#0052ff',
            }}
            onMouseEnter={(e) => {
              if (!isLastPage) {
                e.currentTarget.style.backgroundColor = '#CC0000'
              }
            }}
            onMouseLeave={(e) => {
              if (!isLastPage) {
                e.currentTarget.style.backgroundColor = '#FF0000'
              }
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
