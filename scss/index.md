::: tip scss/less
整理一些常用的简写方法，减少代码量。
:::
## flex布局
- 水平方向布局
```scss
@each $key, $value in (between: space-between, center: center, around: space-around, end: flex-end) {
	.flex-#{$key} {
		justify-content: $value;
	}
}
```
```less
@set: {
  between: space-between;
  center: center;
  around: space-around;
  end: flex-end;
}
each(@set, {
  .flex-@{key} {
    justify-content: @value;
  }
})
```
- flex伸缩布局
```scss
@for $key from 1 through 4 {
	.flex-#{$key} {
		flex: $key;
	}
}
```
```less
each(range(4), {
  .flex-@{value} {
    flex: @value;
  }
})
```
## 文字对齐
```scss
@each $key in left, center, right, justify {
	.text-#{$key} {
		text-align: $key;
	}
}
```
```less
@align: left center right justify;
each(@align, {
  .text-@{value} {
    text-align: @value;
  }
})
```
## 颜色相关
```scss
/* 变量定义在uni.scss，也可以在前面先定义 */
@each $key, $color in (primary: $uni-color-error, gray: $uni-text-color-grey, white: $uni-bg-color, success: $uni-color-success) {
	.#{$key}-color {
		color: $color;
	}
	.bg-#{$key} {
		background: $color;
	}
}
```
```less
/* 变量定义在variable.less，也可以在前面先定义 */
@color: {
  primary: @base;
  gray: @lightgray;
  white: #fff;
  success: #07c160;
}
each(@color, {
  .@{key}-color {
    color: @value;
  }
  .bg-@{key} {
    background: if((@key = gold), @main-bg, @value);
  }
});
```
## 间距相关
生成上下左右四个方向的间距，从10到50
```scss
@for $num from 1 through 5 {
	@each $key, $value in (t: top, r: right, b: bottom, l: left) {
		.m#{$key}-#{$num * 10} {
			margin-#{$value}: $num * 10rpx;
		}
		.p#{$key}-#{$num * 10} {
			padding-#{$value}: $num * 10rpx;
		}
	}
}
```
```less
@margin: {
  t: top;
  r: right;
  b: bottom;
  l: left;
}
each(range(10,50,10), .(@value){
  each(@margin, .(@v, @k) {
    .m@{k}-@{value} {
      margin-@{v}: @value * 1rpx;
    }
    .p@{k}-@{value} {
      padding-@{v}: @value * 1rpx;
    }
  })
})
```
## 文字大小
```font-size```从16 到 36，行高为1或者继承
```scss
.line-height {
  line-height: 1;
}
@for $fs from 8 through 18 {
	.fs-lh-#{$fs * 2} {
		font-size: $fs * 2rpx;
		@extend .line-height;
  }
  .fs-#{$fs * 2} {
    font-size: $fs * 2rpx;
  }
}
```
```less
each(range(16,36,2), {
  .fs-lh-@{value} {
    font-size: (@value * 1rpx);
    line-height: 1;
  }
  .fs-@{value} {
    font-size: (@value * 1rpx);
  }
});
```
## mixin
```scss
@mixin wh($width, $height: $width) {
  width: $width;
  height: $height;
}
@mixin lh($height, $lh: $height) {
  height: $height;
  line-height: $lh;
}
@mixin whl($width, $height: $width, $lh: $height) {
  width: $width;
  @include lh($height, $lh);
}
@mixin h-cen {
  left: 50%;
  transform: translateX(-50%);
}
@mixin v-cen {
  top: 50%;
  transform: translateY(-50%);
}
@mixin abs-center() {
  position: absolute;
  @include h-cen;
}
@mixin abs-middle() {
  position: absolute;
  @include v-cen;
}

@mixin multi-ellipsis($line: 2) {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;

  -webkit-line-clamp: $line;
}

@mixin round($r: 50%) {
  border-radius: $r;
}
```
```less
.wh(@width, @height: @width) {
  width: @width;
  height: @height;
}
.lh(@height, @lh: @height) {
  height: @height;

  line-height: @lh;
}
.whl(@width, @height: @width, @lh: @height) {
  width: @width;

  .lh(@height, @lh);
}
.abs-center() {
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
}
.abs-middle() {
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
}
.multi-ellipsis(@line: 2) {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;

  -webkit-line-clamp: @line;
}
.round(@r: 50%) {
  border-radius: @r;
}
```