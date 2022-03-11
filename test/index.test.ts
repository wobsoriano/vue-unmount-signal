import { renderComposable } from 'vue-test-composables'
import { nextTick } from 'vue-demi'
import useUnmountSignal from '../src'
import { test, expect } from 'vitest'

test(`it returns an AbortSignal`, () => {
  const { result } = renderComposable(() => useUnmountSignal())
  expect(result).toBeInstanceOf(AbortSignal)
})

test(`it marks the AbortSignal as aborted when unmounted`, () => {
  const { result, unmount } = renderComposable(() => useUnmountSignal())
  expect(result.aborted).toBe(false)
  unmount()
  expect(result.aborted).toBe(true)
})

test(`it does not change the AbortSignal when re-rendered`, async () => {
  const { result } = renderComposable(() => useUnmountSignal())
  const initialAbortSignal = result
  await nextTick()
  expect(result).toBe(initialAbortSignal)
})
