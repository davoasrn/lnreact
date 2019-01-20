import React, { Component } from 'react';
import axios from 'axios';
import { CURRENT_JSON_DATASERVER } from '../../../config';
import { URL } from  '../../../config';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount(){
        //const url = str1.concat(str2)
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
            .then(response => {
                this.setState({
                    news: response.data
                });
            })
    }

    render(){

        return (
            <SliderTemplates
                data={this.state.news}
                type={this.props.type}
                settings={this.props.settings}
            />
        )
    }
}

export default NewsSlider;