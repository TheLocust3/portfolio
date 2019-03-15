import _ from 'lodash';
import moment from 'moment';

export function getArchives(articles) {
  let unique = [];
  articles.filter((article) => {
    unique.push({ label: 'January', number: '1' });
  });

  return unique;
}
