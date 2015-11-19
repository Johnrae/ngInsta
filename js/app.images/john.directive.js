export default function () {

  return {

    restrict: 'EA',
    scope: {},
    replace: true;
    template: `
      <div>
        <img src="{{ img }}"/>
      </div>
    `,
    link: function(scope, elem, attrs) {
      elem.on('dblclick', function(){

      })
    },



  }

}