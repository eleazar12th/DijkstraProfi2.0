export const INF = 1000000;

export const WHITE = "lightgray";
export const BLACK = "black";
export const GREEN = "lightgreen";
export const RED = "red";
export const VIOLET = "lightblue";

export const FIRST_STEP_TEXT = "Расстояние от начальной вершины до неё самой " +
    "равно 0.";
export const TURN_EDGES_RED_TEXT = "Теперь рассматриваем все " +
    "ещё не обработанные вершины u, " +
    "в которые можно попасть из v.";
export const UPDATE_DISTANCE_TEXT = "Для каждой u пытаемся " +
    "улучшить значение distance(start, u). Знаем, что в u " +
    "можно попасть из v, а v уже обработана. Тогда наилучшее " +
    "расстояние до u, которое мы сейчас можем найти, - это " +
    "минимум из текущего значения distance(start, u) и distance(start, v) + len. " +
    "Если u была серой, красим её в голубой (теперь она среди вершин, " +
    "про которые мы уже что-то знаем).";
export const TURN_EDGES_BLACK_TEXT = "Итерация алгоритма завершена. " +
    "Возвращаемся к первому шагу.";
export const SELECT_GREEN_NODE_TEXT = "Из голубых вершин " +
    "(то есть из тех, про которые уже что-то заем), выбираем вершину v " +
    "с минимальным расстоянием от начальной и помечаем как обработанную " +
    "(красим в зелёный цвет).";
export const LAST_STEP_TEXT = "Голубых вершин не осталось. Значит, " +
    "работа алгоритма завершена. Мы нашли минимальное расстояние " +
    "до каждой вершины.";