<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    value: { type: Number }
  },
  name: 'm1e1',
  setup (props, ctx) {
    return () => (
      <div>
        <el-text tag='ins'>Method1 - Example1</el-text>
        <br />
        <el-text tag='b'>{props.value}</el-text>
      </div>
    )
  }
})
</script>
