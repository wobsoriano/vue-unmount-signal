import { getCurrentInstance, onUnmounted } from 'vue-demi'

/**
 * A Vue Hook that returns an AbortSignal that is marked as aborted when the calling component is
 * unmounted. This is useful for canceling promises, such as those for network requests, when a
 * component is unmounted.
 */
export default function useUnmountSignal(): AbortSignal {
  const abortController = new AbortController()

  if (getCurrentInstance()) {
    onUnmounted(() => {
      abortController.abort()
    })
  }

  return abortController.signal
}
