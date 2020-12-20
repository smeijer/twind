import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import { render } from 'preact'
import { html } from 'htm/preact'

import type { Instance, VirtualInjector } from '../../types'
import type { Styled } from './index'

import * as DOM from '../../__fixtures__/dom-env'
import { create, virtualInjector, strict } from '../../index'
import { styled } from './index'

const test = DOM.configure(
  suite<{
    injector: VirtualInjector
    tw: Instance['tw']
    styled: Styled
  }>('styled/preact'),
)

test.before.each((context) => {
  context.injector = virtualInjector()
  const instance = create({
    injector: context.injector,
    mode: strict,
    preflight: false,
    hash: false,
    prefix: false,
  })
  context.tw = instance.tw
  context.styled = styled.bind(instance.tw)
})

test('tag with template literal', ({ styled, injector }) => {
  const H1 = styled.h1`text-5xl font-bold`

  assert.is(H1.displayName, 'Styled(h1)')
  assert.is(H1.toString(), '.tw-1ywwrkz')

  // Nothing injected yet
  assert.equal(injector.target, [])

  render(html`<${H1} class="hero" id="hello">Hello!<//>`, document.body)

  assert.is(
    document.body.innerHTML,
    '<h1 id="hello" class="hero tw-1ywwrkz text-5xl font-bold">Hello!</h1>',
  )
  assert.equal(injector.target, [
    '.text-5xl{font-size:3rem;line-height:1}',
    '.font-bold{font-weight:700}',
  ])
})

test.run()