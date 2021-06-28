# use-unmount-signal

A port of [expo's use-unmount-signal](https://github.com/expo/use-unmount-signal) that cancels promises when a component is unmounted.

[AbortSignal API](https://dom.spec.whatwg.org/#interface-AbortSignal)

## Install

```sh
yarn add @wobsoriano/use-unmount-signal
```

## Example

```vue
<template>
  <button @click="ping">Ping</button>
</template>

<script>
import { defineComponent } from 'vue' // works with composition api plugin too
import useUnmountSignal from '@wobsoriano/use-unmount-signal'

export default defineComponent({
    setup() {
        const unmountSignal = useUnmountSignal();

        return {
            ping() {
                fetch('https://ping.example.com', { signal: unmountSignal })
            }
        }
    }
})
</script>
```

## License

MIT License © 2021 [Robert Soriano](https://github.com/wobsoriano)