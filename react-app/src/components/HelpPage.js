import Menu from "./Menu";
import LanguageSelectSmall from "./LanguageSelectSmall";

export default function HelpPage() {
    return (<div>
        <Menu activeLinkName="help" />

        <div className="page-content container">
            <LanguageSelectSmall />
        </div>

        <p>
            Алгоритм Дейкстры
            Конпки, скорость, начальная вершина
            Создание графа
            Почувсвуй алгоритм
            Перевод
            Кто создал
        </p>
    </div>);
}