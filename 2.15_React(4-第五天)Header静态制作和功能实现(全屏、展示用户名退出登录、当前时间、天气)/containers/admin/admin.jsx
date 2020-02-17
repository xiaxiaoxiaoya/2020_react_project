import React,{Component} from 'react';
// import {connect} from 'react-redux';
import {Layout} from 'antd'
// import {Redirect} from 'react-router-dom';
// import {createDeleteUserInfoAction} from '../../redux/actions/login'
import check from '../check/check'
import Header from '../header/header'
const {Footer,Sider,Content} = Layout;
@check
class Admin extends Component{
    render(){
      
        return (
            <Layout className="layout">
				<Sider>Sider</Sider>
				<Layout>
					<Header/>
					<Content style={{backgroundColor:'skyblue'}}>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
        )
        }
}
export default Admin