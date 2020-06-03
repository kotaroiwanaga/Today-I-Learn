## slotとは
slotとは **親となるコンポーネント側から、子コンポーネントのテンプレートの一部を差し込む機能** である。
slot=差し込み口 の意味からもイメージしやすいと思う。
slotの種類には

- [デフォルトslot](#デフォルトslot)
- [名前付きslot](#名前付きslot)
- [スコープ付きslot](#スコープ付きslot)

がある。

### デフォルトslot
下記のような親子関係のコンポーネントがあった場合、
Parent.vue側の`<child>``</child>`で囲まれた部分が無視されていることが出力からわかる。

**Child.vue**
```js
<template>
  <div>
    <p>Hello</p>
  </div>
</template>
```

**Parent.vue**
```js
<template>
  <div>
    <child>こんにちは</child>
  </div>
</template>

<script>
import Child from '../components/Child.vue'

export default{
  components: {
    Child
  }
}
</script>
```

**出力**
```
Hello
```

### 名前付きslot

### スコープ付きslot

## 参考
Vue.jsのslotの機能を初心者にわかるように解説してみた
https://future-architect.github.io/articles/20200428/
