import React from 'react';
import './headerStyle.css';
import {fetched} from '../../Actions/actions'
import {connect} from 'react-redux'


interface IHeader  {
    dispatch?: any;
}

class Header extends React.PureComponent<IHeader> {

    input = (e: any) => {
        const input = e.target.value;
        if (input.length < 3) return
        const url = 'https://api.github.com/search/repositories?q=';
        const fullUrl = url + input;
        const {dispatch} = this.props;
        dispatch(fetched(fullUrl))
    }

    render() {
        return(
            <header>
                <input type='text' placeholder='Try to find any repositories' onChange={this.input} />
            </header>
        )
    }
}

export default connect()(Header);
