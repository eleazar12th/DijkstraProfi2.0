import TableCell from "./TableCell";

export default function TableRow(props) {
    return (
        <tr>
            <th>
                <span className="table-row-span">{props.rowNumber + 1}</span>
            </th>
            {props.row.map((cell, colNumber) => {
                let newKey = `cell_${props.rowNumber}:${colNumber}`;
                return (
                    <TableCell
                        key={newKey}
                        rowNumber={props.rowNumber}
                        colNumber={colNumber}
                        setCell={props.setCell}
                        cleanCell={props.cleanCell}
                        setCellError={props.setCellError}
                    />
                );
            })}
        </tr>
    );
}