import React from 'react';
import './resultStyle.css';
import {connect} from 'react-redux'


interface IMainProps {
  data?: {items: []};
  dispatch?: any
}

interface forCallBack {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
}

class Result extends React.PureComponent<IMainProps> {

  render() {
    const {data} = this.props;
    if(!data) return null
    const items = data.items;

    const renderResults = (el: forCallBack) => {
      return (
        <div className="result" key={el.id}>
          <a href={el.html_url}>{el.name}</a>
          <p className='resultData'>Stars: {el.stargazers_count}</p>
          <p className='resultData'>Subscribers: {el.watchers_count}</p>
      </div>
      )
    }

    return (
      <div className='body'>
        {items && items.map((el: forCallBack) => renderResults(el))}
      </div>
    )

  }
}

export default connect((state) => state)(Result);
