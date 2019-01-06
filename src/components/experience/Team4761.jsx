import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';
import Text from '../common/Text';
import SideMargin from '../common/SideMargin';

let Container = styled('div')`
  position: relative;

  padding: 20px;
`;

let imageClass = css`
  width: 200px;
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

class Team4761 extends React.Component {
  render() {
    return (
      <Container>
        <Text type="headline3" header>
          Tech President of Team 4761
        </Text>
        <br />

        <Text type="body1">
          <div className={leftColumn}>
            <SideMargin margin="0.5%">
              <a href="https://robockets.weebly.com/">Website</a>
            </SideMargin>

            <p>
              I joined my high school’s robotics team during my freshman year of high school, called
              the Reading Robockets (or Team 4761, the number that FIRST robotics lovingly assigned
              to us). We were a part of FIRST of FIRST Robotics Competition, a non-profit dedicated
              to inspiring kids to pursue STEM careers through having them create people sized
              robots to solve challenges and generally bash into other robots. The catch was that
              the challenge changed every year and we had an intense six weeks to build a robot to
              complete it.
            </p>

            <p>
              I joined as a programmer and decided day one that this was the team for me. After
              programming the robot the first year, I became the Programming team lead, and brought
              Scrum, which I had learned at my internships, to my team. We divided our schedule into
              Sprints and had daily standups. In the end of that season, we went to Worlds, the
              massive final robotics competition with over five hundred teams and a hockey arena
              filled with a cheering audience.
            </p>

            <p>
              After my sophomore year, I was promoted to Technical Project Manager. In this role, I
              worked as a manager, creating schedules, running daily standups, and keeping the team
              on track. Having this job was an incredibly valuable experience for me because it gave
              me a wide understanding of what it takes to run a team and communicate effectively.
            </p>

            <p>
              Finally in my senior year, I was elected Technical President. As Tech President, I
              oversaw the team as a whole and worked as the project manager. We faced significant
              challenges that year with many conflicts between the team leadership and our adult
              mentors, but in the end it taught me a ton about managing up and working through
              difficult personal issues with people.
            </p>

            <p>
              Team 4761 shaped the person I am today. Through the good times and the bad, I grew as
              a programmer, a leader, and a person. I learned how to work on a large project with a
              group of 50 people and in the end, how to manage those 50 people and keep them
              motivated through the ups and downs. The Robockets changed me in ways I'll never
              forget.
            </p>
          </div>

          <div className={rightColumn}>
            <center>
              <img className={imageClass} src="/images/robockets.png" alt="Robockets" />
            </center>
          </div>
        </Text>
      </Container>
    );
  }
}

export default Team4761;
