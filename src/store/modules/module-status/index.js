export default {
    namespaced:true,
    state: {
        sectionIdSelected : null,
        rowIndexSelected : null,
        columnIndexSelected :null
    },
    mutations: {
        setSectionIdSelected(state,{id}){
            state.sectionIdSelected = id
        },
        setRowIndexSelected(state,{index}){
            state.rowIndexSelected = index
        },
        setColumnIndexSelected(state,{index}){
            state.columnIndexSelected = index
        },
        clearSectionId(state){
            state.sectionIdSelected = null
        },
        clearRowIndex(state){
            state.rowIndexSelected = null
        },
        clearColumnIndex(state){
            state.columnIndexSelected = null
        }
    },
    actions: {
        setSectionIdSelectedAction(context,{id}){
            context.commit('clearSectionId')
            setTimeout(()=>{
                context.commit('setSectionIdSelected',{id})
            },200)
            clearTimeout();
        },
        setRowIndexSelectedAction(context,{index}){
            context.commit('clearRowIndex')
            setTimeout(()=>{
                context.commit('setRowIndexSelected',{index})
            },200)
            clearTimeout();
        },
        setColumnIndexSelectedAction(context,{index}){
            context.commit('clearColumnIndex')
            setTimeout(()=>{
                context.commit('setColumnIndexSelected',{index})
            },200)
            clearTimeout();
        }
    },
    getters: {
        getSectionIdSelected(state){
            return state.sectionIdSelected
        },
        getRowIndexSelected(state){
            return state.rowIndexSelected
        },
        getColumnIndexSelected(state){
            return state.columnIndexSelected
        }
    }
}