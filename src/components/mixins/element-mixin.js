import { throws } from "assert";

var mixin =  {
    props:{
        properties:{
            type:Object,
            required: true
        }
    },
    data:()=>({
        isActive: false,
        styleBtnTool:{
            bottom: -35+'px',
            right: -280+"px"
        }
    }),
    methods: {
        active(){
            this.isActive = true
        },
        inActive(){
            this.isActive = false
        }
    },
    mounted() {
       
    },
    computed: {
        getPosition(){
            return this.properties.attributes.position
        },
        getThis(){
            return {
                 type:this.type,name:this.name,section:this.properties.section,id:this.properties.id,row:this.properties.row,column: this.properties.column
            }
        }
    },
}

export default {mixin}