import _ from 'lodash';
import moment from 'moment';

export function getArchives(articles) {
  let unique = [];
  _.forEach(articles, (article) => {
    let month = moment(article.createdAt).format('MMMM');

    if (!_.includes(unique, month)) {
      unique.push(month);
    }
  });

  return unique;
}

export function filterByMonth(articles, month) {
  return articles.filter((article) => {
    return _.lowerCase(moment(article.createdAt).format('MMMM')) === _.lowerCase(month);
  });
}
