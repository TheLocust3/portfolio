import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { IMAGES_URL } from '../../constants';
import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import TechLogo from '../../components/common/TechLogo';
import ProjectImage from './ProjectImage';
import SplashScreen from '../../components/SplashScreen';

class Hierarchy extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(false));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Project: Hierarchy</title>
          <meta
            name="description"
            content="A Trello-like goal manager webapp that uses trees to express hierarchical
            relationships between goals and tasks in your life while retaining the task oriented
            list/column view."
          />
        </Helmet>

        <FadeIn>
          <SplashScreen
            src={`${IMAGES_URL}hierarchy.jpeg`}
            alt="Hierarchy"
            header="Hierarchy"
            height="60vh"
          />

          <Content>
            <Text type="body1">
              <ProjectImage src={`${IMAGES_URL}projects/hierarchy_app.png`} alt="Emulator Tests" />

              <Text type="headline4">Overview</Text>

              <p>
                A Trello-like goal manager webapp that uses trees to express hierarchical
                relationships between goals and tasks in your life while retaining the task oriented
                list/column view. Built in Scala + Neo4j (a graph database) to express goal
                hierarchies, Node + MongoDB to create the user service, and Typescript + React to
                build out the frontend.
              </p>

              <br />

              <center>
                <Text type="headline6">Key Technologies</Text>

                <div>
                  <TechLogo
                    src="logos/scala.png"
                    alt="Scala"
                    href="https://scala-lang.org/"
                    width="40px"
                  />
                  <TechLogo
                    src="logos/node.png"
                    alt="Node JS"
                    href="https://nodejs.org/en/"
                    width="50px"
                  />
                  <TechLogo
                    src="logos/typescript.png"
                    alt="Typescript"
                    href="https://www.typescriptlang.org/"
                    width="60px"
                  />
                  <TechLogo
                    src="logos/neo4j.jpeg"
                    alt="Neo4j"
                    href="https://neo4j.com/"
                    width="30px"
                  />
                  <TechLogo
                    src="logos/mongo.png"
                    alt="MongoDB"
                    href="https://www.mongodb.com/"
                    width="55px"
                  />
                  <TechLogo src="logos/react.png" alt="React" href="https://reactjs.org/" />
                  <TechLogo src="logos/redux.png" alt="Redux" href="https://redux.js.org/" />
                </div>
              </center>

              <br />

              <Text type="headline4">Creation</Text>

              <p>
                For years I’ve managed my to-do lists in Trello. Over the years, I’ve streamlined my
                Trello boards to match my style of planning, but I always felt like there was
                something missing. Over the summer of 2019, I had the realization that led me to
                creating Hierarchy.
              </p>

              <p>
                In Trello, tasks are independent, related to each other through labels, tagging
                cards with extra information, and columns, denoting the current status of the card.
                But tasks really aren’t completely disjoint. Most tasks are in pursuit of a
                particular goal, and those goals in pursuit of particular dream. Trello fails to
                describe the relationships between the many day-to-day tasks that people complete.
              </p>

              <p>
                From that I knew that I needed to create some sort of tree-like structure to relate
                dreams, goals, sub-goals, and tasks to each other. So I started by building a
                frontend to display these card relationships in Typescript and React.
              </p>

              <p>
                With a simple frontend displaying trees of cards complete, I started working on a
                backend that would be flexible enough to express all sorts of relationships between
                cards. The nature of the many-to-many relationships of this tree structure led me to
                choosing the graph database, Neo4j and Scala, to operate on this data structure in a
                natural and compact way.
              </p>

              <p>
                As I progressed, I began to add more and more features, eventually building out a
                separate user service and a complete list view to manage individual tasks. This
                iteration eventually resulted in more than just a task manager changing into
                something more like a life manager, allowing the user to map out all of their goals
                and relate them to their day-to-day life.
              </p>

              <br />

              <Text type="headline4">Takeaways</Text>

              <p>
                I’ve thrown around the idea of building a Trello-list task manager from scratch for
                years but it took an insight into how I planned out my tasks to realize that I
                needed to turn those ideas into a real product. It’s been fascinating to work with a
                graph database and to continue to advance my Scala skills. I even got to play with a
                microservice architecture, building a solid foundation for future development of
                Hierarchy.
              </p>

              <p>
                Every few years I take on a project like this. It’s a culmination of the skills that
                I had developed at whatever point of life I’m in. Previously, it was candidateXYZ,
                two years later, it was Hierarchy. Through recent internships, I’ve realized that I
                have a passion for data engineering, and my current clumniation project reflects
                that interest.
              </p>

              <a href="https://github.com/TheLocust3/hierarchy">GitHub</a>
            </Text>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Hierarchy);
