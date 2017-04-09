/**
 * @author thuynh
 */

import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.internet.domainWord,
});
