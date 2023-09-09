import {useState, useEffect} from "react";
import Menu from "./Menu";
import LanguageSelectSmall from "./LanguageSelectSmall";
import {RU_TEXT} from "../constants/help-text-russian";
import {EN_TEXT} from "../constants/help-text-english";
import "../css/help.css";

export default function HelpPage() {
    const [lang, setLang] = useState("ru");

    useEffect(() => {
        let sessionLang = sessionStorage.getItem("lang");

        if (sessionLang) {
            setLang(sessionLang);
        } else {
            sessionStorage.setItem("lang", "ru");
        }
    }, [])

    function handleLangChange(evt) {
        setLang(evt.target.value);
        sessionStorage.setItem("lang", evt.target.value);
    }

    return (<div>
        <Menu activeLinkName="help" />

        <div className="page-content container">
            <LanguageSelectSmall handleOnChange={handleLangChange}
                                 defaultLang={sessionStorage.getItem("lang") || "ru"} />
            { lang === "ru" ? RU_TEXT : EN_TEXT }
        </div>
    </div>);
}