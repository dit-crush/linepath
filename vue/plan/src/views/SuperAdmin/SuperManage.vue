<!-- src/views/SuperAdmin/SuperManage.vue -->
<template>
  <div>
    <!-- 搜索表单 -->
    <el-form :model="form" ref="form" style="display: flex; align-items: flex-start; gap: 5px">
      <el-form-item prop="name" style="flex: 0 0 200px; margin: 0">
        <el-input
            placeholder="请输入校区名称"
            v-model="campus_name"
            @keyup.enter.native="loadCampusData"
        ></el-input>
      </el-form-item>

      <el-form-item prop="admin" style="flex: 0 0 200px; margin: 0">
        <el-input
            placeholder="请输入负责人"
            v-model="admin_name"
            @keyup.enter.native="loadCampusData"
        ></el-input>
      </el-form-item>

      <el-button type="primary" @click="loadCampusData" style="margin-left: 5px"> 搜索 </el-button>
      <el-button type="warning" @click="reset"> 重置 </el-button>
    </el-form>

    <!-- 操作按钮 -->
    <div style="margin: 30px 0 20px 0">
      <el-button type="primary" @click="handleAdd">
        新增校区<i class="el-icon-circle-plus-outline"></i>
      </el-button>
      <el-button type="danger" style="margin-left: 5px" @click="handleBatchDelete">
        批量删除<i class="el-icon-remove-outline"></i>
      </el-button>
    </div>

    <!-- 表格 -->
    <el-table
        :data="tableData"
        border
        stripe
        header-cell-class-name="headerBg"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="campus_id" label="校区编号" width="120"></el-table-column>
      <el-table-column prop="campus_name" label="校区名称"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="contact_person" label="联系人" width="120"></el-table-column>
      <el-table-column prop="phone" label="联系电话" width="140"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="admin_name" label="负责人" width="120"></el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button type="success" @click="handleScopeEdit(scope.row)">
            编辑<i class="el-icon-edit"></i>
          </el-button>
          <el-button type="danger" @click="handleScopeDelete(scope.row.campus_id)">
            删除<i class="el-icon-remove-outline"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 8, 10, 12]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
      ></el-pagination>
    </div>

    <!-- 新增/编辑 弹窗 -->
    <el-dialog title="校区信息" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" label-width="100px" :rules="rules" size="small">
        <el-form-item prop="campus_name" label="校区名称">
          <el-input v-model="form.campus_name"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item prop="contact_person" label="联系人">
          <el-input v-model="form.contact_person"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="admin_name" label="负责人">
          <el-input v-model="form.admin_name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveCampusData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "SuperManage",
  data() {
    return {
      campus_name: "",
      admin_name: "",
      tableData: [],
      multipleSelection: [],
      totalNum: 0,
      pageNum: 1,
      pageSize: 5,
      dialogFormVisible: false,
      form: {
        campus_id: "",
        campus_name: "",
        address: "",
        contact_person: "",
        phone: "",
        email: "",
        admin_name: "",
      },
      rules: {
        campus_name: [{ required: true, message: "校区名称不能为空", trigger: "blur" }],
        contact_person: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        phone: [{ required: true, message: "电话不能为空", trigger: "blur" }],
      },
      fakeData: [
        {
          campus_id: 1,
          campus_name: "中心校区",
          address: "北京市朝阳区",
          contact_person: "张三",
          phone: "13800138000",
          email: "zhangsan@example.com",
          admin_name: "李四",
        },
        {
          campus_id: 2,
          campus_name: "分校区A",
          address: "上海市浦东新区",
          contact_person: "王五",
          phone: "13900139000",
          email: "wangwu@example.com",
          admin_name: "赵六",
        },
      ],
    };
  },
  created() {
    this.loadCampusData();
  },
  methods: {
    loadCampusData() {
      // 模拟分页和搜索
      let data = this.fakeData.filter(
          (item) =>
              (!this.campus_name || item.campus_name.includes(this.campus_name)) &&
              (!this.admin_name || item.admin_name.includes(this.admin_name))
      );
      this.totalNum = data.length;
      const start = (this.pageNum - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.tableData = data.slice(start, end);
    },
    reset() {
      this.campus_name = "";
      this.admin_name = "";
      this.pageNum = 1;
      this.loadCampusData();
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.loadCampusData();
    },
    handleCurrentChange(page) {
      this.pageNum = page;
      this.loadCampusData();
    },
    handleAdd() {
      this.dialogFormVisible = true;
      this.form = {};
    },
    handleScopeEdit(row) {
      this.form = { ...row };
      this.dialogFormVisible = true;
    },
    handleScopeDelete(id) {
      this.fakeData = this.fakeData.filter((item) => item.campus_id !== id);
      this.loadCampusData();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleBatchDelete() {
      const ids = this.multipleSelection.map((v) => v.campus_id);
      this.fakeData = this.fakeData.filter((item) => !ids.includes(item.campus_id));
      this.loadCampusData();
    },
    saveCampusData() {
      if (!this.form.campus_id) {
        // 新增
        this.form.campus_id = this.fakeData.length + 1;
        this.fakeData.push({ ...this.form });
      } else {
        // 编辑
        const index = this.fakeData.findIndex((v) => v.campus_id === this.form.campus_id);
        if (index !== -1) this.fakeData[index] = { ...this.form };
      }
      this.dialogFormVisible = false;
      this.loadCampusData();
    },
  },
};
</script>

<style>
.headerBg {
  background-color: #eee !important;
}
</style>
