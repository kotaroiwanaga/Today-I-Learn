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
slotに異なる名前をつけることで複数のslotを利用できる。

子コンポーネント側で`<slot name="XXX">`で名前付きslotを定義する。  
**Child.vue**
```js
<template>
  <div>
    <p>name:<slot name="nm">Taro</slot></p>
    <p>address:<slot name="add">Japan</slot></p>
  </div>
</template>
```

親側では`v-slot:XXX`の形で子コンポーネントのタグ内に差し込みたい名前付きslotを指定する。  
※`v-slot:XXX`は`#XXX`の省略記法でも書ける。  
**Parent.vue**
```js
<template>
  <div>
    <child></child>
    <child>
      <template v-slot:nm>太郎</template>
    </child>
    <child>
      <template v-slot:add>日本</template>
    </child>
  </div>
</template>

<script>
import Child from '../components/Child.vue'

export default {
  components: {
    Child
  }
}
</script>
```

**出力**
```
name:Taro
address:Japan
name:太郎
address:Japan
name:Taro
address:日本
```

### スコープ付きslot

## 参考
Vue.jsのslotの機能を初心者にわかるように解説してみた
https://future-architect.github.io/articles/20200428/
