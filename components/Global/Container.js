const { loadGetInitialProps } = require("next/dist/next-server/lib/utils");

function Container(props) {
  return <div className="container mt-20 mx-auto grid grid-cols-3 gap-6">
    {props.children}
  </div>
}

export default Container
