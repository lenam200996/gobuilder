class Video{
    constructor(){
        this.style = {
            alignBlock : 'none',
            top: 0,
            left : 0,
            width: '300px',
            height :'200px',
            shadow : 0,
        }
        this.setting = {
            url :'https://www.youtube.com/embed/m2gHLijHTQU',
            autoPlay : false,
            loop: false,
        }
        this.position = {
            x :150,
            y : 100,
            angle:0,
            w:300,
            h:200
        };
    }
}
class Field {
    constructor(){
        this.type = 'text'
        this.setting = {
            placeholder : 'Enter your text',
            required : false,
        }
        this.style = {
            textAlign: 'left',
            paddingLeft: 0,
            paddingRight: 0,
            borderPosition:'All',
            fontFamily : 'Roboto',
            fontStyle: 'normal',
            color: '#000000',
            fontSize: 14,
            fontWeight: 500,
            backgroundColor : 'none',
            alignBlock:'none',
            marginLeft: 0,
            marginRight : 0,
            marginTop : 0,
            marginBottom : 0,
            top: 0,
            left : 0,
            width: '300px',
            height :'50px',
            rotation : 0,
            border : {
                width : 1,
                type : 'solid',
                color : '#000000'
            },
            borderRadius :0,
            shadow : 0,
        }
        this.position = {
            x :150,
            y : 25,
            angle:0,
            w:300,
            h:50
        };
    }
   
}
class Box {
    constructor(){
        this.style = {
            top: 0,
            left : 0,
            width: '400px',
            height :'300px',
            rotation : 0,
            backgroundColor : '#cccccc',
            opacity : 1,
            alignBlock:'none',
            border : {
                width : 1,
                type : 'solid',
                color : '#000000'
            },
            borderRadius :0,
            opacity: 1,
            shadow : 0,
        }
        this.position = {
            x :200,
            y : 150,
            angle:0,
            w:400,
            h:300
        };
    }
}

class SlideShow {
    constructor(){
        this.slideItem = [
            {
                index : 1,
                backgroundColor : require('../assets/go_logo.png'),
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            },
            {
                index : 2,
                backgroundColor : 'blue',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            },
            {
                index : 3,
                backgroundColor : 'yellow',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            }
        ]
    }
}

class LineHorizontal {
    constructor(){
        this.style = {
            size: 6,
            backgroundColor : 'red',
            alignBlock : 'none',
            top: 0,
            left : 0,
            rotation : 0,
            width: '400px',
            height :'50px',
            shadow : 0,

        };
        this.position = {
            x :200,
            y : 25,
            angle:0,
            w:400,
            h:50
        };
    }
    
}

class LineVertical{
    constructor(){
        this.style = {
            size: 6,
            backgroundColor : 'red',
            alignBlock : 'none',
            top: 0,
            left : 0,
            rotation : 0,
            width: '30px',
            shadow : 0,
            height :'300px',

        };
        this.position = {
            x :25,
            y : 200,
            angle:0,
            w:50,
            h:400
        };
    }
    
}

class TextParagraph{
    constructor(){
        this.style = {
            fontFamily : 'Roboto',
            letterSpacing : 0, /** (number) px */
            wordSpacing :0 , /** (number) px */
            lineHeight :12 , /** (number) px */
            alignBlock : 'none',
            top: '100px',
            left : '148px',
            width: '90px',
            height :'24px',
            rotation : 0,
            shadow : 0,
        };
        this.position = {
            x :193,
            y : 112,
            angle:0,
            w:90,
            h:24
        };
        this.value = "this is a text";
        this.link = '';
        this.heading = 'p';/** p, span, h1, h2, h3 ,h4 ,h5 ,h6  */
        
        
    }
    
   
}

class Button {
    constructor(){
        
        this.position = {
            x :192,
            y : 168,
            angle:0,
            w:200,
            h:50
        };
        this.style = {
            fontFamily : 'Roboto',
            backgroundColor : '#ffffff',
            border : {
                width : 0,
                type : 'solid',
                color : '#000000'
            },
            shadow : 0,
            borderRadius :0,
            color: '#000000',
            textTransform : 'none',
            alignBlock : 'none',
            top: '143px',
            left : '92px',
            width: '200px',
            height : '50px',
            rotation : 0,
            textAlign : 'center', //new
            fontSize:14,
            fontWeight: 500,
            fontStyle:'normal',
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColorHover: 'green',
            colorHover:'#ffffff',
            borderColorHover :'green'
        }
        this.text = 'Simple Button'
        
    }
   
}

class Image {
    constructor(){
        this.setting = {
            url : require('../assets/go_logo.png'),
            keepProportion: true,
        }
        this.position = {
            x :200,
            y : 150,
            angle:0,
            w:400,
            h:300
        };
        this.style ={
            alignBlock : 'none',
            border : {
                width : 0,
                color: '#000000',
                type : 'solid'
            },
            borderRadius : 0,
            shadow : 0,
            top: 0,
            left : 0,
            width: '400px',
            height : '300px',
            rotation : 0
        }
    }
   
}

class Section {
    constructor(){
        this.style = {
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
        }
        this.setting={
            stretched :'container-fluid',
        },
        this.rows = [
            {
                indexRow : 1,
                sizeRow: 100,
                bgRow : '#e0e0e0'
            }
        ],
        this.columns=[
            {
                rowIndex : 1,
                indexColumn: 1,
                sizeColumn : 100,
                bgColumn: 'none',
                bgPosition : 'center',
                bgSize: 'auto'
            },
           
        ]
        
    }

    
    setItemSlideshow(itemAttribute){
        this.style = {
            backgroundColor : itemAttribute.style.backgroundColor,
            boxShadow: itemAttribute.style.boxShadow,
            margin : itemAttribute.style.margin,
            stretched :itemAttribute.style.stretched,
            height : itemAttribute.style.height
        }
        this.layout = new Array()
        itemAttribute.layout.forEach((item,index)=> {
            this.layout[index] = {
                index : item.index,
                size : item.size,
                row : item.row,
                bg : item.bg
            }

        })       
        this.row = new Array()
        itemAttribute.row.forEach((item,index) => {
            this.row[index] = {
                index: item.index,
                size : item.size,
                bg :item.bg
            }
        })
        this.position = {
            x :itemAttribute.position.x,
            y : itemAttribute.position.y,
            angle:itemAttribute.position.angle,
            w:itemAttribute.position.w,
            h:itemAttribute.position.h
        };

    }
    
}


class Form{
    constructor(){
        this.type = "comment",
        this.style = {
            top: 0,
            left : 0,
            width: '400px',
            height : '300px',
            rotation : 0,
        }
        this.listInput = [
            {
                key : 1,
                style : {
                    type : 'text',
                    placeholder : 'Enter your text',
                    required : false,
                    textAlign: 'left',
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderPosition:'All',
                    fontFamily : 'Roboto',
                    fontStyle: 'normal',
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor : 'none',
                    alignBlock:'none',
                    marginLeft: 0,
                    marginRight : 0,
                    marginTop : 0,
                    marginBottom : 0,
                    top: 0,
                    left : 0,
                    width: '300px',
                    height :'50px',
                    rotation : 0,
                    border : {
                        width : 1,
                        type : 'solid',
                        color : '#000000'
                    },
                    borderRadius :0,
                    shadow : 0,
                },
                position : {
                    x :150,
                    y : 25,
                    angle:0,
                    w:300,
                    h:50
                }
            },
            {
                key : 2,
                style : {
                    type : 'text',
                    placeholder : 'Enter your text',
                    required : false,
                    textAlign: 'left',
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderPosition:'All',
                    fontFamily : 'Roboto',
                    fontStyle: 'normal',
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor : 'none',
                    alignBlock:'none',
                    marginLeft: 0,
                    marginRight : 0,
                    marginTop : 0,
                    marginBottom : 0,
                    top: 0,
                    left : 0,
                    width: '300px',
                    height :'50px',
                    rotation : 0,
                    border : {
                        width : 1,
                        type : 'solid',
                        color : '#000000'
                    },
                    borderRadius :0,
                    shadow : 0,
                },
                position : {
                    x :150,
                    y : 25,
                    angle:0,
                    w:300,
                    h:50
                }
            },
            {
                key : 3,
                style : {
                    type : 'text',
                    placeholder : 'Enter your text',
                    required : false,
                    textAlign: 'left',
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderPosition:'All',
                    fontFamily : 'Roboto',
                    fontStyle: 'normal',
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor : 'none',
                    alignBlock:'none',
                    marginLeft: 0,
                    marginRight : 0,
                    marginTop : 0,
                    marginBottom : 0,
                    top: 0,
                    left : 0,
                    width: '300px',
                    height :'50px',
                    rotation : 0,
                    border : {
                        width : 1,
                        type : 'solid',
                        color : '#000000'
                    },
                    borderRadius :0,
                    shadow : 0,
                },
                position : {
                    x :150,
                    y : 25,
                    angle:0,
                    w:300,
                    h:50
                }
            }
        ]
        this.position = {
            x : 250,
            y : 250,
            angle: 0,
            w : 500,
            h:500
        }
    }

}


export default {TextParagraph,Button,Section,Image,LineHorizontal,LineVertical,SlideShow,Box,Field,Video,Form}
