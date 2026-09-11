import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  defaultSettings,
  detailLevelOptions,
  settingsSchema,
} from './settingsSchema'

function SettingsForm() {
  const [savedSettings, setSavedSettings] = useState(null)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: defaultSettings,
  })

  function onSubmit(values) {
    setSavedSettings(values)
  }

  return (
    <form className="settings-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-field">
        <Label htmlFor="detail-level">Detail level</Label>
        <p className="field-help" id="detail-level-help">
          Choose how much context the summary should include.
        </p>
        <Controller
          name="detailLevel"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              id="detail-level"
              aria-describedby="detail-level-help"
              aria-invalid={Boolean(errors.detailLevel)}
            >
              {detailLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        />
        {errors.detailLevel && (
          <p className="field-error" role="alert">
            {errors.detailLevel.message}
          </p>
        )}
      </div>

      <div className="form-field switch-field">
        <div>
          <Label htmlFor="dyslexia-font">Dyslexia-friendly font</Label>
          <p className="field-help" id="dyslexia-font-help">
            Use a typeface designed to improve reading comfort.
          </p>
        </div>
        <Controller
          name="dyslexiaFriendlyFont"
          control={control}
          render={({ field }) => (
            <Switch
              id="dyslexia-font"
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-describedby="dyslexia-font-help"
            />
          )}
        />
      </div>

      <div className="form-field">
        <Label htmlFor="keyword">Keyword</Label>
        <p className="field-help" id="keyword-help">
          Highlight one topic or phrase in the document.
        </p>
        <Input
          id="keyword"
          maxLength={50}
          placeholder="e.g. termination clause"
          aria-describedby="keyword-help keyword-count"
          aria-invalid={Boolean(errors.keyword)}
          {...register('keyword')}
        />
        <div className="field-meta">
          <span id="keyword-count">Maximum 50 characters</span>
          {errors.keyword && (
            <span className="field-error" role="alert">
              {errors.keyword.message}
            </span>
          )}
        </div>
      </div>

      <Button type="submit">Save settings</Button>

      {savedSettings && (
        <p className="save-message" role="status">
          Settings saved for a {savedSettings.detailLevel} summary
          {savedSettings.keyword ? ` focused on “${savedSettings.keyword}”.` : '.'}
        </p>
      )}
    </form>
  )
}

export default SettingsForm
