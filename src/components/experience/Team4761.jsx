import React from 'react';
import styled, { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';
import Text from '../common/Text';

let Container = styled('div')`
    position: relative;

    min-height: 70vh;
    padding: 20px;
`;

let imageClass = css`
    width: 200px;

    float: right;

    margin-top: 10px;
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 20px;

    @media (max-width: ${MAX_MOBILE_WIDTH}) {
        width: 90%;
        margin: 5%;
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
                    <img className={imageClass} src="/images/robockets.png" alt="Talla" />

                    <p>
                        I joined my local robotics team during my freshman year of high school. We were FRC Team 4761, the Robockets (named after our
                        school mascot, the Rocket). As a team, we were part of FIRST Robotics Competition, and every year, they'd release a huge
                        challenge and field that would take up entire school gyms. After they revealed the game, we'd have six weeks to build a robot
                        and attempt to win the competition.
                    </p>

                    <p>
                        I joined the team as a programmer and quickly worked through the ranks. After programming the robot the first year, I became
                        the Programming team lead, and brought Scrum which I had learned at my internships, to the team. We divided our schedule into
                        Sprints and had daily standups. In the end of that season, we went to Worlds, the massive final robotics competition with over
                        five hundred teams.
                    </p>

                    <p>
                        After my sophomore year, I was promoted to Technical Project Manager. In that role, I worked as a manager, creating schedules,
                        running daily standups, and keeping the team on track. This roles was incredibily valuable for me because it gave me a wide
                        understanding of what it takes to build a robot and run a team.
                    </p>

                    <p>
                        Finally in my senior year, I was elected Technical President. As Tech President, I oversaw the team as a whole and worked as
                        the Project manager. We faced significant challenges that year with many conflicts between the team leadership and our adult
                        mentors, but in the end it taught me a ton about managing up and working through difficult personal issues with people.
                    </p>

                    <p>
                        My time on the robotics team has shaped the person I am today. Through the good times and the bad, I grew as a programmer, a
                        leader, and a person. I learned how to work on a large project with a group of 50 people and in the end, how to manage those
                        50 people and keep them motivated. The robotics team changed me in ways I'll never forget.
                    </p>
                </Text>
            </Container>
        );
    }
}

export default Team4761;
