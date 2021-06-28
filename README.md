# use-unmount-signal

A port of [expo's use-unmount-signal](https://github.com/expo/use-unmount-signal) that cancels promises when a component is unmounted.

## Install

```sh
yarn add @wobsoriano/use-unmount-signal
```

## Example

```vue
<template>
  <button @click="ping">Ping</button>
</template>

<script setup>
import useUnmountSignal from '@wobsoriano/use-unmount-signal';

const unmountSignal = useUnmountSignal();

const ping = () => {
  fetch('https://ping.example.com', { signal: unmountSignal })
}
</script>
```
