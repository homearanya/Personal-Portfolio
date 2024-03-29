import React from "react"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"
import RawEditor from "./RawEditor"
import VisualEditor from "./VisualEditor"

const MODE_STORAGE_KEY = "cms.md-mode"

let editorControl
let _getEditorComponents = () => []
console.log("using custom markdown widget")

export const getEditorControl = () => editorControl
export const getEditorComponents = () => _getEditorComponents()

export default class MarkdownControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onAddAsset: PropTypes.func.isRequired,
    getAsset: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    editorControl: PropTypes.func.isRequired,
    value: PropTypes.string,
    field: ImmutablePropTypes.map.isRequired,
    getEditorComponents: PropTypes.func,
  }

  static defaultProps = {
    value: "",
  }

  constructor(props) {
    super(props)
    editorControl = props.editorControl
    _getEditorComponents = props.getEditorComponents
    this.state = { mode: localStorage.getItem(MODE_STORAGE_KEY) || "visual" }
  }

  handleMode = (mode) => {
    this.setState({ mode })
    localStorage.setItem(MODE_STORAGE_KEY, mode)
  }

  processRef = (ref) => (this.ref = ref)

  render() {
    const {
      onChange,
      onAddAsset,
      getAsset,
      value,
      classNameWrapper,
      field,
      getEditorComponents,
    } = this.props

    const { mode } = this.state
    const visualEditor = (
      <div className="cms-editor-visual" ref={this.processRef}>
        <VisualEditor
          onChange={onChange}
          onAddAsset={onAddAsset}
          onMode={this.handleMode}
          getAsset={getAsset}
          className={classNameWrapper}
          value={value}
          field={field}
          getEditorComponents={getEditorComponents}
        />
      </div>
    )
    const rawEditor = (
      <div className="cms-editor-raw" ref={this.processRef}>
        <RawEditor
          onChange={onChange}
          onAddAsset={onAddAsset}
          onMode={this.handleMode}
          getAsset={getAsset}
          className={classNameWrapper}
          value={value}
          field={field}
        />
      </div>
    )
    return mode === "visual" ? visualEditor : rawEditor
  }
}
