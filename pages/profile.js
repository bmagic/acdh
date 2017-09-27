import withRedux from 'next-redux-wrapper';

import makeStore from '../store'
import Layout from '../components/MyLayout.js'

import PageTitle from '../components/PageTitle'

class Profile extends React.Component {


    render() {
        return (
            <div>
                <PageTitle title="Mes informations"/>

                <section className="section">

                    <div className="container">

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="text" placeholder={this.props.user.email} disabled/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = (dispatch) => {
    return {}
}


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Layout(Profile));
