'use client'

import { isNotionClientError } from '@notionhq/client'

/**
 *
 * Notion API のエラータイプ
 */
type NotionErrorType = 'API_ERROR' | 'CLIENT_ERROR' | 'UNKNOWN_ERROR'

/**
 * Notion API のエラーレスポンス
 */
type NotionErrorResponse = {
  type: NotionErrorType
  message: string
  code?: string
}

/**
 * Notion API のエラーハンドリングを行う
 * @param error 発生したエラー
 * @returns エラーレスポンス
 */
export function handleNotionError(error: unknown): NotionErrorResponse {
  if (isNotionClientError(error)) {
    return {
      type: 'CLIENT_ERROR',
      message: error.message,
      code: error.code,
    }
  } else if (error instanceof Error) {
    return {
      type: 'UNKNOWN_ERROR',
      message: error.message,
    }
  } else {
    // 未知のエラーの場合
    return {
      type: 'UNKNOWN_ERROR',
      message: 'An unknown error occurred.',
    }
  }
}
