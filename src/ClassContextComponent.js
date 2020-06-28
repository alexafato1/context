import React, {Component} from 'react'
import {ThemeContext} from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark){
        return{
            backgroundColor: dark ? 'black': 'grey',
            color: dark ? 'grey' : 'black',
            padding: '2rem',
            margin: '2rem'
        }
    }


    render(){
        return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
            }}
        </ThemeContext.Consumer>
        )
}
}