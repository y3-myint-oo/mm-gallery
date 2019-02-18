import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
//Myanmar Font
import myanmar from 'myanmar-tools';
const detector = new myanmar.ZawgyiDetector();
const converter = new myanmar.ZawgyiConverter();
//const converter.unicodeToZawgyi

const styles = theme => ({
    nav:{
        minHeight:'100vh',         
        [theme.breakpoints.down('sm')]: {
            //backgroundColor: 'red !important',
            minHeight:'150vh',  
        },
    },
});

// English Number to MM Number
class MMLabel extends Component{    
    constructor(props){
        super(props);
        this.state={
           text:"blaal",
           inputText:this.props.itext,
        }
    } 
    componentDidMount(){
        console.log(" InputText ", this.state.inputText)
        const {inputText} =this.state

        // Engl Number Range - 48 <-> 57
        let mm_code=""
        for (var i=0;i<inputText.length;i++){
            let code= inputText.charCodeAt(i)
            console.log(" char code ",code)
             if (code >= 48 && code<=57){               
             switch(code){
                    case 48:
                        mm_code=mm_code+"၀"                        
                    break;
                    case 49:
                        mm_code=mm_code+"၁"
                    break;
                    case 50:
                        mm_code=mm_code+"၂"
                    break;
                    case 51:
                        mm_code=mm_code+"၃"
                    break;
                    case 52:
                        mm_code=mm_code+"၄"
                    break;
                    case 53:
                        mm_code=mm_code+"၅"
                    break;
                    case 54:
                        mm_code=mm_code+"၆"
                    break;
                    case 55:
                        mm_code=mm_code+"၇"
                    break;
                    case 56:
                        mm_code=mm_code+"၈"
                    break;
                    case 57:
                        mm_code=mm_code+"၉"
                    break; 
                }
            } 
        }
        this.setState({text: mm_code});
    }
    
    render(){
        const {classes, ...other} = this.props
        return(
            <Typography {...other}>
                {this.state.text}
            </Typography>
        )
    }
}
export default withStyles(styles)(MMLabel);