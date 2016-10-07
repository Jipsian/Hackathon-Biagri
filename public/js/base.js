<div class="col-xs-12 col-md-10 col-md-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
    <h2>Create a new todo</h2>
    <form class="form-inline">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Produit" ng-model='vm.todo.produit'>
            <input type="text" class="form-control" placeholder="Prix de vente" ng-model='vm.todo.prixLivre'>
            <input type="text" class="form-control" placeholder="Quantité" ng-model='vm.todo.quantite'>
            <input type="text" class="form-control" placeholder="Ville d'origine" ng-model='vm.todo.villeOrigine'>
            <input type="text" class="form-control" placeholder="Ville de destination" ng-model='vm.todo.villeDestination'>
        </div>
        <button ng-click='vm.create(vm.todo)' class="btn btn-default">Add</button>
    </form>
    <h2 ng-show='vm.todos.length>0'>My todos</h2>
    <div class="panel panel-default" ng-repeat='todo in vm.todos | orderBy: "prixLivre"'>
        <div class="panel-body">
            <form class="form-inline">
                <div class="form-group" ng-init='vm.CalculTrajet(todo.villeOrigine,vm.dest,$index)'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.produit'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.prixLivre'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.quantite'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.villeOrigine'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.villeDestination'>
                    <input type="text" class="form-control" placeholder="Todo" ng-model='todo.prixNet'>
                    <h5 id='prix{{$index}}'></h5>
                </div>
                <button ng-click='vm.update(todo)' class="btn btn-default">Edit</button>
                <button ng-click='vm.delete(todo)' class="btn btn-danger">Delete</button>
            </form>
        </div>
    </div>
    <form class="form-inline">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Ville" ng-model="KM">
      </div>
    </form>
</div>
<p>
