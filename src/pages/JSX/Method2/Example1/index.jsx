import { defineComponent } from 'vue'
import { ElText } from 'element-plus'
export default defineComponent({
  props: {
    value: { type: Number }
  },
  name: 'm2e1',
  components: {
    ElText
  },
  setup (props, ctx) {
    return () => (
      <div>
        <el-text tag='ins'>Method2 - Example1</el-text>
        <br />
        <el-text tag='b'>{props.value}</el-text>
      </div>
    )
  }
})
