import { TemplateResult } from 'lit'
import { BaseSchemes } from 'rete'

import { LitPlugin } from '..'

export type RenderPreset<Schemes extends BaseSchemes, T> = {
  attach?: (plugin: LitPlugin<Schemes, T>) => void
  update: (context: Extract<T, { type: 'render' }>, plugin: LitPlugin<Schemes, T>) => Record<string, unknown> | null | undefined
  render: (context: Extract<T, { type: 'render' }>, plugin: LitPlugin<Schemes, T>) => TemplateResult<1 | 2> | null | undefined
}
