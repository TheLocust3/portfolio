import _ from 'lodash';
import moment from 'moment';

export function getArchives(articles) {
  let unique = [];
  _.forEach(_.reverse(_.sortBy(articles, (article) => article.createdAt)), (article) => {
    let label = moment(article.createdAt).format('MMMM YYYY');
    let url = moment(article.createdAt).format('YYYY/MMMM');

    let entry = { label: label, url: url };
    if (_.reduce(unique, (acc, e) => acc && e.url != entry.url, true)) {
      unique.push(entry);
    }
  });

  return unique;
}

export function filterByMonth(articles, year, month) {
  return articles.filter((article) => {
    return (
      _.lowerCase(moment(article.createdAt).format('YYYY MMMM')) === _.lowerCase(`${year} ${month}`)
    );
  });
}
