(function() {
  'use strict';

  angular
    .module('jamestoy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
