# v-use-unmount-signal

A port of [expo's use-unmount-signal](https://github.com/expo/use-unmount-signal) that cancels promises when a component is unmounted. Works with Vue 2 and 3.

[AbortSignal API](https://dom.spec.whatwg.org/#interface-AbortSignal)

## Install

```sh
pnpm add v-use-unmount-signal
```

## Example

### fetch

```vue
<script setup>
import useUnmountSignal from 'v-use-unmount-signal'

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
import useUnmountSignal from 'v-use-unmount-signal'

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
