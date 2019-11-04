1. 根据name可以实现组件自我递归
 * detail-components-list
2. keep-alive用法 exclude，include
3. 页面滚动影响--在router下增加scrollBehavior
```
scrollBehavior(to, form, savePosition) {
    return {x: 0, y: 0}
  }
```
