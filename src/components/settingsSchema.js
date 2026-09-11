import { z } from 'zod'

export const detailLevelOptions = [
  { value: 'brief', label: 'Brief' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'thorough', label: 'Thorough' },
]

export const settingsSchema = z.object({
  detailLevel: z.enum(['brief', 'balanced', 'thorough']).default('balanced'),
  dyslexiaFriendlyFont: z.boolean().default(false),
  keyword: z.string().max(50, 'Keyword must be 50 characters or fewer').default(''),
})

export const defaultSettings = settingsSchema.parse({})
