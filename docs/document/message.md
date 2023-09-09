# 属性

| 名称      | 说明                                      | 类型                                       | 默认值  |
| --------- | ----------------------------------------- | ------------------------------------------ | ------- |
| message   | 消息文字                                  | `'success' , 'warning' , 'info' , 'error'` | default |
| type      | 消息类型                                  | `'success', 'warning', 'info', 'error'`    | default |
| showClose | 是否显示关闭按钮                          | `boolean`                                  | false   |
| onClose   | 关闭时的回调函数                          | `Function`                                 | —       |
| duration  | 显示时间,单位为毫秒.设为 0 则不会自动关闭 | number                                     | 2000    |

# type 类型

<div style="display:flex;margin:20px 0px;">
<c-button type="success" @click="callMessage({type:'success',message:'success'})">success</c-button>
<c-button type="warning" @click="callMessage({type:'warning',message:'warning'})">warning</c-button>
<c-button type="info" @click="callMessage({type:'info',message:'info'})">info</c-button>
<c-button type="danger" @click="callMessage({type:'error',message:'error'})">error</c-button>
</div>

# showClose 关闭按钮

<div style="display:flex;margin:20px 0px;">
<c-button type="success" @click="callMessage({type:'success',message:'你不关我就不走',duration:0,showClose:true})">showClose </c-button>
</div>

<script setup>
import { CMessage } from 'coin-ui'
function callMessage(param){
  CMessage(param)
}
</script>

# 代码使用举例：

```JS
import { CMessage } from 'coin-ui'
  CMessage({
    message: 'hello',
    type: 'success',
    showClose: true,
    duration: 3000,
    onClose: () => {
      console.log('关闭了')
    }
  })
```
