export default function TableCell(props) {
    function handleOnChange(evt) {
        props.setCells(props.rowNumber, props.colNumber, evt.target.value);
    }

    const cellId = `cell_${props.rowNumber}:${props.colNumber}`;

    return (
        <td>
            <input type="text" id={cellId} placeholder="-"
                   className="table-input" onChange={handleOnChange} />
        </td>
    );
}