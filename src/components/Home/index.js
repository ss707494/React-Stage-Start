import React from 'react'
import {Link} from 'react-router'
import './Home.scss'
import Head from '../Head'
import RaisedButton from 'material-ui/RaisedButton';

/**
 * 首页
 */
const Home = (links = []) => x => {
  return (
    <div styleName="home">
      <Head title='Welcome' showMenuIconButton={false}/>
      <div style={{paddingTop: 64}} styleName="route">
        {
          links.map(e => (
            <Link key={e.link} styleName='link' to={'/' + e.link}>
              <RaisedButton label={e.name} primary={true}/>
            </Link>
          ))
        }
      </div>
      {/*<div styleName="githubUrl"><img alt="" src={require('./mark-github.svg')}/>:<a*/}
        {/*href="https://github.com/ss707494/react-app-ss">https://github.com/ss707494/react-app-ss</a></div>*/}
    </div>
  )
}

export default (links) => ({component: Home(links)})
