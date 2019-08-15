import Class from '../../../api/_element_class'
export default {
    namespaced:true,
    state: { 
        indexSection : 2,
        indexItem : 1,
        body:{
            grids:[
                {
                    type: 'section',
                    id: 1,
                    indexSection : 1,
                    attributes :{
                        style : {
                            backgroundColor : 'linear-gradient(to bottom,rgba(255, 255, 255, 0.96) 0%,rgba(238, 238, 238, 0.96) 100%)',
                            boxShadow: '0 2px 5px 0 rgba(22, 45, 61, 0.58)',
                            margin : 'auto',
                            backgroundImage : {
                                url : '../assets/logo.png',
                                position : 'center',
                                size : 'cover',
                                repeat : 'no-repeat'
                            },
                            height : 500
                        },
                        setting:{
                            stretched :'container-fluid',
                        },
                        rows :[
                            {
                                indexRow : 1,
                                sizeRow: 100,
                                bgRow : '#e0e0e0'
                            }
                        ],
                        columns:[
                            {
                                indexRow : 1,
                                indexColumn: 1,
                                sizeColumn : 50,
                                bgColumn: 'none',
                                bgPosition : 'center',
                                bgSize: 'auto'
                            },
                            {
                                indexRow : 1,
                                indexColumn: 2,
                                sizeColumn : 50,
                                bgColumn: 'none',
                                bgPosition : 'center',
                                bgSize: 'auto'
                            },
                           
                        ]

                    }
                }
            ],
            elements:[
                
            ]
        }
     },
    mutations: { 
        addItem(state,{type,getters}){
            // add undo here
            switch (type) {
                case 'section_classic':
                    {
                        var ObjectSection = new Class.Section()
                        var item = {
                            type:"section",
                            id:state.indexSection,
                            indexSection : state.indexSection,
                            attributes :{
                                style : ObjectSection.style,
                                setting:ObjectSection.setting,
                                rows :ObjectSection.rows,
                                columns:ObjectSection.columns
                            }
                        }
                        state.indexSection++
                        state.body.grids.push(item)
                    }
                    break;
                case 'paragraph':
                {
                    var ObjectText = new Class.TextParagraph()
                    var item = {
                        type : "paragraph",
                        id : state.indexItem,
                        column : getters.getColumnSelected,
                        row: getters.getRowSelected,
                        section : getters.getSectionSelected,
                        attributes:{
                            setting: ObjectText.setting,
                            style : ObjectText.style,
                            position: ObjectText.position
                        }
                    }
                    state.indexItem++
                    state.body.elements.push(item)
                }
                break;
                default:
                    break;
            }
        }
     },
    actions: { 
        addItemAction(context,{type}){
            setTimeout(()=>{
                context.commit('addItem',{type,getters:context.getters})
            },100)
            clearTimeout()
        }
    },
    getters: { 
        getGrids(state){
            return state.body.grids
        },
        getElements(state){
            return state.body.elements
        },
        getElementsById(state,{id}){
            return state.body.elements.filter(item => item.id == id)
        },
        getSectionSelected(state, getters, rootState, rootGetters){
            return rootGetters['status/getSectionIdSelected']
        },
        getRowSelected(state, getters, rootState, rootGetters){
            return rootGetters['status/getRowIndexSelected']
        },
        getColumnSelected(state, getters, rootState, rootGetters){
            return rootGetters['status/getColumnIndexSelected']
        }
     }
}