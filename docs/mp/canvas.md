### 小程序canvas绘制图形
::: tip 绘制图片
CanvasContext.drawImage(string imageResource, number sx, number sy, number sWidth, number sHeight, number dx, number dy, number dWidth, number dHeight)
:::
**注意**

imageResource: 所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载）
```js
 downloadImg(t) {
    let u = !/^http(s)?/.test(t) ? `https:${t}` : t
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: u,
        success(res) {
          resolve(res.tempFilePath)
        }
      })
    })
  }
  getImgInfo(t) {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src: t,
        success(res) {
          resolve(res)
        },
        fail(err) {
          console.log(err)
        }
      })
    })
  }
```

::: tip 绘制文字
CanvasContext.fillText(string text, number x, number y, number maxWidth)
:::
**注意**

maxWidth: 需要绘制的最大宽度，可选
```js
drawText(ctx, txt, x, y, w, lh = 42) {
  let { row } = this.calcTxtLine(ctx, txt, x, y, w)
  for (let b = 0; b < row.length; b++) {
    ctx.fillText(row[b], x, y + (b + 1) * lh) // 设置字体行高
  }
}
calcTxtHeight(ctx, txt, x, y, w, fs, lh = 42) {
  let { row } = this.calcTxtLine(ctx, txt, x, y, w)
  let h = 0
  for (let b = 0; b < row.length; b++) {
    h += b === 0 ? fs : lh
  }
  return h
}
calcTxtWidth(ctx, txt, x, y, w) {
  let { row } = this.calcTxtLine(ctx, txt, x, y, w)
  return row.length > 1 ? w : ctx.measureText(txt).width
}
calcTxtLine(ctx, txt, x, y, w) {
  // ctx：canvas对象，txt：绘制的文字，x,y:文字坐标，w：文字最大宽度
  let chr = txt && txt.split('')
  let temp = ''
  let row = []

  for (let a = 0; a < chr.length; a++) {
    if (
      ctx.measureText(temp).width < w &&
      ctx.measureText(temp + chr[a]).width <= w
    ) {
      temp += chr[a]
    } else {
      row.push(temp)
      temp = chr[a]
    }
  }
  row.push(temp)
  return { row }
}
```

:::tip 绘制圆角矩形
原生api并没有实现，因此通过一些api组合实现。
:::

```js
fillRoundRect(ctx, x, y, width, height, radius, color = '#ffffff') {
  // 绘制填充色圆角矩形 左上角坐标 矩形宽高 圆角
  if (2 * radius > width || 2 * radius > height) {
    return false
  }
  ctx.save()
  ctx.translate(x, y)
  // 绘制圆角矩形的各个边
  this.drawRoundRectPath(ctx, width, height, radius)
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore()
}
drawRoundRectPath(ctx, width, height, radius) {
  ctx.beginPath()
  ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
  ctx.lineTo(radius, height)
  ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
  ctx.lineTo(0, radius)
  ctx.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2)
  ctx.lineTo(width - radius, 0)
  ctx.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2)
  ctx.lineTo(width, height - radius)
  ctx.closePath()
}
```

:::tip 绘制圆角图片
原生api并没有实现，因此通过一些api组合实现。
:::

```js
roundrectImg(ctx, img, x, y, w, h, r) {
  ctx.beginPath()
  ctx.save()
  ctx.setLineWidth(1)
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(img, x, y, w, h)
  ctx.restore()
  ctx.closePath()
}
```
::: tip 生成图片
CanvasContext.draw(boolean reserve, function callback)

wx.canvasToTempFilePath({x, y, w, h, dW, dH, canvasId, canvas, fileType, quality, success, fail, complete}, Object this)
:::

**注意**

reserve: 本次绘制是否接着上一次绘制。即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。
```js {2,3,13}
ctx.draw(false, function() {
  // 画布转图片 部分机型需要延迟不然会出现crash等问题
  setTimeout(() => {
    wx.canvasToTempFilePath({
      destWidth: 750, // 默认width*devicePixelRatio
      destHeight: 750, // 默认height*devicePixelRatio
      canvasId: 'myCanvas',
      fileType: 'jpg',
      success(res) {
        vm.shareImg = res.tempFilePath
      }
    })
  }, 200)
})
```

::: tip 保存到相册
调用前需要 用户授权 scope.writePhotosAlbum
:::

```js
saveImg() {
  let vm = this
  if (!this.canSaveToAlbum) {
    wx.openSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum']) {
          vm.canSaveToAlbum = true
          vm.saveToAlbum()
        }
      }
    })
  } else {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              vm.canSaveToAlbum = true
              vm.saveToAlbum()
            },
            fail() {
              vm.canSaveToAlbum = false
              wx.showModal({
                title: '相册权限',
                content: '请设置允许访问相册才能保存图片',
                showCancel: false
              })
            }
          })
        } else {
          vm.canSaveToAlbum = true
          vm.saveToAlbum()
        }
      },
      fail() {}
    })
  }
}
saveToAlbum() {
  let vm = this
  if (this.isSaving) return
  this.isSaving = true
  wx.saveImageToPhotosAlbum({
    filePath: vm.shareImg, // 生成的图片地址
    success(res) {
      wx.showToast({
        title: '图片保存成功',
        icon: 'success',
        duration: 3000
      })
    },
    fail() {
      wx.showToast({
        title: '图片保存失败',
        icon: 'none'
      })
    },
    complete() {
      vm.isSaving = false
    }
  })
}
```