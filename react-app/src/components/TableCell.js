export default function TableCell(props) {
    function setError(msg) {
        props.setCellError(props.rowNumber, props.colNumber, msg);
    }

    const cellTitle = `из ${props.rowNumber + 1} в ${props.colNumber + 1}`;

    function handleOnChange(evt) {
        let val = +evt.target.value;

        if (evt.target.value === "") {
            props.cleanCell(props.colNumber, props.rowNumber);
            setError("");
            return;
        } else if (!evt.target.value.trim().length || !Number.isInteger(val)) {
            setError(`Ошибка в ребре ${cellTitle}. Длина ребра должна быть целым числом.`);
            return;
        } else if (val < 0) {
            setError(`Ошибка в ребре ${cellTitle}. Длина ребра не может быть меньше 0.`);
            return;
        } else if (val > 1000) {
            setError(`Ошибка в ребре ${cellTitle}. Длина ребра не может быть больше 1000.`);
            return;
        }

        props.setCell(props.rowNumber, props.colNumber, val);
        setError("");
    }

    const cellId = `cell_${props.rowNumber}:${props.colNumber}`;

    return (
        <td>
            <input type="text" id={cellId} placeholder="-"
                   className="form-control form-control-sm table-input" onChange={handleOnChange}/>
        </td>
    );
}