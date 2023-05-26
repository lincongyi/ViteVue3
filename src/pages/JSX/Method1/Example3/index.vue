<script lang="tsx">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'm1e3',
  setup (props, ctx) {
    const isShow = ref(true)
    const isVShow = ref(true)
    const onToggle = () => (isShow.value = !isShow.value)
    const onVShow = () => (isVShow.value = !isVShow.value)
    return () => (
      <el-space>
        <el-button type='primary' onClick={onToggle}>
          Toggle
        </el-button>
        {isShow.value && <el-text>Text</el-text>}
        <el-text v-if={isShow.value}>v-if</el-text>
        <el-button type='primary' onClick={onVShow}>
          JSX v-show
        </el-button>
        <el-text v-show={isVShow.value}>v-show</el-text>
      </el-space>
    )
  }
})
</script>
