import { describe, expect, it } from 'vitest'
import { defaultSettings, settingsSchema } from './settingsSchema'

describe('settingsSchema', () => {
  it('provides the expected defaults', () => {
    expect(defaultSettings).toEqual({
      detailLevel: 'balanced',
      dyslexiaFriendlyFont: false,
      keyword: '',
    })
  })

  it('accepts every detail level and a valid keyword', () => {
    for (const detailLevel of ['brief', 'balanced', 'thorough']) {
      const result = settingsSchema.safeParse({
        detailLevel,
        dyslexiaFriendlyFont: true,
        keyword: 'notice',
      })

      expect(result.success).toBe(true)
    }
  })

  it('rejects an unsupported detail level', () => {
    const result = settingsSchema.safeParse({ detailLevel: 'verbose' })

    expect(result.success).toBe(false)
  })

  it('rejects a keyword longer than 50 characters', () => {
    const result = settingsSchema.safeParse({ keyword: 'a'.repeat(51) })

    expect(result.success).toBe(false)
  })
})
