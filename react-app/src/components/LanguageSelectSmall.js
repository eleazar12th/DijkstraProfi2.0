export default function LanguageSelectSmall(props) {
    return (<div className="lang-sm">
        <select className="form-select form-select-sm text-bg-light width-72 lang-sm"
        onChange={props.handleOnChange} defaultValue={props.defaultLang}>
            <option className="bg-white" value="ru">RU</option>
            <option className="bg-white" value="en">EN</option>
        </select>
    </div>);
}