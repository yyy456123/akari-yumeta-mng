<script setup lang="ts">
const childrenData = [
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://localhost:5173/src/assets/logo.png'
  },
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://dummyimage.com/100x100'
  },
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://localhost:5173/src/assets/logo.png'
  },
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://dummyimage.com/100x100'
  },
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://dummyimage.com/100x100'
  },
  {
    id: '22',
    username: '胡芳',
    role: 'CHILD',
    nickname: '邵娟',
    password: 'sunt cillum labore non',
    gender: 'SECRET',
    usageDuration: 87,
    introduction: 'ipsum sunt nulla officia amet',
    avatarURL: 'http://dummyimage.com/100x100'
  }
]
const getGender = (genderStr: string) => {
  let gender: string
  switch (genderStr) {
    case 'MALE':
      gender = '男'
      break
    case 'FEMALE':
      gender = '女'
      break
    default:
      gender = '保密'
      break
  }
  return gender
}

const formatDuration = (sec: number) => {
  const formattedHours = String(Math.floor(sec / 3600)).padStart(2, '0')
  const formattedMinutes = String(Math.floor((sec % 3600) / 60)).padStart(
    2,
    '0'
  )
  const formattedSeconds = String(sec % 60).padStart(2, '0')
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
</script>

<template>
  <div class="table">
    <el-table :data="childrenData" style="width: 100%" max-height="655px">
      <el-table-column fixed prop="nickname" label="昵称" width="120" />
      <el-table-column prop="username" label="用户名" width="150" />
      <el-table-column prop="avatarURL" label="头像" width="150">
        <template #default="{ row }">
          <img class="avatar" :src="row.avatarURL" alt="avatar" />
        </template>
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="120">
        <template #default="{ row }">
          <el-tag>{{ getGender(row.gender) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="usageDuration" label="使用时长" width="120">
        <template #default="{ row }">
          {{ formatDuration(row.usageDuration) }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, jumper, total"
        :total="300"
        :page-size="6"
      />
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 75px;
  height: 75px;
  max-width: 100%;
  max-height: 100%;
}
.pagination {
  display: flex;
  margin-top: 25px;
  justify-content: center;
}
</style>
