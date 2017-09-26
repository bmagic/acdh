import Link from 'next/link'
import {Component} from "react";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <Link href="/about">
                                    <a>A propos</a>
                                </Link>
                            </div>
                            <div className="level-item">

                                <Link href="/legal">
                                    <a>Mentions légales</a>
                                </Link>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">

                                <a className="icon" href="https://github.com/bmagic/acdh">
                                    <i className="fa fa-2x fa-github"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }


}

export default Footer