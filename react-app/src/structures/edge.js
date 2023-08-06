export default class Edge {
    constructor(id, to, length, curved = false) {
        this.id = id;
        this.to = to;
        this.length = length;
        this.curved = curved;
    }
}