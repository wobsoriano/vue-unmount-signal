# vue-unmount-signal

A composable that cancels promises when a component is unmounted. It uses [the W3C-standard `AbortSignal` API](https://dom.spec.whatwg.org/#interface-AbortSignal) to notify compatible promises when the calling component is unmounted.

## Install

```sh
pnpm add vue-unmount-signal
```

## Example

```vue
<script setup>
import useUnmountSignal from 'vue-unmount-signal'

const unmountSignal = useUnmountSignal()

const handleClick = () => {
  fetch('https://ping.example.com', { signal: unmountSignal })
}
</script>

<template>
  <button @click="handleClick">Ping</button>
</template>
```

### With async function event handlers

[The HTML5 specification says](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms):

> Any web platform API using promises to represent operations that can be aborted must adhere to the following:
> 
> * Accept `AbortSignal` objects through a `signal` dictionary member.
> * Convey that the operation got aborted by rejecting the promise with an "`AbortError`" `DOMException`.
> * Reject immediately if the `AbortSignal`'s aborted flag is already set, otherwise:
> * Use the abort algorithms mechanism to observe changes to the `AbortSignal` object and do so in a manner that does not lead to clashes with other observers.

Calling any async function creates a promise. Therefore, authors of async functions need to follow the above guidance to write abortable functions.

```vue
<script setup>
import { onMounted, ref } from 'vue'
import useUnmountSignal from 'vue-unmount-signal'

const unmountSignal = useUnmountSignal()
const status = ref(null)

const handleClick = async () => {
  if (unmountSignal.aborted) { throw new AbortError() }

  const response = await fetch('https://ping.example.com', { signal: unmountSignal })
  if (unmountSignal.aborted) { throw new AbortError() }

  // We are guaranteed that the component is still mounted at this point
  if (response.ok) {
    status.value = 'OK'
  } else {
    status.value = response.status
  }
}
</script>

<template>
  <button @click="handleClick">Ping {status}</button>
</template>
```

Credits to Expo's [use-unmount-signal](https://github.com/expo/use-unmount-signal).

## License

MIT
