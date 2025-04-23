import { MediaType } from '../constants/media'

export type MediaRecordData = {
  id: number
  createdAt: Date
  updatedAt: Date
  mediaType: MediaType
  title: string
  rating: number
  comment?: string | null
} 