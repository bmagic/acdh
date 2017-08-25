import Link from 'next/link'
import {Component} from "react";


class Footer extends Component {
    render() {
        return (
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        )
    }



}

export default Footer