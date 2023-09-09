# 属性

| 名称     | 说明               | 类型                                                                | 默认值  |
| -------- | ------------------ | ------------------------------------------------------------------- | ------- |
| type     | 类型               | `'default' , 'primary' , 'success' , 'warning' , 'danger' , 'info'` | default |
| size     | 尺寸               | `'small' , 'default' , 'large'`                                     | default |
| round    | 是否为圆角按钮     | `boolean`                                                           | false   |
| loading  | 是否为加载中状态   | `boolean`                                                           | false   |
| disabled | 按钮是否为禁用状态 | `boolean`                                                           | false   |

# size 尺寸

<div style="display:flex;margin:20px 0px;">
<c-button size="small">small</c-button>
<c-button size="default">default</c-button>
<c-button size="large">large</c-button>
</div>

# type 类型

<div style="display:flex;margin:20px 0px;">
<c-button type="default" >default</c-button>
<c-button type="primary" >primary</c-button>
<c-button type="success" >success</c-button>
<c-button type="warning" >warning</c-button>
<c-button type="danger" >danger</c-button>
<c-button type="info" >info</c-button>
</div>

# round 、loading、disabled

<div style="display:flex;margin:20px 0px;">
<c-button type="primary" round>round</c-button>
<c-button type="primary" loading>loading</c-button>
<c-button type="primary" disabled>disabled</c-button>
</div>

# 代码使用举例：

```VUE
<c-button type="primary" size="large" round loading disabled></c-button>
```
