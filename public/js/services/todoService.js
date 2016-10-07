class todoService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/todos', data
        )
    }

    getAll() {
        return this.$http.get('/api/todos')
    }

    getOne(id) {
        return this.$http.get('/api/todos/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/todos/' + id, data
        )
    }

    delete(id) {
        return this.$http.delete('/api/todos/' + id)
    }

}
