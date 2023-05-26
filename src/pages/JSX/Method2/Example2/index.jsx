import { defineComponent, ref } from 'vue'
import { ElSpace, ElText, ElButton } from 'element-plus'
export default defineComponent({
  name: 'm2e2',
  components: {
    ElSpace,
    ElText,
    ElButton
  },
  setup () {
    const value = ref(0)
    const increase = () => {
      value.value++
    }
    const decrease = () => {
      if (!value.value) return
      value.value--
    }
    return () => (
      <el-space>
        <el-text>{value.value}</el-text>
        <el-button type='primary' onClick={() => increase()}>
          INCREASE
        </el-button>
        <el-button type='success' onClick={() => decrease()}>
          DECREASE
        </el-button>
      </el-space>
    )
  }
})
