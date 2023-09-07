const FIRST_STEP_EN_TEXT = (<div>
    <p>
        Let dist[v] be the length of the path from the start vertex to vertex v.
        If the path from start to v does not exist or we do not know it yet, dist[v] is equal to infinity.
        Then the task of the algorithm is to find the minimum value of dist[v] for all v.
        In the figure, each vertex v looks like v: dist[v].
    </p>

    <p>
        Let's divide the vertices into three groups.
        <br />
        <i>Processed (green)</i> are those to which the shortest path is already known.
        <br />
        <i>Partially processed (blue)</i> are those to which we know some
        (possibly not optimal) path.
        <br />
        <i>Unprocessed (gray)</i> are those to which we don't know any path.
    </p>

    <p>
        The distance from the start vertex to itself is 0.
    </p>
</div>);

const TURN_EDGES_RED_EN_TEXT = (<p>
    Now we consider all unprocessed
    (gray and blue) vertices u that can be reached from v.
</p>);

const UPDATE_DISTANCE_EN_TEXT = (<div>
    <p>
        For each u, we try to improve the value of dist[u].
        Let the length of an edge from v to u be <b>len</b>. Then the smallest
        possible distance to u that we can find now,
        is <b>min(dist[u], dist[v] + len)</b>.
        <br />
        If u was gray, paint it blue (now it's among the vertices,
        that we already know something about).
    </p>
</div>);
const TURN_EDGES_BLACK_EN_TEXT = (
    <p>
        The iteration of the algorithm is complete. We return to the first step.
    </p>
);

const SELECT_GREEN_NODE_EN_TEXT = (<p>
    From the blue (partially processed) vertices, choose the vertex v
    with minimal distance from the start and mark it as a processed
    (color it green).
</p>);

const LAST_STEP_EN_TEXT = (<p>
    There are no blue vertices left. So, the algorithm is complete.
    We have found the minimum distance to each vertex.
</p>);

export const EN_HINTS = {
    "FIRST_STEP": FIRST_STEP_EN_TEXT,
    "TURN_EDGES_RED": TURN_EDGES_RED_EN_TEXT,
    "UPDATE_DISTANCE": UPDATE_DISTANCE_EN_TEXT,
    "TURN_EDGES_BLACK": TURN_EDGES_BLACK_EN_TEXT,
    "SELECT_GREEN_NODE": SELECT_GREEN_NODE_EN_TEXT,
    "LAST_STEP": LAST_STEP_EN_TEXT,
}
