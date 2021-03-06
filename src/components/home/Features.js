import Inferno from 'inferno'
import { Link } from 'inferno-router'
// import IconArchitecture from '../icons/IconArchitecture'
// import IconCompatible from '../icons/IconCompatible'
// import IconIsomorphic from '../icons/IconIsomorphic'
// import IconModular from '../icons/IconModular'
// import IconSize from '../icons/IconSize'
// import IconSpeed from '../icons/IconSpeed'

export default function() {
  return (
    <div className="col-mr-auto text-center">
      <div className="columns">
        <div className="column col-xs-12">
          <h4>React Compatible</h4>
          <p>React-like API, concepts and component lifecycle events. Switch over easily with inferno-compat.</p>
        </div>
        <div className="divider-vert hide-sm"/>
        <div className="column col-xs-12">
          <h4>Insane Performance</h4>
          <p>One of the fastest front-end frameworks for rendering UI in the DOM, making 60 FPS on mobile possible.</p>
          <Link to="/benchmarks">See Our Benchmarks</Link>
        </div>
        <div className="divider-vert hide-sm"/>
        <div className="column col-xs-12">
          <h4>Isomorphic</h4>
          <p>Isomorphic rendering on both client and server, along with fast-booting from server-side renders.</p>
        </div>
      </div>
    </div>
  )
}
