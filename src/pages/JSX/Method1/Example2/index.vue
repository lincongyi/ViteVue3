<script lang="tsx">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'm1e2',
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
</script>
