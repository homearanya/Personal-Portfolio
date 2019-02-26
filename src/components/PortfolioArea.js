import React, { Component } from "react";
import Shuffle from "shufflejs";

import PortfolioFilters from "./PortfolioFilters";
import PortfolioProjects from "./PortfolioProjects";

// export default function PortfolioArea() {
export default class PortfolioArea extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, filters: ["all"] };
    this.element = React.createRef();
    this.sizer = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    this.setState({ activeTab: index });
  }

  componentDidMount() {
    // The elements are in the DOM, initialize a shuffle instance.
    this.shuffle = new Shuffle(this.element.current, {
      itemSelector: ".js-item",
      sizer: this.sizer.current
    });
    // build filters
    const filters = this.props.portfolioArea.projects.reduce(
      (filters, project) => {
        const found = filters.find(element => {
          return element === project.type;
        });
        if (found) {
          return filters;
        } else {
          filters.push(project.type);
          return filters;
        }
      },
      ["All"]
    );
    this.setState({ filters: filters });
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems();
    if (this.state.activeTab > 0) {
      this.shuffle.filter(this.state.filters[this.state.activeTab]);
    } else {
      this.shuffle.filter();
    }
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy();
    this.shuffle = null;
  }
  render() {
    const { heading, blurb } = this.props.portfolioArea;
    return (
      <section className="single-section portfolio-area" id="portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2 className="section-title">{heading}</h2>
                <p className="section-description">{blurb}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <PortfolioFilters
                filters={this.state.filters}
                handleClick={this.handleClick}
                activeTab={this.state.activeTab}
              />
              <PortfolioProjects
                projects={this.props.portfolioArea.projects}
                element={this.element}
                sizer={this.sizer}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
