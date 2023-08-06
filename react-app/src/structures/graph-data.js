import Edge from "./edge";

export default class GraphData {
    constructor(matrix, graphType) {
        this.graphType = graphType;
        this.nodesAmount = matrix.length;
        this.edges = {};

        let edge_id = 0;
        for (let i = 0; i < this.nodesAmount; ++i) {
            const v = i + 1;
            this.edges[v] = [];

            if (matrix[i][i] !== "-") {
                this.edges[v].push(
                    new Edge(edge_id++, v, matrix[i][i])
                );
            }
        }

        for (let i = 0; i < this.nodesAmount; ++i) {
            const v = i + 1;

            for (let j = 0; j < this.nodesAmount; ++j) {
                const u = j + 1;
                if (u === v || matrix[i][j] === "-")
                    continue;

                if (this.graphType === "directed") {
                    let curved = false;
                    if (matrix[j][i] !== "-" && v > u) {
                        curved = true;
                    }

                    this.edges[v].push(
                        new Edge(edge_id++, u, matrix[i][j], curved)
                    );

                } else if (this.graphType === "undirected" && v < u) {
                    this.edges[v].push(
                        new Edge(edge_id, u, matrix[i][j])
                    );
                    this.edges[u].push(
                        new Edge(edge_id, v, matrix[i][j])
                    );
                    ++edge_id;

                }
            }
        }
    }
}