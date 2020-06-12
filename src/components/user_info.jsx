import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            fname: 'Jane',
            lname: 'Du',
            address1: 'Section 1, Bade Road',
            address2: 'No. 104號, Section 1',
            city: 'Zhongzheng District, Taipei City',
            state: '',
            country: 'Taiwan',
            postalCode: '100'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ edit: false });
    }

    render() {
        const { fname, lname, address1, address2, city, state, country, postalCode, edit } = this.state;
        return (edit ?
            <form className="user-info" onSubmit={this.handleSubmit}>
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="First name"
                    value={fname}
                    onChange={this.handleChange('fname')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="Last name"
                    value={lname}
                    onChange={this.handleChange('lname')}
                />
                <div className="user-info-message">(Only you can see the following)</div>
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="Address1"
                    value={address1}
                    onChange={this.handleChange('address1')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="Address2"
                    value={address2}
                    onChange={this.handleChange('address2')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={this.handleChange('city')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={this.handleChange('state')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="State"
                    value={country}
                    onChange={this.handleChange('country')}
                />
                <input 
                    className="user-info-input"
                    type="text"
                    placeholder="Postal code"
                    value={postalCode}
                    onChange={this.handleChange('postalCode')}
                />
                <button className="save-user-info" onClick={this.handleSubmit}>Save</button>
            </form>
            :
            <div className="user-info">
                {fname || lname ? <div className="user-info-item name">{fname} {lname}</div> : null}
                {address1 || address2 || city || state || country ? <div className="user-info-message">(Only you can see the following)</div> : null}
                {address1 ? <div className="user-info-item">{address1}</div> : null}
                {address2 ? <div className="user-info-item">{address2}</div> : null}
                {city ? <div className="user-info-item">{city}</div> : null}
                {state ? <div className="user-info-item">{state}</div> : null}
                {country ? <div className="user-info-item">{country} {postalCode}</div> : null}
                <div className="edit-user-info" onClick={e => this.setState({ edit: true })}>✎</div>
            </div>
        )
        ;
    }
}

export default UserInfo;