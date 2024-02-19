import * as React from 'react';


export default class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  data: null
	};
  }

  componentDidMount() {
	readTextFile("https://api.myjson.com/bins/1g3z3s", (text) => {
	  this.setState({ data: JSON.parse(text) });
	});
  }

  render() {
	return (
	  <div>
		<h1>JSON Data</h1>
		<pre>{JSON.stringify(this.state.data, null, 2)}</pre>
	  </div>
	);
  }
}

function readTextFile(file, callback) {
  var request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open("GET", file, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    }
  };
  request.send(null);
}