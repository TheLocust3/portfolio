import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

import Text from '../common/Text';
import SideMargin from '../common/SideMargin';
import TechLogo from '../common/TechLogo';

let Container = styled('div')`
  position: relative;

  padding: 20px;
`;

let imageClass = css`
  width: 150px;
`;

let leftColumn = css`
  display: inline-block;
  width: 70%;
  vertical-align: top;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

let rightColumn = css`
  display: inline-block;
  width: 30%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 100%;
  }
`;

class ThreatStack extends React.Component {
  render() {
    return (
      <Container>
        <Text type="headline3" header>
          Threat Stack
        </Text>
        <br />

        <Text type="body1">
          <div className={leftColumn}>
            <SideMargin margin="0.5%">
              <a href="https://www.threatstack.com/">Website</a>
            </SideMargin>

            <p>
              At Threat Stack, I worked as a data engineer, fully integrated with one of their
              development teams. We were tasked with building out event search using real-time
              streaming/batch processing applications to process billions of events and make them
              queryable.
            </p>

            <p>
              On that team, I created the streaming job to pull events from Kafka and to dump it in
              Elasticsearch to make it searchable. I also had a significant impact on model
              management and serialization format for the rest of the data platform and was given
              the opportunity to help build out the API+query language used to interact with the
              Elasticsearch cluster.
            </p>

            <p>
              My internship at Threat Stack was by far the most influential experience I've had as a
              developer. There I learned the fundamentals of being a data engineer, a field I plan
              to pursue in the future, and found many great mentors.
            </p>
          </div>

          <div className={rightColumn}>
            <center>
              <img className={imageClass} src="/images/threatstack.png" alt="Threat Stack" />
              <br />
              <br />

              <Text type="headline6">Key Technologies</Text>

              <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <TechLogo
                  src="/images/logos/scala.png"
                  alt="Scala"
                  href="https://scala-lang.org/"
                  width="40px"
                />
                <TechLogo
                  src="/images/logos/kafka.png"
                  alt="Apache Kafka"
                  href="https://kafka.apache.org/"
                  width="80px"
                />
                <TechLogo
                  src="/images/logos/flink.png"
                  alt="Apache Flink"
                  href="https://flink.apache.org/"
                  width="75px"
                />
                <TechLogo
                  src="/images/logos/spark.png"
                  alt="Apache Spark"
                  href="https://spark.apache.org/"
                  width="85px"
                />
                <TechLogo src="/images/logos/akka.png" alt="Akka" href="https://akka.io/" />
                <TechLogo
                  src="/images/logos/elasticsearch.png"
                  alt="Elasticsearch"
                  href="https://www.elastic.co/"
                />
                <TechLogo src="/images/logos/aws.png" alt="AWS" href="https://aws.amazon.com/" />
                <TechLogo src="/images/logos/chef.png" alt="Chef" href="https://www.chef.io/" />
              </div>
            </center>
          </div>
        </Text>
      </Container>
    );
  }
}

export default ThreatStack;
