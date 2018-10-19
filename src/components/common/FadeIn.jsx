import _ from 'lodash';
import styled from 'react-emotion';

let FadeIn = styled('div')`
    -webkit-animation: fadein 1s;
    -moz-animation: fadein 1s;
    -ms-animation: fadein 1s;
    -o-animation: fadein 1s;
    animation: fadein 1s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default FadeIn;
