import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={`${style.profile} page`} style={{
	        backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
	        width: '100%',
	        height: '150%',
	        overflow: 'hidden'
	      }}>
				<Card style={{color:'#fff', width: '90vw', margin: 'auto', maxWidth: '600px'}}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<Button raised ripple onClick={this.increment}>Click Me</Button>
					{' '}
					Clicked {count} times.
				</p>
			</Card>
			</div>
		);
	}
}
