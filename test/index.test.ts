import { mount } from 'vue-composable-tester'
import { nextTick } from 'vue'
import useUnmountSignal from '../src'
import { test, expect } from 'vitest'

test(`it returns an AbortSignal`, () => {
  const { result } = mount(() => useUnmountSignal())
  expect(result).toBeInstanceOf(AbortSignal)
})

test(`it marks the AbortSignal as aborted when unmounted`, () => {
  const { result, unmount } = mount(() => useUnmountSignal())
  expect(result.aborted).toBe(false)
  unmount()
  expect(result.aborted).toBe(true)
})

test(`it does not change the AbortSignal when re-rendered`, async () => {
  const { result } = mount(() => useUnmountSignal())
  const initialAbortSignal = result
  await nextTick()
  expect(result).toBe(initialAbortSignal)
})
