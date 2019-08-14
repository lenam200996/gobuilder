import Class from '../../../api/_element_class'
export default {
    namespaced:true,
    state: { 
        _index_section : 2,
        _index_item : 1,
        body:{
            grids:[
                {
                    _type: 'section',
                    _id: 1,
                    _index_section : 1,
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
                            _stretched :'container-fluid',
                        },
                        rows :[
                            {
                                _index_row : 1,
                                _size_row: 100,
                                _bg_row : '#e0e0e0'
                            }
                        ],
                        columns:[
                            {
                                _row_index : 1,
                                _index_column: 1,
                                _size_column : 50,
                                _bg_column: 'none',
                                _bg_position : 'center',
                                _bg_size: 'auto'
                            },
                            {
                                _row_index : 1,
                                _index_column: 2,
                                _size_column : 50,
                                _bg_column: 'none',
                                _bg_position : 'center',
                                _bg_size: 'auto'
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
        _add_item(state,{type}){
            // add undo here
            switch (type) {
                case 'section_classic':
                    {
                        var ObjectSection = new Class.Section()
                        var item = {
                            _type:"section",
                            _id:state._index_section,
                            _index_section : state._index_section,
                            attributes :{
                                style : ObjectSection.style,
                                setting:ObjectSection.setting,
                                rows :ObjectSection.rows,
                                columns:ObjectSection.columns
                            }
                        }
                        state._index_section++
                        state.body.grids.push(item)
                    }
                    break;
            
                default:
                    break;
            }
        }
     },
    actions: { 
        _add_item_action(context,{type}){
            setTimeout(()=>{
                context.commit('_add_item',{type})
            },100)
            clearTimeout()
        }
    },
    getters: { 
        _getGrids(state){
            return state.body.grids
        },
        _getElements(state){
            return state.body.elements
        },
        _getElementsById(state,{id}){
            return state.body.elements.filter(item => item._id == id)
        }
     }
}