// ReactDOM.render(
// 	React.DOM.h1(
// 		{id: 'my-heading'},
		
// 		React.DOM.span(null,
// 			React.DOM.em(null, "Hell"),
// 			"o"
// 		),
// 		" world!"
// 	),
// 	document.getElementById("app")
// )

ReactDOM.render(
	<h1 id="my-heading">
		<span><em>Hell</em>o</span> word!
	</h1>,
	document.getElementById("app")
);