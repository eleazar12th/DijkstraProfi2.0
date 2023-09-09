import {useState, useEffect} from "react";
import LanguageSelectSmall from "./LanguageSelectSmall";
import {RU_HINTS} from "../constants/hints-russian";
import {EN_HINTS} from "../constants/hints-english";

export default function AlgorithmStep(props) {
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

    return (
        <div className="card w-100 algorithm-card">
            <div className="card-header">
                <div className="row">
                    <div className="col-8">
                        Current algorithm step
                    </div>

                    <div className="col-4">
                        <LanguageSelectSmall handleOnChange={handleLangChange}
                                             defaultLang={sessionStorage.getItem("lang") || "ru"} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                { lang === "ru" ? RU_HINTS[props.hintKey] : EN_HINTS[props.hintKey] }
            </div>
        </div>
    );
}