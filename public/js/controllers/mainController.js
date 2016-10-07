class mainController {

    constructor(todoService,$scope) {
      this.todoService = todoService;
      this.$scope = $scope;
      this.load();
      this.$scope.prix = {};
      this.calcul = {};
      this.dest = "Canteleu";
      this.tableau = [
        {
          km: '5',
          rouen: 3.06,
          paris: 3.45
        },
        {
          km: '10',
          Rouen: 3.39,
          paris: 3.82
        },
        {
          km: '15',
          rouen: 3.85,
          paris: 4.33
        },
        {
          km: '20',
          rouen: 4.18,
          paris: 4.72
        },
        {
          km: '25',
          rouen: 4.53,
          paris: 5.12
        },
        {
          km: '30',
          rouen: 4.87,
          paris: 5.49
        },
        {
          km: '35',
          rouen: 5.21,
          paris: 5.89
        }
      ];
      this.tableauKm50 = [5, 10, 15, 20, 25, 30, 40, 45, 50];
      this.tableauKmSup50 = [55, 60, 65, 70, 75, 80, 90, 95,100];
    }


  load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
            // console.log(this.todos);
        });
    }

    create(info) {
      // console.log(info);

        this.todoService.create(info).then(() => {
            this.todo = '';
            this.load();
        });
    }

    filter(info){
      console.log(info);
      this.dest = info.villeDest;
      this.load()

    }

    CalculTrajet(origin,dest,DOMindex) {
      console.log(origin,dest,DOMindex);
        var req = new XMLHttpRequest();
        // req.open('GET', 'http://dev.virtualearth.net/REST/V1/Routes/Driving?o=json&wp.0=' + originCity + '&wp.1=' + destCity + '&avoid=minimizeTolls&key=Am2XYcqAXud-xS-yQlvgOKanGcheJjH64DYlyEq_9nduDHZY6hFxXAOruOiDbU7v');

        req.open('GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origin + '&destinations=' + dest + '&mode=driving&language=fr-FR&key=AIzaSyCg8hp0oKJpTIO1b8fSOdxHG-FOYkfsAqo');

        req.addEventListener('readystatechange', () => {

            if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
                var response = JSON.parse(req.responseText);
                // document.getElementById('distance').innerHTML = "<span>La distance entre " + originCity + " et " + destCity + " est de :" + (response.rows[0].elements[0].distance.value) / 1000 + "</span>";
                // document.getElementById('time').innerHTML = "<span>'Le temps de trajet est de : " + (response.rows[0].elements[0].duration.value) / 3600 + "</span>";
                // console.log(response);
                var distance = (response.rows[0].elements[0].distance.value)/1000;
                console.log(distance);
                if (distance < 50) {
                  for (var index50 in this.tableauKm50) {
                    if ((this.tableauKm50[index50] - distance) > 0 ) {
                        this.$scope.prix[DOMindex] = this.tableau[index50][origin];
                        this.$scope.$apply();
                        break;
                    }
                  }
                } else {
                  for (var indexSup50 in this.tableauKm50) {
                    console.log(this.tableauKm50[indexSup50][origin]);
                    if ((this.tableauKmSup50[indexSup50] - distance) > 0 ) {
                      this.$scope.prix[DOMindex] = this.tableau[indexSup50][origin];
                      this.$scope.$apply();
                      break;
                    }
                }
              }
                var calcul = distance * this.$scope.prix[DOMindex];
                console.log(calcul);
                var test = 'test'+DOMindex;
                this.calcul[test] = calcul;
                $('#prix'+DOMindex).html(calcul);
                // console.log(calcul);
            }

        }
      );
        req.send(null); // La requête est prête, on envoie tout !
    }
    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load();
        });
    }
}

// $('select').material_select();
//
// $('.collapsible').collapsible({
//     accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
// });
//
// jQuery(document).ready(function() {
//     // This button will increment the value
//     $('#plus').click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         var fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name=prix]').val());
//         // If is not undefined
//         if (!isNaN(currentVal)) {
//             // Increment
//             $('input[name=prix]').val(currentVal + 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name=prix]').val(0);
//         }
//     });
//     // This button will decrement the value till 0
//     $("#minus").click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         var fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name=prix]').val());
//         // If it isn't undefined or its greater than 0
//         if (!isNaN(currentVal) && currentVal > 0) {
//             // Decrement one
//             $('input[name=prix]').val(currentVal - 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name=prix]').val(0);
//         }
//     });
//
//     $('#plusqt').click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         var fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name=quantity]').val());
//         // If is not undefined
//         if (!isNaN(currentVal)) {
//             // Increment
//             $('input[name=quantity]').val(currentVal + 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name=quantity]').val(0);
//         }
//     });
//     // This button will decrement the value till 0
//     $("#minusqt").click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         var fieldName = $(this).attr('field');
//         // Get its current value
//         var currentVal = parseInt($('input[name=quantity]').val());
//         // If it isn't undefined or its greater than 0
//         if (!isNaN(currentVal) && currentVal > 0) {
//             // Decrement one
//             $('input[name=quantity]').val(currentVal - 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name=quantity]').val(0);
//         }
//     });
//
// });
