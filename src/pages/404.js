import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Footnote } from "../components/Footnote"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div className="post spec-post">
			<h1>04.04</h1>

			<Footnote>
				Strictly speaking, not an RFC 7231 compliant error code.
			</Footnote>

			<p>
				How ironic; a site dedicated to numbers, and you’re seeing one. Entirely
				the wrong one – 404 is the error code which means we couldn’t find what
				you were looking for.
			</p>

			<p>
				If you think there should be something here – like if you clicked a link
				on this site and arrived here – please{" "}
				<Link to="/contact/">contact me</Link> and I’ll fix it.
				Thanks!&nbsp;&nbsp;:-)
			</p>
		</div>
	</Layout>
)

export default NotFoundPage
