import Link from 'next/link'
import {Component} from "react";


class PageTitle extends Component {
    render() {
        return (
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.props.title}</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default PageTitle