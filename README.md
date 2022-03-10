# v-use-unmount-signal

A port of [expo's use-unmount-signal](https://github.com/expo/use-unmount-signal) that cancels promises when a component is unmounted.

[AbortSignal API](https://dom.spec.whatwg.org/#interface-AbortSignal)

## Install

```sh
pnpm add v-use-unmount-signal
```

## Example

```vue
<template>
  <button @click="ping">Ping</button>
</template>

<script>
import { defineComponent } from 'vue' // or @vue/composition-api
import useUnmountSignal from 'v-use-unmount-signal'

export default defineComponent({
  setup() {
    const unmountSignal = useUnmountSignal()

    return {
      ping() {
        fetch('https://ping.example.com', { signal: unmountSignal })
      },
    }
  },
})
</script>
```

## License

MIT
