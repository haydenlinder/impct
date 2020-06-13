import React from 'react';
import ProfilePhoto from './profile_photo';
import UserInfo from './user_info';
import Investments from './investments';
import { user1 } from '../users';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'Info'
        };
    }

    render() {
        const { tab } = this.state;
        
        return(
            <div className="profile-container">
                <ProfilePhoto />
                <div className="profile-tabs">
                    <div onClick={e => this.setState({tab: 'Investments'})}  className={`profile-tab ${tab === 'Investments' ? 'selected' : ''}`}>Investments</div>
                    <div onClick={e => this.setState({tab: 'Info'})}  className={`profile-tab ${tab === 'Info' ? 'selected' : ''}`}>Info</div>
                    <div onClick={e => this.setState({tab: 'Purchases'})}  className={`profile-tab ${tab === 'Purchases' ? 'selected' : ''}`}>Purchases</div>
                </div>
                {tab === 'Info' ? <UserInfo /> : null}
                {tab === 'Investments' ? <Investments investments={user1.investments} /> : null}
            </div>
        );
    }
}

export default Profile;