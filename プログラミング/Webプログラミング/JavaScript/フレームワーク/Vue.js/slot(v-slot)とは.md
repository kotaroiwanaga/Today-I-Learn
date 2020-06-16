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

コンポーネント側のテンプレートに`<slot>`タグを記述すると、
その場所はスロットコンテンツが埋め込まれます。

**Child.vue**
```js
<template>
  <div>
    <p><slot>Hello</slot></p>
  </div>
</template>
```

**出力**
```
こんにちは
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
スコープ付きslotを利用することで、子コンポーネントから親コンポーネントに対して、
スロットコンテンツの定義に必要なデータを受けるとることができる。  
※子→親へデータを渡す方法はVuex, $emitなど他にもあるので、この方法がよいということではない。

子コンポーネント側では`<slot>`タグに対してv-bindを行う。    
**Child.vue**
```js
<template>
  <div>
    <p>name:<slot 'userNm="userNm">{{ userNm.enName }}</slot></p>
  </div>
</template>
<script>
export default {
  name: 'Child',
  data () {
    return {
      enName: 'Taro',
      jpName: '太郎'
    }
  }
}
</script>
```

親側では`<v-slot:default>`で受け取ることで、子コンポーネントのjpNameの値を受け取ることができる。
`<v-slot:default="XXX"`のXXXは重複がなければ任意の文字列でOK。
※ただし、名前付きslotの場合はXXXにそれぞれのslotの名前をつける必要がある。  
**Parant.vue**
```js
<template>
  <div>
    <child v-slot:dafault="slotProps">
      {{ slotProps.userNm.jpName }}
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
name:太郎
```

## 参考
Vue.jsのslotの機能を初心者にわかるように解説してみた
https://future-architect.github.io/articles/20200428/
