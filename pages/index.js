import withRedux from 'next-redux-wrapper';

import makeStore from '../store'
import Layout from '../components/MyLayout.js'


class IndexPage extends React.Component {


    render() {
        return (
            <div>
                <section className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <div className="media ">
                                <figure className="media-left">
                                    <p className="image is-64x64">
                                        <img src="/static/img/logo.png"/>
                                    </p>
                                </figure>
                                <div className="media-content is-vcentered ">
                                    <h1 className="title">ACDH.audio</h1>
                                    <h2 className="subtitle">Recherchez et écouter l'intégralité des émissions d'au
                                        coeur de
                                        l'histoire.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <input className="input" type="text" placeholder="Rechercher"/>

                    </div>
                </section>
                <section className="">
                    <div className="container">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    21/09/2017
                                </div>
                                <div className="level-item">
                                    Chrétiens d'Orient
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <i className="fa fa-download" />
                                </div>
                                <div className="level-item">
                                    <i className="fa fa-heart-o" />
                                </div>
                                <div className="level-item">
                                    <i className="fa fa-check-circle" />
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    13/02/2018
                                </div>
                                <div className="level-item">
                                    La vie mouvementée d'Henriette-Marie de France
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <i className="fa fa-download" />
                                </div>
                                <div className="level-item">
                                    <i className="fa fa-heart" />
                                </div>
                                <div className="level-item">
                                    <i className="fa fa-check-circle-o" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default withRedux(
    makeStore
)(Layout(IndexPage));
