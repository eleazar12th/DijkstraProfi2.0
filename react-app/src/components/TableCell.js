export default function TableCell(props) {
    function handleOnChange(evt) {
        let val = +evt.target.value;
        if (!Number.isInteger(val)) {
            console.log("Ошибка: длина ребра должна быть целым числом");
            return;
        } else if (val < 0) {
            console.log("Ошибка: длина ребра не может быть меньше 0");
        }
        else if (val > 1000) {
            console.log("Ошибка: длина ребра не может быть больше 1000");
            return;
        }

        props.setCell(props.rowNumber, props.colNumber, val);
    }

    const cellId = `cell_${props.rowNumber}:${props.colNumber}`;

    return (
        <td>
            <input type="text" id={cellId} placeholder="-"
                   className="table-input" onChange={handleOnChange} />
        </td>
    );
}