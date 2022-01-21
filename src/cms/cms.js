import CMS from "netlify-cms-app"

import MarkdownControl from "./widgets/customMarkdownWidget/MarkdownControl"
import MarkdownPreview from "./widgets/customMarkdownWidget/MarkdownPreview"

CMS.registerWidget("customMarkdown", MarkdownControl, MarkdownPreview)
