# 基于Element Table封装的表格组件

表格是中后台系统里常见的组件， ```element-ui``` 中有现成的 ```table``` 组件，但是还是需要结合 ```pagination``` 使用，为了提高开发效率和组件复用，对组件进行二次封装。

表格中只使用了部分常用功能，因此并不兼容所有配置，可以基于项目再次优化。

:tada: prop配置

|__  :sparkles: 基本文字  
|__  :sparkles: 文字+说明icon

:sparkles: slot配置

:sparkles: 复选框

:sparkles: 排序

:sparkles: 分页

## 前期

- 准备

基于 ```Vue``` + ```typescript``` + ```stylus``` 语法

使用了 <base-tag text="vue-property-decorator" link="https://www.npmjs.com/package/vue-property-decorator" /> 库

- 需求

要求只需传几个 ```prop``` 即可渲染表头，而且支持 ```slot``` 自定义表头，内部维护分页信息，同时能通知父级更新数据。

## 开发

- table.vue

```vue
<template>
  <div class="mt-20">
    <el-table
      v-loading="tableLoading"
      :data="tableData"
      :border="border"
      v-bind="$attrs"
      :class="currentPrefix"
      @sort-change="sortChange"
      @select-change="selectChange"
    >
      <template v-for="(column, index) in columns">
        <!-- <slot name="front-slot"></slot> -->
        <!-- 复选框 -->
        <el-table-column v-if="column.type === 'selection'" :key="index" type="selection" width="55" />
        <!-- 具体内容 -->
        <template v-else>
          <el-table-column
            :key="index"
            :align="column.align || 'center'"
            :label="column.title"
            :fixed="column.fixed"
            :show-overflow-tooltip="column.tooltip"
            :min-width="column.minWidth"
            :width="column.width"
            :sortable="column.sortable"
            :prop="column.prop"
          >
            <template slot="header">
              <template v-if="column.headerTip">
                <el-tooltip :content="column.headerTip" effect="light" placement="right">
                  <span>{{ column.title }} <i class="el-icon-warning-outline" style="margin-left:4px;color:#00ad88;font-size:12px;" /></span>
                </el-tooltip>
              </template>
              <template v-else>{{ column.title }}</template>
            </template>
            <template slot-scope="scope">
              <template v-if="!column.slot">
                <!-- 操作按钮 -->
                <template v-if="column.type === 'operate'">
                  <el-button
                    v-for="(operate, a) in column.operates"
                    :key="a"
                    :type="operate.type"
                    :size="operate.size||'mini'"
                    plain
                    @click="handleClick(operate, scope.$index, scope.row)"
                  >{{ operate.name }}</el-button>
                </template>
                <span v-else>{{ scope.row[column.key] }}</span>
              </template>
              <!-- 使用slot的情况下 -->
              <template v-else>
                <slot :name="column.slot" :scope="scope" />
              </template>
            </template>
          </el-table-column>
        </template>

      </template>
      <!--默认的slot -->
      <slot />
    </el-table>
    <el-pagination
      v-if="showPagination && tableData.length > 0"
      background
      :current-page="syncedPage"
      :layout="layout"
      :total="totalCount"
      :page-size="syncedPageSize"
      :page-sizes="pageSizes"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'vue-property-decorator'
import Mixin from '@/mixin'

@Component
export default class BaseTable extends Vue {
  constructor() {
    super()
    this.currentPrefix = 'base-table'
  }

  @Prop({
    default: false
  })
  tableLoading!: boolean

  @Prop({
    default() {
      return []
    }
  })
  tableData!: any

  @Prop({
    default() {
      return []
    },
    required: true
  })
  columns!: any

  @Prop({
    default: true
  })
  showPagination!: boolean

  @Prop({
    default: 'total, sizes, prev, pager, next, jumper'
  })
  layout!: string

  @PropSync('page', {
    type: Number,
    default: 1
  })
  syncedPage!: number

  @PropSync('pageSize', {
    type: Number,
    default: 10
  })
  syncedPageSize!: number

  @Prop({
    default() {
      return [10, 20, 30, 40, 50, 100]
    }
  })
  pageSizes!: any

  @Prop({
    default: 0
  })
  totalCount!: number

  @Prop({
    default: true
  })
  border!: boolean

  private pagination: any = {}

  @Emit()
  private sortChange(column: any, prop: any, order: any) {}

  @Emit()
  private selectChange(selection: any) {}

  @Emit('getData')
  private handleCurrentChange(_val: number) {
    this.pagination.page = _val
    this.syncedPage = _val
  }

  private handleSizeChange(_val: number) {
    this.pagination.pageSize = _val
    this.syncedPageSize = _val
    this.handleCurrentChange(1)
  }

  private handleClick(action: any, index: number, data: any) {
    this.$emit(`${ action.emitKey }`, index, data)
  }
}
</script>

<style lang="stylus" scoped>
$prefix = base-table
.{$prefix} {
  width 100%;
}
</style>

```

## 使用
- mixin

把列表中通用字段，写到 ```mixin``` ，页面结合 ```tableMixin``` 使用。

定义了统一的获取数据方法 ```getTableData``` ，表格数据 ```tableData```，分页模板 ```page``` 

```tableLoading``` 是可选的，如果需要即在调用api前标记为 ```true``` ，调用完毕重置为 ```false``` 即可。

```js
import { Component, Vue } from 'vue-property-decorator'
@Component
class tableMixin extends Vue {
  [x: string]: any
  public tableData: any = []

  public tableLoading: boolean = false

  public page = {
    PageSize: 10,
    PageIndex: 1
  }

  public totalCount: number = 0

  public handleCurrentChange(PageIndex: number = 1) {
    this.page.PageIndex = PageIndex
    this.getTableData()
  }
}

export default tableMixin
```
- 示例
```js{5,12}
private headers: any = [
  {
    key: 'Name',
    title: '服务项目名称',
    headerTip: '这是表头的提示文字' // 表头文字说明，el-tooltip悬浮显示
  },
  {
    key: 'CreatedTime',
    title: '创建时间'
  },
  {
    slot: 'status',
    title: '状态'
  },
  {
    slot: 'operate',
    title: '操作',
    width: '280'
  }
]
```

key，直接使用，对应列内容的字段名

slot，自定义列的内容。定义一个名称，然后在 ```base-table``` 里写相关slot

```html{10,11,12}
<base-table
  :table-loading="tableLoading"
  :table-data="tableData"
  :columns="headers"
  :total-count="totalCount"
  :page.sync="page.PageIndex"
  :page-size.sync="page.PageSize"
  @getData="getTableData"
>
  <template slot="status" slot-scope="{scope}">
    <div>{{ scope.row.IsEnable ? '启用' : '禁用' }}</div>
  </template>
</base-table>
```

## 最后

基本思路和代码如上，可以根据项目实际情况，加上其他 ```table``` 的配置，还可以设置为全局组件和 ```mixin``` ，避免每个页面导入等。