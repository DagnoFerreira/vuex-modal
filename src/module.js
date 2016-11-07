// @flow

export const PUSH = 'modal/PUSH'
export const POP = 'modal/POP'
export const REPLACE = 'modal/REPLACE'
export const REGISTER = 'modal/REGISTER'
export const UNREGISTER = 'modal/UNREGISTER'

interface ModalData {
  name: string;
}

interface ModalState {
  stack: ModalData[];
  nameIndex: string[];
}

interface Ctx extends ActionContext<ModalState> {} // eslint-disable-line

export default {
  state: ({
    stack: [],
    nameIndex: []
  }: ModalState),

  getters: {
    currentModal: ({ stack }: ModalState) => {
      return stack[stack.length - 1]
    }
  },

  actions: {
    [PUSH] ({ commit }: Ctx, data: ModalData) {
      commit(PUSH, data)
    },

    [POP] ({ commit }: Ctx) {
      commit(POP)
    },

    [REPLACE] ({ commit }: Ctx, data: ModalData) {
      commit(REPLACE, data)
    },

    [REGISTER] ({ commit }: Ctx, data: ModalData) {
      commit(REGISTER, data)
    },

    [UNREGISTER] ({ commit }: Ctx, data: ModalData) {
      commit(UNREGISTER, data)
    }
  },

  mutations: {
    [PUSH] ({ stack }: ModalState, data: ModalData): void {
      stack.push(data)
    },

    [POP] ({ stack }: ModalState): void {
      stack.pop()
    },

    [REPLACE] ({ stack }: ModalState, data: ModalData): void {
      stack.pop()
      stack.push(data)
    },

    [REGISTER] ({ nameIndex }: ModalState, data: ModalData): void {
      nameIndex.push(data.name)
    },

    [UNREGISTER] ({ nameIndex }: ModalState, data: ModalData): void {
      nameIndex.splice(nameIndex.indexOf(data.name), 1)
    }
  }
}
