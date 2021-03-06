/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card } from "antd";
import tree from "../images/png/professional-development-tree.png";
import longTree from "../images/png/professional-development-tree-long.png";
import bluebg1 from "../images/jpg/option4.jpg";
import Gallery from "../components/Gallery";

class IndexPage extends React.Component {
    separator = React.createRef();

    scrollToContent = e => {
        this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    render() {
        const {
            data: {
                bgDesktop: {
                    resize: { src: desktop }
                },
                bgTablet: {
                    resize: { src: tablet }
                },
                bgMobile: {
                    resize: { src: mobile }
                },
                site: {
                    siteMetadata: { facebook }
                }
            }
        } = this.props;
        const { Meta } = Card;
        const backgrounds = {
            desktop,
            tablet,
            mobile
        };

        return (
            <React.Fragment>
                <ThemeContext.Consumer>
                    {theme => (
                        <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme}>
                            I'm a Full Stack Developer who loves to try new things. I am proficient in Python, JavaScript, HTML/CSS and with SQL and NoSQL databases (Mongo, Firebase) and can pick up new skills and technologies quickly.
                        </Hero>

                    )}
                </ThemeContext.Consumer>


                <ThemeContext.Consumer>
                    {theme => (
                        <React.Fragment theme={theme}>

                            <div className="skillBlurb">
                                <section className="skillBlurb_text">
                                    <h3>
                                        Stuff
                                    </h3>
                                    <ul>
                                        <li>
                                            things
                                        </li>
                                        <li>
                                            things
                                        </li>
                                        <li>
                                            things
                                        </li>
                                        <li>
                                            things
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="madSkillz">
                            </div>
                                <Gallery className="projectsContainer" theme={theme}/>
                        </React.Fragment>

                    )}

                </ThemeContext.Consumer>

                <Seo facebook={facebook} />

                <style jsx>{`
                    hr {
                        margin: 0;
                        border: 0;
                    }
                    .projectsContainer {
                        position: relative;
                        top: 90vh;
                        max-width: 100vw;
                    }
                    .skillBlurb {
                        position: relative;
                        right: 0;
                        float: right;
                        width: 100vw;
                        height: 90vh;
                        margin: auto;
                        background-image: url(${bluebg1});
                        background-size: cover;
                    }
                    .skillBlurb_text {
                        width: 30%;
                        float: right;
                        margin: 20px;
                        background: #58595bc4;
                        color: white;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    .madSkillz {
                        position: absolute;
                        top: 70%;
                        height: 100vh;
                        width: 100vw;
                        background-image: url(${tree});
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: top left -105%;
                    }
                    @media only screen and (max-width: 600px) {
                        .skillBlurb {
                            height: 40vh;
                        }
                        .madSkillz {
                            position: absolute;
                            top: 85%;
                            height: 100vh;
                            width: 100vw;
                            background-image: url(${longTree});
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: top left -107px;
                        }
                    }
                `}</style>
            </React.Fragment >
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PortfolioQuery {
                                site {
                                siteMetadata {
                                facebook {
                                appId
                            }
                            }
                          }
    bgDesktop: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 1200, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
    bgTablet: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
    bgMobile: imageSharp(fluid: {originalName: {regex: "/hero-background/" } }) {
                                resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
                                src
                            }
                            }
                          }
                        `;

                        //hero-background
