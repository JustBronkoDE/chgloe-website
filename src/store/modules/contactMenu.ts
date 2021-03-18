import { reactive, readonly } from 'vue'

const state = reactive({
  open: false
})

const open = function () {
    state.open = true
}

const close = function () {
    state.open = false
}

export default { state: readonly(state), open, close }