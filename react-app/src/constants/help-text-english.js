export const EN_TEXT = (<div className="help-txt">
    <p>
        The web application is designed as an interactive tutorial on the topic of Dijkstra's algorithm.
        The site is intended for use on computers, tablets and electronic whiteboards,
        no mobile interface is provided.
        You can read more about the algorithm itself, for example, <a
        href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
        target="_blank" rel="noopener noreferrer">
        here
    </a>.
    </p>

    <p>
        On the main page of the <i>Visualization</i> website, you will find a graph,
        that demonstrates how the algorithm works.
        Inside each vertex of the graph, two numbers are written with a colon.
        The first number is the vertex number, and the second number is the shortest distance to this vertex
        (among the ones found so far).
        Next to the graph there is a detailed description of the current step of the algorithm.
    </p>

    <p>
        <b>WARNING!</b> When the page loads, the vertices of the graph are randomized.
        If the graph appears ugly on the page, you can reload the page
        and the graph will be redisplayed. Usually 1-2 reloads are enough,
        to get a beautiful graph.
    </p>

    <p>
        In the input field <i>Start node</i> we can choose which vertex will be the initial vertex,
        i.e. from which vertex we will search for the minimum distance to all other vertices.
        To start the animation, press the <i>Play</i> button. You can also pause the animation
        and move through the steps (as if you were leafing through the pages of a book).
        To do this, use buttons <i>Skip back</i>, <i>Step back</i>, <i>Step forward</i> and <i>Skip forward</i>.
        The hints on page <i>Visualization</i> as well as the text
        on page <i>Help</i> are available in Russian and English.
    </p>

    <p>
        On the <i>Another graph</i> page, you can select a graph or create your own.
        The application supports oriented and undirected graphs.
        There are three ready graphs available (one undirected and two oriented).
        To create your own graph, select the appropriate mode, and then enter the number of vertices
        and fill in the resulting adjacency matrix. The lengths of edges must be integers.
    </p>

    <p>
        On the <i>Feel algorithm</i> page, you can observe
        how Dijkstra's algorithm works on a randomly generated graph.
        Here the vertices do not have their number on them, only their distance.
        Note that the <i>Restart</i> button reverts the graph to its initial state
        (the graph itself remains the same),
        while <i>Rebuild</i> or reloading the page will generate a new graph.
    </p>

    <p>
        The application was developed by Evgeny Krasnov,
        a student of the Computer Science Department of HSE University, Moscow.
        The application code is publicly available on the GitHub platform
        and can be accessed at <a href="https://github.com/eleazar12th/DijkstraProfi2.0"
                                target="_blank" rel="noopener noreferrer">
        https://github.com/eleazar12th/DijkstraProfi2.0</a> <br />
        Feel free to create your own improved version of the site.
    </p>

    <p>
        Thanks for reading to the end :)
    </p>
</div>);