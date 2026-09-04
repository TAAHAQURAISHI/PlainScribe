import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

const summaryLengthItems = [
  { label: 'Brief', value: 'brief' },
  { label: 'Standard', value: 'standard' },
  { label: 'Detailed', value: 'detailed' },
]

export function SettingsForm() {
  const [audience, setAudience] = useState('')
  const [summaryLength, setSummaryLength] = useState('standard')
  const [citeSources, setCiteSources] = useState(true)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Summary settings</CardTitle>
        <CardDescription>
          Control how PlainScribe rewrites legal text. Output is still an aid
          for understanding, not legal advice.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <FieldSet>
            <FieldLegend className="sr-only">Summary settings</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="audience">Audience</FieldLabel>
                <Input
                  id="audience"
                  name="audience"
                  value={audience}
                  onChange={(event) => setAudience(event.target.value)}
                  placeholder="e.g. a founder without a legal background"
                  autoComplete="off"
                />
                <FieldDescription>
                  Who the plain-language rewrite should be written for.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="summary-length">Summary length</FieldLabel>
                <Select
                  items={summaryLengthItems}
                  value={summaryLength}
                  onValueChange={setSummaryLength}
                >
                  <SelectTrigger id="summary-length" className="w-full">
                    <SelectValue placeholder="Choose a length" />
                  </SelectTrigger>
                  <SelectContent alignItemWithTrigger={false} align="start">
                    <SelectGroup>
                      {summaryLengthItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldDescription>
                  Brief highlights obligations. Detailed keeps more context.
                </FieldDescription>
              </Field>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldLabel htmlFor="cite-sources">
                    Cite source passages
                  </FieldLabel>
                  <FieldDescription>
                    Quote the lines in the document that support each claim.
                  </FieldDescription>
                </FieldContent>
                <Switch
                  id="cite-sources"
                  checked={citeSources}
                  onCheckedChange={setCiteSources}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button type="submit">Save settings</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
