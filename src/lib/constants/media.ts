export const MEDIA_TYPES = {
  BOOK: 'Book',
  MOVIE: 'Movie',
  DRAMA: 'Drama'
} as const

export type MediaType = (typeof MEDIA_TYPES)[keyof typeof MEDIA_TYPES]

export const MEDIA_TYPE_OPTIONS = [
  { value: MEDIA_TYPES.BOOK, label: 'Book' },
  { value: MEDIA_TYPES.MOVIE, label: 'Movie' },
  { value: MEDIA_TYPES.DRAMA, label: 'Drama' }
]

export const RATING_MAX = 5
export const RATING_MIN = 1 