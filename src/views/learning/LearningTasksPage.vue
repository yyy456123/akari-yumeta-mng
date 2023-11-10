<template>
  <div>
    <div class="head">
      <div class="search">条件搜索</div>
      <div class="add-task">
        <el-button type="primary" @click="handleEdit">新增任务</el-button>
      </div>
    </div>

    <!-- edit drawer -->
    <div class="drawer">
      <el-drawer
        v-model="drawerVisible"
        :title="drawerData.id ? '编辑任务' : '新增任务'"
        :before-close="cancel"
        size="30%"
      >
        <el-form :model="drawerData" label-width="80px">
          <el-form-item label="任务名称" prop="title">
            <el-input v-model="drawerData.title"></el-input>
          </el-form-item>
          <el-form-item label="标签" prop="tag">
            <el-input v-model="drawerData.tag"></el-input>
          </el-form-item>
          <el-form-item label="任务描述" prop="description">
            <el-input v-model="drawerData.description"></el-input>
          </el-form-item>
          <el-form-item label="截止时间" prop="deadline">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="drawerData.deadline"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="publish">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>

    <div class="table">
      <el-table :data="taskData" style="width: 100%" max-height="655px">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="title" label="任务名称" />
        <el-table-column prop="tag" label="标签">
          <template #default="{ row }">
            <el-tag>{{ row.tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="任务描述" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="deadline" label="截止时间" />
        <el-table-column fixed="right" label="操作">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)"
              >编辑</el-button
            >
            <el-button
              link
              type="danger"
              size="small"
              @click="deleteTask(row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--    <div class="pagination">-->
    <!--      <el-pagination-->
    <!--        background-->
    <!--        layout="prev, pager, next, jumper, total"-->
    <!--        :total="totalTasks"-->
    <!--        :page-size="pageSize"-->
    <!--      />-->
    <!--    </div>-->

    <!--    <div class="drawer">-->
    <!--      <el-drawer-->
    <!--        v-model="drawerVisible"-->
    <!--        :title="drawerData.id ? '编辑任务' : '添加任务'"-->
    <!--        :before-close="cancel"-->
    <!--        direction="rtl"-->
    <!--        size="50%"-->
    <!--      >-->
    <!--        &lt;!&ndash; 表单元素和提交按钮 &ndash;&gt;-->
    <!--      </el-drawer>-->
    <!--    </div>-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElTable, ElTag, ElPagination, ElDrawer } from 'element-plus'

const taskData = ref({})
taskData.value = [
  {
    id: '1',
    title: '学习Vue3',
    tag: '前端开发',
    description: '学习Vue3框架及其生态工具',
    status: '进行中',
    deadline: '2023-12-31'
  }
  // 其他任务数据...
]

const editor = ref()
const drawerVisible = ref(false)
const drawerData = ref({})
// ...其他变量和函数

const handleEdit = (row = {}) => {
  drawerData.value = row
  drawerVisible.value = true
}

const clearDrawer = () => {
  drawerData.value = {}
  editor.value.setHTML('')
  drawerVisible.value = false
}

const publish = () => {
  // TODO:send request, add or update
  if (!drawerData.value.id) {
    drawerData.value.id = 100
  }
  taskData.value.push(drawerData.value)
  clearDrawer()
  drawerVisible.value = false
}

const deleteTask = (id) => {
  // 删除任务的逻辑
}

const cancel = () => {
  // 取消编辑任务的逻辑
  drawerData.value = {}
  drawerVisible.value = false
}

const totalTasks = 100 // 总任务数
const pageSize = 10 // 每页显示的任务数createTask
</script>

<style scoped>
/* 样式定义 */
.table {
  display: flex;
  justify-content: center;
}

.cover {
  width: 50px;
  height: 50px;
  max-width: 100%;
  max-height: 100%;
}

.pagination {
  display: flex;
  margin-top: 25px;
  justify-content: center;
}

.news-cover {
  width: 200px;
  height: 200px;
}

.form-container {
  width: 100%;
}

.editor {
  width: 100%;
}

.ql-editor {
  min-height: 200px;
}

.button {
  padding-left: 50px;
  display: flex;
}

.publish-btn {
  margin-right: 50px;
}

.head {
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
