import { defineComponent, ref } from 'vue'
import { ElSpace,ElButton,ElText } from 'element-plus'
export default defineComponent({
  name: 'm2e3',
  components: {
    ElSpace,
    ElButton,
    ElText
  },
  setup (props, ctx) {
    const isShow = ref(true)
    const onToggle = () => (isShow.value = !isShow.value)
    return () => (
      <el-space>
        <el-button type='primary' onClick={onToggle}>
          Toggle
        </el-button>
        {isShow.value && <el-text>Text</el-text>}
      </el-space>
    )
  }
})
