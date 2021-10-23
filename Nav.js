import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Index from './index';
import Closelist from './closelist';
import Home from './home';

const screens = {
	index:{
		screen:Index,
		navigationOptions:{
			headerTransparent:true,
			title:''
		}
	},

	Home:{
		screen:Home,
		navigationOptions:{
			headerTransparent:true,
			size:40,
			headerLeft:()=>{null},
			title:'',
			position:'absolute',
		}
	},


	closelist:{
		screen:Closelist, 
		navigationOptions:{
			headerTransparent:true,
			title:''
		}

	}

}
	


const Navstack = createStackNavigator(screens);

export default createAppContainer(Navstack);
