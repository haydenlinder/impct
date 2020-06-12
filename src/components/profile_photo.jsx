import React from 'react';
import Avitar from './avitar';

class ProfilePhoto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photoURL: ''
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = (event) => {
            let newPhoto = event.target.result;
            this.setState({ photoURL: newPhoto });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
    };

    render() {
        const { photoURL } = this.state;
        return(
            <div className="profile-photo photo-container">
                <Avitar url={photoURL || "woman1.jpg"} alt="" />
                <label className="change-photo" htmlFor="profile-photo">Update
                        <input
                        className="profile-photo-file-input"
                        type="file"
                        name="profile-photo"
                        id="profile-photo"
                        onChange={e => this.handleFile(e)}
                    />
                </label>
            </div>
        );
    }
}

export default ProfilePhoto;