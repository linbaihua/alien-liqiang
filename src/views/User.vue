<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
      <el-form :model="userForm" :inline="true" class="demo-form-inline">
        <el-form-item style="margin-bottom: 0px">
          <el-input placeholder="请输入名称" v-model="userForm.name" @keyup.enter.native="onSubmit"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 0px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%" height="90%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex === 0 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="出生日期"></el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage"> </el-pagination>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form ref="form" :inline="true" :rules="rules" :model="form" label-width="80px" @keyup.enter.native="submitForm('form')">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker v-model="form.birth" type="date" placeholder="请选择日期" value-format="yyyy-MM-DD"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelForm('form')">取 消</el-button>
        <el-button @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from '../api'
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        sex: '',
        age: '',
        birth: '',
        addr: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
        birth: [{ required: true, message: '请选择日期', trigger: 'blur' }],
        addr: [{ required: true, message: '请输入地址', trigger: 'blur' }]
      },
      tableData: [],
      total: 0,
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        name: ''
      }
    }
  },
  methods: {
    //关闭dialog回调函数
    handleClose() {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$refs.form.resetFields()
          this.dialogVisible = false
        })
        .catch(_ => {})
    },
    // 新增
    handleAdd() {
      this.modalType = 0
      this.dialogVisible = true
    },
    // 表单提交验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //后续对表单数据的处理
          if (this.modalType === 0) {
            addUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList()
            })
          } else {
            editUser(this.form).then(() => {
              // 重新获取列表的接口
              this.getList()
            })
          }
          this.$refs[formName].resetFields() //重置内容
          this.dialogVisible = false //关闭弹窗
        }
      })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // x掉表单
    cancelForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    // 编辑
    handleEdit(index, row) {
      this.modalType = 1
      this.dialogVisible = true
      // 注意需要对当前行数据进行深拷贝，否则会出错
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 删除
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            // 重新获取列表的接口
            this.getList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 获取列表的数据(封装getUser方法)
    getList() {
      // 获取的列表的数据
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => {
        console.log(data)
        this.tableData = data.list
        this.total = data.count || 0
      })
    },
    // 选择页码的回调函数 val是当前页码
    handlePage(val) {
      this.pageData.page = val
      this.getList()
    },
    // 查询搜索
    onSubmit() {
      this.getList()
    }
  },
  mounted() {
    getUser().then(({ data }) => {
      this.getList()
    })
  }
}
</script>

<style lang="less" scoped>
.manage {
  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  height: 92%;
  .pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
