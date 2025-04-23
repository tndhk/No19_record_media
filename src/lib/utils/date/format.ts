import { format, parseISO } from 'date-fns'

// 日付を「YYYY年MM月DD日」形式にフォーマット
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'yyyy年MM月dd日')
}

// 日付を「YYYY/MM/DD」形式にフォーマット
export function formatDateCompact(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'yyyy/MM/dd')
} 