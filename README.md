# vue-unmount-signal

A composable that cancels promises when a component is unmounted. It uses [the W3C-standard `AbortSignal` API](https://dom.spec.whatwg.org/#interface-AbortSignal) to notify compatible promises when the calling component is unmounted.

## Install

```sh
pnpm add vue-unmount-signal
```

## Example

### fetch

```vue
<script setup>
import useUnmountSignal from 'vue-unmount-signal'

const unmountSignal = useUnmountSignal()

const ping = () => {
  fetch('https://ping.example.com', { signal: unmountSignal })
}
</script>

<template>
  <button @click="ping">Ping</button>
</template>
```

### event listeners

```vue
<script setup>
import { onMounted, ref } from 'vue'
import useUnmountSignal from 'vue-unmount-signal'

const unmountSignal = useUnmountSignal()
const el = ref()

onMounted(() => {
  el.value.addEventListener('mousemove', e => {
    // do something
  }, { signal: unmountSignal })

  el.value.addEventListener('mouseup', e => {
    // do something
  }, { signal: unmountSignal })
})
</script>

<template>
  <div ref="el" />
</template>
```

## License

MIT
