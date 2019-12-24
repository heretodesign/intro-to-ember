import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact/department', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contact/department');
    assert.ok(route);
  });
});
